import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContentElements } from './ContentElements';

const meta = {
  title: 'Design Specs/Content Elements',
  component: ContentElements,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
} satisfies Meta<typeof ContentElements>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    variant: 'light',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'charcoal',
      values: [{ name: 'charcoal', value: '#2D2D2D' }],
    },
  },
};
