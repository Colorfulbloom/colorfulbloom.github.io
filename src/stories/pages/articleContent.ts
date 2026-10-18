/**
 * Demo body HTML for the article detail page stories.
 * Each string stands in for a Drupal body field (processed text), so the page
 * components render it as-is. The blog body is the Content Elements sample
 * prose used on the board as demo text; the project body is the Publishing
 * Options project page text as shown on the board.
 */

/**
 * Sample table as CKEditor 5 writes it (figure.table > table, optional
 * figcaption after the table), with Label components in the Model column.
 * tabindex="0" lets a keyboard user scroll the table sideways; CKEditor does
 * not write it, so the theme adds it. Sample text only, not approved copy.
 */
export const TABLE_SAMPLE_HTML = `
<figure class="table" tabindex="0"><table>
<thead><tr><th>Role</th><th>Agent</th><th>Model</th><th>Effort</th><th>What it does</th><th>Why this tier</th></tr></thead>
<tbody>
<tr><td>Orchestrator</td><td><code class="font-jetbrains">main session</code></td><td><span class="label label--deep-azure">Fable</span></td><td>xhigh</td><td>Plans, decides, dispatches and reviews summaries. Never writes code.</td><td>Every call routes through it, so it gets the strongest judgment I have.</td></tr>
<tr><td>Lead</td><td><code class="font-jetbrains">deep-reasoner</code></td><td><span class="label label--ember">Opus</span></td><td>xhigh</td><td>Takes one design brief, plans the feature, dispatches workers and verifies their work. Returns one summary.</td><td>Architecture and hard debugging need depth more than speed.</td></tr>
<tr><td>Worker</td><td><code class="font-jetbrains">fast-worker</code></td><td><span class="label label--aqua">Sonnet</span></td><td>medium</td><td>Implements a well-specified brief. Edits, tests and multi-file changes that follow existing patterns.</td><td>The plan is already made, so a fast and capable model is enough.</td></tr>
<tr><td>Judgment</td><td><code class="font-jetbrains">general-purpose</code></td><td><span class="label label--aqua">Sonnet</span></td><td></td><td>Merges sources, weighs conflicting reports and makes editorial calls.</td><td>Judgment over gathered material, without the cost of a lead.</td></tr>
<tr><td>Scout</td><td><code class="font-jetbrains">scout</code></td><td><span class="label label--lavender">Haiku</span></td><td></td><td>Search, inventories, test runs, logs and web lookups. Returns conclusions, not file dumps.</td><td>Reading is cheap work, and the cheapest tier does it well.</td></tr>
<tr><td>Verifier</td><td><code class="font-jetbrains">verifier</code></td><td><span class="label label--deep-azure">Fable</span></td><td>high</td><td>Checks a finished plan or milestone against the docs, the designs and the code.</td><td>It has to catch what the lead missed, so it runs on the top tier.</td></tr>
<tr><td>Project agent</td><td><code class="font-jetbrains">tech-writer</code></td><td><span class="label label--deep-azure">Fable</span></td><td>medium</td><td>Drafts everything meant for someone else to read, in my voice.</td><td>Voice and accuracy matter more here than raw depth.</td></tr>
<tr><td>Peer</td><td><code class="font-jetbrains">codex</code></td><td><span class="label label--off">Off</span></td><td></td><td>A second engineer for high-stakes calls. It works the same problem on its own.</td><td>Off for now. When it is on, it gets the same brief as the lead.</td></tr>
<tr><td>Catch-all</td><td>anything unrouted</td><td><span class="label label--ember">Opus</span></td><td></td><td>Takes any task no rule routes to a specific agent.</td><td>A safe default until a rule claims the work.</td></tr>
</tbody>
</table><figcaption>Who does what</figcaption></figure>
`.trim();

const postIntro = `
<p>Body text is set in Noto Sans at regular weight. It provides comfortable reading for longer passages. You can emphasize text with <strong>bold</strong> or <em>italic</em> styles, and combine them for <strong><em>bold italic</em></strong> when needed. Inline code like <code class="font-jetbrains">const x = 42</code> uses JetBrains Mono.</p>
<p>A second paragraph demonstrates spacing between blocks. Good vertical rhythm keeps content scannable and reduces cognitive load. Text should breathe — generous line height and margins make long-form content approachable.</p>
`;

const postDefine = `
<h2 class="font-manrope" id="define">Define the component interface with TypeScript</h2>
<p>Inline links like <a class="content-elements__link" href="#">this example link</a> should be clearly distinguishable from surrounding text. They can appear in the middle of a sentence, at the <a class="content-elements__link" href="#">beginning</a>, or at the <a class="content-elements__link" href="#">end</a>.</p>
<h3 class="font-manrope">Props for each component</h3>
<p>Each component takes a small, typed props object. Defaults cover the common case, so a story only sets what it needs to show.</p>
<h3 class="font-manrope">Types shared across stories</h3>
<p>Shared types live next to the component that owns them, so a story and the page that uses it never drift apart.</p>
<ul>
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
<p>The agents behind a build, and the model each one runs on.</p>
${TABLE_SAMPLE_HTML}
`;

const postStyle = `
<h2 class="font-manrope" id="style">Style with BEM-named Sass partials</h2>
<ol>
<li>Create the partial file</li>
<li>Import variables with <code class="font-jetbrains">@use 'variables' as *</code></li>
<li>Register in <code class="font-jetbrains">main.scss</code></li>
</ol>
<pre><code class="language-typescript">function greet(name: string): string {
  return \`Hello, \${name}! Welcome to the project.\`;
}

const message = greet('Jorge');
console.log(message);</code></pre>
`;

const postStories = `
<h2 class="font-manrope" id="stories">Write Storybook stories to document all variants</h2>
<blockquote class="content-elements__blockquote font-noto"><p>The best code is no code at all. Every line of code you write is a line that has to be debugged, maintained, and understood by the next developer.</p><footer class="content-elements__blockquote-footer">— A principle worth remembering</footer></blockquote>
<p>Links can also stand alone:</p>
<ul>
<li><a class="content-elements__link" href="#">View the full documentation</a></li>
<li><a class="content-elements__link" href="#">Browse the source code on GitHub</a></li>
<li><a class="content-elements__link" href="#">Read the latest blog post</a></li>
</ul>
`;

/** The board's full demo body: intro plus three h2 sections (the rail shows). */
export const POST_DEMO_BODY = (postIntro + postDefine + postStyle + postStories).trim();

/** The board's demo body cut after its first h2 section: one h2, so the rail is dropped. */
export const POST_DEMO_BODY_ONE_HEADING = (postIntro + postDefine).trim();

/** The Publishing Options project body as shown on the board, screenshot placeholder included. */
export const PROJECT_BODY = `
<p>Drupal comes default with “Promoted to front page” and “Sticky at top of lists”. The Publishing options module allows you to create your own custom options. It integrates with the Views module and has plugins for field, filter and contextual filter.</p>
<p>This module continues to be actively developed. Any contributions for the community is always welcome.</p>
<h2 class="font-manrope" id="requirements">Requirements</h2>
<p>This module requires no modules outside of Drupal core.</p>
<h2 class="font-manrope" id="installation">Installation</h2>
<p>Install the Publishing options module as you would normally install a contributed Drupal module. Visit <a class="content-elements__link" href="https://www.drupal.org/node/1897420" target="_blank" rel="noopener noreferrer">https://www.drupal.org/node/1897420</a> for further information.</p>
<h2 class="font-manrope" id="configuration">Configuration and usage</h2>
<p>To administer publishing options, go to <em>Configuration &gt; Content authoring &gt; Publishing options</em> (<code class="font-jetbrains">/admin/config/content/publishing-options</code>). Here you can create, update, or remove publishing options. Click on the <code class="font-jetbrains">Add publishing option</code> button. The link will take you to the add/edit publishing options form.</p>
<figure>
<div class="article-body__placeholder">[Screenshot: Publishing options list in the Drupal admin]</div>
<figcaption>The Publishing options list at Configuration › Content authoring › Publishing options.</figcaption>
</figure>
<p>To add/edit a publishing option. Type the name of the publishing option and associate the content types for this publishing option with. Then save the publishing option.</p>
<blockquote class="content-elements__blockquote font-noto"><p>Note: you can also associate publishing options to a content type within the content type’s add/edit page in the Publishing options section.</p></blockquote>
<h3 class="font-manrope" id="nodes">Nodes</h3>
<p>To associate a node to a publishing option, add/edit a node (<code class="font-jetbrains">node/add</code> or <code class="font-jetbrains">/node/%/edit</code>). Go to the Promotion options section and select the publishing options to associate to the node.</p>
<h3 class="font-manrope" id="views">Views</h3>
<p>To use publishing options with views. Create a view with view settings show option set to content.</p>
<p>You can then add a publishing options fields, filters and contextual filters to the view.</p>
`.trim();
