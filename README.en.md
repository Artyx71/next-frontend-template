# Next Frontend Template

**Languages / Языки:** [English](README.en.md) · [Русский](README.md)

---

A starter frontend template for Next.js 16 (App Router) with consistent conventions for styling and structure: BEM, SCSS, UI components, stores, and validated forms.

## Tech stack

- **Next.js 16** — React framework, App Router
- **React 19** — UI
- **TypeScript** — typing (JS/JSX can be used where needed)
- **SCSS** — styles, variables and mixins in `src/assets/styles`
- **Tailwind CSS 4** — utility classes (optional)
- **Zustand** — global state
- **React Hook Form + Zod** — forms and validation

## Scripts

```bash
npm run dev      # Development server (Next.js)
npm run build    # Production build
npm run start    # Run production build
npm run lint     # Lint
```

## Project structure

```
src/
├── app/                    # Pages and layout (App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── form/page.tsx       # Form with validation example
│   ├── api/page.tsx        # API usage example
│   ├── store/page.tsx      # Store usage example
│   └── components/page.tsx # UI components catalog
├── assets/styles/          # Global styles (SCSS)
│   ├── index.scss          # Entry point
│   └── base/
│       ├── _variables.scss # Variables ($black, $white, etc.)
│       ├── _mixins.scss    # Mixins (transition, etc.)
│       ├── _global.scss    # Base classes (.container, .form, etc.)
│       └── _fonts.scss     # Fonts (optional)
├── components/             # Reusable components
│   ├── ui/                 # Buttons, inputs, accordion, dialogs, etc.
│   ├── icons/              # SVG icons
│   └── Header.jsx          # Site header
├── api/                    # API client modules (e.g. posts.js)
├── composables/            # Hook wrappers (useApi, useToast, etc.)
├── schemas/                # Validation schemas (Zod)
├── stores/                 # Zustand stores
└── utils/                  # Utilities (formatPrice, etc.)
```

**Routing:** Only the App Router is used. There is no `pages/` folder. Routes are defined by folders under `src/app/` and a `page.tsx` file in each (e.g. `app/form/page.tsx` → URL `/form`).

The `@/` alias in code points to `src/` (e.g. `@/components/ui/Button`, `@/stores/user-store`).

## Styles

- **BEM** — class naming (block__element_modifier).
- **SCSS** — global styles are imported in `src/app/layout.tsx` via `@/assets/styles/index.scss`.
- UI component styles live next to the component (e.g. `Button.jsx` + `button.scss`) and are included in the shared styles entrypoint.

## Forms

Example form with Zod and React Hook Form validation is on the `/form` page. Schemas and default values live in `src/schemas/`.

## Store

Example global state (Zustand) is on the `/store` page. Stores live in `src/stores/`.

## Getting started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

If you get an “install sass” error when using Sass with Turbopack, run dev with Webpack instead: in `package.json` set the `dev` script to `next dev --webpack`.

## Deploy

Build: `npm run build`. Run production server: `npm run start`. You can deploy to [Vercel](https://vercel.com) or any Node.js host.
