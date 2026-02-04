import type { Meta, StoryObj } from '@storybook/react-vite';

import { ColorPalette, ColorSwatch } from './ColorPalette';

const meta = {
  title: 'Design Specs/Color Palette',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ColorPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Quicksilver: Story = {
  args: {
    paletteName: 'Quicksilver',
  },
};

export const Obsidian: StoryObj<typeof ColorSwatch> = {
  render: () => <ColorSwatch name="Obsidian" hex="#1A1A1A" description="Primary dark" />,
};

export const Charcoal: StoryObj<typeof ColorSwatch> = {
  render: () => <ColorSwatch name="Charcoal" hex="#2D2D2D" description="Secondary dark" />,
};

export const QuicksilverColor: StoryObj<typeof ColorSwatch> = {
  render: () => <ColorSwatch name="Quicksilver" hex="#E2E2E2" description="Light neutral" />,
};

export const AzureBolt: StoryObj<typeof ColorSwatch> = {
  render: () => <ColorSwatch name="Azure Bolt" hex="#0070BD" description="Primary accent" />,
};

export const DeepAzure: StoryObj<typeof ColorSwatch> = {
  render: () => <ColorSwatch name="Deep Azure" hex="#005A9E" description="Secondary accent" />,
};
