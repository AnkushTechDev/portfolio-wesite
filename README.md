# Animated Developer Portfolio — Fictional Demo (v2)

A responsive Next.js 15 / TypeScript demo with a custom animated SVG engineer, guided walkthrough, light/dark theme toggle, fictional case studies, social icons, interactive playground and animations.

All names, projects, biography and contact details are fictional placeholders. Social icons point to general platform homepages, **not personal profiles**. The contact address `hello@example.com` is only a placeholder.

<img width="1082" height="732" alt="Screenshot 2026-10-18 at 4 45 08 PM" src="https://github.com/user-attachments/assets/5d5257ed-d0c7-4115-b448-1ed12c4c53af" />


## Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000. For a production build, run `npm run build` and `npm start`.

## Contents

- `app/page.tsx` — character tour, sample content, theme toggle, social links, playground, project modals.
- `app/globals.css` — responsive layouts and dark/light palettes.
- `components/EngineerAvatar.tsx` — original animated SVG character.
- `app/layout.tsx` — metadata.

## Features

- Dark / light mode, stored using `localStorage` on device.
- Mobile menu and responsive grids.
- Technology category tabs and demo project detail modals.
- Interactive playground with sparkle mode.
- GitHub, LinkedIn, Instagram and YouTube icons (links to platform homepages).
- Animated engineer character, card transitions, terminal typing effect.
- Respects `prefers-reduced-motion`.

## Before publishing

Replace fictional details and the `hello@example.com` address with your own if you want a real portfolio. Update social URLs to your profiles.

## Deployment

Push the extracted project to GitHub and import it into Vercel. This environment couldn't complete dependency installation, so a production build is not verified here.
