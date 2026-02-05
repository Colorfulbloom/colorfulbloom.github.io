import type { Meta, StoryObj } from '@storybook/react-vite';

import { Manrope } from './Typography';

const meta = {
  title: 'Design Specs/Typography/Manrope',
  component: Manrope,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Manrope>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showCharacterSet: true,
  },
};
