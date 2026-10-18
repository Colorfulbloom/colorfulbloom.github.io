# Conventions

## Setup
No provider, theme wrapper or context is needed. Link `styles.css`, load `_ds_bundle.js`, and mount React into your own dedicated node. Components are named exports on `window.JorgecalderonCodes`.

## Styling idiom
Bootstrap 5.3 (full) plus project Sass compiled into BEM classes, all in one stylesheet. Components never import styles. Tokens are Bootstrap's `--bs-*` custom properties. The project palette has no CSS variables, so use the hex or a class, never `var(--obsidian)`.

| Palette | Hex | Use |
|---|---|---|
| obsidian | #1A1A1A | page and header background |
| onyx | #212528 | darker surface: code-block bars, table panels, page sections |
| charcoal | #2D2D2D | dark cards (`card--charcoal`), `btn-charcoal` |
| quicksilver | #E2E2E2 | light text and light buttons |
| frost | #F3F3F3 | light heading text on dark (jumbotron, section headings) |
| pewter | #8E8E8E | muted text (`text-secondary`) |
| azure-bolt | #0070BD | primary action |
| deep-azure | #005A9E | second blue: heading accent words, `btn-deep-azure`, `label--deep-azure` |
| sky-blue | #75B8E6 | links and accent text on dark surfaces |
| burnt-orange | #E8710A | secondary accent, rare |
| amber-glow | #F5C451 | article caption bars and asides |

Default to a dark page: obsidian background, quicksilver text, azure-bolt actions.

Buttons: `btn btn-azure-bolt`, `btn-deep-azure`, `btn-obsidian`, `btn-charcoal`, `btn-quicksilver`. The `Button` component builds these from its `color` prop.

Labels use `label label--<color>`: azure-bolt, deep-azure, obsidian, charcoal, quicksilver, amber, emerald, rose, ember, aqua, lavender, off.

Type utilities: `font-manrope` (headings), `font-noto` (body), `font-jetbrains` (code), `text-secondary` (muted text).

Layout glue is Bootstrap utilities only. These exist: `container`, `row`, `col-md-6`, `d-flex`, `gap-3`, `g-4`, `mb-4`, `p-4`, `py-5`, `text-center`, `text-white`, `justify-content-between`, `align-items-center`. Never invent class names. If nothing fits, use a listed class or an inline style with a palette hex.

BEM pattern is `block__element--modifier`. Blocks you may target for overrides: `header` (`header__menu-item--active`), `layout` (`layout__sidebar--alt`), `card` (`card--charcoal`, `card__title`), `jumbotron` (`jumbotron__heading-line--deep-azure`), `alert` (`alert--success`).

Fonts: Manrope, Noto Sans and JetBrains Mono ship in `fonts/` and load through `styles.css`. Icons are Font Awesome 6 Free: `<i className="fa-solid fa-code" />`, `fa-brands fa-drupal`.

## Where the truth lives
`styles.css` imports `fonts/fonts.css` and `_ds_bundle.css`. For each component read `components/<group>/<Name>/<Name>.prompt.md` and `<Name>.d.ts` for exact props. Groups:
- `components`: Alert, Button, Card, Divider, Label.
- `form`: Checkbox, Input, Radio, Select, Textarea, Toggle.
- `layout`: Container, Row, Layout, Header, Footer.
- `modules`: composite sections such as Jumbotron, BlogList, Skills, ContactForm.
- `pages`: full pages such as Home, Blog, Portfolio, Contact.
- `design-specs`: reference views (ColorPalette, Grid, Logo, ContentElements).
- `typography`: font specimens (Manrope, NotoSans, JetBrainsMono).

## Example
```jsx
const { Container, Row, Card, Button, Label } = window.JorgecalderonCodes;

function Highlights() {
  return (
    <section style={{ background: '#1A1A1A' }} className="py-5">
      <Container>
        <h2 className="font-manrope text-white mb-4">Selected work</h2>
        <Row gutter="g-4" columns={2}>
          <Card variant="charcoal" icon="fa-solid fa-code" title="Project title"
            text="One-line summary." buttonLabel="Read more" buttonColor="azure-bolt" />
          <div className="d-flex gap-3 align-items-center">
            <Label color="amber" text="Drupal" />
            <Button color="deep-azure" label="Contact" />
          </div>
        </Row>
      </Container>
    </section>
  );
}
```
