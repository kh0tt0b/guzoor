import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deploying under a sub-path (e.g. GitHub Pages at /guzoor/), set
// GUZOOR_BASE=/guzoor/ (or VITE_BASE_PATH) at build time. Defaults to "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.GUZOOR_BASE ?? '/',
})
