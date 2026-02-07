import type { Meta, StoryObj } from '@storybook/react-vite';

import { Contact } from './Contact';

const meta = {
  title: 'jorgecalderon.codes/Pages/Contact',
  component: Contact,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeMenuItem: 'Contact',
  },
};
