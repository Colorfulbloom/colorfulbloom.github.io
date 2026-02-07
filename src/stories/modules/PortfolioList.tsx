import React from 'react';
import { Divider } from '../components/Divider';

export interface PortfolioProject {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Project type label (e.g. "Contributed Drupal Module") */
  type: string;
  /** Screenshot image source */
  imageSrc: string;
  /** Alt text for the screenshot (defaults to title) */
  imageAlt?: string;
  /** Button label */
  buttonLabel?: string;
  /** Button link URL */
  buttonHref?: string;
}

export interface PortfolioListProps {
  /** Section heading — renders as h2 */
  heading?: React.ReactNode;
  /** Projects to showcase */
  projects: PortfolioProject[];
}

/** Alternating image/text rows showcasing portfolio projects. */
export const PortfolioList = ({ heading, projects }: PortfolioListProps) => {
  return (
    <section className="portfolio-list">
      <div className="container">
        {heading && (
          <h2 className="portfolio-list__heading font-manrope fw-bold">
            {heading}
          </h2>
        )}
        <Divider className="w-25 divider--blue-100 mb-4" />
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`portfolio-list__project row align-items-center g-4${
              index % 2 !== 0 ? ' flex-row-reverse' : ''
            }`}
          >
            <div className="col-12 col-md-6">
              <img
                className="portfolio-list__image"
                src={project.imageSrc}
                alt={project.imageAlt ?? project.title}
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="portfolio-list__content">
                <span className="portfolio-list__type">{project.type}</span>
                <h3 className="portfolio-list__title">{project.title}</h3>
                <p className="portfolio-list__description">
                  {project.description}
                </p>
                {project.buttonLabel && project.buttonHref && (
                  <a
                    className="btn btn-azure-bolt portfolio-list__button"
                    href={project.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.buttonLabel}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
