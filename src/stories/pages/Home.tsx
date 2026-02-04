import React from 'react';
import { Header } from '../layout/Header';
import { Jumbotron } from '../components/Jumbotron';
import { BlogPostGrid } from '../components/BlogPostGrid';
import { AboutMe } from '../components/AboutMe';
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

      <AboutMe
        tagline="Architect. Builder. Tinkerer."
        bio="I am a senior full-stack developer specialising in web, mobile, and game-engine platforms. With over a decade of hands-on experience I enjoy turning complex problems into clean, maintainable solutions — whether that means shipping a Drupal contrib module, optimising a Unity3D terrain, or containerising an entire CI/CD pipeline."
        skills={[
          { text: 'React' },
          { text: 'TypeScript' },
          { text: 'Node.js' },
          { text: 'PHP' },
          { text: 'Drupal' },
          { text: 'Unity3D' },
          { text: 'Docker' },
          { text: 'CSS' },
          { text: 'Sass' },
          { text: 'AI' },
        ]}
        primaryButtonText="View Portfolio"
        secondaryButtonText="Contact Me"
        projects={[
          {
            id: 'pub-options',
            title: 'Publishing Options',
            description: 'A Drupal contrib module that extends content publishing with custom promotion options, fully integrated with Views.',
            labels: [{ text: 'Drupal' }, { text: 'PHP' }],
            href: 'https://www.drupal.org/project/pub_options',
            buttonLabel: 'View on Drupal.org',
          },
          {
            id: 'terrain-opt',
            title: 'Terrain Optimizer',
            description: 'Real-time LOD system for large open-world Unity3D terrains — keeps frame rate stable at any zoom.',
            labels: [{ text: 'Unity3D' }, { text: 'Python' }, { text: 'AI' }],
            href: '#',
          },
          {
            id: 'docker-starter',
            title: 'Front-End Docker Starter',
            description: 'A zero-config Docker + CI/CD template for modern React apps with hot-reload and production optimisations baked in.',
            labels: [{ text: 'Docker' }, { text: 'React' }, { text: 'TypeScript' }],
            href: '#',
          },
        ]}
      />

      <BlogPostGrid heading="Blog" posts={defaultPosts} />
    </div>
  );
};
