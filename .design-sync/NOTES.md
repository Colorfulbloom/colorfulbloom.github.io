# design-sync notes — jorgecalderon.codes Storybook

Repo-specific facts a re-sync needs. One bullet per gotcha.

## Setup

- The repo is a Storybook-driven site, not a library: no `main`/`module`/`exports`, `npm run build` is the Vite app build (`dist/index.html`). The converter needs a compiled entry plus a `.d.ts` tree, so the first sync (2026-10-17) added a library build: barrel `src/stories/index.ts`, `vite.lib.config.ts`, `tsconfig.lib.json`, the `build:lib` script and a `types` field in package.json. Output lands in `dist-lib/` (gitignored). Run `npm run build:lib` before the converter (`cfg.buildCmd`).
- `tsconfig.lib.json` turns off `noUnusedLocals`/`noUnusedParameters` (inherited from `tsconfig.app.json`): the declarations-only emit must not fail on lint-level findings in component files (first hit: three unused locals in `pages/UnderDevelopment.tsx`). The app build keeps the strict flags.
- Component styles never live in components (project convention). They flow through `src/stories/assets/css/main.scss`, which `.storybook/preview.ts` imports together with Bootstrap, Font Awesome and the Fontsource fonts. The bundle is JS-only; CSS and fonts come from the Storybook reference build (`[CSS_FROM_STORYBOOK]`).
- Story title `Design Specs/Grid System` does not squash to an export; `titleMap.GridSystem -> Grid`.
- Pages (`Home`, `Blog`, `Portfolio`, `Contact`, `UnderDevelopment`) and design-spec stories are synced on purpose (owner's choice on the first sync).

## Grading learnings

- [GENERAL] Compare shots are not the same frame: the storybook side is a tight element crop, the preview side is the 900x700 viewport. The sheet PNG scales each side to fit its column, so small components look huge on the left and tall components look like slivers. Judge from equal-scale pairs: `python3 .design-sync/.cache/pair.py <Component>` (helper lives in the gitignored cache; recreate it from this description if missing: crop the storybook shot to its top 700px, place it beside the preview shot, three stories per image). Raw sizes confirmed equal (Button ~210x58 on both sides).
- [GENERAL] Stories with `layout: 'centered'` shrink-wrap to content width in Storybook (flex centering) but render block-level full-width in the preview. That is framing, not a component difference - grade on styling. Alert compact variants are the visible case; the stacked "All Variants" stories have a fixed-width wrapper and match in width too.
- [GENERAL] Tall stories (ContentElements, pages) are viewport-clipped at 700px on the preview side. Compare the top 700px of the storybook crop; nothing below it is captured for the preview.
- [GENERAL] No decorators in `.storybook/preview.ts`, so no provider chain is needed; every story renders straight from the bundle + scraped CSS. The `backgrounds` parameter is not applied by either capture (both white).
- [GENERAL] All scoped compare runs use `--max-stories 30` so the capped components (Divider 26, Card 20, Alert 14, Label 10, ColorPalette 8, Input/ContentElements/Container/Comments 7) get every story captured. Keep the flag consistent within a wave.
- Solo set graded 2026-10-17: Button 5/5, Alert 14/14, BlogList 2/2, ContentElements 7/7 - all `match` with no fixes needed.
- Wave 1 (25 components: form controls; Card, Divider, Label, Logo, Grid; ColorPalette, the three typography specimens, Container, Row, Layout; Header, Footer, Jumbotron, AboutMe, Skills, WorkingOn, OnThisPage): all `match` out of the box, no owned previews, no config changes. Header `forceMobile` and the sticky OnThisPage rail raised no `[PORTAL?]`/escape warnings. The typography specimens confirmed the real Manrope, Noto Sans and JetBrains Mono faces render on both sides (the font canary).
- Form labels render light grey on white in both captures because the storybook `backgrounds` parameter (obsidian) is not applied by either capture; the components are designed for dark surfaces.

- Wave 2 (BlogFeatured, PortfolioFeatured, PortfolioList, Comments, ContactForm; Blog, Contact, Home, Portfolio, UnderDevelopment): all `match`, no owned previews. 39/39 components, 196/196 stories graded on the first sync without a single preview fix.
- [GENERAL] Capture artifact on Header-bearing pages: `.header__menu-item` starts at `opacity: 0` and fades in with a `forwards` animation. The storybook-side element shot (animations disabled) catches the nav links unrevealed, so page crops show an empty header bar on the left while the preview shows the links with the right active item. Verified live in the reference iframe at 900x700: the nav is there. Not a preview defect; grade on the rest of the page. The standalone Header stories were not affected.
- `cfg.overrides.Comments.viewport` is `900x1400` so the capture covers the whole thread (tallest story 1367px) and the Submitted / Form Errors states, which live below a 700px fold, are verified from images. An explicit `viewport` is part of the grade key (re-grades on change) and makes the product render that card at 900x1400 scaled into its column, hover-scrollable below the fold.

## Re-sync risks

- Verified only in the top 700px: every story taller than the default capture viewport (ContentElements, Grid, the five pages). Their lower regions are compositions of modules that were verified standalone (Jumbotron, BlogList, PortfolioList, ContactForm, Comments, Footer), not re-verified in place. Raise `cfg.overrides.<Name>.viewport` (max 2000px) for any of them to verify deeper; it re-grades that component.
- The library build is sync-owned: `src/stories/index.ts` must list every new component module or the component will be missing from `window.JorgecalderonCodes` (the storybook adapter then reports it as not a public export). Add the `export * from` line when a component is added.
- The storybook reference and the bundle must move together: re-run `npm run build:lib` AND rebuild `.design-sync/sb-reference` after any component or Sass change. `[REFERENCE_STALE?]` in the capture log means one moved without the other.
- CSS and fonts are scraped from the storybook build (`[CSS_FROM_STORYBOOK]`), so anything imported in `.storybook/preview.ts` ships to designs. A new Fontsource weight or a new global stylesheet lands automatically; a stylesheet imported only in a story file does not.
- No remote assets: images are inlined data URLs, fonts are local. `[ASSETS_BLOCKED]` cannot fire here today; it would if a story started loading a CDN image.
- Toolchain at first sync (2026-10-17): node 20.19.6, npm 11.14.1, storybook 10.2.4, vite 7.3.1, react 19.2.4, bootstrap 5.3.8, fontawesome-free 7.1.0; converter deps esbuild 0.28.2, playwright 1.64.1 (chromium 1248).
- `.design-sync/conventions.md` palette roles were traced from the Sass partials on 2026-10-17 (frost = light heading text, deep-azure = heading accent words and the second button/label blue, sky-blue = links and accent text on dark, amber-glow = article caption bars and asides). Re-check them if `_variables.scss` or the partials change; the build validates class names, not prose.
- Project CLAUDE.md still lists Questrial among the fonts; the compiled CSS and `.storybook/preview.ts` use Manrope for headings. The conventions header follows the compiled CSS.
