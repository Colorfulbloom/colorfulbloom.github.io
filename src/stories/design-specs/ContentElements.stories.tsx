import type { Meta, StoryObj } from '@storybook/react-vite';
import { ContentElements } from './ContentElements';
import { CodeBlock as CodeBlockView } from '../components/CodeBlock';
import { enhanceRepoCards } from '../components/codeHighlight';
import { enhanceExternalLinks } from '../components/externalLinks';
import { Footer } from '../layout/Footer';
import {
  ASIDE_BASH,
  ASIDE_INTRO,
  ASIDE_PHP,
  ASIDE_YAML,
  CODE_SAMPLES,
  LONG_LINE_PHP,
  REPO_CARD_END_HTML,
  REPO_CARD_TOP_HTML,
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

/**
 * Repo card markup as the post body holds it. The markup has no Copy button;
 * enhanceRepoCards adds it, as the theme JS does on the site.
 */
const RepoCardHtml = ({ html }: { html: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) enhanceRepoCards(ref.current);
  }, [html]);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};

export const RepoCard: Story = {
  parameters: { ...obsidianBackground, layout: 'fullscreen' },
  render: () => (
    // The site's $obsidian page background; inline because the backgrounds parameter does not paint the story canvas.
    <div style={{ backgroundColor: '#1A1A1A', padding: '2rem 1rem', minHeight: '100vh' }}>
      <div {...articleColumn}>
        <p>
          A routing setup is a handful of plain files. The rules file says who does what, and each
          agent file pins the model and the effort for its job.
        </p>
        <RepoCardHtml html={REPO_CARD_TOP_HTML} />
        <p>
          The rest of the post walks through the tiers, the rules and the hook that enforces them,
          one piece at a time.
        </p>
      </div>
    </div>
  ),
};

export const RepoCardAtEnd: Story = {
  parameters: { ...obsidianBackground, layout: 'fullscreen' },
  render: () => (
    // The site's $obsidian page background; inline because the backgrounds parameter does not paint the story canvas.
    <div style={{ backgroundColor: '#1A1A1A', padding: '2rem 1rem', minHeight: '100vh' }}>
      <div {...articleColumn}>
        <p>
          That is the setup. It is a handful of Markdown files, one script and a few settings keys,
          and it decides who does what before I type anything.
        </p>
        <RepoCardHtml html={REPO_CARD_END_HTML} />
      </div>
    </div>
  ),
};

// External links: the mark on links to other sites, in the places the site
// shows them (prose, Repo card, comment, button) and the footer social links
// (no mark, the aria-label says it).
const EXTLINK_PROSE_HTML = `<p>The <a href="https://code.claude.com/docs/en/sub-agents">sub-agents docs</a> say an agent's effort field overrides the session's effort level, and <a href="/blog">the blog</a> has the rest of the setup.</p>`;

const EXTLINK_COMMENT_HTML = `<ol class="comments__list"><li class="comments__item" id="comment-1"><article><header class="comments__head"><span class="comments__name">Maria</span><time class="comments__meta" datetime="2026-06-12">June 12, 2026</time></header><div class="content-elements content-elements--dark article-body comments__body font-noto"><p>Nice walkthrough. Does the <code>publish_on</code> field work with the <a href="https://www.drupal.org/project/scheduler">Scheduler module</a> out of the box, or only with the <a href="/portfolio">publishing options</a> you wrote?</p></div><a class="comments__reply" href="#comment-form" rel="nofollow">Reply</a></article></li></ol>`;

const EXTLINK_BUTTON_HTML = `<p class="article-hero__actions"><a href="https://github.com/Colorfulbloom/claude-code-model-routing" class="btn btn-azure-bolt">View Source</a></p>`;

const EXTLINK_SOCIALS = [
  { icon: 'fa-brands fa-github', href: 'https://github.com/Colorfulbloom', label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/in/jorgecalderon', label: 'LinkedIn' },
];

const sectionLabel = { fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#9A9A9A', margin: '0 0 0.75rem' };

export const ExternalLinks: Story = {
  parameters: { ...obsidianBackground, layout: 'fullscreen' },
  render: () => {
    const Demo = () => {
      const ref = useRef<HTMLDivElement>(null);
      useEffect(() => {
        const root = ref.current;
        if (!root) return;
        enhanceRepoCards(root);
        enhanceExternalLinks(root);
      }, []);
      return (
        // The site's $obsidian page background; inline because the backgrounds parameter does not paint the story canvas.
        <div ref={ref} style={{ backgroundColor: '#1A1A1A', padding: '2rem 1rem', minHeight: '100vh' }}>
          <div {...articleColumn} data-extlink="prose" dangerouslySetInnerHTML={{ __html: EXTLINK_PROSE_HTML }} />
          <div {...articleColumn} data-extlink="card" dangerouslySetInnerHTML={{ __html: REPO_CARD_TOP_HTML }} />
          <section className="comments" data-extlink="comment" style={{ margin: '2rem 0' }}>
            <div className="container">
              <div className="body-grid body-grid--single">
                <div className="body-grid__main" dangerouslySetInnerHTML={{ __html: EXTLINK_COMMENT_HTML }} />
              </div>
            </div>
          </section>
          <div {...articleColumn} data-extlink="button" dangerouslySetInnerHTML={{ __html: EXTLINK_BUTTON_HTML }} />
          <div data-extlink="footer" style={{ marginTop: '2rem' }}>
            <p style={sectionLabel}>Footer social links (no mark)</p>
            <Footer socials={EXTLINK_SOCIALS} email="hello@example.com" />
          </div>
        </div>
      );
    };
    return <Demo />;
  },
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
