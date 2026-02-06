import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Radio } from './Radio';

const frameworkOptions = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
];

const meta = {
  title: 'jorgecalderon.codes/Components/Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'obsidian', values: [{ name: 'obsidian', value: '#1A1A1A' }] },
  },
  tags: ['autodocs'],
  args: { onChange: fn(), name: 'framework', options: frameworkOptions },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    legend: 'Preferred Framework',
  },
};

export const Preselected: Story = {
  args: {
    legend: 'Preferred Framework',
    value: 'react',
  },
};

export const Disabled: Story = {
  args: {
    legend: 'Preferred Framework',
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    legend: 'Preferred Framework',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular (unavailable)', value: 'angular', disabled: true },
      { label: 'Svelte', value: 'svelte' },
    ],
  },
};
