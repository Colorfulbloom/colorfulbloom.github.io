import Prism from 'prismjs';
// Stops Prism's own automatic highlighting; enhanceCodeBlocks() is the only caller.
Prism.manual = true;
// markup, css, clike and javascript come with the main entry. Order matters:
// each grammar extends the ones before it (same list as the theme's scripts/copy-vendor.js).
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-twig';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-ruby';

/**
 * Code blocks with a language: a port of the Drupal theme's
 * templates/misc/code-blocks.html.twig (markup) and js/code-highlight.js (behavior).
 * Styles: src/stories/assets/css/_code-highlight.scss.
 */

/** Key: [label, accent key], as the Twig partial's code_languages map. */
export const CODE_LANGUAGES: Record<string, [string, string]> = {
  plaintext: ['Text', 'plaintext'],
  plain: ['Text', 'plaintext'],
  text: ['Text', 'plaintext'],
  txt: ['Text', 'plaintext'],
  bash: ['Bash', 'bash'],
  sh: ['Bash', 'bash'],
  shell: ['Bash', 'bash'],
  c: ['C', 'c'],
  cs: ['C#', 'cs'],
  csharp: ['C#', 'cs'],
  cpp: ['C++', 'cpp'],
  css: ['CSS', 'css'],
  diff: ['Diff', 'diff'],
  html: ['HTML', 'html'],
  markup: ['HTML', 'html'],
  java: ['Java', 'java'],
  javascript: ['JavaScript', 'javascript'],
  js: ['JavaScript', 'javascript'],
  json: ['JSON', 'json'],
  php: ['PHP', 'php'],
  python: ['Python', 'python'],
  py: ['Python', 'python'],
  ruby: ['Ruby', 'ruby'],
  rb: ['Ruby', 'ruby'],
  sql: ['SQL', 'sql'],
  twig: ['Twig', 'twig'],
  typescript: ['TypeScript', 'typescript'],
  ts: ['TypeScript', 'typescript'],
  xml: ['XML', 'xml'],
  yaml: ['YAML', 'yaml'],
  yml: ['YAML', 'yaml'],
};

const BLOCK_PATTERN =
  /(<pre\b[^>]*>\s*<code\b[^>]*\bclass="(?:[^"]*\s)?language-[^"]*"[^>]*>[\s\S]*?<\/code>\s*<\/pre>)/gi;
const KEY_PATTERN =
  /^<pre\b[^>]*>\s*<code\b[^>]*\bclass="(?:[^"]*\s)?language-([^\s"]+)[\s\S]*$/i;

export const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

/** Like Drupal's Html::cleanCssIdentifier(): separators become hyphens, other odd characters go. */
const cleanClass = (value: string): string =>
  value
    .replace(/[ _/[\]]/g, '-')
    .replace(/[^-0-9A-Za-z_¡-￿]/g, '');

/**
 * Wraps every <pre><code class="language-*"> in div.code-block with a label bar.
 * The first language-* class names the block; a <pre> without one is left alone.
 */
export const wrapCodeBlocks = (html: string): string =>
  html.replace(BLOCK_PATTERN, (block: string) => {
    const key = block.replace(KEY_PATTERN, '$1').toLowerCase();
    const [label, accent] = CODE_LANGUAGES[key] ?? [key, key];
    return (
      `<div class="code-block code-block--${cleanClass(accent)}">` +
      `<div class="code-block__bar"><span class="code-block__label">${escapeHtml(label)}</span></div>` +
      `${block}</div>`
    );
  });

const RESET_DELAY = 2000;
const enhanced = new WeakSet<Element>();

const selectContents = (element: Element): Selection | null => {
  const selection = window.getSelection();
  if (!selection) return null;
  const range = document.createRange();
  range.selectNodeContents(element);
  selection.removeAllRanges();
  selection.addRange(range);
  return selection;
};

/** Copies with a selection and execCommand. Returns true on success. */
const fallbackCopy = (code: Element): boolean => {
  const selection = selectContents(code);
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }
  if (copied && selection) selection.removeAllRanges();
  return copied;
};

/** Highlights each .code-block with Prism and adds the Copy button. Safe to call again. */
export const enhanceCodeBlocks = (root: ParentNode): void => {
  root.querySelectorAll('.code-block').forEach((block) => {
    if (enhanced.has(block)) return;
    const code = block.querySelector(':scope > pre > code');
    const bar = block.querySelector(':scope > .code-block__bar');
    if (!code || !bar) return;
    enhanced.add(block);
    const labelElement = bar.querySelector('.code-block__label');
    const label = labelElement?.textContent?.trim() ?? '';

    Prism.highlightElement(code);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-block__copy';

    const copyText = document.createElement('span');
    copyText.className = 'code-block__copy-text';
    copyText.textContent = 'Copy';

    const hidden = document.createElement('span');
    hidden.className = 'visually-hidden';
    hidden.textContent = ` ${label} code`;

    button.appendChild(copyText);
    button.appendChild(hidden);

    const status = document.createElement('span');
    status.className = 'visually-hidden';
    status.setAttribute('role', 'status');

    bar.appendChild(button);
    bar.appendChild(status);

    let timer: number | null = null;

    const showState = (text: string, message: string) => {
      copyText.textContent = text;
      status.textContent = message;
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        copyText.textContent = 'Copy';
        status.textContent = '';
        timer = null;
      }, RESET_DELAY);
    };

    const succeed = () => showState('Copied', 'Code copied to clipboard');
    const fail = () =>
      showState('Copy failed', 'Copy failed. The code is selected; copy it with the keyboard.');
    const copyWithSelection = () => {
      if (fallbackCopy(code)) succeed();
      else fail();
    };

    button.addEventListener('click', () => {
      const text = code.textContent ?? '';
      if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(succeed, copyWithSelection);
      } else {
        copyWithSelection();
      }
    });
  });
};
