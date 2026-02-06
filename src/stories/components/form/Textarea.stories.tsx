import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Textarea } from './Textarea';

const meta = {
  title: 'jorgecalderon.codes/Components/Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'obsidian', values: [{ name: 'obsidian', value: '#1A1A1A' }] },
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write your message here…',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    helperText: 'Max 500 characters.',
  },
};

export const CustomRows: Story = {
  args: {
    label: 'Description',
    placeholder: 'Provide a detailed description…',
    rows: 8,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Notes',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};
