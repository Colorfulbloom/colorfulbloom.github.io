import type { Meta, StoryObj } from '@storybook/react-vite';

import { Questrial } from './Typography';

const meta = {
  title: 'Design Specs/Typography/Questrial',
  component: Questrial,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Questrial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showCharacterSet: true,
  },
};
