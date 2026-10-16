import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Comments } from './Comments';
import { sampleComments } from './commentsSample';

const meta = {
  title: 'jorgecalderon.codes/Modules/Comments',
  component: Comments,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  tags: ['autodocs'],
  args: { onSubmit: fn() },
} satisfies Meta<typeof Comments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { comments: sampleComments },
};

export const Empty: Story = {
  args: { comments: [] },
};

export const SingleComment: Story = {
  args: { comments: [sampleComments[1]] },
};

export const Submitted: Story = {
  args: { comments: sampleComments, submitted: true },
};

export const FormErrors: Story = {
  args: {
    comments: sampleComments,
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter a valid email address.',
    },
  },
};

export const Replying: Story = {
  args: { comments: sampleComments, replyingTo: '1' },
};

export const Mobile: Story = {
  args: { comments: sampleComments },
  globals: { viewport: { value: 'phone375', isRotated: false } },
  parameters: {
    viewport: {
      options: {
        phone375: { name: 'Phone 375', styles: { width: '375px', height: '812px' }, type: 'mobile' },
      },
    },
  },
};
