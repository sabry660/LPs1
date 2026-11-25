# Beauty Aesthetics — Aesthetic Clinic Website (Portfolio Project)

A modern, responsive multi-page website for a fictional aesthetic and wellness clinic, built as a portfolio/showcase piece. All business details (name, phone, address, reviews) are **placeholder/dummy data**.

**Live demo:** https://mashaym.github.io/beauty-aesthetics/

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router v7](https://reactrouter.com/) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) for styling

## Features

- 6 pages: Home, Services, About, Gallery, Reviews, Contact
- 30+ services grouped into 8 categories
- Before/after gallery with a draggable comparison slider and lightbox
- Client-side booking form with validation (no backend)
- Embedded Google Map and dummy Google-style reviews
- Fully responsive, accessible, and optimized for performance (route-level code splitting, lazy-loaded images, minimal dependencies)

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (bundled with Node.js)

## Local Development

```bash
git clone https://github.com/mashaym/beauty-aesthetics.git
cd beauty-aesthetics
npm install
npm run dev
```

The dev server starts at `http://localhost:5173/beauty-aesthetics/` with hot module reload — changes to any file in `src/` appear instantly.

> The `/beauty-aesthetics/` path prefix comes from the `base` setting in `vite.config.js`, matching the GitHub Pages deployment path. If you'd rather run it at the site root locally, temporarily set `base: '/'` there and `basename="/"` in `src/main.jsx`.

## Local Deployment (Production Build)

To run the app the way it behaves in production, build it and serve the compiled output locally:

```bash
npm run build      # outputs static files to dist/
npm run preview    # serves dist/ at http://localhost:4173/beauty-aesthetics/
```

`npm run build` also runs automatically before `npm run deploy` (see below). The `dist/` folder is fully static — you can also serve it with any static file server, e.g.:

```bash
npx serve dist
```

## Customizing for a Real Business

Placeholder content lives in `src/data/` (clinic info, services, reviews, gallery entries) and photos live in `src/assets/images/` (hero, clinic interior, team portraits, gallery treatment photos). Photos are free-to-use stock photos from [Pexels](https://www.pexels.com/) — swap everything for real business details and photography when adapting this template. The before/after gallery reuses one photo per treatment with a CSS filter for the "before" state, since no consented real before/after photography exists for this demo.

## Deployment to GitHub Pages

This project deploys to GitHub Pages via the included GitHub Actions workflow (`.github/workflows/deploy.yml`) on every push to `main`, or manually with:

```bash
npm run deploy
```

Update the `base` path in `vite.config.js` and the `basename` in `src/main.jsx` if you rename the repository.
