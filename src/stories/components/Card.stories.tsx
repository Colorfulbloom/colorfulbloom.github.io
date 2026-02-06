import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Card } from './Card';

const meta = {
  title: 'jorgecalderon.codes/Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1A1A1A' }],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: [
        undefined,
        'fa-solid fa-code',
        'fa-solid fa-globe',
        'fa-solid fa-rocket',
        'fa-solid fa-phone',
        'fa-solid fa-laptop',
        'fa-solid fa-cloud',
        'fa-solid fa-gear',
        'fa-solid fa-bolt',
        'fa-solid fa-palette',
        'fa-solid fa-terminal',
        'fa-solid fa-puzzle-piece',
        'fa-solid fa-diagram-project',
        'fa-solid fa-circle-user',
        'fa-solid fa-envelope',
        'fa-brands fa-github',
        'fa-solid fa-gamepad',
        'fa-brands fa-unity',
        'fa-brands fa-drupal',
      ],
    },
    buttonColor: {
      control: 'select',
      options: ['azure-bolt', 'deep-azure', 'obsidian', 'charcoal', 'quicksilver'],
    },
    variant: {
      control: 'select',
      options: ['default', 'charcoal', 'plain'],
    },
  },
  args: { onButtonClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Baseline ──────────────────────────────────────────────────────────────────

/** Minimal card: title + body text, no image, no button. */
export const TextOnly: Story = {
  args: {
    title: 'Web Development',
    text: 'Full-stack solutions built with modern frameworks, optimised for performance and maintainability.',
  },
};

/** Title alone — useful as a compact label or heading card. */
export const TitleOnly: Story = {
  args: {
    title: 'Coming Soon',
  },
};

// ── With Image ────────────────────────────────────────────────────────────────

/** Card with a placeholder image across the top. */
export const WithImage: Story = {
  args: {
    title: 'Mobile App Design',
    text: 'Native & cross-platform apps from concept through to App Store launch.',
    imageSrc: 'https://picsum.photos/seed/card1/600/360',
    imageAlt: 'Mobile app mockup',
  },
};

// ── With Button ───────────────────────────────────────────────────────────────

/** Default Azure Bolt CTA in the footer. */
export const WithButton: Story = {
  args: {
    title: 'Cloud Architecture',
    text: 'Scalable, resilient cloud infrastructure designed around your business needs.',
    buttonLabel: 'Learn More',
  },
};

/** Image + body + button — the fully-loaded card. */
export const WithImageAndButton: Story = {
  args: {
    title: 'Unity 3D Games',
    text: 'Immersive 3D experiences — from rapid prototyping to polished, shippable titles.',
    imageSrc: 'https://picsum.photos/seed/card2/600/360',
    imageAlt: 'Unity 3D scene',
    buttonLabel: 'View Project',
  },
};

/** Title + button only — no body copy. */
export const TitleAndButton: Story = {
  args: {
    title: 'Get in Touch',
    buttonLabel: 'Contact Me',
  },
};

// ── Button Colour Variants ────────────────────────────────────────────────────

/** Footer button in Deep Azure. */
export const ButtonDeepAzure: Story = {
  args: {
    title: 'API Integration',
    text: 'RESTful and GraphQL APIs designed for speed and developer experience.',
    buttonLabel: 'Explore',
    buttonColor: 'deep-azure',
  },
};

/** Footer button in Quicksilver — high contrast on dark cards. */
export const ButtonQuicksilver: Story = {
  args: {
    title: 'DevOps & CI/CD',
    text: 'Automated pipelines, containerised deployments, and zero-downtime releases.',
    buttonLabel: 'Details',
    buttonColor: 'quicksilver',
  },
};

// ── Charcoal Variant (for Obsidian backgrounds) ──────────────────────────────

/** Charcoal variant — text only. */
export const CharcoalTextOnly: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    title: 'Web Development',
    text: 'Full-stack solutions built with modern frameworks, optimised for performance and maintainability.',
    variant: 'charcoal',
  },
};

/** Charcoal variant — title only. */
export const CharcoalTitleOnly: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    title: 'Coming Soon',
    variant: 'charcoal',
  },
};

/** Charcoal variant — with image. */
export const CharcoalWithImage: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    title: 'Mobile App Design',
    text: 'Native & cross-platform apps from concept through to App Store launch.',
    imageSrc: 'https://picsum.photos/seed/charcoal1/600/360',
    imageAlt: 'Mobile app mockup',
    variant: 'charcoal',
  },
};

/** Charcoal variant — with button. */
export const CharcoalWithButton: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    title: 'Cloud Architecture',
    text: 'Scalable, resilient cloud infrastructure designed around your business needs.',
    buttonLabel: 'Learn More',
    variant: 'charcoal',
  },
};

/** Charcoal variant — image and button. */
export const CharcoalWithImageAndButton: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    title: 'Unity 3D Games',
    text: 'Immersive 3D experiences — from rapid prototyping to polished, shippable titles.',
    imageSrc: 'https://picsum.photos/seed/charcoal2/600/360',
    imageAlt: 'Unity 3D scene',
    buttonLabel: 'View Project',
    variant: 'charcoal',
  },
};

/** Charcoal variant — title and button. */
export const CharcoalTitleAndButton: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    title: 'Get in Touch',
    buttonLabel: 'Contact Me',
    variant: 'charcoal',
  },
};

/** Charcoal variant — Deep Azure button. */
export const CharcoalButtonDeepAzure: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    title: 'API Integration',
    text: 'RESTful and GraphQL APIs designed for speed and developer experience.',
    buttonLabel: 'Explore',
    buttonColor: 'deep-azure',
    variant: 'charcoal',
  },
};

/** Charcoal variant — Quicksilver button. */
export const CharcoalButtonQuicksilver: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    title: 'DevOps & CI/CD',
    text: 'Automated pipelines, containerised deployments, and zero-downtime releases.',
    buttonLabel: 'Details',
    buttonColor: 'quicksilver',
    variant: 'charcoal',
  },
};

// ── Plain Variant (minimal icon + text, for Obsidian backgrounds) ────────────

/** Plain variant — icon + title + description. */
export const PlainTextOnly: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    icon: 'fa-solid fa-code',
    title: 'Full-Stack Development',
    text: 'Building modern web applications with React, TypeScript, and Node.js — from architecture to deployment.',
    variant: 'plain',
  },
};

/** Plain variant — title only. */
export const PlainTitleOnly: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    icon: 'fa-solid fa-rocket',
    title: 'Something New',
    variant: 'plain',
  },
};

/** Plain variant — 2×2 grid showcasing skills. */
export const PlainGrid: Story = {
  name: 'Plain — Grid 2×2',
  render: () => (
    <div className="container" style={{ maxWidth: 900 }}>
      <div className="row g-0">
        <div className="col-md-6">
          <Card
            icon="fa-solid fa-code"
            title="Full-Stack Development"
            text="Building modern web applications with React, TypeScript, and Node.js — from architecture to deployment."
            variant="plain"
          />
        </div>
        <div className="col-md-6">
          <Card
            icon="fa-brands fa-drupal"
            title="Drupal Architecture"
            text="Enterprise CMS solutions with custom modules, headless architectures, and performance-tuned deployments."
            variant="plain"
          />
        </div>
        <div className="col-md-6">
          <Card
            icon="fa-solid fa-cloud"
            title="DevOps & Cloud"
            text="Automated CI/CD pipelines, containerised infrastructure, and zero-downtime releases on AWS and GCP."
            variant="plain"
          />
        </div>
        <div className="col-md-6">
          <Card
            icon="fa-solid fa-palette"
            title="Design Systems"
            text="Component-driven UI development with Storybook, Sass, and Bootstrap — consistent, reusable, and documented."
            variant="plain"
          />
        </div>
      </div>
    </div>
  ),
  args: {},
};

// ── Grid Showcase ─────────────────────────────────────────────────────────────

/** Three cards side-by-side to preview how the component looks as a set. */
export const CardGrid: Story = {
  name: 'Grid — Three Up',
  render: (args) => (
    <div className="container" style={{ background: '#1A1A1A', padding: '2rem', borderRadius: 10 }}>
      <div className="row g-4">
        <div className="col-md-4">
          <Card
            title="Web Development"
            text="Full-stack solutions built with modern frameworks."
            imageSrc="https://picsum.photos/seed/grid1/600/360"
            buttonLabel="View Work"
            onButtonClick={args.onButtonClick}
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Mobile Apps"
            text="Native & cross-platform apps from concept to launch."
            imageSrc="https://picsum.photos/seed/grid2/600/360"
            buttonLabel="Case Study"
            buttonColor="deep-azure"
            onButtonClick={args.onButtonClick}
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Cloud & DevOps"
            text="Scalable infrastructure and automated pipelines."
            imageSrc="https://picsum.photos/seed/grid3/600/360"
            buttonLabel="Learn More"
            buttonColor="quicksilver"
            onButtonClick={args.onButtonClick}
          />
        </div>
      </div>
    </div>
  ),
  args: {},
};
