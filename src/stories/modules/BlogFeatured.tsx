import React from 'react';
import { Divider } from '../components/Divider';
import { Label } from '../components/Label';
import type { CardLabel } from '../components/Card';

export interface FeaturedPost {
  /** Post title */
  title: string;
  /** Short excerpt / summary */
  excerpt: string;
  /** Publication date (displayed as-is, e.g. "February 2026") */
  date: string;
  /** Hero image source */
  imageSrc: string;
  /** Alt text for the hero image (defaults to title) */
  imageAlt?: string;
  /** Tech / category labels */
  labels?: CardLabel[];
  /** Button label (defaults to "Read Post") */
  buttonLabel?: string;
  /** Button link URL */
  buttonHref?: string;
}

export interface BlogFeaturedProps {
  /** Section heading — renders as h2 */
  heading?: React.ReactNode;
  /** The featured blog post to showcase */
  post: FeaturedPost;
}

/** Hero-style featured blog post with image/text side-by-side layout. */
export const BlogFeatured = ({ heading, post }: BlogFeaturedProps) => {
  return (
    <section className="blog-featured">
      <div className="container">
        {heading && (
          <h2 className="blog-featured__heading font-manrope fw-bold">
            {heading}
          </h2>
        )}
        <Divider className="divider--blue-100 mb-4" />

        <div className="blog-featured__post row align-items-center g-4">
          <div className="col-12 col-md-6">
            <img
              className="blog-featured__image"
              src={post.imageSrc}
              alt={post.imageAlt ?? post.title}
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="blog-featured__content">
              <span className="blog-featured__date">{post.date}</span>
              <h3 className="blog-featured__title">{post.title}</h3>
              {post.labels && post.labels.length > 0 && (
                <div className="blog-featured__labels">
                  {post.labels.map((label) => (
                    <Label key={label.text} text={label.text} color={label.color} />
                  ))}
                </div>
              )}
              <p className="blog-featured__excerpt">{post.excerpt}</p>
              {post.buttonLabel && post.buttonHref && (
                <a
                  className="btn btn-azure-bolt blog-featured__button"
                  href={post.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.buttonLabel}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
