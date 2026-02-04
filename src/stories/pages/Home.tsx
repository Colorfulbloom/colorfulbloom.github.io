import React from 'react';
import { Header } from '../layout/Header';
import { Jumbotron } from '../components/Jumbotron';
import { DrupalIcon } from '../design-specs/DrupalIcon';

export interface HomeProps {
  /** Active menu item */
  activeMenuItem?: string;
}

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
    </div>
  );
};
