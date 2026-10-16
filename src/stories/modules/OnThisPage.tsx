import { useEffect, useState } from 'react';
import type { TocItem } from '../pages/articleUtils';

export interface OnThisPageProps {
  /** h2 entries; each may nest the h3s that follow it */
  items: TocItem[];
  /**
   * Id of the heading shown as active. Set it to render a fixed state;
   * leave it out and the rail follows the page as it scrolls.
   */
  activeId?: string;
}

/** The scroll spy line: a heading is "being read" once its top passes 25% of the viewport. */
const LINE = 0.25;

const flatten = (items: TocItem[]): string[] =>
  items.flatMap((item) => [item.id, ...(item.children ?? []).map((child) => child.id)]);

/**
 * Scroll spy (port of js/toc.js in the Drupal theme). The active heading is the
 * last one whose top has passed the 25% line; at the top of the page it is the
 * first, at the bottom the last. Returns the active id.
 */
const useScrollSpy = (ids: string[], enabled: boolean): string | undefined => {
  const [current, setCurrent] = useState<string | undefined>(undefined);
  const key = ids.join('|');

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') return undefined;
    const headings = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
    if (!headings.length) return undefined;

    let atBottom = false;
    const update = () => {
      let active = headings[0];
      if (atBottom) {
        active = headings[headings.length - 1];
      } else {
        const line = window.innerHeight * LINE;
        headings.forEach((heading) => {
          if (heading.getBoundingClientRect().top <= line) active = heading;
        });
      }
      setCurrent(active.id);
    };

    // Fires when a heading crosses the 25% line, either way.
    const headingObserver = new IntersectionObserver(update, {
      rootMargin: `0px 0px -${100 - LINE * 100}% 0px`,
    });
    headings.forEach((heading) => headingObserver.observe(heading));

    // A 1px sentinel at the end of the body tells when the bottom is reached.
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.cssText = 'height:1px;margin-top:-1px;pointer-events:none;';
    document.body.appendChild(sentinel);
    const sentinelObserver = new IntersectionObserver((entries) => {
      atBottom = entries[entries.length - 1].isIntersecting;
      update();
    });
    sentinelObserver.observe(sentinel);

    window.addEventListener('resize', update, { passive: true });
    update();

    return () => {
      headingObserver.disconnect();
      sentinelObserver.disconnect();
      sentinel.remove();
      window.removeEventListener('resize', update);
    };
    // `key` stands for `ids`, which is a new array on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, enabled]);

  return current;
};

/**
 * The "On this page" rail of a blog post: a link to every h2 of the body, with
 * the h3s under it nested. Place it in the `body-grid__rail` column; from 992px
 * it sticks below the header while the body scrolls.
 */
export const OnThisPage = ({ items, activeId }: OnThisPageProps) => {
  const spyId = useScrollSpy(flatten(items), activeId === undefined);
  const active = activeId ?? spyId;

  return (
    <aside className="body-grid__rail" aria-labelledby="on-this-page">
      <div className="article-toc">
        <h2 id="on-this-page" className="article-toc__heading">On this page</h2>
        <ul className="article-toc__list">
          {items.map((item) => {
            const children = item.children ?? [];
            const parentActive = children.some((child) => child.id === active);
            const linkClass = ['article-toc__link', item.id === active && 'is-active', parentActive && 'is-active-parent']
              .filter(Boolean)
              .join(' ');
            return (
              <li key={item.id}>
                <a
                  className={linkClass}
                  href={`#${item.id}`}
                  aria-current={item.id === active ? 'location' : undefined}
                >
                  {item.text}
                </a>
                {children.length > 0 && (
                  <ul className="article-toc__sublist">
                    {children.map((child) => (
                      <li key={child.id} className="article-toc__subitem">
                        <a
                          className={child.id === active ? 'article-toc__sublink is-active' : 'article-toc__sublink'}
                          href={`#${child.id}`}
                          aria-current={child.id === active ? 'location' : undefined}
                        >
                          {child.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
