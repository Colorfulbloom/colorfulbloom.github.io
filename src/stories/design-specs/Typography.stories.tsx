import type { Meta, StoryObj } from '@storybook/react-vite';

import { NotoSans, JetBrainsMono } from './Typography';

const notoSansMeta = {
  title: 'Design Specs/Typography/Noto Sans',
  component: NotoSans,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotoSans>;

export default notoSansMeta;
type NotoSansStory = StoryObj<typeof notoSansMeta>;

export const Default: NotoSansStory = {
  args: {
    fontWeight: 400,
  },
};
