import type { Meta, StoryObj } from '@storybook/react';
import { UnderDevelopment } from './UnderDevelopment';

const meta = {
  title: 'jorgecalderon.codes/Pages/Under Development',
  component: UnderDevelopment,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
} satisfies Meta<typeof UnderDevelopment>;

export default meta;
type Story = StoryObj<typeof UnderDevelopment>;

export const Default: Story = {};
