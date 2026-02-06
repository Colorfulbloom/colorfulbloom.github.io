import type { Meta, StoryObj } from '@storybook/react-vite';

import { Footer } from './Footer';

const meta = {
  title: 'jorgecalderon.codes/Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navItems: ['Home', 'Blog', 'Portfolio', 'Contact'],
    socials: [
      { icon: 'fa-brands fa-github', href: 'https://github.com/jorgecalderon', label: 'GitHub' },
      { icon: 'fa-brands fa-linkedin', href: 'https://linkedin.com/in/jorgecalderon', label: 'LinkedIn' },
      { icon: 'fa-brands fa-drupal', href: 'https://www.drupal.org/u/geocalleo', label: 'Drupal.org' },
    ],
    email: 'hello@jorgecalderon.codes',
    name: 'Jorge Calderon',
    builtWith: 'React, Storybook & Drupal',
  },
};

export const Minimal: Story = {
  args: {
    name: 'Jorge Calderon',
  },
};
