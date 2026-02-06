import React from 'react';
import { Card } from '../components/Card';
import { Divider } from '../components/Divider';

export interface Skill {
  /** Font Awesome icon class (e.g. 'fa-solid fa-code', 'fa-brands fa-drupal') */
  icon: string;
  /** Skill title */
  title: string;
  /** Skill description */
  description: string;
}

export interface SkillsProps {
  /** Section heading — renders as h2 */
  heading?: React.ReactNode;
  /** List of skills to display */
  skills: Skill[];
}

/** A 2-column grid of plain cards showcasing major skills. */
export const Skills = ({ heading, skills }: SkillsProps) => {
  return (
    <section className="skills">
      <div className="container">
        {heading && (
          <h2 className="skills__heading font-manrope fw-bold">{heading}</h2>
        )}
        <Divider className="w-25 divider--blue-100 mb-4" />
        <div className="row g-0">
          {skills.map((skill) => (
            <div key={skill.title} className="col-12 col-md-6">
              <Card
                icon={skill.icon}
                title={skill.title}
                text={skill.description}
                variant="plain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
