import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { ContactForm } from './ContactForm';

const meta = {
  title: 'jorgecalderon.codes/Modules/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  tags: ['autodocs'],
  args: { onSubmit: fn() },
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultIntroItems = [
  { icon: 'fa-solid fa-lightbulb', text: 'Need help with a project?' },
  { icon: 'fa-solid fa-rocket', text: 'Got ideas?' },
  { icon: 'fa-brands fa-drupal', text: 'Want to chat Drupal?' },
];

const defaultClosing =
  'Or just want to say hello? Drop me a message and let\u2019s get started.';

const defaultDetails = [
  { icon: 'fa-solid fa-envelope', text: 'hello@jorgecalderon.codes', href: 'mailto:hello@jorgecalderon.codes' },
  { icon: 'fa-brands fa-github', text: 'github.com/jorgecalderon', href: 'https://github.com/jorgecalderon' },
  { icon: 'fa-brands fa-linkedin', text: 'linkedin.com/in/jorgecalderon', href: 'https://linkedin.com/in/jorgecalderon' },
  { icon: 'fa-solid fa-location-dot', text: 'Florida, USA' },
];

export const Default: Story = {
  render: (args) => (
    <ContactForm
      {...args}
      heading={
        <>
          <span className="contact-form__heading-accent">Get in</span>{' '}
          <span className="contact-form__heading-light">Touch.</span>
        </>
      }
      introItems={defaultIntroItems}
      introClosing={defaultClosing}
      details={defaultDetails}
    />
  ),
};

export const NoSidebar: Story = {
  render: (args) => (
    <ContactForm
      {...args}
      heading={
        <>
          <span className="contact-form__heading-accent">Get in</span>{' '}
          <span className="contact-form__heading-light">Touch.</span>
        </>
      }
    />
  ),
};
