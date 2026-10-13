/**
 * Helpers for the article detail pages (blog post and project).
 * Each one mirrors a rule the Drupal theme applies in Twig or preprocess.
 */

/** Split a title into its accent and light halves: the first ceil(n/2) words, then the rest. */
export const splitTitle = (title: string): [string, string] => {
  const words = title.trim().split(/\s+/);
  const cut = Math.ceil(words.length / 2);
  return [words.slice(0, cut).join(' '), words.slice(cut).join(' ')];
};

const stripTags = (html: string): string => html.replace(/<[^>]*>/g, ' ');

const decodeEntities = (text: string): string =>
  text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

/** Reading time in whole minutes: words / 200, rounded up, minimum 1. */
export const readingTime = (html: string, wordsPerMinute = 200): number => {
  const words = stripTags(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

export interface TocItem {
  /** Heading id, used as the link fragment */
  id: string;
  /** Heading text */
  text: string;
}

const slugify = (text: string): string =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/**
 * Collects the body's h2 headings for the "On this page" rail.
 * An h2 without an id gets one made from its text, so every rail link resolves.
 */
export const prepareBody = (html: string): { html: string; toc: TocItem[] } => {
  const toc: TocItem[] = [];
  const out = html.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs: string, inner: string) => {
    const text = decodeEntities(stripTags(inner)).replace(/\s+/g, ' ').trim();
    const idMatch = attrs.match(/\bid="([^"]+)"/);
    const id = idMatch ? idMatch[1] : slugify(text);
    toc.push({ id, text });
    return idMatch ? match : `<h2${attrs} id="${id}">${inner}</h2>`;
  });
  return { html: out, toc };
};

/** Button label for an external project link: drupal.org "View Module", github.com "View Source", else "Visit Site". */
export const externalLinkLabel = (href: string): string => {
  let host: string;
  try {
    host = new URL(href).hostname.replace(/^www\./, '');
  } catch {
    return 'Visit Site';
  }
  if (host === 'drupal.org' || host.endsWith('.drupal.org')) return 'View Module';
  if (host === 'github.com' || host.endsWith('.github.com')) return 'View Source';
  return 'Visit Site';
};
