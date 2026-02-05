import React from 'react';
import { Header } from '../layout/Header';
import { Jumbotron } from '../components/Jumbotron';

import imgStyling from '../assets/styling.png';

export interface HomeProps {
  /** Active menu item */
  activeMenuItem?: string;
}

export const Home = ({ activeMenuItem = 'Home' }: HomeProps) => {
  return (
    <div className="page-home">
      <Header menuItems={['Home', 'Blog', 'Portfolio', 'Contact']} activeItem={activeMenuItem} />

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

    </div>
  );
};
