import type { Meta, StoryObj } from '@storybook/react-vite';

import { BlogList } from './BlogList';

import imgTheming from '../assets/theming.png';
import imgDocs from '../assets/docs.png';
import imgTesting from '../assets/testing.png';
import imgAssets from '../assets/assets.png';

const meta = {
  title: 'jorgecalderon.codes/Modules/Blog List',
  component: BlogList,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'charcoal',
      values: [{ name: 'charcoal', value: '#2D2D2D' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogList>;

export default meta;
type Story = StoryObj<typeof meta>;

const samplePosts = [
  {
    icon: 'fa-brands fa-drupal',
    title: 'Building Custom Publishing Options for Drupal',
    description:
      'A walkthrough of creating the Publishing Options contributed module — custom workflows, Views integration, and D10/D11 compatibility.',
    imageSrc: imgTheming,
    imageAlt: 'Drupal publishing options',
    href: '#',
  },
  {
    icon: 'fa-solid fa-gears',
    title: 'DevOps Pipelines for Drupal Sites',
    description:
      'Setting up automated CI/CD pipelines with Docker, GitHub Actions, and zero-downtime deployments for Drupal projects.',
    imageSrc: imgDocs,
    imageAlt: 'DevOps pipeline diagram',
    href: '#',
  },
  {
    icon: 'fa-solid fa-cubes',
    title: 'Component-Driven Design with Storybook',
    description:
      'How a Storybook-first workflow changed the way I build front-end interfaces — faster iteration, better documentation.',
    imageSrc: imgTesting,
    imageAlt: 'Storybook component library',
    href: '#',
  },
  {
    icon: 'fa-solid fa-arrow-up-right-dots',
    title: 'Migrating to Drupal 11',
    description:
      'Lessons learned from upgrading a large-scale Drupal 10 site to Drupal 11 — deprecated APIs, module compatibility, and testing strategies.',
    imageSrc: imgAssets,
    imageAlt: 'Drupal 11 upgrade process',
    href: '#',
  },
];

export const Default: Story = {
  render: () => (
    <BlogList
      heading={
        <>
          <span className="blog-list__heading-accent">More</span>{' '}
          <span className="blog-list__heading-light">Posts.</span>
        </>
      }
      posts={samplePosts}
    />
  ),
  args: {
    posts: samplePosts,
  },
};

export const NoHeading: Story = {
  args: {
    posts: samplePosts,
  },
};
