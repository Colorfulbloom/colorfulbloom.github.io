import type { Meta, StoryObj } from '@storybook/react-vite';

import { PortfolioFeatured } from './PortfolioFeatured';

import pubOptionsImg from '../assets/pub-options-screenshot.svg';

const meta = {
  title: 'jorgecalderon.codes/Modules/Portfolio Featured',
  component: PortfolioFeatured,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PortfolioFeatured>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProject = {
  title: 'Publishing Options',
  type: 'Contributed Drupal Module',
  description:
    'A Drupal module that lets administrators create custom publishing options beyond the built-in defaults. Integrates with Views for field, filter, and contextual filter support. Compatible with Drupal 10 and 11.',
  imageSrc: pubOptionsImg,
  imageAlt: 'Publishing Options module on Drupal.org',
  labels: [{ text: 'Drupal' }, { text: 'PHP' }],
  buttonLabel: 'View Module',
  buttonHref: 'https://www.drupal.org/project/pub_options',
};

export const Default: Story = {
  render: () => (
    <PortfolioFeatured
      heading={
        <>
          <span className="portfolio-featured__heading-accent">Featured</span>{' '}
          <span className="portfolio-featured__heading-light">Project.</span>
        </>
      }
      project={sampleProject}
    />
  ),
  args: {
    project: sampleProject,
  },
};

export const NoHeading: Story = {
  args: {
    project: sampleProject,
  },
};
