import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Logo } from './Logo';

const meta = {
  title: 'Design Specs/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: { type: 'range', min: 50, max: 500, step: 10 } },
    height: { control: { type: 'range', min: 50, max: 500, step: 10 } },
  },
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: '#1A1A1A',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 200,
    height: 70,
  },
};

export const Small: Story = {
  args: {
    width: 80,
    height: 28,
  },
};

export const Large: Story = {
  args: {
    width: 400,
    height: 140,
  },
};
