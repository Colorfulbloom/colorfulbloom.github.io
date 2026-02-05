import React from 'react';
import { Header } from '../layout/Header';
import { Jumbotron } from '../components/Jumbotron';
import { BlogPostGrid } from '../components/BlogPostGrid';
import type { BlogPost } from '../components/BlogPostGrid';

import imgStyling from '../assets/styling.png';
import imgTheming from '../assets/theming.png';
import imgDocs from '../assets/docs.png';
import imgTesting from '../assets/testing.png';
import imgAssets from '../assets/assets.png';

export interface HomeProps {
  /** Active menu item */
  activeMenuItem?: string;
}

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'A deep dive into structuring RESTful APIs for performance and maintainability at scale.',
    date: 'Jan 28, 2026',
    href: '#',
    imageSrc: imgStyling,
    imageAlt: 'Styling illustration',
    labels: [{ text: 'Node.js' }, { text: 'JavaScript' }, { text: 'AI' }],
  },
  {
    id: '2',
    title: 'React 19: What\'s New',
    excerpt: 'Exploring the latest features in React 19 and how they change the way we build UIs.',
    date: 'Jan 22, 2026',
    href: '#',
    imageSrc: imgTheming,
    imageAlt: 'Theming illustration',
    labels: [{ text: 'React' }, { text: 'TypeScript' }, { text: 'CSS' }],
  },
  {
    id: '3',
    title: 'Mastering Drupal Contrib Modules',
    excerpt: 'How to plan, build, and maintain a contrib module that the community actually uses.',
    date: 'Jan 15, 2026',
    href: '#',
    imageSrc: imgDocs,
    imageAlt: 'Docs illustration',
    labels: [{ text: 'Drupal' }, { text: 'PHP' }, { text: 'HTML' }],
  },
  {
    id: '4',
    title: 'Unity3D Terrain Optimization',
    excerpt: 'Techniques for rendering large open-world terrains without tanking your frame rate.',
    date: 'Jan 8, 2026',
    href: '#',
    imageSrc: imgTesting,
    imageAlt: 'Testing illustration',
    labels: [{ text: 'Unity3D' }, { text: 'Python' }, { text: 'Git' }],
  },
  {
    id: '5',
    title: 'Docker for Front-End Developers',
    excerpt: 'A practical guide to containerizing your dev environment and CI/CD pipeline.',
    date: 'Dec 30, 2025',
    href: '#',
    imageSrc: imgAssets,
    imageAlt: 'Assets illustration',
    labels: [{ text: 'Docker' }, { text: 'Bootstrap' }, { text: 'Sass' }],
  },
];

export const Home = ({ activeMenuItem = 'Home' }: HomeProps) => {
  return (
    <div className="page-home">
      <Header activeItem={activeMenuItem} />

      <Jumbotron
        heading={<><span className="jumbotron__heading-line--deep-azure">Senior Full</span><br /><span className="jumbotron__heading-line--frost">Stack Developer</span></>}
        subheading="Software Architecture & Solution Design for Web, Mobile, Unity3D & Unreal Engine"
        primaryButtonText="View Portfolio"
        secondaryButtonText="Contact Me"
        featuredCard={{
          imageSrc: imgStyling,
          imageAlt: 'AI-assisted design in Storybook',
          labels: [{ text: 'AI' }, { text: 'React' }, { text: 'Sass' }],
          title: 'Designing with AI in Storybook',
          text: 'How I used AI to accelerate component design — from colour tokens to layout iterations, all inside Storybook.',
          buttonLabel: 'Read Post',
        }}
      />

      <BlogPostGrid heading="Blog" posts={defaultPosts} />
    </div>
  );
};
