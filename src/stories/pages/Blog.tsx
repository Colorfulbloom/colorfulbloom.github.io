import React from 'react';
import { Header } from '../layout/Header';
import { BlogFeatured } from '../modules/BlogFeatured';
import { BlogList } from '../modules/BlogList';
import { Footer } from '../layout/Footer';

import imgStyling from '../assets/styling.png';
import imgTheming from '../assets/theming.png';
import imgDocs from '../assets/docs.png';
import imgTesting from '../assets/testing.png';
import imgAssets from '../assets/assets.png';

export interface BlogProps {
  /** Active menu item */
  activeMenuItem?: string;
}

export const Blog = ({ activeMenuItem = 'Blog' }: BlogProps) => {
  return (
    <div className="page-blog">
      <Header menuItems={['Home', 'Blog', 'Portfolio', 'Contact']} activeItem={activeMenuItem} />

      <BlogFeatured
        heading={
          <>
            <span className="blog-featured__heading-accent">Latest</span>{' '}
            <span className="blog-featured__heading-light">Post.</span>
          </>
        }
        post={{
          title: 'Designing with AI in Storybook',
          date: 'February 2026',
          excerpt:
            'How I used AI to accelerate component design — from colour tokens to layout iterations, all inside Storybook.',
          imageSrc: imgStyling,
          imageAlt: 'AI-assisted design in Storybook',
          labels: [{ text: 'AI' }, { text: 'React' }, { text: 'Sass' }],
          buttonLabel: 'Read Post',
          buttonHref: '#',
        }}
      />

      <BlogList
        heading={
          <>
            <span className="blog-list__heading-accent">More</span>{' '}
            <span className="blog-list__heading-light">Posts.</span>
          </>
        }
        posts={[
          {
            icon: 'fa-brands fa-drupal',
            title: 'Building Custom Publishing Options for Drupal',
            description:
              'A walkthrough of creating the Publishing Options contributed module — custom workflows, Views integration, and D10/D11 compatibility.',
            imageSrc: imgTheming,
            imageAlt: 'Drupal publishing options',
          },
          {
            icon: 'fa-solid fa-gears',
            title: 'DevOps Pipelines for Drupal Sites',
            description:
              'Setting up automated CI/CD pipelines with Docker, GitHub Actions, and zero-downtime deployments for Drupal projects.',
            imageSrc: imgDocs,
            imageAlt: 'DevOps pipeline diagram',
          },
          {
            icon: 'fa-solid fa-cubes',
            title: 'Component-Driven Design with Storybook',
            description:
              'How a Storybook-first workflow changed the way I build front-end interfaces — faster iteration, better documentation.',
            imageSrc: imgTesting,
            imageAlt: 'Storybook component library',
          },
          {
            icon: 'fa-solid fa-arrow-up-right-dots',
            title: 'Migrating to Drupal 11',
            description:
              'Lessons learned from upgrading a large-scale Drupal 10 site to Drupal 11 — deprecated APIs, module compatibility, and testing strategies.',
            imageSrc: imgAssets,
            imageAlt: 'Drupal 11 upgrade process',
          },
        ]}
      />

      <Footer
        socials={[
          { icon: 'fa-brands fa-github', href: 'https://github.com/jorgecalderon', label: 'GitHub' },
          { icon: 'fa-brands fa-linkedin', href: 'https://linkedin.com/in/jorgecalderon', label: 'LinkedIn' },
          { icon: 'fa-brands fa-drupal', href: 'https://www.drupal.org/u/geocalleo', label: 'Drupal.org' },
        ]}
        email="hello@jorgecalderon.codes"
        builtWith="React, Storybook & Drupal"
      />
    </div>
  );
};
