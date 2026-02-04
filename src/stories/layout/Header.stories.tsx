import type { Meta, StoryObj } from '@storybook/react-vite';

import { Header } from './Header';

const meta = {
  title: 'jorgecalderon.codes/Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    menuItems: ['Home', 'About', 'Services', 'Portfolio', 'Contact'],
    activeItem: 'Home',
  },
};

export const Mobile: Story = {
  args: {
    menuItems: ['Home', 'About', 'Services', 'Portfolio', 'Contact'],
    activeItem: 'Home',
    forceMobile: true,
  },
};

export const CustomMenu: Story = {
  args: {
    menuItems: ['Projects', 'Blog', 'Resume', 'Contact'],
    activeItem: 'Projects',
  },
};
