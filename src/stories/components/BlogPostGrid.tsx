import { Card } from './Card';

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
}

export interface BlogPostGridProps {
  /** Section heading */
  heading?: string;
  /** Array of blog posts to render (max 5 recommended) */
  posts: BlogPost[];
}

/** Renders a responsive grid of blog post cards below a section heading. */
export const BlogPostGrid = ({ heading = 'My Sweet Blog Posts', posts }: BlogPostGridProps) => (
  <section className="blog-posts py-5">
    <div className="container">
      <h2 className="blog-posts__heading display-5 font-questrial mb-4">
        {heading}
      </h2>

      <div className="row g-4">
        {posts.map((post) => (
          <div key={post.id} className="col-12 col-md-6 col-lg-4">
            <Card
              imageSrc={post.imageSrc}
              imageAlt={post.imageAlt ?? post.title}
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
