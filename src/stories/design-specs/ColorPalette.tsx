import React from 'react';

export interface ColorSwatchProps {
  name: string;
  hex: string;
  description?: string;
}

export const ColorSwatch = ({ name, hex, description }: ColorSwatchProps) => (
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
      {description && <div className="text-muted small">{description}</div>}
    </div>
  </div>
);

export interface ColorPaletteProps {
  /** Name of the color palette */
  paletteName?: string;
}

const quicksilverColors: ColorSwatchProps[] = [
  { name: 'Obsidian', hex: '#1A1A1A', description: 'Primary dark' },
  { name: 'Charcoal', hex: '#2D2D2D', description: 'Secondary dark' },
  { name: 'Quicksilver', hex: '#E2E2E2', description: 'Light neutral' },
  { name: 'Frost', hex: '#F3F3F3', description: 'Lightest neutral' },
  { name: 'Silver', hex: '#F1F1F1', description: 'Light neutral' },
  { name: 'Ash', hex: '#ECEBEB', description: 'Card gradient mid' },
  { name: 'Pewter', hex: '#8E8E8E', description: 'Mid neutral' },
  { name: 'Azure Bolt', hex: '#0070BD', description: 'Primary accent' },
  { name: 'Deep Azure', hex: '#005A9E', description: 'Secondary accent' },
  { name: 'Sky Blue', hex: '#75B8E6', description: 'Light accent' },
];

export const ColorPalette = ({ paletteName = 'Quicksilver' }: ColorPaletteProps) => (
  <div>
    <h3 className="mb-4">{paletteName} Color Palette</h3>
    <div className="d-flex flex-wrap gap-4">
      {quicksilverColors.map((color) => (
        <ColorSwatch key={color.hex} {...color} />
      ))}
    </div>
  </div>
);
