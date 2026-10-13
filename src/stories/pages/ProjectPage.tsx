import { Divider } from '../components/Divider';
import { Label } from '../components/Label';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { PortfolioList } from '../modules/PortfolioList';
import { ContactForm } from '../modules/ContactForm';
import { PROJECT_BODY } from './articleContent';
import { externalLinkLabel, splitTitle } from './articleUtils';

import pubOptionsImg from '../assets/pub-options-screenshot.svg';
import bcuImg from '../assets/bcu-screenshot.svg';

export interface ProjectPageProps {
  /** Active menu item */
  activeMenuItem?: string;
}

export const ProjectPage = ({ activeMenuItem = 'Portfolio' }: ProjectPageProps) => {
  const [accent, light] = splitTitle('Publishing Options.');
  const moduleHref = 'https://www.drupal.org/project/pub_options';
  const bcuHref = 'https://bloodcancerunited.org';
  const sourceHref = 'https://github.com/Colorfulbloom';

  return (
    <div className="page-portfolio">
      <Header menuItems={['Home', 'Blog', 'Portfolio', 'Contact']} activeItem={activeMenuItem} />

      <main>
        <article>
          <section className="jumbotron article-hero bg-dark text-light">
            <div className="container">
              <div className="article-hero__row">
                <div className="article-hero__content">
                  <a className="back-link" href="/portfolio">
                    <i className="fa-solid fa-arrow-left back-link__icon" aria-hidden="true"></i>
                    <span>All projects</span>
                  </a>
                  <span className="article-hero__meta">Contributed Drupal Module</span>
                  <h1 className="display-4 font-manrope fw-bold mb-3 jumbotron__heading">
                    <span className="jumbotron__heading-line--deep-azure">{accent}</span>
                    {light && (
                      <>
                        <br />
                        <span className="jumbotron__heading-line--frost">{light}</span>
                      </>
                    )}
                  </h1>
                  <Divider className="w-25 divider--blue-100 mb-4" />
                  <div className="article-hero__labels">
                    <Label text="Drupal" />
                    <Label text="PHP" />
                  </div>
                  <p className="lead font-noto text-secondary mb-4">
                    A Drupal module that lets administrators create custom publishing options beyond the built-in defaults. Integrates with Views for field, filter, and contextual filter support. Compatible with Drupal 10 and 11.
                  </p>
                  <div className="article-hero__actions">
                    <a
                      className="btn btn-azure-bolt"
                      href={moduleHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {externalLinkLabel(moduleHref)}
                    </a>
                  </div>
                </div>
                <div className="article-hero__media">
                  <img
                    className="article-image"
                    src={pubOptionsImg}
                    alt="Publishing Options module on Drupal.org"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="article-section">
            <div className="container">
              <div
                className="content-elements content-elements--dark article-body font-noto mx-auto"
                dangerouslySetInnerHTML={{ __html: PROJECT_BODY }}
              />
            </div>
          </section>
        </article>

        <PortfolioList
          headingId="more-projects"
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
              buttonLabel: externalLinkLabel(bcuHref),
              buttonHref: bcuHref,
            },
            {
              title: 'jorgecalderon.codes',
              type: 'Personal Project',
              description:
                'My personal portfolio and blog — a Drupal 11 theme optimized for Drupal Canvas, backed by a React/Storybook component library and a fully componentized design system.',
              imageSrc: pubOptionsImg,
              imageAlt: 'jorgecalderon.codes',
              buttonLabel: externalLinkLabel(sourceHref),
              buttonHref: sourceHref,
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
      </main>

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
