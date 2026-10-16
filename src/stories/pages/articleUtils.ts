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
  /** h3s that follow this h2 (h2 items only) */
  children?: TocItem[];
}

const slugify = (text: string): string =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const headingText = (inner: string): string => decodeEntities(stripTags(inner)).replace(/\s+/g, ' ').trim();

/**
 * Collects the body's h2 headings for the "On this page" rail, with the h3s
 * that follow each h2 nested under it (post-body.twig in the Drupal theme).
 * An h2 without an id gets one made from its text, so every rail link resolves.
 * An h3 without an id gets the same slug, made unique against every h2 id and
 * every other h3 id with -2, -3 and so on; an existing id is kept and an h3
 * with an empty slug gets no id. h3s before the first h2 are left out.
 */
export const prepareBody = (html: string): { html: string; toc: TocItem[] } => {
  const used = new Set<string>();
  const withH2 = html.replace(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs: string, inner: string) => {
    const idMatch = attrs.match(/\bid="([^"]+)"/);
    const id = idMatch ? idMatch[1] : slugify(headingText(inner));
    used.add(id);
    return idMatch ? match : `<h2${attrs} id="${id}">${inner}</h2>`;
  });
  // Existing h3 ids are reserved before any new one is made.
  for (const m of withH2.matchAll(/<h3\b([^>]*)>/gi)) {
    const idMatch = m[1].match(/\bid="([^"]+)"/);
    if (idMatch) used.add(idMatch[1]);
  }
  const out = withH2.replace(/<h3\b([^>]*)>([\s\S]*?)<\/h3>/gi, (match, attrs: string, inner: string) => {
    if (/\bid="[^"]+"/.test(attrs)) return match;
    const base = slugify(headingText(inner));
    if (!base) return match;
    let id = base;
    for (let n = 2; used.has(id); n += 1) id = `${base}-${n}`;
    used.add(id);
    return `<h3 id="${id}"${attrs}>${inner}</h3>`;
  });

  const toc: TocItem[] = [];
  for (const m of out.matchAll(/<h([23])\b([^>]*)>([\s\S]*?)<\/h\1>/gi)) {
    const idMatch = m[2].match(/\bid="([^"]+)"/);
    const text = headingText(m[3]);
    if (m[1] === '2') {
      toc.push({ id: idMatch ? idMatch[1] : '', text, children: [] });
    } else if (toc.length && idMatch && text) {
      toc[toc.length - 1].children!.push({ id: idMatch[1], text });
    }
  }
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
