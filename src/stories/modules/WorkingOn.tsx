import React from 'react';
import { Divider } from '../components/Divider';

export interface Project {
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

export interface WorkingOnProps {
  /** Section heading — renders as h2 */
  heading?: React.ReactNode;
  /** Projects to showcase */
  projects: Project[];
}

/** Editorial-style showcase of work projects with alternating image/text layout. */
export const WorkingOn = ({ heading, projects }: WorkingOnProps) => {
  return (
    <section className="working-on">
      <div className="container">
        {heading && (
          <h2 className="working-on__heading font-manrope fw-bold">
            {heading}
          </h2>
        )}
        <Divider className="w-25 divider--blue-100 mb-4" />
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`working-on__project row align-items-center g-4${
              index % 2 !== 0 ? ' flex-row-reverse' : ''
            }`}
          >
            <div className="col-12 col-md-6">
              <img
                className="working-on__image"
                src={project.imageSrc}
                alt={project.imageAlt ?? project.title}
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="working-on__content">
                <span className="working-on__type">{project.type}</span>
                <h3 className="working-on__title">{project.title}</h3>
                <p className="working-on__description">
                  {project.description}
                </p>
                {project.buttonLabel && project.buttonHref && (
                  <a
                    className="btn btn-azure-bolt working-on__button"
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
