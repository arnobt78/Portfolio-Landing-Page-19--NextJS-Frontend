# Portfolio Landing Page 19 - Next.js, Tailwind CSS, Three.js, Framer Motion Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-38bdf8)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.162-black)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0.8-purple)](https://www.framer.com/motion/)

A unique creative portfolio showcase built with cutting-edge frontend technologies. This project is designed for learning and instruction: run it locally, deploy to Vercel without env vars for a full demo, or fork and customize with your own content and optional EmailJS integration.

- **Live Demo:** [https://portfolio-ui-19.vercel.app/](https://portfolio-ui-19.vercel.app/)

---

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Routes & Pages](#routes--pages)
- [Components](#components)
- [Features & Functionalities](#features--functionalities)
- [Reusing Components](#reusing-components)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Introduction

A full-stack frontend demo built with the App Router, 3D models, animated navigation, and a contact form. It is intended for **instruction and learning**: you can run it locally, deploy it to Vercel without any env vars for the demo, or fork it and plug in your own content and APIs.

The site showcases a single-page-style flow with a circular nav (Home, About, Projects, Contact), optional background music with consent, and optional EmailJS integration for the contact form. All layout, styles, and UI work without configuring environment variables.

---

## Tech Stack

| Technology                       | Purpose                                                        |
| -------------------------------- | -------------------------------------------------------------- |
| **Next.js 14**                   | App Router, static generation, metadata, font optimization     |
| **React 18**                     | UI components, hooks                                           |
| **Tailwind CSS 3**               | Utility-first styling, custom theme (accent, background, etc.) |
| **Three.js / React Three Fiber** | 3D models (Wizard, Hat, Staff) in a Canvas                     |
| **Framer Motion**                | Page and component animations                                  |
| **React Hook Form**              | Contact form state and validation                              |
| **Sonner**                       | Toast notifications (form feedback)                            |
| **Lucide React**                 | Icons (Home, User, Phone, Github, etc.)                        |
| **EmailJS** (optional)           | Sending emails from the contact form when enabled              |

There is **no custom backend or API** in this repo. The app is static frontend; the only external integrations are optional (EmailJS, GitHub Readme Stats, Skill Icons) for contact and About section widgets.

---

## Project Structure

```bash
portfolio-ui-19/
├── public/
│   ├── audio/                    # Background music
│   ├── background/               # Page background images (home, about, contact, projects)
│   ├── models/                   # GLB 3D models (wizard, hat, staff)
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── (sub pages)/          # Route group: about, contact, projects
│   │   │   ├── layout.js         # Shared layout with HomeBtn
│   │   │   ├── about/page.js
│   │   │   ├── contact/page.js
│   │   │   └── projects/page.js
│   │   ├── layout.js             # Root layout, metadata, global UI (Sound, FireFlies)
│   │   ├── page.js               # Home page
│   │   ├── globals.css
│   │   └── data.js               # projectsData, BtnList (nav config)
│   └── components/
│       ├── FireFliesBackground.jsx
│       ├── HomeBtn.jsx
│       ├── RenderModel.jsx
│       ├── ResponsiveComponent.jsx
│       ├── Sound.jsx
│       ├── about/
│       │   ├── index.jsx          # AboutDetails (bio, stats, GitHub/skill widgets)
│       │   └── ItemLayout.jsx
│       ├── contact/
│       │   └── Form.jsx
│       ├── hooks/
│       │   └── useScreenSize.jsx
│       ├── models/               # Three.js scene components
│       │   ├── Wizard.jsx
│       │   ├── HatModel.jsx
│       │   └── Staff.jsx
│       ├── navigation/
│       │   ├── index.jsx          # Navigation (circular or stacked by breakpoint)
│       │   └── NavButton.jsx
│       └── projects/
│           ├── index.jsx          # ProjectList
│           └── ProjectLayout.jsx
├── .env.example
├── jsconfig.json                 # Path alias: @/* -> src/*
├── tailwind.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Install and run

```bash
# Clone the repository (or use your fork)
git clone <your-repo-url>
cd portfolio-ui-19

# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start
```

### Lint

```bash
npm run lint
```

You can run the app and deploy to Vercel **without** setting any environment variables. The UI, layout, and styles work as a demo; only optional features (EmailJS, custom GitHub stats URLs) use env vars.

---

## Environment Variables

Create a `.env.local` in the project root (use `.env.example` as reference). All variables are optional for the demo.

### Optional – Contact form (EmailJS)

To enable real email sending from the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service, Template, and get your **Service ID**, **Template ID**, and **Public Key**.
3. Add to `.env.local`:

```env
NEXT_PUBLIC_SERVICE_ID=your_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_public_key
```

1. In `src/components/contact/Form.jsx`, comment out the demo toast and uncomment the `emailjs.send(...)` block so the form uses these variables.

### Optional – GitHub / stats URLs

The About page can use custom endpoints for GitHub stats and streak. Defaults are used if not set:

```env
NEXT_PUBLIC_GITHUB_STATS_URL=https://github-readme-stats.vercel.app
NEXT_PUBLIC_GITHUB_STREAK_STATS_URL=https://github-readme-streak-stats.herokuapp.com
```

### Summary

| Variable                              | Required for demo? | Purpose            |
| ------------------------------------- | ------------------ | ------------------ |
| `NEXT_PUBLIC_SERVICE_ID`              | No                 | EmailJS service    |
| `NEXT_PUBLIC_TEMPLATE_ID`             | No                 | EmailJS template   |
| `NEXT_PUBLIC_PUBLIC_KEY`              | No                 | EmailJS public key |
| `NEXT_PUBLIC_GITHUB_STATS_URL`        | No                 | Fallback in code   |
| `NEXT_PUBLIC_GITHUB_STREAK_STATS_URL` | No                 | Fallback in code   |

---

## Routes & Pages

The app uses the Next.js 14 **App Router**. All listed routes are statically generated.

| Route       | File                                   | Description                                                        |
| ----------- | -------------------------------------- | ------------------------------------------------------------------ |
| `/`         | `src/app/page.js`                      | Home: full-screen background, circular navigation, Wizard 3D model |
| `/about`    | `src/app/(sub pages)/about/page.js`    | About: bio, stats, GitHub stats, skill icons, Hat 3D model         |
| `/projects` | `src/app/(sub pages)/projects/page.js` | Projects: list from `data.js`, Staff 3D model                      |
| `/contact`  | `src/app/(sub pages)/contact/page.js`  | Contact: form (demo toast or EmailJS when configured)              |

There are no API routes. The contact form talks to EmailJS from the client when enabled.

---

## Components

### Layout & global

- **`layout.js` (root)** – Wraps the app with Inter font, `globals.css`, SEO metadata, `FireFliesBackground`, `Sound`, and a modal root for the music consent dialog.
- **`(sub pages)/layout.js`** – Wraps About, Projects, and Contact with a shared layout and `HomeBtn` (link back to `/`).

### Navigation

- **`Navigation`** – Reads `BtnList` from `src/app/data.js`. On large screens it renders a circular ring of nav buttons; on smaller screens it splits into two columns. Uses `ResponsiveComponent` and `useScreenSize` for breakpoints.
- **`NavButton`** – Renders a single nav item (icon + label) with Framer Motion; supports `newTab` and `labelDirection` for tooltip placement.

### Pages and sections

- **Home (`page.js`)** – Background image, `Navigation`, and `RenderModel` with the `Wizard` model (dynamic import, `ssr: false`).
- **About** – Background image, `HatModel` in `RenderModel`, headline, and `AboutDetails` (grid of `ItemLayout`: bio, stats, GitHub top langs, GitHub stats card, Skill Icons, streak, pinned repo).
- **Projects** – Background image, `ProjectList` fed by `projectsData` from `data.js`, and `Staff` model in `RenderModel`.
- **Contact** – Background image and `Form` (react-hook-form + Sonner toasts; optional EmailJS).

### UI and effects

- **`FireFliesBackground`** – Client component that adds small animated “firefly” dots to the background.
- **`Sound`** – Music consent modal (localStorage, 3-day expiry), then play/pause button for `public/audio/...`.
- **`HomeBtn`** – Fixed link to `/` with home icon.
- **`RenderModel`** – Renders a Three.js `Canvas` with `@react-three/fiber` and `Environment` from `@react-three/drei`; used to wrap each page’s 3D model (Wizard, Hat, Staff).

### Data and config

- **`data.js`** – Exports `projectsData` (array of `{ id, name, description, date, demoLink }`) and `BtnList` (array of `{ label, link, icon, newTab }`). Edit these to change projects and nav links.

---

## Features & Functionalities

1. **Responsive circular navigation** – Desktop: buttons in a circle; mobile: two columns. Breakpoints via `useScreenSize` and `ResponsiveComponent`.
2. **3D models** – Wizard (home), Hat (about), Staff (projects) loaded from `public/models/*.glb`, with simple animations (e.g. rotation, gentle bounce) via `useFrame`.
3. **Background music** – Optional; first visit shows a consent modal; choice stored in localStorage with a 3-day expiry.
4. **Contact form** – Validated with react-hook-form (name, email, message); by default shows a demo toast; can be switched to EmailJS by setting env vars and uncommenting the send logic.
5. **About widgets** – GitHub Readme Stats (top langs, main card, pinned repo), GitHub Streak Stats, and Skill Icons; URLs configurable via env or use built-in defaults.
6. **SEO** – Root `layout.js` exports metadata (title template, description, authors, keywords, Open Graph, Twitter, icons, robots). Subpages export their own `metadata.title` (e.g. "About", "Projects", "Contact").
7. **Theming** – Tailwind theme extended in `tailwind.config.js` and CSS variables in `globals.css` (e.g. `--accent`, `--background`). Utility class `custom-bg` used for glass-style cards.

---

## Reusing Components

### Use in this project

- **Change nav links** – Edit `BtnList` in `src/app/data.js`.
- **Change projects** – Edit `projectsData` in `src/app/data.js`; `ProjectList` and `ProjectLayout` will render them.
- **Swap 3D models** – Replace or add GLB files in `public/models/`. Use [gltfjsx](https://github.com/pmndrs/gltfjsx) to generate a new React component, then use it inside `RenderModel` the same way as Wizard/Hat/Staff.
- **Disable music** – Remove or conditionally hide the `<Sound />` component in the root layout.
- **Customize theme** – Adjust `tailwind.config.js` and `globals.css` (`:root` and `.custom-bg`).

### Use in another Next.js project

1. Copy the components you need (e.g. `RenderModel`, `Navigation`, `NavButton`, `ResponsiveComponent`, `useScreenSize`, `Form`, `Sound`, `FireFliesBackground`, `HomeBtn`).
2. Install the same dependencies: `next`, `react`, `react-dom`, `framer-motion`, `@react-three/fiber`, `@react-three/drei`, `three`, `tailwindcss`, `react-hook-form`, `sonner`, `lucide-react`, `clsx`.
3. Ensure path alias `@/*` points to your `src` (e.g. in `jsconfig.json` or `tsconfig.json`).
4. Reuse the same Tailwind theme (colors, `custom-bg`, keyframes) or adapt to your design.
5. For the contact form, either keep the demo toast or add EmailJS and env vars as in [Environment Variables](#environment-variables).

Example: using only the circular nav with your own links:

```jsx
// In your layout or page
import Navigation from "@/components/navigation";

export default function MyLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
```

Ensure `BtnList` in `data.js` (or your own config) matches the links you want.

---

## Keywords

Portfolio, Next.js, React, Tailwind CSS, Three.js, Framer Motion, App Router, 3D, GLB, EmailJS, React Hook Form, Sonner, Lucide, GitHub Readme Stats, Skill Icons, responsive, static site, Vercel, frontend, demo, learning, open source.

---

## Conclusion

This project is a **frontend-only portfolio demo** with no backend or custom API. You can run and deploy it as-is; env vars are only needed for optional EmailJS and custom stats URLs. The structure is modular so you can reuse navigation, 3D scenes, contact form, and styling in your own Next.js apps. Use it for learning App Router, Three.js in React, Framer Motion, and Tailwind theming.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
