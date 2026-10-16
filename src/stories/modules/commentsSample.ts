import type { CommentData } from './Comments';

/** Three comments: two top-level and one reply from the site owner. */
export const sampleComments: CommentData[] = [
  {
    id: '1',
    name: 'Maria',
    date: '2026-06-12',
    dateLabel: 'June 12, 2026',
    body: `<p>Nice walkthrough. Does the <code class="font-jetbrains">publish_on</code> field work with the <a class="content-elements__link" href="#">Views integration</a> out of the box?</p>
<p>I tried it like this and the list stayed empty:</p>
<pre><code class="language-php">$query = \\Drupal::entityQuery('node')
  ->condition('status', 1)
  ->accessCheck(TRUE);</code></pre>`,
    replies: [
      {
        id: '2',
        name: 'Jorge Calderon',
        date: '2026-06-13',
        dateLabel: 'June 13, 2026',
        isAuthor: true,
        body: `<p>It does, Maria. Add the <code class="font-jetbrains">publish_on</code> field to the View and clear the cache. The query in your snippet skips Views, so it will not see it.</p>`,
      },
    ],
  },
  {
    id: '3',
    name: 'Sam',
    date: '2026-06-14',
    dateLabel: 'June 14, 2026',
    body: `<p>Thanks for the module. The scheduled publishing works on my site.</p>`,
  },
];
