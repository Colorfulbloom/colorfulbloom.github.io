import type { Meta, StoryObj } from '@storybook/react-vite';
import { BlogPostGrid } from './BlogPostGrid';

const meta = {
  title: 'jorgecalderon.codes/Components/BlogPostGrid',
  component: BlogPostGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof BlogPostGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'My Sweet Blog Posts',
    posts: [
      {
        id: '1',
        title: 'Building Scalable APIs with Node.js',
        excerpt: 'A deep dive into structuring RESTful APIs for performance and maintainability at scale.',
        date: 'Jan 28, 2026',
        href: '#',
        imageSrc: 'assets/styling.png',
        imageAlt: 'Styling illustration',
      },
      {
        id: '2',
        title: 'React 19: What\'s New',
        excerpt: 'Exploring the latest features in React 19 and how they change the way we build UIs.',
        date: 'Jan 22, 2026',
        href: '#',
        imageSrc: 'assets/theming.png',
        imageAlt: 'Theming illustration',
      },
      {
        id: '3',
        title: 'Mastering Drupal Contrib Modules',
        excerpt: 'How to plan, build, and maintain a contrib module that the community actually uses.',
        date: 'Jan 15, 2026',
        href: '#',
        imageSrc: 'assets/docs.png',
        imageAlt: 'Docs illustration',
      },
      {
        id: '4',
        title: 'Unity3D Terrain Optimization',
        excerpt: 'Techniques for rendering large open-world terrains without tanking your frame rate.',
        date: 'Jan 8, 2026',
        href: '#',
        imageSrc: 'assets/testing.png',
        imageAlt: 'Testing illustration',
      },
      {
        id: '5',
        title: 'Docker for Front-End Developers',
        excerpt: 'A practical guide to containerizing your dev environment and CI/CD pipeline.',
        date: 'Dec 30, 2025',
        href: '#',
        imageSrc: 'assets/assets.png',
        imageAlt: 'Assets illustration',
      },
    ],
  },
};
