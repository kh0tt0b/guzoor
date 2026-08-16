/**
 * Decap CMS GitHub OAuth proxy — deploy this as a Cloudflare Worker.
 *
 * Why this exists: GitHub's OAuth token exchange requires a client secret,
 * which can never be shipped to the browser. This tiny server-side proxy is
 * the only piece that sees the secret. It does nothing else.
 *
 * Setup: see ../ADMIN_SETUP.md for the full step-by-step (no CLI required —
 * paste this file into the Cloudflare Workers dashboard editor).
 *
 * Required environment variables (set in the Worker's dashboard settings,
 * never in this file):
 *   GITHUB_CLIENT_ID     - from your GitHub OAuth App
 *   GITHUB_CLIENT_SECRET - from your GitHub OAuth App
 */

const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize'
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token'

function randomState() {
  return crypto.randomUUID()
}

async function handleAuth(request, env) {
  const url = new URL(request.url)
  const state = randomState()
  const redirectUri = `${url.origin}/callback`

  const authorizeUrl = new URL(GITHUB_AUTHORIZE_URL)
  authorizeUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID)
  authorizeUrl.searchParams.set('redirect_uri', redirectUri)
  authorizeUrl.searchParams.set('scope', 'repo,user')
  authorizeUrl.searchParams.set('state', state)

  const headers = new Headers({
    Location: authorizeUrl.toString(),
    'Set-Cookie': `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
  })
  return new Response(null, { status: 302, headers })
}

function renderCallbackPage(status, payload) {
  // Matches the postMessage protocol Decap CMS's popup window expects.
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`
  const html = `<!doctype html><html><body><script>
    (function () {
      function receiveMessage(e) {
        window.opener.postMessage(${JSON.stringify(message)}, e.origin)
        window.removeEventListener('message', receiveMessage, false)
      }
      window.addEventListener('message', receiveMessage, false)
      window.opener.postMessage('authorizing:github', '*')
    })()
  </script></body></html>`
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
}

async function handleCallback(request, env) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  const cookie = request.headers.get('Cookie') || ''
  const cookieState = (cookie.match(/oauth_state=([^;]+)/) || [])[1]

  if (!code || !state || state !== cookieState) {
    return renderCallbackPage('error', { message: 'Invalid or missing OAuth state.' })
  }

  const tokenRes = await fetch(GITHUB_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/callback`,
    }),
  })

  const tokenData = await tokenRes.json()
  if (!tokenData.access_token) {
    return renderCallbackPage('error', { message: tokenData.error_description || 'Token exchange failed.' })
  }

  return renderCallbackPage('success', { token: tokenData.access_token, provider: 'github' })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/auth') {
      return handleAuth(request, env)
    }
    if (url.pathname === '/callback') {
      return handleCallback(request, env)
    }
    return new Response('Guzoor Decap CMS OAuth proxy. Endpoints: /auth, /callback', { status: 200 })
  },
}
