import React from 'react';
import { Header } from '../layout/Header';
import { Jumbotron } from '../modules/Jumbotron';
import { Skills } from '../modules/Skills';
import { ContactForm } from '../modules/ContactForm';
import { WorkingOn } from '../modules/WorkingOn';
import { Footer } from '../layout/Footer';

import imgStyling from '../assets/styling.png';
import pubOptionsImg from '../assets/pub-options-screenshot.svg';
import bcuImg from '../assets/bcu-screenshot.svg';

export interface HomeProps {
  /** Active menu item */
  activeMenuItem?: string;
}

export const Home = ({ activeMenuItem = 'Home' }: HomeProps) => {
  return (
    <div className="page-home">
      <Header menuItems={['Home', 'Blog', 'Portfolio', 'Contact']} activeItem={activeMenuItem} />

      <Jumbotron
        heading={<><span className="jumbotron__heading-line--deep-azure">Hi, I'm Jorge</span><br /><span className="jumbotron__heading-line--frost">I build with Drupal.</span></>}
        subheading="I am an award winning software developer and technical analyst. My work experience currently focuses on DevOps and keeping systems running smoothly. Whether it's AI workflows, design, or game engines, I am always tinkering with the next great thing. Want to collaborate?"
        primaryButtonText="Reach out"
        featuredCard={{
          imageSrc: imgStyling,
          imageAlt: 'AI-assisted design in Storybook',
          labels: [{ text: 'AI' }, { text: 'React' }, { text: 'Sass' }],
          title: 'Designing with AI in Storybook',
          text: 'How I used AI to accelerate component design — from colour tokens to layout iterations, all inside Storybook.',
          buttonLabel: 'Read Post',
        }}
      />

      <Skills
        heading={<><span className="skills__heading-accent">My</span>{' '}<span className="skills__heading-light">Skills.</span></>}
        skills={[
          {
            icon: 'fa-solid fa-code',
            title: 'Full-Stack Development',
            description:
              'Building modern web applications with React, TypeScript, and Node.js — from architecture to deployment.',
          },
          {
            icon: 'fa-brands fa-drupal',
            title: 'Drupal Architecture',
            description:
              'Enterprise CMS solutions with custom modules, headless architectures, and performance-tuned deployments.',
          },
          {
            icon: 'fa-solid fa-cloud',
            title: 'DevOps & Cloud',
            description:
              'Automated CI/CD pipelines, containerised infrastructure, and zero-downtime releases on AWS and GCP.',
          },
          {
            icon: 'fa-solid fa-palette',
            title: 'Design Systems',
            description:
              'Component-driven UI development with Storybook, Sass, and Bootstrap — consistent, reusable, and documented.',
          },
        ]}
      />

      <WorkingOn
        heading={<><span className="working-on__heading-accent">What I'm</span>{' '}<span className="working-on__heading-light">Working On.</span></>}
        projects={[
          {
            title: 'Publishing Options',
            type: 'Contributed Drupal Module',
            description:
              'A Drupal module that lets administrators create custom publishing options beyond the built-in defaults. Integrates with Views for field, filter, and contextual filter support. Compatible with Drupal 10 and 11.',
            imageSrc: pubOptionsImg,
            imageAlt: 'Publishing Options module on Drupal.org',
            buttonLabel: 'View Module',
            buttonHref: 'https://www.drupal.org/project/pub_options',
          },
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
        ]}
      />

      <ContactForm
        heading={<><span className="contact-form__heading-accent">Get in</span>{' '}<span className="contact-form__heading-light">Touch.</span></>}
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
