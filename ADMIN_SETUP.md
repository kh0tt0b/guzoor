# Setting up the admin page

The site now has a content editor at **`/admin`** (e.g. `https://kh0tt0b.github.io/guzoor/admin/`) built on [Decap CMS](https://decapcms.org) — a free, open-source admin UI that edits the real content files in this repo and commits the changes directly, which then auto-deploys through the existing GitHub Actions workflow. No database, no separate hosting for the site itself.

**What you can edit from `/admin`:** martyrs, articles, lectures, sermons, FAQs, and programs — every field including the Arabic versions, in both languages side by side.

There are two one-time setup steps left that only you can do, because they require your own GitHub account and a secret that must never be shared with anyone (including me). Both are free and take about 10 minutes combined.

## Why this is needed

GitHub's login flow (OAuth) requires a "client secret" to complete — a secret that can never be placed in the website's code, because anyone could then read it and impersonate the login. It has to live on a small server instead. GitHub Pages can only serve static files, so we need one tiny always-on function elsewhere to do just this one thing: accept the login and hand back a token. It sees nothing else about your content.

## Step 1 — Create a GitHub OAuth App

1. Go to **[github.com/settings/developers](https://github.com/settings/developers)** → **OAuth Apps** → **New OAuth App**.
2. Fill in:
   - **Application name**: `Guzoor Admin` (anything you like)
   - **Homepage URL**: `https://kh0tt0b.github.io/guzoor`
   - **Authorization callback URL**: `https://<your-worker-name>.<your-subdomain>.workers.dev/callback` — you'll get this exact URL in Step 2, so it's fine to come back and fill this in after.
3. Click **Register application**.
4. You'll see a **Client ID** — copy it.
5. Click **Generate a new client secret** — copy it immediately (GitHub only shows it once).

Keep both values somewhere safe for Step 2. Never paste the secret into a chat, a commit, or anywhere public.

## Step 2 — Deploy the OAuth proxy (no command line needed)

1. Go to **[dash.cloudflare.com](https://dash.cloudflare.com)** and sign up for a free account (no credit card required).
2. In the sidebar, go to **Workers & Pages** → **Create** → **Create Worker**.
3. Give it a name (e.g. `guzoor-oauth`) and click **Deploy** to create the placeholder.
4. Click **Edit code** to open the online editor.
5. Delete the default code and paste in the contents of **[`oauth-proxy/worker.js`](oauth-proxy/worker.js)** from this repo.
6. Click **Deploy**.
7. Go to the Worker's **Settings → Variables and Secrets**, and add two secrets:
   - `GITHUB_CLIENT_ID` — the Client ID from Step 1
   - `GITHUB_CLIENT_SECRET` — the Client Secret from Step 1
8. Note the Worker's URL, shown at the top of its dashboard page (something like `https://guzoor-oauth.yourname.workers.dev`).
9. Go back to your GitHub OAuth App (Step 1) and set the **Authorization callback URL** to `<that worker URL>/callback`.

## Step 3 — Point the CMS at your proxy

Edit **[`public/admin/config.yml`](public/admin/config.yml)** and replace this line:

```yaml
base_url: https://YOUR-OAUTH-PROXY-URL
```

with your actual Worker URL (no trailing slash, no `/callback`), e.g.:

```yaml
base_url: https://guzoor-oauth.yourname.workers.dev
```

Commit and push that one-line change (or ask me to, once you have the URL).

## Step 4 — Log in

Visit `https://kh0tt0b.github.io/guzoor/admin/`, click **Login with GitHub**, and authorize the app. You'll land in the editor with six collections: Martyrs, Articles, Lectures & Sessions, Sermons, FAQ, and Programs & Circles.

Saving an edit creates a real commit to `main` and the site rebuilds automatically within a minute or two, same as any other push.

## Who can actually save changes

Anyone can visit `/admin` and see the GitHub login prompt, but Decap CMS only lets someone **save** if their GitHub account has write access to `kh0tt0b/guzoor` — i.e. you, or anyone you explicitly add as a collaborator on the repo. Logging in with an unrelated GitHub account will succeed but every save will fail with a permissions error. If you want tighter access control later (e.g. a dedicated non-technical editor who shouldn't have raw git access), that's a further step we can add — just ask.
