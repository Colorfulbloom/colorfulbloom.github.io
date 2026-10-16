import type { Meta, StoryObj } from '@storybook/react-vite';

import { OnThisPage } from './OnThisPage';
import { POST_DEMO_BODY } from '../pages/articleContent';
import { prepareBody, type TocItem } from '../pages/articleUtils';

const meta = {
  title: 'jorgecalderon.codes/Modules/OnThisPage',
  component: OnThisPage,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'obsidian',
      values: [{ name: 'obsidian', value: '#1A1A1A' }],
    },
    docs: {
      description: {
        component:
          'The "On this page" rail of a blog post. It lists every h2 of the body, with the h3s that follow each h2 nested under it, and shows up only when the body has two or more h2s. Pass `activeId` to render a fixed state (an h2 active, or an h3 active with its h2 as the active parent). Without `activeId` the rail follows the page: the active heading is the last one above a line 25% down the viewport. From 992px the rail sticks below the header while the body scrolls. Mirrors `components/post-body` and `js/toc.js` in the Drupal theme.',
      },
    },
  },
  tags: ['autodocs'],
  // The rail sits in the right column of the body grid, as on the post page.
  render: (args) => (
    <section className="article-section">
      <div className="container">
        <div className="body-grid">
          <div className="body-grid__main" />
          <OnThisPage {...args} />
        </div>
      </div>
    </section>
  ),
} satisfies Meta<typeof OnThisPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const h2Only: TocItem[] = [
  { id: 'define', text: 'Define the component interface with TypeScript' },
  { id: 'style', text: 'Style with BEM-named Sass partials' },
  { id: 'stories', text: 'Write Storybook stories to document all variants' },
];

const withSubheadings: TocItem[] = [
  {
    id: 'define',
    text: 'Define the component interface with TypeScript',
    children: [
      { id: 'props', text: 'Props for each component' },
      { id: 'types', text: 'Types shared across stories' },
    ],
  },
  { id: 'style', text: 'Style with BEM-named Sass partials' },
  {
    id: 'stories',
    text: 'Write Storybook stories to document all variants',
    children: [{ id: 'docs', text: 'Document each story' }],
  },
];

export const Default: Story = {
  args: { items: h2Only },
};

export const WithSubheadings: Story = {
  name: 'With subheadings',
  args: { items: withSubheadings },
};

export const ActiveSection: Story = {
  name: 'Active section',
  args: { items: withSubheadings, activeId: 'style' },
};

export const ActiveSubheading: Story = {
  name: 'Active subheading',
  args: { items: withSubheadings, activeId: 'types' },
};

export const LongTitles: Story = {
  name: 'Long titles',
  args: {
    items: [
      {
        id: 'a',
        text: 'Moving every design token out of the stylesheet and into one shared source of truth',
        children: [
          { id: 'a-1', text: 'Why a single palette file matters when three themes read the same colours' },
          { id: 'a-2', text: 'Checking contrast for every pairing' },
        ],
      },
      { id: 'b', text: 'Keeping component props small, typed and easy to read in Canvas' },
    ],
    activeId: 'a-1',
  },
};

const FILLER =
  '<p>Placeholder text so the body is tall enough to scroll. Scroll the page: the rail stays pinned below the header and the highlight follows the heading you are reading.</p>'.repeat(
    6,
  );

/** The rail beside a tall body: scroll the page to see it pin and the highlight move (992px and up). */
export const Sticky: Story = {
  args: { items: withSubheadings },
  render: () => {
    const { html, toc } = prepareBody(POST_DEMO_BODY);
    const tall = html.replace(/<\/h[23]>/g, (m) => m + FILLER);
    return (
      <section className="article-section">
        <div className="container">
          <div className="body-grid">
            <OnThisPage items={toc} />
            <div className="body-grid__main article-section__main">
              <div
                className="content-elements content-elements--dark article-body font-noto"
                dangerouslySetInnerHTML={{ __html: tall }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  },
};
