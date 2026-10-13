import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Alert } from './Alert';

const meta = {
  title: 'jorgecalderon.codes/Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'obsidian',
      values: [
        { name: 'obsidian', value: '#1A1A1A' },
        { name: 'charcoal', value: '#2D2D2D' },
        { name: 'dark', value: '#0a0a0a' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'info', 'danger'],
    },
    variantOnly: {
      control: 'boolean',
      description: 'Compact mode - icon only, no title row',
    },
  },
  args: { onClose: fn(), variantOnly: false },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// ── Success ──────────────────────────────────────────────────────────────────────

/** Success alert - positive outcome confirmation */
export const Success: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'success',
    title: 'Success!',
    message: 'Your changes have been saved successfully. The system has been updated with your new settings.',
    variantOnly: false,
  },
};

/** Success alert - compact mode, icon only */
export const SuccessCompact: Story = {
  name: 'Success — Compact',
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'success',
    message: 'Your changes have been saved successfully.',
    variantOnly: true,
  },
};

/** Success alert without close button */
export const SuccessNoClose: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'success',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    dismissible: false,
  },
};

// ── Warning ──────────────────────────────────────────────────────────────────────

/** Warning alert - caution required */
export const Warning: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'warning',
    title: 'Warning!',
    message: 'Your session will expire in 5 minutes. Please save your work to avoid losing any unsaved changes.',
    variantOnly: false,
  },
};

/** Warning alert - compact mode, icon only */
export const WarningCompact: Story = {
  name: 'Warning — Compact',
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'warning',
    message: 'Your session will expire in 5 minutes.',
    variantOnly: true,
  },
};

/** Warning alert without close button */
export const WarningNoClose: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'warning',
    title: 'Warning!',
    message: 'Your session will expire in 5 minutes.',
    dismissible: false,
  },
};

// ── Info ─────────────────────────────────────────────────────────────────────────

/** Info alert - informational message */
export const Info: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'info',
    title: 'Did you know?',
    message: 'You can customize your dashboard by dragging and dropping widgets. Click the gear icon to access layout options.',
    variantOnly: false,
  },
};

/** Info alert - compact mode, icon only */
export const InfoCompact: Story = {
  name: 'Info — Compact',
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'info',
    message: 'You can customize your dashboard by dragging and dropping widgets.',
    variantOnly: true,
  },
};

/** Info alert without close button */
export const InfoNoClose: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'info',
    title: 'Did you know?',
    message: 'You can customize your dashboard by dragging and dropping widgets.',
    dismissible: false,
  },
};

// ── Danger ─────────────────────────────────────────────────────────────────────

/** Danger alert - error or critical issue */
export const Danger: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'danger',
    title: 'Error!',
    message: 'Unable to connect to the server. Please check your internet connection and try again. If the problem persists, contact support.',
    variantOnly: false,
  },
};

/** Danger alert - compact mode, icon only */
export const DangerCompact: Story = {
  name: 'Danger — Compact',
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'danger',
    message: 'Unable to connect to the server. Please try again later.',
    variantOnly: true,
  },
};

/** Danger alert without close button */
export const DangerNoClose: Story = {
  parameters: {
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
  },
  args: {
    variant: 'danger',
    title: 'Error!',
    message: 'Unable to connect to the server. Please try again later.',
    dismissible: false,
  },
};

// ── All Variants Showcase ──────────────────────────────────────────────────────────

/** All four alert variants displayed together */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 600 }}>
      <Alert
        variant="success"
        title="Success!"
        message="Your changes have been saved successfully."
        onClose={args.onClose}
      />
      <Alert
        variant="warning"
        title="Warning!"
        message="Your session will expire in 5 minutes."
        onClose={args.onClose}
      />
      <Alert
        variant="info"
        title="Did you know?"
        message="You can customize your dashboard by dragging and dropping widgets."
        onClose={args.onClose}
      />
      <Alert
        variant="danger"
        title="Error!"
        message="Unable to connect to the server. Please try again later."
        onClose={args.onClose}
      />
    </div>
  ),
  args: {
    title: 'All Variants',
  },
};

/** All four alert variants without close buttons */
export const AllVariantsNoClose: Story = {
  name: 'All Variants — No Close',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 600 }}>
      <Alert
        variant="success"
        title="Success!"
        message="Your changes have been saved successfully."
        dismissible={false}
      />
      <Alert
        variant="warning"
        title="Warning!"
        message="Your session will expire in 5 minutes."
        dismissible={false}
      />
      <Alert
        variant="info"
        title="Did you know?"
        message="You can customize your dashboard by dragging and dropping widgets."
        dismissible={false}
      />
      <Alert
        variant="danger"
        title="Error!"
        message="Unable to connect to the server. Please try again later."
        dismissible={false}
      />
    </div>
  ),
  args: {
    title: 'All Variants No Close',
  },
};
