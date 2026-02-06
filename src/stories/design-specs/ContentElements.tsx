import React from 'react';

export interface ContentElementsProps {
  /** Which variant background to display on */
  variant?: 'light' | 'dark';
}

export const ContentElements = ({ variant = 'light' }: ContentElementsProps) => {
  const isDark = variant === 'dark';
  const wrapperClass = `content-elements ${isDark ? 'content-elements--dark' : ''}`;

  return (
    <div className={wrapperClass}>
      {/* Headings */}
      <section className="content-elements__section">
        <h6 className="content-elements__label">Headings</h6>
        <h1 className="font-manrope">H1 — The quick brown fox jumps over the lazy dog</h1>
        <p className="font-noto">
          The heading level one is the largest and most prominent. Use it sparingly — typically once per page for the main title.
        </p>

        <h2 className="font-manrope">H2 — The quick brown fox jumps over the lazy dog</h2>
        <p className="font-noto">
          Heading level two works as a major section divider. It provides clear visual hierarchy beneath the page title.
        </p>

        <h3 className="font-manrope">H3 — The quick brown fox jumps over the lazy dog</h3>
        <p className="font-noto">
          Heading level three is used for subsections within an H2 block. It balances visibility without overpowering the layout.
        </p>

        <h4 className="font-manrope">H4 — The quick brown fox jumps over the lazy dog</h4>
        <p className="font-noto">
          Heading level four groups related content under an H3. Useful for breaking down detailed topics.
        </p>

        <h5 className="font-manrope">H5 — The quick brown fox jumps over the lazy dog</h5>
        <p className="font-noto">
          Heading level five is typically used for minor labels or sidebar headings where subtlety is preferred.
        </p>

        <h6 className="font-manrope">H6 — The quick brown fox jumps over the lazy dog</h6>
        <p className="font-noto">
          Heading level six is the smallest heading. It works well for footnotes, captions, or deeply nested content.
        </p>
      </section>

      {/* Paragraph & Inline Elements */}
      <section className="content-elements__section">
        <h6 className="content-elements__label">Paragraph &amp; Inline Elements</h6>
        <p className="font-noto">
          Body text is set in Noto Sans at regular weight. It provides comfortable reading for longer passages.
          You can emphasize text with <strong>bold</strong> or <em>italic</em> styles,
          and combine them for <strong><em>bold italic</em></strong> when needed.
          Inline code like <code className="font-jetbrains">const x = 42</code> uses JetBrains Mono.
        </p>
        <p className="font-noto">
          A second paragraph demonstrates spacing between blocks. Good vertical rhythm keeps content
          scannable and reduces cognitive load. Text should breathe — generous line height and margins
          make long-form content approachable.
        </p>
      </section>

      {/* Links */}
      <section className="content-elements__section">
        <h6 className="content-elements__label">Links</h6>
        <p className="font-noto">
          Inline links like <a href="#" className="content-elements__link">this example link</a> should
          be clearly distinguishable from surrounding text. They can appear in the middle of a sentence,
          at the <a href="#" className="content-elements__link">beginning</a>, or at
          the <a href="#" className="content-elements__link">end</a>.
        </p>
        <p className="font-noto">
          Links can also stand alone:
        </p>
        <ul className="font-noto">
          <li><a href="#" className="content-elements__link">View the full documentation</a></li>
          <li><a href="#" className="content-elements__link">Browse the source code on GitHub</a></li>
          <li><a href="#" className="content-elements__link">Read the latest blog post</a></li>
        </ul>
      </section>

      {/* Unordered List */}
      <section className="content-elements__section">
        <h6 className="content-elements__label">Unordered List</h6>
        <ul className="font-noto">
          <li>React and TypeScript for component-driven development</li>
          <li>Storybook for isolated UI building and documentation</li>
          <li>Bootstrap 5.3 with custom Sass overrides
            <ul>
              <li>Pre-built CSS — no Sass compilation of Bootstrap itself</li>
              <li>Custom variables for palette and font tokens</li>
            </ul>
          </li>
          <li>Vite for fast development builds and hot module replacement</li>
        </ul>
      </section>

      {/* Ordered List */}
      <section className="content-elements__section">
        <h6 className="content-elements__label">Ordered List</h6>
        <ol className="font-noto">
          <li>Define the component interface with TypeScript</li>
          <li>Build the component markup in React</li>
          <li>Style with BEM-named Sass partials
            <ol>
              <li>Create the partial file</li>
              <li>Import variables with <code className="font-jetbrains">@use 'variables' as *</code></li>
              <li>Register in <code className="font-jetbrains">main.scss</code></li>
            </ol>
          </li>
          <li>Write Storybook stories to document all variants</li>
          <li>Verify the build passes</li>
        </ol>
      </section>

      {/* Blockquote */}
      <section className="content-elements__section">
        <h6 className="content-elements__label">Blockquote</h6>
        <blockquote className="content-elements__blockquote font-noto">
          <p>
            Good design is as little design as possible. Less, but better — because it concentrates on
            the essential aspects, and the products are not burdened with non-essentials.
          </p>
        </blockquote>
        <blockquote className="content-elements__blockquote font-noto">
          <p>
            The best code is no code at all. Every line of code you write is a line that has to be
            debugged, maintained, and understood by the next developer.
          </p>
          <footer className="content-elements__blockquote-footer">
            — A principle worth remembering
          </footer>
        </blockquote>
      </section>

      {/* Code Block */}
      <section className="content-elements__section">
        <h6 className="content-elements__label">Code Block</h6>
        <pre className="content-elements__code-block font-jetbrains">
{`function greet(name: string): string {
  return \`Hello, \${name}! Welcome to the project.\`;
}

const message = greet('Jorge');
console.log(message);`}
        </pre>
      </section>
    </div>
  );
};
