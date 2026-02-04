import type { Meta, StoryObj } from '@storybook/react-vite';
import { AboutMe } from './AboutMe';

const meta = {
  title: 'jorgecalderon.codes/Components/AboutMe',
  component: AboutMe,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullWidth',
  },
} satisfies Meta<typeof AboutMe>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProjects = [
  {
    id: 'pub-options',
    title: 'Publishing Options',
    description: 'A Drupal contrib module that extends content publishing with custom promotion options, fully integrated with Views.',
    labels: [{ text: 'Drupal' }, { text: 'PHP' }],
    href: 'https://www.drupal.org/project/pub_options',
    buttonLabel: 'View on Drupal.org',
  },
  {
    id: 'terrain-opt',
    title: 'Terrain Optimizer',
    description: 'Real-time LOD system for large open-world Unity3D terrains — keeps frame rate stable at any zoom.',
    labels: [{ text: 'Unity3D' }, { text: 'Python' }, { text: 'AI' }],
    href: '#',
  },
  {
    id: 'docker-starter',
    title: 'Front-End Docker Starter',
    description: 'A zero-config Docker + CI/CD template for modern React apps with hot-reload and production optimisations baked in.',
    labels: [{ text: 'Docker' }, { text: 'React' }, { text: 'TypeScript' }],
    href: '#',
  },
];

/** Full section: bio, skills, buttons, and a projects grid. */
export const Default: Story = {
  args: {
    heading: 'About Me',
    tagline: 'Architect. Builder. Tinkerer.',
    bio: 'I am a senior full-stack developer specialising in web, mobile, and game-engine platforms. With over a decade of hands-on experience I enjoy turning complex problems into clean, maintainable solutions — whether that means shipping a Drupal contrib module, optimising a Unity3D terrain, or containerising an entire CI/CD pipeline.',
    skills: [
      { text: 'React' },
      { text: 'TypeScript' },
      { text: 'Node.js' },
      { text: 'PHP' },
      { text: 'Drupal' },
      { text: 'Unity3D' },
      { text: 'Docker' },
      { text: 'CSS' },
      { text: 'Sass' },
      { text: 'AI' },
    ],
    primaryButtonText: 'View Portfolio',
    secondaryButtonText: 'Contact Me',
    projects: sampleProjects,
  },
};

/** Same as Default but without a photo — shows the placeholder icon. */
export const NoPhoto: Story = {
  args: {
    ...Default.args,
  },
};

/** Projects grid only — no photo, no skills, no buttons. */
export const ProjectsOnly: Story = {
  args: {
    bio: 'A selection of projects I have shipped.',
    projects: sampleProjects,
  },
};

/** Minimal — just a bio, no photo, no skills, no buttons, no projects. */
export const BioOnly: Story = {
  args: {
    bio: 'A short bio with no bells and whistles — great for a stripped-back layout.',
  },
};

/** Skills only, no tagline, buttons, or projects. */
export const SkillsOnly: Story = {
  args: {
    bio: 'Experienced across a wide range of technologies.',
    skills: [
      { text: 'JavaScript' },
      { text: 'Python' },
      { text: 'Bootstrap' },
      { text: 'Git' },
      { text: 'HTML' },
    ],
  },
};
