import type { Meta, StoryObj } from '@storybook/react-vite';

import { Jumbotron } from '../components/Jumbotron';
import imgStyling from '../assets/styling.png';

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
        imageSrc: imgStyling,
        imageAlt: 'AI-assisted design in Storybook',
        labels: [{ text: 'AI' }, { text: 'React' }, { text: 'Sass' }],
        title: 'Designing with AI in Storybook',
        text: 'How I used AI to accelerate component design — from colour tokens to layout iterations, all inside Storybook.',
        buttonLabel: 'Read Post',
      }}
    />
  ),
};
