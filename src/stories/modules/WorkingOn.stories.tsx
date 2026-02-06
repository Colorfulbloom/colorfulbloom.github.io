import type { Meta, StoryObj } from '@storybook/react-vite';

import { WorkingOn } from './WorkingOn';

import pubOptionsImg from '../assets/pub-options-screenshot.svg';
import bcuImg from '../assets/bcu-screenshot.svg';

const meta = {
  title: 'jorgecalderon.codes/Modules/Working On',
  component: WorkingOn,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'charcoal',
      values: [{ name: 'charcoal', value: '#2D2D2D' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WorkingOn>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProjects = [
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
];

export const Default: Story = {
  render: () => (
    <WorkingOn
      heading={
        <>
          <span className="working-on__heading-accent">What I'm</span>{' '}
          <span className="working-on__heading-light">Working On.</span>
        </>
      }
      projects={sampleProjects}
    />
  ),
  args: {
    projects: sampleProjects,
  },
};

export const NoHeading: Story = {
  args: {
    projects: sampleProjects,
  },
};
