import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { join, normalize, extname } from 'node:path'

const root = process.argv[2] ?? 'dist'
const port = Number(process.argv[3] ?? 4190)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
}

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')
  let file = normalize(join(root, decodeURIComponent(url.pathname)))
  if (!file.startsWith(normalize(root))) {
    res.writeHead(403).end('forbidden')
    return
  }
  if (existsSync(file) && statSync(file).isFile()) {
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' })
    createReadStream(file).pipe(res)
  } else if (existsSync(join(root, 'index.html'))) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    createReadStream(join(root, 'index.html')).pipe(res)
  } else {
    res.writeHead(404).end('not found')
  }
}).listen(port, () => console.log(`listening on ${port}`))
