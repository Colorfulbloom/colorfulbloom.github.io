import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContentElements } from './ContentElements';
import { CodeBlock as CodeBlockView } from '../components/CodeBlock';
import {
  ASIDE_BASH,
  ASIDE_INTRO,
  ASIDE_PHP,
  ASIDE_YAML,
  CODE_SAMPLES,
  LONG_LINE_PHP,
} from './codeSamples';
import { useEffect, useRef } from 'react';
import { TABLE_SAMPLE_HTML } from '../pages/articleContent';
import { labelTableCells } from '../components/tableRecords';

const meta = {
  title: 'Design Specs/Content Elements',
  component: ContentElements,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
} satisfies Meta<typeof ContentElements>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    variant: 'light',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'charcoal',
      values: [{ name: 'charcoal', value: '#2D2D2D' }],
    },
  },
};

const obsidianBackground = {
  backgrounds: {
    default: 'obsidian',
    values: [{ name: 'obsidian', value: '#1A1A1A' }],
  },
};

const articleColumn = {
  className: 'content-elements content-elements--dark article-body font-noto',
  style: { maxWidth: '48rem', margin: '0 auto' },
};

export const CodeBlock: Story = {
  parameters: { ...obsidianBackground, layout: 'fullscreen' },
  render: () => (
    // The site's $obsidian page background; inline because the backgrounds parameter does not paint the story canvas.
    <div style={{ backgroundColor: '#1A1A1A', padding: '2rem 1rem', minHeight: '100vh' }}>
      <div {...articleColumn}>
        {CODE_SAMPLES.map(({ language, caption, code }) => (
          <div key={language} className="mb-4">
            <p className="text-secondary mb-2">{caption}</p>
            <CodeBlockView language={language} code={code} />
          </div>
        ))}
        <div className="mb-4">
          <p className="text-secondary mb-2">PHP, one very long line (scroll sideways; the bar stays put)</p>
          <CodeBlockView language="php" code={LONG_LINE_PHP} />
        </div>
      </div>
    </div>
  ),
};

export const CodeBlockInAside: Story = {
  parameters: { ...obsidianBackground, layout: 'fullscreen' },
  render: () => (
    // The site's $obsidian page background; inline because the backgrounds parameter does not paint the story canvas.
    <div style={{ backgroundColor: '#1A1A1A', padding: '2rem 1rem', minHeight: '100vh' }}>
      <div {...articleColumn}>
        {/* .article-aside is theme only (not in Storybook), so its box styles are inline here. */}
        <section
          className="article-aside"
          style={{ backgroundColor: '#212528', padding: '1.5rem', borderRadius: '0.375rem' }}
        >
          <p>{ASIDE_INTRO}</p>
          <h3>One service, two extended forms</h3>
          <p>The filter does this:</p>
          <CodeBlockView language="php" code={ASIDE_PHP} />
          <p>And the exported config looks like this:</p>
          <CodeBlockView language="yaml" code={ASIDE_YAML} />
          <p>Install it with Composer:</p>
          <CodeBlockView language="bash" code={ASIDE_BASH} />
        </section>
      </div>
    </div>
  ),
};

// Tables: three design directions. Each renders the sample with its caption
// bar, then without a caption, then with a long caption (it wraps on a phone),
// plus the Model labels in prose.
const TABLE_NO_CAPTION_HTML = TABLE_SAMPLE_HTML.replace(/<figcaption>.*?<\/figcaption>/, '');
const TABLE_LONG_CAPTION_HTML = TABLE_SAMPLE_HTML.replace(/<figcaption>.*?<\/figcaption>/, '<figcaption>Dispatches on this project, October 12 to 17, 2026</figcaption>');

/** Body HTML with the Ledger's cell labelling applied after render. */
const TableHtml = ({ html, records }: { html: string; records: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (records && ref.current) labelTableCells(ref.current);
  }, [html, records]);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};

const tableStory = (style: 'panel' | 'ledger' | 'console', name: string): Story => ({
  name,
  parameters: { ...obsidianBackground, layout: 'fullscreen' },
  render: () => (
    // The site's $obsidian page background; inline because the backgrounds parameter does not paint the story canvas.
    <div style={{ backgroundColor: '#1A1A1A', padding: '2rem 1rem', minHeight: '100vh' }}>
      <div {...articleColumn} data-table-style={style}>
        <p className="text-secondary mb-2">With a caption (CKEditor 5 &ldquo;Toggle caption&rdquo;)</p>
        <TableHtml html={TABLE_SAMPLE_HTML} records={style === 'ledger'} />
        <p className="text-secondary mb-2 mt-5">Without a caption</p>
        <TableHtml html={TABLE_NO_CAPTION_HTML} records={style === 'ledger'} />
        <p className="text-secondary mb-2 mt-5">With a long caption (wraps on a phone)</p>
        <TableHtml html={TABLE_LONG_CAPTION_HTML} records={style === 'ledger'} />
        <p className="text-secondary mb-2 mt-5">Model labels in prose (Label component)</p>
        <p>
          <span className="label label--deep-azure">Fable</span>{' '}
          <span className="label label--ember">Opus</span>{' '}
          <span className="label label--aqua">Sonnet</span>{' '}
          <span className="label label--lavender">Haiku</span>{' '}
          <span className="label label--off">Off</span>
        </p>
      </div>
    </div>
  ),
});

export const TablePanel = tableStory('panel', 'Table / Panel');
export const TableLedger = tableStory('ledger', 'Table / Ledger');
export const TableConsole = tableStory('console', 'Table / Console');
