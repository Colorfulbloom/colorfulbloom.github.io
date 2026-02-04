import type { Meta, StoryObj } from '@storybook/react-vite';

import { Layout } from './Layout';

const meta = {
  title: 'jorgecalderon.codes/Layout/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidth: Story = {
  args: {
    variant: 'full-width',
  },
};

export const SidebarContent: Story = {
  args: {
    variant: 'sidebar-content',
  },
};

export const ThreeColumn: Story = {
  args: {
    variant: 'three-column',
  },
};

export const HolyGrail: Story = {
  args: {
    variant: 'holy-grail',
  },
};
