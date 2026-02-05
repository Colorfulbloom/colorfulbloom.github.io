import { Card } from './Card';
import type { CardLabel } from './Card';
import { Divider } from './Divider';

export interface BlogPost {
  /** Unique identifier */
  id: string;
  /** Post title */
  title: string;
  /** Short excerpt / summary */
  excerpt: string;
  /** Publication date (displayed as-is) */
  date: string;
  /** URL for the "Read More" link */
  href?: string;
  /** Optional card image URL */
  imageSrc?: string;
  /** Alt text for the card image */
  imageAlt?: string;
  /** Tech / category labels shown on the card */
  labels?: CardLabel[];
}

export interface BlogPostGridProps {
  /** Section heading */
  heading?: string;
  /** Array of blog posts to render (max 5 recommended) */
  posts: BlogPost[];
}

/** Renders a responsive grid of blog post cards below a section heading. */
export const BlogPostGrid = ({ heading = 'Blog', posts }: BlogPostGridProps) => (
  <section className="blog-posts py-5">
    <div className="container">
      <h2 className="blog-posts__heading display-5 font-manrope mb-3">
        {heading}
      </h2>
      <Divider className="mb-5" />

      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-12 col-md-6 col-lg-4">
            <Card
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt ?? post.title}
              labels={post.labels}
              title={post.title}
              text={`${post.date}  •  ${post.excerpt}`}
              buttonLabel="Read More"
              buttonColor="azure-bolt"
              buttonHref={post.href}
              className="h-100 blog-posts__card"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
