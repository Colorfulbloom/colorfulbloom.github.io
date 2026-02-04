import type { Meta, StoryObj } from '@storybook/react-vite';

import { Container } from './Container';

const meta = {
  title: 'jorgecalderon.codes/Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'container',
  },
};

export const Fluid: Story = {
  args: {
    type: 'container-fluid',
  },
};

export const Small: Story = {
  args: {
    type: 'container-sm',
  },
};

export const Medium: Story = {
  args: {
    type: 'container-md',
  },
};

export const Large: Story = {
  args: {
    type: 'container-lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    type: 'container-xl',
  },
};

export const ExtraExtraLarge: Story = {
  args: {
    type: 'container-xxl',
  },
};
