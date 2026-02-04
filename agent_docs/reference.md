# Reference Details

Overflow reference material for the Storybook project. Linked from CLAUDE.md via progressive disclosure — only pull in what you actually need.

---

## Color Palette — Quicksilver

Defined in `src/stories/assets/css/_variables.scss`.

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

Loaded via Fontsource in `.storybook/preview.ts`. Utility classes defined in `src/stories/assets/css/main.scss`.

| Font | Weights | Sass variable | Utility class | Use |
|------|---------|---------------|---------------|-----|
| Questrial | 400 | `$font-header` | `.font-questrial` | Headings & nav |
| Noto Sans | 400, 700 | `$font-body` | `.font-noto` | Body text |
| JetBrains Mono | 400, 700 | `$font-code` | `.font-jetbrains` | Code samples |

---

## Full Project Tree

```
.storybook/
├── main.ts                 # Story globs, addons, framework declaration
├── preview.ts              # Global CSS + Bootstrap imports, docs source transform, a11y config
└── vitest.setup.ts         # Wires preview annotations for portable-story testing

src/stories/
├── assets/css/
│   ├── _variables.scss     # Palette + font + transition variables
│   ├── main.scss           # Entry point: @use of every partial + utility classes
│   ├── button.scss         # .btn-{color} variants (5 colors × 3 states)
│   ├── header.scss         # Header + mobile overlay (BEM)
│   ├── jumbotron.scss      # Jumbotron section sizing
│   ├── layout.scss         # Layout demo boxes (BEM, uses @extend)
│   ├── container.scss      # Container demo box
│   ├── row.scss            # Row demo column box
│   ├── blog-posts.scss     # Blog post grid styles
│   ├── card.scss           # Card component styles
│   ├── label.scss          # Label component styles
│   ├── about-me.scss       # About Me section styles
│   └── pages.scss          # Page-level styles (.page-home)
│
├── components/             # Reusable UI components + their stories
├── design-specs/           # Design system reference stories (logo, palette, type, grid)
├── layout/                 # Structural layout components (Header, Layout, Container, Row)
└── pages/                  # Full-page compositions (Home)
```

---

## Storybook Story Title Map

All stories live under `jorgecalderon.codes/` in the sidebar, except design-spec stories which use `Design Specs/`.

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

## Storybook Internals

- **Docs source transform:** `preview.ts` uses `react-dom/server` `renderToStaticMarkup` to render each story into HTML for the docs panel, with a simple indentation formatter. Falls back to the original code string on error.
- **a11y:** `@storybook/addon-a11y` runs in `todo` mode — violations surface in the test runner but do not fail the build.
- **Addons:** `@chromatic-com/storybook`, `@storybook/addon-vitest`, `@storybook/addon-a11y`, `@storybook/addon-docs`, `@storybook/addon-onboarding`.
- **Docker:** `Dockerfile` (Node 20 Alpine) + `docker-compose.yml`. Mounts `./src` and `./.storybook` as volumes, sets `CHOKIDAR_USEPOLLING=true`. Exposes port 6006.
