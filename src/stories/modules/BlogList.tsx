import React from 'react';
import { Card } from '../components/Card';
import { Divider } from '../components/Divider';

export interface BlogListPost {
  /** Font Awesome icon class (e.g. 'fa-solid fa-code') */
  icon: string;
  /** Post title */
  title: string;
  /** Short excerpt / summary */
  description: string;
  /** Optional thumbnail image URL */
  imageSrc?: string;
  /** Alt text for the thumbnail (defaults to title) */
  imageAlt?: string;
  /** Link URL — makes the entire post block clickable */
  href?: string;
}

export interface BlogListProps {
  /** Section heading — renders as h2 */
  heading?: React.ReactNode;
  /** Array of blog posts to render */
  posts: BlogListPost[];
}

/** A 2-column grid of plain cards with optional thumbnails. */
export const BlogList = ({ heading, posts }: BlogListProps) => {
  return (
    <section className="blog-list">
      <div className="container">
        {heading && (
          <h2 className="blog-list__heading font-manrope fw-bold">{heading}</h2>
        )}
        <Divider className="w-25 divider--blue-100 mb-4" />
        <div className="row g-0">
          {posts.map((post) => {
            const content = (
              <div className="blog-list__item">
                {post.imageSrc && (
                  <img
                    className="blog-list__thumbnail"
                    src={post.imageSrc}
                    alt={post.imageAlt ?? post.title}
                  />
                )}
                <Card
                  icon={post.icon}
                  title={post.title}
                  text={post.description}
                  variant="plain"
                />
              </div>
            );

            return (
              <div key={post.title} className="col-12 col-md-6">
                {post.href ? (
                  <a
                    className="blog-list__link"
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
