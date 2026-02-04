# jorgecalderon.codes — Storybook

Storybook front-end implementation of the UI design for the jorgecalderon.codes personal website.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Language | TypeScript |
| Framework | React 19 |
| Build tool | Vite 7 |
| Storybook | v10.2.4 (`@storybook/react-vite`) |
| CSS framework | Bootstrap 5.3 (imported globally in `preview.ts`) |
| Icons | Bootstrap Icons (imported globally in `preview.ts`) |
| Preprocessor | Sass (Dart Sass via `sass` package) |
| Fonts | Fontsource — Questrial, Noto Sans, JetBrains Mono |
| Testing | Vitest 4 + Playwright (browser-based, headless Chromium) |
| Linting | ESLint 9 with `typescript-eslint`, React Hooks, Storybook plugins |

---

## Commands

```bash
npm run storybook           # Start Storybook dev server on port 6006
npm run build-storybook     # Build static Storybook output
npm run build               # TypeScript check + Vite production build
npm run dev                 # Vite dev server (standalone React app)
npm run lint                # Run ESLint

docker compose up --build   # Build and run Storybook in Docker (port 6006)
```

---

## Color Palette — Quicksilver

Defined in `src/stories/assets/css/_variables.scss`. Every SCSS file that uses these variables must include `@use 'variables' as *;` at the top — Sass `@use` is scoped and does **not** cascade through `main.scss`.

| Name | Hex | Sass Variable |
|------|-----|---------------|
| Obsidian | `#1A1A1A` | `$obsidian` |
| Charcoal | `#2D2D2D` | `$charcoal` |
| Quicksilver | `#E2E2E2` | `$quicksilver` |
| Pewter | `#8E8E8E` | `$pewter` |
| Azure Bolt | `#0070BD` | `$azure-bolt` |
| Deep Azure | `#005A9E` | `$deep-azure` |

---

## Fonts

Loaded via Fontsource in `preview.ts`. Three utility classes defined in `main.scss` make them easy to apply anywhere.

| Font | Weight files loaded | Sass variable | Utility class | Intended use |
|------|---------------------|---------------|---------------|--------------|
| Questrial | 400 | `$font-header` | `.font-questrial` | Headings & navigation |
| Noto Sans | 400, 700 | `$font-body` | `.font-noto` | Body text |
| JetBrains Mono | 400, 700 | `$font-code` | `.font-jetbrains` | Code samples |

---

## Project Structure

```
.storybook/
├── main.ts                 # Story globs, addons, framework declaration
├── preview.ts              # Global CSS imports, docs source transform, a11y config
└── vitest.setup.ts         # Wires preview annotations for portable-story testing

src/stories/
├── assets/
│   └── css/
│       ├── _variables.scss     # Palette + font + transition variables
│       ├── main.scss           # Entry point: @use of every partial + utility classes
│       ├── button.scss         # .btn-{color} variants (5 colors × 3 states)
│       ├── header.scss         # Header + mobile overlay (BEM)
│       ├── jumbotron.scss      # Jumbotron section sizing
│       ├── layout.scss         # Layout demo boxes (BEM, uses @extend)
│       ├── container.scss      # Container demo box
│       ├── row.scss            # Row demo column box
│       └── pages.scss          # Page-level styles (.page-home)
│
├── components/
│   ├── Button.tsx              # Button: 5 color variants × 3 sizes
│   ├── Button.stories.ts       # 10 stories (5 colors, 3 sizes, 2 combined)
│   ├── Jumbotron.tsx           # Hero section with heading + up to 2 CTA buttons
│   └── Jumbotron.stories.tsx   # 4 stories (default, heading-only, with sub, single btn)
│
├── design-specs/
│   ├── Logo.tsx                # Inline SVG logo ($jc with PHP-style brackets)
│   ├── Logo.stories.tsx        # 3 sizes on dark background
│   ├── ColorPalette.tsx        # ColorSwatch + ColorPalette (renders all 5 swatches)
│   ├── ColorPalette.stories.tsx
│   ├── Typography.tsx          # Exports: NotoSans, JetBrainsMono, Questrial components
│   ├── Typography.stories.tsx  # Noto Sans story (default export)
│   ├── Questrial.stories.tsx   # Questrial story
│   ├── JetBrainsMono.stories.tsx
│   ├── Grid.tsx                # Full Bootstrap grid reference (12-col, breakpoints, gutters)
│   └── Grid.stories.tsx
│
├── layout/
│   ├── Header.tsx              # Responsive header: desktop nav + mobile full-screen overlay
│   ├── Header.stories.tsx      # Desktop, Mobile (forceMobile), CustomMenu
│   ├── Layout.tsx              # 4 layout variants: full-width, sidebar-content, three-column, holy-grail
│   ├── Layout.stories.tsx
│   ├── Container.tsx           # Renders any Bootstrap container class with description
│   ├── Container.stories.tsx   # 7 stories (container through container-xxl)
│   ├── Row.tsx                 # Configurable column count + gutter
│   └── Row.stories.tsx         # 6 stories (column counts + gutter extremes)
│
└── pages/
    ├── Home.tsx                # Composes Header + Jumbotron
    └── Home.stories.tsx
```

---

## Storybook Story Titles

All stories live under `jorgecalderon.codes/` in the sidebar, except the design-spec stories which use `Design Specs/`:

| Sidebar path | Story file |
|---|---|
| `Design Specs/Logo` | `Logo.stories.tsx` |
| `Design Specs/Color Palette` | `ColorPalette.stories.tsx` |
| `Design Specs/Typography/Noto Sans` | `Typography.stories.tsx` |
| `Design Specs/Typography/Questrial` | `Questrial.stories.tsx` |
| `Design Specs/Typography/JetBrains Mono` | `JetBrainsMono.stories.tsx` |
| `Design Specs/Grid System` | `Grid.stories.tsx` |
| `jorgecalderon.codes/Layout/Header` | `Header.stories.tsx` |
| `jorgecalderon.codes/Layout/Layout` | `Layout.stories.tsx` |
| `jorgecalderon.codes/Layout/Container` | `Container.stories.tsx` |
| `jorgecalderon.codes/Layout/Row` | `Row.stories.tsx` |
| `jorgecalderon.codes/Components/Button` | `Button.stories.ts` |
| `jorgecalderon.codes/Components/Jumbotron` | `Jumbotron.stories.tsx` |
| `jorgecalderon.codes/Pages/Home` | `Home.stories.tsx` |

---

## SCSS Conventions

1. **Every partial must import its own variables.** `main.scss` uses `@use 'variables' as *`, but that scope does not flow into files loaded via `@use`. Each `.scss` file that references `$obsidian`, `$azure-bolt`, etc. needs its own `@use 'variables' as *;` on line 1.
2. **BEM naming.** Custom classes follow Block__Element--Modifier: `.header__menu-item`, `.header__menu-item--active`, `.layout__sidebar--alt`, etc.
3. **Never import SCSS in components.** All styles flow through `main.scss` → individual partials. Components just use class names.
4. **`layout.scss` uses `@extend`.** The layout demo boxes share a base style via `@extend .layout__box`.

---

## Bootstrap Integration

Bootstrap CSS and Bootstrap Icons CSS are imported once in `.storybook/preview.ts` and are therefore available in every story automatically. The project does **not** compile Bootstrap from Sass — it uses the pre-built CSS from the `bootstrap` npm package.

---

## Storybook Configuration Details

### `preview.ts` — docs source transform

The docs panel renders **HTML output** instead of JSX. A custom `source.transform` function in `preview.ts` uses `react-dom/server`'s `renderToStaticMarkup` to render each story's component with its args, then runs a simple indentation formatter. Falls back to the original code string if rendering throws.

### Accessibility

`@storybook/addon-a11y` is configured in `todo` mode — violations appear in the test runner UI but do not fail the build.

### Addons loaded

`@chromatic-com/storybook`, `@storybook/addon-vitest`, `@storybook/addon-a11y`, `@storybook/addon-docs`, `@storybook/addon-onboarding`.

---

## Docker

A minimal `Dockerfile` (Node 20 Alpine) and `docker-compose.yml` are provided. The compose file mounts `./src` and `./.storybook` as volumes and sets `CHOKIDAR_USEPOLLING=true` so that file-watch works inside the container. Storybook is exposed on port 6006.

---

## Common Gotchas

- **Sass "Undefined variable" errors crash the preview iframe** (shows as a permanent loading spinner for every story). If you add a new `.scss` partial or create a new one that uses palette variables, make sure `@use 'variables' as *;` is at the top.
- **`Button.stories.ts` is `.ts`, not `.tsx`.** It uses the CSF3 `args`-only pattern and never contains JSX, so no `.tsx` extension is needed. If you add inline `render` functions with JSX you must rename it to `.tsx`.
- **`forceMobile` on Header.** The `Header` component accepts a `forceMobile` prop that overrides responsive visibility classes — useful for previewing the mobile hamburger menu without resizing the canvas.
