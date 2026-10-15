
export interface ColorSwatchProps {
  name: string;
  hex: string;
  description?: string;
  /** SCSS token, for example `$onyx` */
  token?: string;
  /** Show WCAG contrast of this color as text on Obsidian, Onyx and Charcoal */
  showContrast?: boolean;
  /** Note shown under the swatch, for example where the color is used on the site */
  usage?: string;
}

const lin = (c: number) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex: string) => {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};

/** WCAG 2.x contrast ratio between two hex colors. */
export const contrast = (a: string, b: string) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

const grade = (ratio: number) => (ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : ratio >= 3 ? 'Large only' : 'Fail');

const backgrounds = [
  { name: 'Obsidian', hex: '#1A1A1A' },
  { name: 'Onyx', hex: '#212528' },
  { name: 'Charcoal', hex: '#2D2D2D' },
];

export const ColorSwatch = ({ name, hex, description, token, showContrast = false, usage }: ColorSwatchProps) => (
  <div className="d-flex flex-column align-items-center">
    <div
      style={{
        width: 120,
        height: 120,
        backgroundColor: hex,
        borderRadius: 8,
        border: '1px solid rgba(0,0,0,0.1)',
      }}
    />
    <div className="mt-2 text-center">
      <div className="fw-bold">{name}</div>
      <code className="small">{hex}</code>
      {token && (
        <div>
          <code className="small">{token}</code>
        </div>
      )}
      {description && <div className="text-muted small">{description}</div>}
      {usage && <div className="small fw-bold">{usage}</div>}
    </div>
    {showContrast && (
      <table className="small mt-2" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          {backgrounds.map((bg) => {
            const ratio = contrast(hex, bg.hex);
            return (
              <tr key={bg.name}>
                <td className="text-muted">on {bg.name}</td>
                <td className="text-end">{ratio.toFixed(2)}:1</td>
                <td className="text-end">{grade(ratio)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )}
  </div>
);

export interface ColorPaletteProps {
  /** Name of the color palette */
  paletteName?: string;
}

export const quicksilverColors: ColorSwatchProps[] = [
  { name: 'Obsidian', token: '$obsidian', hex: '#1A1A1A', description: 'Primary dark' },
  { name: 'Onyx', token: '$onyx', hex: '#212528', description: 'Dark surface' },
  { name: 'Charcoal', token: '$charcoal', hex: '#2D2D2D', description: 'Secondary dark' },
  { name: 'Quicksilver', token: '$quicksilver', hex: '#E2E2E2', description: 'Light neutral' },
  { name: 'Frost', token: '$frost', hex: '#F3F3F3', description: 'Lightest neutral' },
  { name: 'Silver', token: '$silver', hex: '#F1F1F1', description: 'Light neutral' },
  { name: 'Ash', token: '$ash', hex: '#ECEBEB', description: 'Card gradient mid' },
  { name: 'Pewter', token: '$pewter', hex: '#8E8E8E', description: 'Mid neutral' },
  { name: 'Azure Bolt', token: '$azure-bolt', hex: '#0070BD', description: 'Primary accent' },
  { name: 'Deep Azure', token: '$deep-azure', hex: '#005A9E', description: 'Secondary accent' },
  { name: 'Sky Blue', token: '$sky-blue', hex: '#75B8E6', description: 'Light accent' },
];

export const secondaryColors: ColorSwatchProps[] = [
  { name: 'Ember', token: '$ember', hex: '#FF9A3C', description: 'Orange text accent' },
  {
    name: 'Burnt Orange',
    token: '$burnt-orange',
    hex: '#E8710A',
    description: 'Orange fills and borders',
    usage: 'In use: Under the Hood heading accent and underline in blog posts',
  },
  {
    name: 'Amber Glow',
    token: '$amber-glow',
    hex: '#F5C451',
    description: 'Amber text and highlights',
    usage: 'In use: two-word lead of h3s inside the Under the Hood box',
  },
  { name: 'Amber', token: '$amber', hex: '#E0A526', description: 'Amber fills and borders' },
  { name: 'Aqua', token: '$aqua', hex: '#2DD4BF', description: 'Teal text' },
  { name: 'Teal', token: '$teal', hex: '#14A38B', description: 'Teal fills and borders' },
  { name: 'Lavender', token: '$lavender', hex: '#C4B5FD', description: 'Violet text' },
  { name: 'Violet', token: '$violet', hex: '#A78BFA', description: 'Violet fills and borders' },
];

export const ColorPalette = ({ paletteName = 'Quicksilver' }: ColorPaletteProps) => (
  <div>
    <h3 className="mb-4">{paletteName} Color Palette</h3>
    <p className="text-muted">
      Contrast is the swatch color used as text on each dark surface (WCAG 2.x). Deep Azure fails even large text on Obsidian.
    </p>
    <div className="d-flex flex-wrap gap-4">
      {quicksilverColors.map((color) => (
        <ColorSwatch key={color.hex} showContrast {...color} />
      ))}
    </div>
    <h3 className="mt-5 mb-2">Secondary accents</h3>
    <p className="text-muted">
      Now in use on the site: $burnt-orange (Under the Hood heading accent and its underline in blog posts) and $amber-glow
      (the two-word lead of h3s inside the Under the Hood box). The other six are unused. Burnt Orange and Teal are below
      4.5:1 on Charcoal: use them for fills and borders only. Light shades as fills take Obsidian text, never white.
    </p>
    <div className="d-flex flex-wrap gap-4">
      {secondaryColors.map((color) => (
        <ColorSwatch key={color.hex} showContrast {...color} />
      ))}
    </div>
  </div>
);
