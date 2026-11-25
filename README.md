# Chemss Eddine Merabet — Portfolio

A fast, responsive portfolio built with React, Vite, and Tailwind CSS. It presents a focused full-stack case study for the **Pharmacy Management System**, plus concise about and contact pages.

## Highlights

- A cohesive, responsive portfolio experience with accessible navigation and mobile menu
- A data-driven project showcase and detailed Pharmacy Management System case study
- Screenshot gallery with keyboard-dismissible image previews
- Contact form that prepares a pre-filled email draft without sending or storing visitor data
- Respectful motion and visible keyboard focus states
- Clear, canonical routes with legacy URL redirects
- Leaner production bundle by avoiding unused, dynamically-imported icon sets

## Run locally

```bash
npm install
npm start
```

The development server listens on `http://localhost:4028`.

## Production build

```bash
npm run build
npm run serve
```

The production output is written to `build/`.

### Deploying under a subpath

By default, the site builds for the domain root. If it will be hosted under a repository path such as `https://example.github.io/devportfolio-pro/`, set the Vite base path at build time:

```bash
VITE_BASE_PATH=/devportfolio-pro/ npm run build
```

## Content updates

Portfolio content is centralized in [`src/data/portfolio.js`](src/data/portfolio.js). Update the profile, contact details, project copy, screenshots, and skills there rather than editing individual pages.

The existing Pharmacy Management System screenshots live in `public/images/pharmacy-screenshots/`.
