# devportfolio-pro

A modern developer portfolio built with React + Vite + Tailwind CSS. It showcases your projects, skills, and contact information, including a detailed page for the Pharmacy Management System with real screenshots.
## 🚀 Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Data Visualization** - Integrated D3.js and Recharts for powerful data visualization
- **Form Management** - React Hook Form for efficient form handling
- **Animation** - Framer Motion for smooth UI animations
- **Testing** - Jest and React Testing Library setup

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
   
2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
.
├── public/
│   ├── images/
│   │   └── pharmacy-screenshots/   # Real screenshots used in project detail
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/                 # Reusable UI components
│   ├── pages/
│   │   ├── portfolio-homepage/
│   │   ├── projects-showcase/
│   │   ├── project-detail-view/    # Gallery uses real screenshots
│   │   ├── about-skills/
│   │   └── contact-inquiry/
│   ├── styles/
│   ├── App.jsx
│   ├── Routes.jsx
│   └── index.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.mjs                 # build.outDir is set to "build"
└── .gitignore
```

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints.


## 🔧 Build & Output

Build the application for production:

```bash
npm run build
```

- Output directory: `build/` (configured in `vite.config.mjs` via `build.outDir`)
- Source maps: enabled (`--sourcemap`)
- Preview the production build locally:

```bash
npm run serve
```

## 🚀 Deployment

- Commit and push this repository to GitHub as usual.
- Deploy the static `build/` folder to your hosting provider (GitHub Pages, Netlify, Vercel, etc.).
- GitHub Pages tip (project site): if serving at `https://<user>.github.io/<repo>/`, consider setting `base: '/<repo>/'` in Vite config, or use a custom domain.

## 🙏 Acknowledgments

- Powered by React and Vite
- Styled with Tailwind CSS
