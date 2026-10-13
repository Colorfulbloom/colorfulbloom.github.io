/**
 * export-html.tsx
 *
 * Renders each page component to static HTML using ReactDOMServer.
 * Output is saved to the drupal-theme/reference-html/ directory.
 *
 * Usage: npx tsx scripts/export-html.tsx
 */

import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';

import { Home } from '../src/stories/pages/Home';
import { Blog } from '../src/stories/pages/Blog';
import { Portfolio } from '../src/stories/pages/Portfolio';
import { Contact } from '../src/stories/pages/Contact';

const OUTPUT_DIR = resolve(dirname(import.meta.dirname!), 'drupal-theme/reference-html');

mkdirSync(OUTPUT_DIR, { recursive: true });

const pages = [
  { name: 'home', title: 'Home — jorgecalderon.codes', component: Home, props: {} },
  { name: 'blog', title: 'Blog — jorgecalderon.codes', component: Blog, props: {} },
  { name: 'portfolio', title: 'Portfolio — jorgecalderon.codes', component: Portfolio, props: {} },
  { name: 'contact', title: 'Contact — jorgecalderon.codes', component: Contact, props: {} },
];

const htmlShell = (title: string, body: string) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <!--
    Reference HTML — exported from React/Storybook components.
    Use as a guide for building Twig templates. Do not use in production.
    Image src paths may reference Vite module paths and need to be updated.
  -->
  <link rel="stylesheet" href="../css/bootstrap.min.css">
  <link rel="stylesheet" href="../css/fontawesome-all.min.css">
  <link rel="stylesheet" href="../css/fonts.css">
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
${body}
</body>
</html>`;

for (const page of pages) {
  try {
    const html = renderToStaticMarkup(createElement(page.component as any, page.props));
    const fullHtml = htmlShell(page.title, html);
    const outputPath = resolve(OUTPUT_DIR, `${page.name}.html`);
    writeFileSync(outputPath, fullHtml);
    console.log(`✅ Exported: ${page.name}.html`);
  } catch (err) {
    console.error(`❌ Failed to export ${page.name}:`, err);
  }
}

console.log(`\nDone! Files written to: ${OUTPUT_DIR}`);
