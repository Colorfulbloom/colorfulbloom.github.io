import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from '../components/Button';

const meta = {
  title: 'jorgecalderon.codes/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['azure-bolt', 'deep-azure', 'obsidian', 'charcoal', 'quicksilver'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AzureBolt: Story = {
  args: {
    color: 'azure-bolt',
    label: 'Azure Bolt',
  },
};

export const DeepAzure: Story = {
  args: {
    color: 'deep-azure',
    label: 'Deep Azure',
  },
};

export const Obsidian: Story = {
  args: {
    color: 'obsidian',
    label: 'Obsidian',
  },
};

export const Charcoal: Story = {
  args: {
    color: 'charcoal',
    label: 'Charcoal',
  },
};

export const Quicksilver: Story = {
  args: {
    color: 'quicksilver',
    label: 'Quicksilver',
  },
};
