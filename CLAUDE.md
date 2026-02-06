# jorgecalderon.codes — Storybook

Storybook-driven front-end for the jorgecalderon.codes personal website. Components and pages are built in React/TypeScript, styled with Bootstrap 5.3 + custom Sass, and developed exclusively through Storybook stories — there is no separate app entry point for day-to-day work.

> **Session History:** `SESSION_HISTORY.md` tracks design decisions, implementation patterns, and changes across development sessions. Read this at the start of new sessions for context continuity.

> Detailed reference material (color palette, font tokens, full file tree, story title map, Storybook internals, Docker) lives in `agent_docs/reference.md`. Pull it in only when you need it.

---

## Tech Stack

TypeScript · React 19 · Vite 7 · Storybook 10 (`@storybook/react-vite`) · Bootstrap 5.3 (pre-built CSS, not compiled from Sass) · Font Awesome 6 Free · Dart Sass · Fontsource (Questrial, Noto Sans, JetBrains Mono) · Vitest 4 + Playwright · ESLint 9

---

## How to Work

```bash
npm run storybook        # dev server — port 6006 (primary workflow)
npm run build-storybook  # production build of Storybook
npm run build            # TypeScript check + Vite production build
npm run lint             # ESLint
```

After making changes, verify with `npm run build-storybook`. If the Storybook preview iframe shows a permanent loading spinner, a Sass variable error is the most likely cause — see the gotcha below.

---

## Project Layout

```
.storybook/              # Storybook config (main.ts, preview.ts, vitest.setup.ts)
src/stories/
├── assets/css/          # All Sass: _variables.scss, main.scss (entry), one partial per feature
├── components/          # Reusable UI components (Button, Card, Label, Divider, …) + their .stories files
├── design-specs/        # Design-system reference stories (Logo, ColorPalette, Typography, Grid)
├── layout/              # Structural components (Header, Layout, Container, Row) + stories
├── modules/             # Larger, composite sections (Jumbotron, BlogPostGrid, AboutMe) + stories
└── pages/               # Full-page compositions (Home) + stories
```

Key entry points:
- **Styles:** `src/stories/assets/css/main.scss` — `@use`s every partial. This is the only file that needs to know about other partials.
- **Global imports:** `.storybook/preview.ts` — Bootstrap CSS, Font Awesome 6 Free CSS, Fontsource fonts. Available in every story automatically.
- **Variables:** `src/stories/assets/css/_variables.scss` — palette tokens and font variables.

---

## Conventions (must follow)

1. **Every Sass partial imports its own variables.** `@use` is scoped — variables declared in `main.scss` do **not** flow into partials. Any `.scss` file that references `$obsidian`, `$azure-bolt`, etc. must start with `@use 'variables' as *;`.
2. **BEM class names.** `.block__element--modifier` — e.g. `.header__menu-item--active`, `.layout__sidebar--alt`.
3. **No Sass imports inside components.** Styles flow through `main.scss` → partials only. Components reference class names; they never import `.scss` files.
4. **Story file extensions matter.** Stories that use only CSF3 `args` (no JSX in the file) use `.ts`. Stories with inline `render` functions or JSX must use `.tsx`. (Example: `Button.stories.ts` is intentionally `.ts`.)

---

## Gotchas

- **Missing `@use 'variables'` crashes the preview.** Sass "Undefined variable" errors make the preview iframe spin forever for every story. Always add `@use 'variables' as *;` at the top of any new partial that uses palette or font variables.
- **`forceMobile` on Header.** `Header` accepts a `forceMobile` prop that bypasses responsive visibility — use it in stories instead of resizing the canvas to preview the mobile menu.
- **Bootstrap is pre-built CSS.** Do not attempt to compile or customize Bootstrap via Sass — the project imports the finished stylesheet from the `bootstrap` npm package.
