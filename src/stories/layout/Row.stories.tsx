import type { Meta, StoryObj } from '@storybook/react-vite';

import { Row } from './Row';

const meta = {
  title: 'jorgecalderon.codes/Layout/Row',
  component: Row,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    gutter: 'g-3',
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gutter: 'g-3',
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gutter: 'g-3',
  },
};

export const SixColumns: Story = {
  args: {
    columns: 6,
    gutter: 'g-3',
  },
};

export const NoGutter: Story = {
  args: {
    columns: 3,
    gutter: 'g-0',
  },
};

export const LargeGutter: Story = {
  args: {
    columns: 3,
    gutter: 'g-5',
  },
};
