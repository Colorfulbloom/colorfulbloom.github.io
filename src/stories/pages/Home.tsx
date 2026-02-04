import React from 'react';
import { Header } from '../layout/Header';
import { Jumbotron } from '../components/Jumbotron';
import { BlogPostGrid } from '../components/BlogPostGrid';
import { DrupalIcon } from '../design-specs/DrupalIcon';
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
  },
  {
    id: '2',
    title: 'React 19: What\'s New',
    excerpt: 'Exploring the latest features in React 19 and how they change the way we build UIs.',
    date: 'Jan 22, 2026',
    href: '#',
    imageSrc: imgTheming,
    imageAlt: 'Theming illustration',
  },
  {
    id: '3',
    title: 'Mastering Drupal Contrib Modules',
    excerpt: 'How to plan, build, and maintain a contrib module that the community actually uses.',
    date: 'Jan 15, 2026',
    href: '#',
    imageSrc: imgDocs,
    imageAlt: 'Docs illustration',
  },
  {
    id: '4',
    title: 'Unity3D Terrain Optimization',
    excerpt: 'Techniques for rendering large open-world terrains without tanking your frame rate.',
    date: 'Jan 8, 2026',
    href: '#',
    imageSrc: imgTesting,
    imageAlt: 'Testing illustration',
  },
  {
    id: '5',
    title: 'Docker for Front-End Developers',
    excerpt: 'A practical guide to containerizing your dev environment and CI/CD pipeline.',
    date: 'Dec 30, 2025',
    href: '#',
    imageSrc: imgAssets,
    imageAlt: 'Assets illustration',
  },
];

export const Home = ({ activeMenuItem = 'Home' }: HomeProps) => {
  return (
    <div className="page-home">
      <Header activeItem={activeMenuItem} />

      <Jumbotron
        heading="Senior Full Stack Developer"
        subheading="Software Architecture & Solution Design for Web, Mobile, Unity3D & Unreal Engine"
        primaryButtonText="View Portfolio"
        secondaryButtonText="Contact Me"
        featuredCard={{
          icon: <DrupalIcon width={28} />,
          title: 'Publishing Options',
          text: 'A Drupal contrib module that extends content publishing with custom promotion options, fully integrated with Views for powerful filtering and display.',
          buttonLabel: 'View on Drupal.org',
          buttonHref: 'https://www.drupal.org/project/pub_options',
        }}
      />

      <BlogPostGrid heading="My Sweet Blog Posts" posts={defaultPosts} />
    </div>
  );
};
