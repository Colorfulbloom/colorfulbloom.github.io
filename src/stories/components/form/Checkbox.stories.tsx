import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'jorgecalderon.codes/Components/Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'obsidian', values: [{ name: 'obsidian', value: '#1A1A1A' }] },
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'I agree to the terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribe to newsletter',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'This option is unavailable',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Already accepted',
    checked: true,
    disabled: true,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
      <Checkbox label="React" name="skills" />
      <Checkbox label="TypeScript" name="skills" />
      <Checkbox label="Node.js" name="skills" />
      <Checkbox label="Drupal" name="skills" />
    </div>
  ),
};
