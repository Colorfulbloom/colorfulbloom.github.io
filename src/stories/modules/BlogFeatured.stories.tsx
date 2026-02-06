import type { Meta, StoryObj } from '@storybook/react-vite';

import { BlogFeatured } from './BlogFeatured';

import imgStyling from '../assets/styling.png';

const meta = {
  title: 'jorgecalderon.codes/Modules/Blog Featured',
  component: BlogFeatured,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogFeatured>;

export default meta;
type Story = StoryObj<typeof meta>;

const samplePost = {
  title: 'Designing with AI in Storybook',
  date: 'February 2026',
  excerpt:
    'How I used AI to accelerate component design — from colour tokens to layout iterations, all inside Storybook.',
  imageSrc: imgStyling,
  imageAlt: 'AI-assisted design in Storybook',
  labels: [{ text: 'AI' }, { text: 'React' }, { text: 'Sass' }],
  buttonLabel: 'Read Post',
  buttonHref: '#',
};

export const Default: Story = {
  render: () => (
    <BlogFeatured
      heading={
        <>
          <span className="blog-featured__heading-accent">Latest</span>{' '}
          <span className="blog-featured__heading-light">Post.</span>
        </>
      }
      post={samplePost}
    />
  ),
  args: {
    post: samplePost,
  },
};

export const NoHeading: Story = {
  args: {
    post: samplePost,
  },
};
