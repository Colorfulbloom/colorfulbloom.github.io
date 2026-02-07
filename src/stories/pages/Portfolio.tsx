import React from 'react';
import { Header } from '../layout/Header';
import { PortfolioFeatured } from '../modules/PortfolioFeatured';
import { PortfolioList } from '../modules/PortfolioList';
import { Footer } from '../layout/Footer';

import pubOptionsImg from '../assets/pub-options-screenshot.svg';
import bcuImg from '../assets/bcu-screenshot.svg';

export interface PortfolioProps {
  /** Active menu item */
  activeMenuItem?: string;
}

export const Portfolio = ({ activeMenuItem = 'Portfolio' }: PortfolioProps) => {
  return (
    <div className="page-portfolio">
      <Header menuItems={['Home', 'Blog', 'Portfolio', 'Contact']} activeItem={activeMenuItem} />

      <PortfolioFeatured
        heading={
          <>
            <span className="portfolio-featured__heading-accent">Featured</span>{' '}
            <span className="portfolio-featured__heading-light">Project.</span>
          </>
        }
        project={{
          title: 'Publishing Options',
          type: 'Contributed Drupal Module',
          description:
            'A Drupal module that lets administrators create custom publishing options beyond the built-in defaults. Integrates with Views for field, filter, and contextual filter support. Compatible with Drupal 10 and 11.',
          imageSrc: pubOptionsImg,
          imageAlt: 'Publishing Options module on Drupal.org',
          labels: [{ text: 'Drupal' }, { text: 'PHP' }],
          buttonLabel: 'View Module',
          buttonHref: 'https://www.drupal.org/project/pub_options',
        }}
      />

      <PortfolioList
        heading={
          <>
            <span className="portfolio-list__heading-accent">More</span>{' '}
            <span className="portfolio-list__heading-light">Projects.</span>
          </>
        }
        projects={[
          {
            title: 'Blood Cancer United',
            type: 'Full-Time Role',
            description:
              'The digital platform for Blood Cancer United, supporting patients and families through research, financial assistance, and advocacy resources. Built on Drupal, serving millions of visitors annually.',
            imageSrc: bcuImg,
            imageAlt: 'Blood Cancer United website homepage',
            buttonLabel: 'Visit Site',
            buttonHref: 'https://bloodcancerunited.org/',
          },
          {
            title: 'jorgecalderon.codes',
            type: 'Personal Project',
            description:
              'A component-driven personal website built with React, TypeScript, and Storybook. Every component is designed, documented, and tested inside Storybook before integration.',
            imageSrc: pubOptionsImg,
            imageAlt: 'jorgecalderon.codes in Storybook',
            buttonLabel: 'View Source',
            buttonHref: 'https://github.com/jorgecalderon',
          },
          {
            title: 'Enterprise CMS Platform',
            type: 'Client Project',
            description:
              'A headless Drupal architecture powering a multi-site content platform with custom modules, automated deployments, and performance-tuned infrastructure on AWS.',
            imageSrc: bcuImg,
            imageAlt: 'Enterprise CMS dashboard',
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
