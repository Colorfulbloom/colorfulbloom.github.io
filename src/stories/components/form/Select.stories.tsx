import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Select } from './Select';

const sampleOptions = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
];

const meta = {
  title: 'jorgecalderon.codes/Components/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'obsidian', values: [{ name: 'obsidian', value: '#1A1A1A' }] },
  },
  tags: ['autodocs'],
  args: { onChange: fn(), options: sampleOptions },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Framework',
    placeholder: 'Select a framework',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Framework',
    placeholder: 'Select a framework',
    helperText: 'Choose the framework you are most familiar with.',
  },
};

export const Preselected: Story = {
  args: {
    label: 'Framework',
    value: 'react',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Framework',
    placeholder: 'Select a framework',
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    label: 'Framework',
    placeholder: 'Select a framework',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Vue', value: 'vue' },
      { label: 'Angular (coming soon)', value: 'angular', disabled: true },
      { label: 'Svelte', value: 'svelte' },
    ],
  },
};
