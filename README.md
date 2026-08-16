# Guzoor

**مركز جذور للبناء الفكري والتأصيل — Guzoor Center for Intellectual Building & Deep-Rooting.** A responsive, production-ready web app for the Guzoor project (@rootsplatform on Telegram). It keeps the memory of the martyrs of religion and homeland, presents the center's programs (the Shaykh al-Turabi Forum for Quranic Studies, the Circles of Thought and Remembrance, the Guzoor Knowledge Club), and publishes reflections written from the channel's own analyses. Built with **React + TypeScript**, **TailwindCSS**, and **React Router**.

## Content sources

The martyrs' stories, programs, and article themes are drawn from the public Telegram channel `https://t.me/rootsplatform` (all 597 posts pulled via the `t.me/s/` preview). The full raw corpus is not committed to the repo. Before adding or editing content, see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the source-verification checklist.

## Editing content

All martyr, article, lecture, sermon, FAQ, and program content lives as JSON in [`src/content/`](./src/content/), in English and Arabic side by side. It can be edited directly, or through the admin page at `/admin` (Decap CMS) — see [`ADMIN_SETUP.md`](./ADMIN_SETUP.md) for the one-time setup.

![Palette](https://img.shields.io/badge/palette-%234A301D%20%7C%20%23EFECE3%20%7C%20%23683A1D-683A1D)

## Design System

| Token       | HEX       | Usage                          |
| ----------- | --------- | ------------------------------ |
| `primary`   | `#4A301D` | Dark brown — backgrounds, dark mode |
| `cream`     | `#EFECE3` | Beige / off-white — light surfaces |
| `accent`    | `#683A1D` | Medium brown — CTAs, borders, toggles |
| `text`      | `#FFFFFF` | White text on primary surfaces |

Full color scales, font pairings (Fraunces + Inter), shadows, and animations are defined in [`tailwind.config.js`](./tailwind.config.js). Reusable classes live in [`src/index.css`](./src/index.css) (`btn-primary`, `card`, `container-page`, `eyebrow`, …).

## Features

- **Landing page** — hero with `#4A301D` overlay + white text, accent CTAs with hover states, and styled social share buttons (Facebook, Twitter/X, WhatsApp).
- **Heroes section** — searchable/filterable card grid (by name, region, era, year) linking to full profiles with biography, virtues, and quote.
- **Religion section** — sermon playlist with a custom palette-styled media player (video + audio), category-filterable articles, and a collapsible FAQ accordion.
- **Global features** — sticky responsive navbar with dark/light mode toggle (persisted to `localStorage`), rich footer with contact + social links, SEO/Open Graph meta per page.
- **Accessibility** — semantic HTML, ARIA roles (`switch`, `tablist`, `region`, `aria-expanded`), skip-to-content link, focus-visible styles, and `prefers-reduced-motion` support.
- **Performance** — lazy-loaded images with fade-in, route-level code splitting via `React.lazy`, IntersectionObserver scroll reveals, and tree-shaken inline SVG icons (no icon dependency).

## Project Structure

```
src/
├── components/        # Navbar, Footer, Layout, HeroCard, MediaPlayer, FaqAccordion, SocialShare, Seo, icons, …
├── context/           # ThemeContext (light/dark, persisted)
├── data/              # Example heroes, articles, sermons, FAQs
├── lib/               # cn() classnames helper
├── pages/             # Home, Heroes, HeroDetail, Religion, NotFound
└── types/             # Shared TypeScript interfaces
```

## Getting Started

```bash
npm install
npm run dev        # start dev server (http://localhost:5173)
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
```

## Configuration

Copy `.env.example` to `.env.local` and set your values (Vite exposes only `VITE_`-prefixed vars):

```bash
VITE_SITE_NAME=Guzoor
VITE_SITE_URL=https://your-domain.com
```

### Customizing content

- **Heroes** — edit `src/data/heroes.ts`; portrait SVGs live in `public/heroes/`.
- **Articles, sermons, FAQs** — `src/data/articles.ts`, `src/data/sermons.ts`, `src/data/faqs.ts`.
- **Social share URL** — the `VITE_SITE_URL` drives Open Graph/Twitter meta tags in `src/components/Seo.tsx`.
- **Hero image** — swap the inline ornamental SVG in `src/pages/Home.tsx` (`HeroOrnament`) for a photo; keep the `#4A301D` overlay for contrast.
- **Open Graph image** — replace `public/og-image.svg` with a real 1200×630 PNG/JPG for maximum social-platform compatibility.

## Deployment

### GitHub Pages

The repo includes `.github/workflows/deploy.yml`, which builds the app and publishes it to GitHub Pages on every push to `main`.

1. Push this project to a GitHub repository named `guzoor` (or rename in the workflow's build step — the base path is derived from the repo name).
2. **Settings → Pages → Build and deployment → Source → GitHub Actions** (or run `gh api -X POST repos/<owner>/guzoor/pages -f build_type=workflow`).
3. The workflow deploys automatically. Your site is live at `https://<owner>.github.io/guzoor/`.
4. Deep links work because the build also emits `dist/404.html` (SPA fallback).

> Local equivalent of the production path:
> `GUZOOR_BASE=/guzoor/ npm run build && npm run preview`
> then open `http://localhost:4173/guzoor/`.

### Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, **New Project → Import** the repo. The included `vercel.json` sets the framework, build command, output directory, and SPA rewrites automatically.
3. Add environment variables: `VITE_SITE_URL` (e.g. `https://guzoor.vercel.app`) and optionally `VITE_SITE_NAME`.
4. Deploy. Every push to the default branch triggers a production deployment.

> CLI alternative: `npm i -g vercel && vercel` then `vercel --prod`.

### Netlify

1. Push the repository to a Git provider.
2. In Netlify, **Add new site → Import an existing project**. The included `netlify.toml` sets the build command, publish directory, and SPA redirects.
3. Set the same environment variables under **Site settings → Environment variables**.
4. Deploy.

> CLI alternative: `npm i -g netlify-cli && netlify deploy --prod`.

### Generic static host

Any static host works as long as unknown paths are rewritten to `/index.html` (required for React Router):

```bash
npm run build
# upload dist/ to your host
```

## Tech Stack

- Vite 8 + React 19 + TypeScript
- TailwindCSS 3.4 (class-based dark mode)
- React Router 6
- Context API for state (theme)
- oxlint + TypeScript strict build

## License

Example content is original to this project and free to reuse. Replace demo media URLs in `src/data/sermons.ts` with your own sermon recordings before launch.
