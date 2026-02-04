import { Divider } from './Divider';
import { Label } from './Label';
import type { LabelColor } from './Label';
import { Button } from './Button';
import { Card } from './Card';

export interface AboutMeSkill {
  /** Skill / tech name — auto-colours if it matches a known tech */
  text: string;
  /** Manual colour override */
  color?: LabelColor;
}

export interface AboutMeProject {
  /** Unique key */
  id: string;
  /** Project title */
  title: string;
  /** Short description */
  description: string;
  /** Tech / category labels */
  labels?: AboutMeSkill[];
  /** Link shown on the card button */
  href?: string;
  /** Button label (defaults to "View Project") */
  buttonLabel?: string;
}

export interface AboutMeProps {
  /** Section heading (default "About Me") */
  heading?: string;
  /** URL or data-URI for the profile photo */
  photoSrc?: string;
  /** Alt text for the photo */
  photoAlt?: string;
  /** Short bio paragraph */
  bio: string;
  /** List of skills / technologies to display as labels */
  skills?: AboutMeSkill[];
  /** Label shown above the bio (e.g. "Who I am") */
  tagline?: string;
  /** Primary CTA label */
  primaryButtonText?: string;
  /** Secondary CTA label */
  secondaryButtonText?: string;
  /** Primary CTA href */
  primaryButtonHref?: string;
  /** Secondary CTA href */
  secondaryButtonHref?: string;
  /** Featured projects shown in a grid below the bio */
  projects?: AboutMeProject[];
  /** Heading for the projects sub-section (default "Projects") */
  projectsHeading?: string;
}

/** Reusable "About Me" section.  Two-column on md+: photo left, text right.
 *  Stacks to a single centred column on mobile. */
export const AboutMe = ({
  heading = 'About Me',
  photoSrc,
  photoAlt = 'Profile photo',
  bio,
  skills = [],
  tagline,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonHref,
  secondaryButtonHref,
  projects = [],
  projectsHeading = 'Projects',
}: AboutMeProps) => (
  <section className="about-me py-5">
    <div className="container">

      {/* ── Bio row: photo left, text right ── */}
      <div className="row align-items-center">

        {/* Left column: photo */}
        <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
          {photoSrc ? (
            <img
              className="about-me__photo"
              src={photoSrc}
              alt={photoAlt}
            />
          ) : (
            <div className="about-me__placeholder">
              <i className="bi bi-person-circle about-me__placeholder-icon" />
            </div>
          )}
        </div>

        {/* Right column: text */}
        <div className="col-12 col-md-7">
          <h2 className="about-me__heading display-5 font-questrial mb-3">
            {heading}
          </h2>
          <Divider className="mb-4" />

          {tagline && (
            <p className="about-me__tagline font-questrial mb-3">
              {tagline}
            </p>
          )}

          <p className="about-me__bio font-noto">
            {bio}
          </p>

          {skills.length > 0 && (
            <div className="about-me__skills mb-4">
              {skills.map((s) => (
                <Label key={s.text} text={s.text} color={s.color} />
              ))}
            </div>
          )}

          {(primaryButtonText || secondaryButtonText) && (
            <div className="d-flex flex-wrap gap-3">
              {primaryButtonText && (
                primaryButtonHref ? (
                  <a href={primaryButtonHref} className="text-decoration-none">
                    <Button label={primaryButtonText} />
                  </a>
                ) : (
                  <Button label={primaryButtonText} />
                )
              )}
              {secondaryButtonText && (
                secondaryButtonHref ? (
                  <a href={secondaryButtonHref} className="text-decoration-none">
                    <Button label={secondaryButtonText} color="quicksilver" />
                  </a>
                ) : (
                  <Button label={secondaryButtonText} color="quicksilver" />
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Projects grid ── */}
      {projects.length > 0 && (
        <div className="about-me__projects mt-5">
          <h3 className="about-me__projects-heading display-6 font-questrial mb-3">
            {projectsHeading}
          </h3>
          <Divider className="mb-5" />

          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-12 col-md-6 col-lg-4">
                <Card
                  title={project.title}
                  text={project.description}
                  labels={project.labels}
                  buttonLabel={project.buttonLabel ?? 'View Project'}
                  buttonColor="azure-bolt"
                  buttonHref={project.href}
                  className="h-100"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </section>
);
