import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label, LABEL_COLORS, TECH_LABELS } from './Label';

const meta = {
  title: 'jorgecalderon.codes/Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1A1A1A' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: LABEL_COLORS,
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Every known tech tag rendered with its auto-mapped colour. */
export const TechLabels: Story = {
  name: 'Tech Labels',
  render: () => (
    <div className="d-flex flex-wrap gap-3 align-items-center">
      {Object.keys(TECH_LABELS).map((name) => (
        <Label key={name} text={name} />
      ))}
    </div>
  ),
  args: {},
};

/** All eight colour variants displayed as swatches. */
export const AllVariants: Story = {
  name: 'All Colour Variants',
  render: () => (
    <div className="d-flex flex-wrap gap-3 align-items-center">
      {LABEL_COLORS.map((c) => (
        <Label key={c} color={c} text={c} />
      ))}
    </div>
  ),
  args: {},
};

// --- individual colour stories (useful for the docs panel) ---

export const AzureBolt: Story = {
  args: { color: 'azure-bolt', text: 'Azure Bolt' },
};

export const DeepAzure: Story = {
  args: { color: 'deep-azure', text: 'Deep Azure' },
};

export const Obsidian: Story = {
  args: { color: 'obsidian', text: 'Obsidian' },
};

export const Charcoal: Story = {
  args: { color: 'charcoal', text: 'Charcoal' },
};

export const Quicksilver: Story = {
  args: { color: 'quicksilver', text: 'Quicksilver' },
};

export const Amber: Story = {
  args: { color: 'amber', text: 'Amber' },
};

export const Emerald: Story = {
  args: { color: 'emerald', text: 'Emerald' },
};

export const Rose: Story = {
  args: { color: 'rose', text: 'Rose' },
};
