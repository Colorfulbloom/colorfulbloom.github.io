/**
 * Marks links to other sites. A port of the Drupal theme's js/external-links.js
 * (owner pick C2, 2026-10-18); keep the two in step. Styles:
 * src/stories/assets/css/_extlink.scss.
 *
 * A link is external when its URL is absolute http or https and its host,
 * without "www.", is neither this site's host nor one of its subdomains, nor
 * the production host. Each external link opens in a new tab, gets
 * rel="noopener noreferrer" and a visually hidden ", opens in a new tab" (added
 * to aria-label when the link has one). Text links also get span.extlink__mark
 * after the last word. A WeakSet stands in for the theme's once().
 */

const SITE_HOSTS = ['jorgecalderon.codes'];
const SKIP = '#toolbar-administration, .toolbar, .contextual';
const NO_MARK = '.footer__social-link, .contact-form__contact-detail a';
const NOTE = 'opens in a new tab';

const done = new WeakSet<Element>();

const bareHost = (host: string): string => host.toLowerCase().replace(/^www\./, '');

const isInternalHost = (host: string): boolean =>
  SITE_HOSTS.concat([bareHost(window.location.hostname)]).some(
    (site) => host === site || host.slice(-(site.length + 1)) === '.' + site,
  );

const isExternal = (link: Element): boolean => {
  const href = link.getAttribute('href');
  if (!href || !/^(https?:)?\/\//i.test(href.trim())) return false;
  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return false;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
  return !isInternalHost(bareHost(url.hostname));
};

const visibleText = (link: Element): string => {
  const copy = link.cloneNode(true) as Element;
  copy.querySelectorAll('.visually-hidden').forEach((hidden) => hidden.remove());
  return (copy.textContent ?? '').trim();
};

const isFlex = (element: Element): boolean => {
  const display = window.getComputedStyle(element).display;
  return display === 'flex' || display === 'inline-flex';
};

const addMark = (link: Element): void => {
  const mark = document.createElement('span');
  mark.className = 'extlink__mark';
  mark.setAttribute('aria-hidden', 'true');

  let last: ChildNode | null = link.lastChild;
  while (last && last.nodeType === Node.TEXT_NODE && !(last.textContent ?? '').trim()) {
    last = last.previousSibling;
  }

  if (!isFlex(link) && last && last.nodeType === Node.TEXT_NODE) {
    // Split the text node in place and move the last word into the no-break
    // span; a text node is never emptied or removed (BigPipe's mutation
    // observer reads the parent of every changed text node), and trailing
    // space stays after the span.
    const text = last as Text;
    const match = /(\S+)\s*$/.exec(text.data);
    if (!match) return;
    const word = match.index > 0 ? text.splitText(match.index) : text;
    if (word.data.length > match[1].length) word.splitText(match[1].length);
    const nobreak = document.createElement('span');
    nobreak.className = 'extlink__nobreak';
    word.parentNode?.insertBefore(nobreak, word);
    nobreak.appendChild(word);
    nobreak.appendChild(mark);
  } else if (last) {
    last.parentNode?.insertBefore(mark, last.nextSibling);
  } else {
    link.appendChild(mark);
  }
};

/** Enhance every external link under `root`, once per link. */
export const enhanceExternalLinks = (root: ParentNode): void => {
  root.querySelectorAll('a[href]').forEach((link) => {
    if (done.has(link)) return;
    done.add(link);
    if (link.closest(SKIP) || !isExternal(link)) return;

    link.classList.add('extlink');
    link.setAttribute('target', '_blank');
    const rel = (link.getAttribute('rel') ?? '').split(/\s+/).filter(Boolean);
    ['noopener', 'noreferrer'].forEach((value) => {
      if (!rel.includes(value)) rel.push(value);
    });
    link.setAttribute('rel', rel.join(' '));

    const iconOnly = !visibleText(link) || link.querySelector('img, svg');
    if (!iconOnly && !link.matches(NO_MARK)) addMark(link);

    const label = link.getAttribute('aria-label');
    if (label) {
      link.setAttribute('aria-label', label + ', ' + NOTE);
    } else {
      const hidden = document.createElement('span');
      hidden.className = 'visually-hidden extlink__label';
      hidden.textContent = ', ' + NOTE;
      link.appendChild(hidden);
    }
  });
};
