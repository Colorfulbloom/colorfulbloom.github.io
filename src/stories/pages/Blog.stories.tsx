import type { Meta, StoryObj } from '@storybook/react-vite';

import { Blog } from './Blog';
import { BlogPost } from './BlogPost';
import { POST_DEMO_BODY_ONE_HEADING } from './articleContent';

const meta = {
  title: 'jorgecalderon.codes/Pages/Blog',
  component: Blog,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeMenuItem: 'Blog',
  },
};

// Single blog post page (board BlogAdditions, additions A1–A6)
export const Post: StoryObj<typeof BlogPost> = {
  tags: ['!autodocs'],
  render: (args) => <BlogPost {...args} />,
  args: {
    activeMenuItem: 'Blog',
    newerPost: { title: 'Component-Driven Design with Storybook', href: '#' },
  },
};

// Body with only one h2: the "On this page" rail and its column are dropped
export const PostWithoutContentsRail: StoryObj<typeof BlogPost> = {
  name: 'Post without contents rail',
  tags: ['!autodocs'],
  render: (args) => <BlogPost {...args} />,
  args: {
    activeMenuItem: 'Blog',
    body: POST_DEMO_BODY_ONE_HEADING,
    newerPost: { title: 'Component-Driven Design with Storybook', href: '#' },
  },
};
