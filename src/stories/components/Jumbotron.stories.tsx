import type { Meta, StoryObj } from '@storybook/react-vite';

import { Jumbotron } from '../components/Jumbotron';
import { DrupalIcon } from '../design-specs/DrupalIcon';

const meta = {
  title: 'jorgecalderon.codes/Components/Jumbotron',
  component: Jumbotron,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Jumbotron>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Senior Full Stack Developer',
    subheading: 'Software Architecture & Solution Design for Web, Mobile, Unity3D & Unreal Engine',
    primaryButtonText: 'View Portfolio',
    secondaryButtonText: 'Contact Me',
  },
};

export const HeadingOnly: Story = {
  args: {
    heading: 'Welcome to My Site',
  },
};

export const WithSubheading: Story = {
  args: {
    heading: 'About Me',
    subheading: 'Learn more about my experience and skills',
  },
};

export const SingleButton: Story = {
  args: {
    heading: 'Get Started',
    subheading: 'Ready to build something amazing?',
    primaryButtonText: 'Contact Me',
  },
};

export const WithFeaturedCard: Story = {
  render: () => (
    <Jumbotron
      heading="Senior Full Stack Developer"
      subheading="Software Architecture & Solution Design for Web, Mobile, Unity3D & Unreal Engine"
      primaryButtonText="View Portfolio"
      secondaryButtonText="Contact Me"
      featuredCard={{
        icon: <DrupalIcon width={28} />,
        title: 'Publishing Options',
        text: 'A Drupal contrib module that extends content publishing with custom promotion options, fully integrated with Views for powerful filtering and display.',
        buttonLabel: 'View on Drupal.org',
        buttonHref: 'https://www.drupal.org/project/pub_options',
      }}
    />
  ),
};
