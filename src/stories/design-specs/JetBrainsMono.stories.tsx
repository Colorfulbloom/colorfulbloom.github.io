import type { Meta, StoryObj } from '@storybook/react-vite';

import { JetBrainsMono } from './Typography';

const meta = {
  title: 'Design Specs/Typography/JetBrains Mono',
  component: JetBrainsMono,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof JetBrainsMono>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fontWeight: 400,
  },
};
