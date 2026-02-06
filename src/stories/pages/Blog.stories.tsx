import type { Meta, StoryObj } from '@storybook/react-vite';

import { Blog } from './Blog';

const meta = {
  title: 'jorgecalderon.codes/Pages/Blog',
  component: Blog,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeMenuItem: 'Blog',
  },
};
