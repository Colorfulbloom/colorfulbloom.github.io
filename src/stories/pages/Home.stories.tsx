import type { Meta, StoryObj } from '@storybook/react-vite';

import { Home } from './Home';

const meta = {
  title: 'jorgecalderon.codes/Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeMenuItem: 'Home',
  },
};

export const WithSuccessAlert: Story = {
  name: 'With Success Alert',
  args: {
    activeMenuItem: 'Home',
    alert: {
      variant: 'success',
      title: 'Welcome to my portfolio!',
      message: 'I\'m currently available for new projects. Let\'s build something great together.',
    },
  },
};
