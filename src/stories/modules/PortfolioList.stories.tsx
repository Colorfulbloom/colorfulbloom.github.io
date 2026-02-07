import type { Meta, StoryObj } from '@storybook/react-vite';

import { PortfolioList } from './PortfolioList';

import bcuImg from '../assets/bcu-screenshot.svg';
import pubOptionsImg from '../assets/pub-options-screenshot.svg';

const meta = {
  title: 'jorgecalderon.codes/Modules/Portfolio List',
  component: PortfolioList,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'charcoal',
      values: [{ name: 'charcoal', value: '#2D2D2D' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PortfolioList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProjects = [
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
  {
    title: 'jorgecalderon.codes',
    type: 'Personal Project',
    description:
      'A component-driven personal website built with React, TypeScript, and Storybook. Every component is designed, documented, and tested inside Storybook before integration.',
    imageSrc: pubOptionsImg,
    imageAlt: 'jorgecalderon.codes in Storybook',
    buttonLabel: 'View Source',
    buttonHref: 'https://github.com/jorgecalderon',
  },
  {
    title: 'Enterprise CMS Platform',
    type: 'Client Project',
    description:
      'A headless Drupal architecture powering a multi-site content platform with custom modules, automated deployments, and performance-tuned infrastructure on AWS.',
    imageSrc: bcuImg,
    imageAlt: 'Enterprise CMS dashboard',
  },
];

export const Default: Story = {
  render: () => (
    <PortfolioList
      heading={
        <>
          <span className="portfolio-list__heading-accent">More</span>{' '}
          <span className="portfolio-list__heading-light">Projects.</span>
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
