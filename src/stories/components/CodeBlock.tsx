import { useEffect, useMemo, useRef } from 'react';
import { enhanceCodeBlocks, escapeHtml, wrapCodeBlocks } from './codeHighlight';

export interface CodeBlockProps {
  /** Language key (a CKEditor 5 Code Block key, e.g. php, bash, plaintext) */
  language: string;
  /** Plain text of the code (escaped here) */
  code: string;
}

/**
 * A code block as the Drupal theme prints it. React owns only the wrapper div:
 * Prism replaces the children of the <code>, so the markup goes in as innerHTML.
 */
export const CodeBlock = ({ language, code }: CodeBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const html = useMemo(
    () =>
      wrapCodeBlocks(
        `<pre><code class="language-${language}">${escapeHtml(code)}</code></pre>`,
      ),
    [language, code],
  );

  useEffect(() => {
    if (ref.current) enhanceCodeBlocks(ref.current);
  }, [language, code]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />;
};
