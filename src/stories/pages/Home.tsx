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
        heading={<><span className="jumbotron__heading-line--deep-azure">Hi, I'm Jorge</span><br /><span className="jumbotron__heading-line--frost">I build Drupal.</span></>}
        subheading="A developer and technical analyst by trade, with a focus on DevOps and keeping systems running smoothly. I have an eye for design but lean into AI to bridge the gap — both personally and at work. Dad to two kids, and always tinkering with the next thing."
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
