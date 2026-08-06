import { cpSync } from 'node:fs'

// GitHub Pages (and other static hosts) serve this file for unknown paths,
// which lets React Router's client-side routes work on deep links.
cpSync('dist/index.html', 'dist/404.html')
console.log('Copied dist/index.html -> dist/404.html')
