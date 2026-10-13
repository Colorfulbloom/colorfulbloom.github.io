import type { Meta, StoryObj } from '@storybook/react-vite';

import { Portfolio } from './Portfolio';
import { ProjectPage } from './ProjectPage';

const meta = {
  title: 'jorgecalderon.codes/Pages/Portfolio',
  component: Portfolio,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Portfolio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeMenuItem: 'Portfolio',
  },
};

// Single project page (board Portfolio.dc.html, plus the All projects back link)
export const Project: StoryObj<typeof ProjectPage> = {
  tags: ['!autodocs'],
  render: (args) => <ProjectPage {...args} />,
  args: {
    activeMenuItem: 'Portfolio',
  },
};
