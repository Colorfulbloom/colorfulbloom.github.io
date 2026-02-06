import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Toggle } from './Toggle';

const meta = {
  title: 'jorgecalderon.codes/Components/Form/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'obsidian', values: [{ name: 'obsidian', value: '#1A1A1A' }] },
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Dark mode',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Feature unavailable',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Always on',
    checked: true,
    disabled: true,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Toggle label="Email notifications" name="email" />
      <Toggle label="Push notifications" name="push" checked />
      <Toggle label="SMS alerts" name="sms" />
    </div>
  ),
};
