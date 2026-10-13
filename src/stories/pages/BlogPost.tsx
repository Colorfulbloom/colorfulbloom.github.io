import { Divider } from '../components/Divider';
import { Label } from '../components/Label';
import { Logo } from '../design-specs/Logo';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { BlogList } from '../modules/BlogList';
import { ContactForm } from '../modules/ContactForm';
import { POST_DEMO_BODY } from './articleContent';
import { prepareBody, readingTime, splitTitle } from './articleUtils';

import imgStyling from '../assets/styling.png';
import imgTheming from '../assets/theming.png';

export interface PagerPost {
  /** Post title */
  title: string;
  /** Post URL */
  href: string;
}

export interface BlogPostProps {
  /** Active menu item */
  activeMenuItem?: string;
  /** Body HTML (stands in for the Drupal body field) */
  body?: string;
  /** Previous (older) post; omit to drop that cell */
  olderPost?: PagerPost;
  /** Next (newer) post; omit to drop that cell */
  newerPost?: PagerPost;
}

export const BlogPost = ({
  activeMenuItem = 'Blog',
  body = POST_DEMO_BODY,
  olderPost = { title: 'Building Custom Publishing Options for Drupal', href: '#' },
  newerPost,
}: BlogPostProps) => {
  const { html, toc } = prepareBody(body);
  const showRail = toc.length >= 2;
  const minutes = readingTime(html);
  const gridClass = showRail ? 'body-grid' : 'body-grid body-grid--single';
  const [accent, light] = splitTitle('Designing with AI in Storybook.');

  return (
    <div className="page-blog">
      <Header menuItems={['Home', 'Blog', 'Portfolio', 'Contact']} activeItem={activeMenuItem} />

      <main>
        <article>
          <section className="jumbotron article-hero bg-dark text-light">
            <div className="container">
              <div className={gridClass}>
                <div className="body-grid__main article-hero__content">
                  <a className="back-link" href="/blog">
                    <i className="fa-solid fa-arrow-left back-link__icon" aria-hidden="true"></i>
                    <span>All posts</span>
                  </a>
                  <span className="article-hero__meta">
                    <time dateTime="2026-06-18">June 2026</time>
                    <span aria-hidden="true">{' · '}</span>
                    {minutes} min read
                  </span>
                  <h1 className="display-4 font-manrope fw-bold mb-3 jumbotron__heading">
                    <span className="jumbotron__heading-line--deep-azure">{accent}</span>
                    {light && (
                      <>
                        <br />
                        <span className="jumbotron__heading-line--frost">{light}</span>
                      </>
                    )}
                  </h1>
                  <Divider className="w-25 divider--blue-100 mb-4" />
                  <div className="article-hero__labels">
                    <Label text="AI" />
                    <Label text="React" />
                    <Label text="Sass" />
                  </div>
                  <p className="lead font-noto text-secondary mb-0">
                    How I used AI to accelerate component design — from color tokens to layout iterations, all inside Storybook.
                  </p>
                </div>
                {showRail && <div className="body-grid__rail body-grid__spacer" aria-hidden="true"></div>}
              </div>
            </div>
          </section>

          <section className="article-section">
            <div className="container">
              <div className={gridClass}>
                {showRail && (
                  <aside className="body-grid__rail" aria-labelledby="on-this-page">
                    <div className="article-toc">
                      <h2 id="on-this-page" className="article-toc__heading">On this page</h2>
                      <ul className="article-toc__list">
                        {toc.map((item) => (
                          <li key={item.id}>
                            <a className="article-toc__link" href={`#${item.id}`}>{item.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </aside>
                )}
                <div className="body-grid__main article-section__main">
                  <img className="article-image" src={imgStyling} alt="AI-assisted design in Storybook" />
                  <div
                    className="content-elements content-elements--dark article-body font-noto"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                  {(olderPost || newerPost) && (
                    <nav className="post-pager" aria-label="Older and newer posts">
                      <div className="post-pager__items">
                        {olderPost && (
                          <a className="post-pager__link post-pager__link--older" href={olderPost.href}>
                            <span className="post-pager__label">
                              <i className="fa-solid fa-arrow-left post-pager__icon" aria-hidden="true"></i>
                              Older post
                            </span>
                            <span className="post-pager__title">{olderPost.title}</span>
                          </a>
                        )}
                        {newerPost && (
                          <a className="post-pager__link post-pager__link--newer" href={newerPost.href}>
                            <span className="post-pager__label">
                              Newer post
                              <i className="fa-solid fa-arrow-right post-pager__icon" aria-hidden="true"></i>
                            </span>
                            <span className="post-pager__title">{newerPost.title}</span>
                          </a>
                        )}
                      </div>
                    </nav>
                  )}
                  <div className="card card--charcoal author-box">
                    <div className="card__body">
                      <div className="card__title-row">
                        <span className="card__icon" aria-hidden="true">
                          <Logo width={80} height={28} />
                        </span>
                        <h2 className="card__title font-manrope">Jorge Calderon</h2>
                      </div>
                      <p className="card__text font-noto">
                        I build websites with Drupal and tinker with just about everything else.
                      </p>
                    </div>
                    <div className="card__footer">
                      <a className="btn btn-azure-bolt" href="/contact">Say hello</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        <BlogList
          headingId="more-posts"
          openLinksInNewTab={false}
          heading={
            <>
              <span className="blog-list__heading-accent">More</span>{' '}
              <span className="blog-list__heading-light">Posts.</span>
            </>
          }
          posts={[
            {
              icon: 'fa-solid fa-gear',
              title: 'Building Custom Publishing Options for Drupal',
              description:
                'A deep dive into building a contributed Drupal module that extends the publishing workflow with Views integration.',
              imageSrc: imgTheming,
              imageAlt: 'Drupal publishing options',
              href: '#',
            },
          ]}
        />

        <ContactForm
          heading={<><span className="contact-form__heading-accent">Get in</span>{' '}<span className="contact-form__heading-light">Touch.</span></>}
          introItems={[
            { icon: 'fa-solid fa-lightbulb', text: 'Need help with a project?' },
            { icon: 'fa-solid fa-rocket', text: 'Got ideas?' },
            { icon: 'fa-brands fa-drupal', text: 'Want to chat Drupal?' },
          ]}
          introClosing="Or just want to say hello? Drop me a message and let's get started."
          details={[
            { icon: 'fa-solid fa-envelope', text: 'hello@jorgecalderon.codes', href: 'mailto:hello@jorgecalderon.codes' },
            { icon: 'fa-brands fa-github', text: 'github.com/jorgecalderon', href: 'https://github.com/jorgecalderon' },
            { icon: 'fa-brands fa-linkedin', text: 'linkedin.com/in/jorgecalderon', href: 'https://linkedin.com/in/jorgecalderon' },
            { icon: 'fa-solid fa-location-dot', text: 'Florida, USA' },
          ]}
        />
      </main>

      <Footer
        socials={[
          { icon: 'fa-brands fa-github', href: 'https://github.com/jorgecalderon', label: 'GitHub' },
          { icon: 'fa-brands fa-linkedin', href: 'https://linkedin.com/in/jorgecalderon', label: 'LinkedIn' },
          { icon: 'fa-brands fa-drupal', href: 'https://www.drupal.org/u/geocalleo', label: 'Drupal.org' },
        ]}
        email="hello@jorgecalderon.codes"
        builtWith="React, Storybook & Drupal"
      />
    </div>
  );
};
