# Personal Portfolio — Moeez Ahmad

A personal portfolio website built with **React 19**, **TypeScript**, and **Vite**, bundled as an installable **PWA**.

The site is a single-page application that showcases professional experience, skills, education, services, and portfolio work, with a working contact form powered by [EmailJS](https://www.emailjs.com/).

## Features

- **Responsive single-page design** built on the Reeni portfolio template with Bootstrap 5 and SCSS
- **Lazy-loaded routes** via `React.lazy` + `Suspense` for a faster initial paint
- **PWA support** (`vite-plugin-pwa`) — installable, offline-capable, with an auto-updating service worker
- **Contact form** wired to EmailJS with client-side validation and toast notifications
- **Animations** with GSAP, `wow.js`, and Swiper carousels
- **Error boundary** + `react-error-boundary` to keep the app resilient
- **Type-safe** throughout with strict TypeScript configuration

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 19, React DOM 19 |
| Language | TypeScript 5.8 |
| Build | Vite 7, `@vitejs/plugin-react-swc` |
| Routing | React Router 7 |
| Styling | Bootstrap 5, Sass |
| Animations | GSAP, Swiper, wow.js, tsParticles, Odometer |
| PWA | vite-plugin-pwa (Workbox) |
| Forms | EmailJS |
| Linting | ESLint 9 (typescript-eslint) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- [npm](https://www.npmjs.com/)

### Installation

```bash
npm install
```

### Environment Variables

Copy the example file and fill in your EmailJS credentials:

```bash
cp .env.example .env.local
```

| Variable | Description |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS email template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public API key |

> `.env.local` is git-ignored and must be configured separately when deploying (see [Deployment](#deployment)).

### Development

```bash
npm run dev
```

Starts the dev server with hot module replacement at `http://localhost:5173`.

### Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check with `tsc -b` and build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project Structure

```
├── index.html              # HTML entry point
├── vite.config.ts          # Vite config (React SWC + PWA plugin)
├── vercel.json             # SPA rewrites for Vercel
├── public/                 # Static assets (images, fonts, css, favicons)
└── src/
    ├── App.tsx             # Root component + routes
    ├── main.tsx            # React bootstrap + service worker registration
    ├── components/
    │   ├── common/         # Shared sections (contact, skills, portfolio, effects)
    │   ├── headers/        # Navigation
    │   ├── footers/        # Footer
    │   └── homes/          # Home page sections
    ├── data/               # Typed content: experience, skills, services, portfolio
    ├── pages/              # Page components
    └── utlis/              # Utility helpers
```

## Deployment

This project is configured for **Vercel** (a Vite SPA).

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — the framework preset is detected automatically.
3. Add the three `VITE_EMAILJS_*` environment variables under **Project Settings → Environment Variables**.
4. Deploy. Vercel runs `npm run build` and publishes the `dist/` directory.

The included `vercel.json` rewrites all routes to `/` so client-side routing works on direct navigation and refresh.

## License

This project is based on the [Reeni](https://themeforest.net/item/reeni-personal-portfolio-reactjs-template/41176272) portfolio template.

