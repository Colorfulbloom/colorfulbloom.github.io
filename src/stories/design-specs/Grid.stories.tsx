import type { Meta, StoryObj } from '@storybook/react-vite';

import { Grid } from './Grid';

const meta = {
  title: 'Design Specs/Grid System',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showNumbers: true,
  },
};
