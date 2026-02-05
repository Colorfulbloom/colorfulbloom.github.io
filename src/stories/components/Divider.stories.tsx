import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta = {
  title: 'jorgecalderon.codes/Components/Divider',
  component: Divider,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1A1A1A' },
      ],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Reversed: Story = {
  args: { className: 'divider--reverse' },
};

export const Blue0: Story = { name: 'Blue 0', args: { className: 'divider--blue-0' } };
export const Blue5: Story = { name: 'Blue 5', args: { className: 'divider--blue-5' } };
export const Blue10: Story = { name: 'Blue 10', args: { className: 'divider--blue-10' } };
export const Blue15: Story = { name: 'Blue 15', args: { className: 'divider--blue-15' } };
export const Blue20: Story = { name: 'Blue 20', args: { className: 'divider--blue-20' } };
export const Blue25: Story = { name: 'Blue 25', args: { className: 'divider--blue-25' } };
export const Blue30: Story = { name: 'Blue 30', args: { className: 'divider--blue-30' } };
export const Blue35: Story = { name: 'Blue 35', args: { className: 'divider--blue-35' } };
export const Blue40: Story = { name: 'Blue 40', args: { className: 'divider--blue-40' } };
export const Blue45: Story = { name: 'Blue 45', args: { className: 'divider--blue-45' } };
export const Blue50: Story = { name: 'Blue 50', args: { className: 'divider--blue-50' } };
export const Blue55: Story = { name: 'Blue 55', args: { className: 'divider--blue-55' } };
export const Blue60: Story = { name: 'Blue 60', args: { className: 'divider--blue-60' } };
export const Blue65: Story = { name: 'Blue 65', args: { className: 'divider--blue-65' } };
export const Blue70: Story = { name: 'Blue 70', args: { className: 'divider--blue-70' } };
export const Blue75: Story = { name: 'Blue 75', args: { className: 'divider--blue-75' } };
export const Blue80: Story = { name: 'Blue 80', args: { className: 'divider--blue-80' } };
export const Blue85: Story = { name: 'Blue 85', args: { className: 'divider--blue-85' } };
export const Blue90: Story = { name: 'Blue 90', args: { className: 'divider--blue-90' } };
export const Blue95: Story = { name: 'Blue 95', args: { className: 'divider--blue-95' } };
export const Blue100: Story = { name: 'Blue 100', args: { className: 'divider--blue-100' } };

export const ReversedBlue25: Story = { name: 'Reversed Blue 25', args: { className: 'divider--reverse divider--blue-25' } };
export const ReversedBlue75: Story = { name: 'Reversed Blue 75', args: { className: 'divider--reverse divider--blue-75' } };
export const ReversedBlue100: Story = { name: 'Reversed Blue 100', args: { className: 'divider--reverse divider--blue-100' } };
