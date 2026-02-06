import type { Meta, StoryObj } from '@storybook/react-vite';

import { Skills } from './Skills';

const meta = {
  title: 'jorgecalderon.codes/Modules/Skills',
  component: Skills,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skills>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSkills = [
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
];

export const Default: Story = {
  render: () => (
    <Skills
      heading={
        <>
          <span className="skills__heading-accent">My</span>{' '}
          <span className="skills__heading-light">Skills.</span>
        </>
      }
      skills={sampleSkills}
    />
  ),
  args: {
    skills: sampleSkills,
  },
};

export const NoHeading: Story = {
  args: {
    skills: sampleSkills,
  },
};
