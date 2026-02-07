import React from 'react';
import { Header } from '../layout/Header';
import { ContactForm } from '../modules/ContactForm';
import { Footer } from '../layout/Footer';

export interface ContactProps {
  /** Active menu item */
  activeMenuItem?: string;
}

export const Contact = ({ activeMenuItem = 'Contact' }: ContactProps) => {
  return (
    <div className="page-contact">
      <Header menuItems={['Home', 'Blog', 'Portfolio', 'Contact']} activeItem={activeMenuItem} />

      <ContactForm
        heading={
          <>
            <span className="contact-form__heading-accent">Get in</span>{' '}
            <span className="contact-form__heading-light">Touch.</span>
          </>
        }
        introItems={[
          { icon: 'fa-solid fa-lightbulb', text: 'Need help with a project?' },
          { icon: 'fa-solid fa-rocket', text: 'Got ideas?' },
          { icon: 'fa-brands fa-drupal', text: 'Want to chat Drupal?' },
        ]}
        introClosing="Or just want to say hello? Drop me a message and let's get started."
        details={[
          { icon: 'fa-solid fa-envelope', text: 'hello@jorgecalderon.codes', href: 'mailto:hello@jorgecalderon.codes' },
          { icon: 'fa-brands fa-github', text: 'github.com/jorgecalderon', href: 'https://github.com/jorgecalderon' },
          { icon: 'fa-brands fa-linkedin', text: 'linkedin.com/in/jorgecalderon', href: 'https://linkedin.com/in/jorgecalderon' },
          { icon: 'fa-solid fa-location-dot', text: 'Florida, USA' },
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
