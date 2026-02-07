import React from 'react';
import { Divider } from '../components/Divider';
import { Label } from '../components/Label';
import type { CardLabel } from '../components/Card';

export interface FeaturedProject {
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
  /** Tech / category labels */
  labels?: CardLabel[];
  /** Button label (e.g. "View Project") */
  buttonLabel?: string;
  /** Button link URL */
  buttonHref?: string;
}

export interface PortfolioFeaturedProps {
  /** Section heading — renders as h2 */
  heading?: React.ReactNode;
  /** The featured project to showcase */
  project: FeaturedProject;
}

/** Hero-style featured project with image/text side-by-side layout. */
export const PortfolioFeatured = ({ heading, project }: PortfolioFeaturedProps) => {
  return (
    <section className="portfolio-featured">
      <div className="container">
        {heading && (
          <h2 className="portfolio-featured__heading font-manrope fw-bold">
            {heading}
          </h2>
        )}
        <Divider className="divider--blue-100 mb-4" />

        <div className="portfolio-featured__project row align-items-center g-4">
          <div className="col-12 col-md-6">
            <img
              className="portfolio-featured__image"
              src={project.imageSrc}
              alt={project.imageAlt ?? project.title}
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="portfolio-featured__content">
              <span className="portfolio-featured__type">{project.type}</span>
              <h3 className="portfolio-featured__title">{project.title}</h3>
              {project.labels && project.labels.length > 0 && (
                <div className="portfolio-featured__labels">
                  {project.labels.map((label) => (
                    <Label key={label.text} text={label.text} color={label.color} />
                  ))}
                </div>
              )}
              <p className="portfolio-featured__description">{project.description}</p>
              {project.buttonLabel && project.buttonHref && (
                <a
                  className="btn btn-azure-bolt portfolio-featured__button"
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
      </div>
    </section>
  );
};
