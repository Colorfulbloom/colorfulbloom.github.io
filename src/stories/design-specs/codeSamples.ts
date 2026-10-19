/** Sample code for the Content Elements code block stories (plain text, escaped by CodeBlock). */

export interface CodeSample {
  /** Language key passed to CodeBlock */
  language: string;
  /** Caption shown above the block */
  caption: string;
  /** Plain text of the code */
  code: string;
}

/** One sample for every language of the Full HTML code block list, in list order. */
export const CODE_SAMPLES: CodeSample[] = [
  {
    language: "plaintext",
    caption: "Plain text",
    code: "Fable (main session)\nPlans, decides quick task vs feature, reviews summaries, makes the call. Never codes.\n│\n├── Quick tasks (one brief, fully specified): dispatch a worker directly\n│   ├── fast-worker (Sonnet)     small edit Fable already has the plan for\n│   ├── scout (Haiku)            search, run tests, summarize logs\n│   ├── deep-reasoner (Opus)     a single hard question\n│   └── project agents           pinned to their tier by /route-project\n│\n└── Features (anything needing more than one brief): hand ONE design brief to the lead\n    └── deep-reasoner as lead (Opus)\n        Plans, writes worker briefs, dispatches, verifies, returns ONE summary.\n        ├── fast-worker (Sonnet)   x as many as needed, parallel where separable\n        ├── project agents         at their pinned tier, for work in their files\n        └── scout (Haiku)          searches, test runs, diff and log reading\n\nCodex: OFF. When ON, a peer next to deep-reasoner at layer one.",
  },
  {
    language: "bash",
    caption: "Bash",
    code: "# Sample: update and clear the cache\ncomposer update drupal/canvas   # no --with-dependencies\ndrush cr",
  },
  {
    language: "c",
    caption: "C",
    code: "// Sum an array of ints.\n#include <stdio.h>\n\nint sum(const int *values, size_t count) {\n  int total = 0; /* running total */\n  for (size_t i = 0; i < count; i++) {\n    total += values[i];\n  }\n  return total;\n}",
  },
  {
    language: "csharp",
    caption: "C#",
    code: "// Greets a user by name.\npublic string Greet(string name)\n{\n    var message = $\"Hello, {name}!\"; /* interpolated */\n    return message;\n}",
  },
  {
    language: "cpp",
    caption: "C++",
    code: "// Print each word on its own line.\n#include <iostream>\n#include <vector>\n\nint main() {\n  std::vector<std::string> words{\"alpha\", \"beta\"};\n  for (const auto& w : words) std::cout << w << '\\n';\n  return 0;\n}",
  },
  {
    language: "css",
    caption: "CSS",
    code: "/* Card with a left accent */\n.card {\n  padding: 1rem 1.5rem;\n  border-left: 4px solid #0070BD;\n  background: rgba(226, 226, 226, 0.06);\n}\n.card:hover { color: var(--accent); }",
  },
  {
    language: "diff",
    caption: "Diff",
    code: "@@ -1,4 +1,4 @@\n # Heading stays the same\n-const greeting = 'Hello';\n+const greeting = 'Hello, world';\n unchanged line\n-remove this line\n+add this line",
  },
  {
    language: "html",
    caption: "HTML",
    code: "<!-- FILE NAME SUGGESTIONS:\n   block--system-menu-block--main.html.twig\n   block--system-menu-block.html.twig\n   block--system.html.twig\n   block.html.twig\n-->\n<!-- INVALID FILE NAME SUGGESTIONS:\n   block__a4ada991-2613-4901-99c4-f23c2efc02b0\n-->",
  },
  {
    language: "java",
    caption: "Java",
    code: "// Count the words in a line.\npublic int countWords(String line) {\n    /* split on whitespace */\n    String[] parts = line.trim().split(\"\\\\s+\");\n    return parts.length;\n}",
  },
  {
    language: "javascript",
    caption: "JavaScript",
    code: "// Debounce a function.\nfunction debounce(fn, wait = 200) {\n  let timer; /* pending call */\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), wait);\n  };\n}",
  },
  {
    language: "json",
    caption: "JSON",
    code: "{\n  \"name\": \"jorgecalderon/theme\",\n  \"version\": \"1.4.0\",\n  \"private\": true,\n  \"scripts\": { \"build\": \"node scripts/copy-vendor.js && sass scss/style.scss css/style.css\" },\n  \"keywords\": [\"drupal\", \"canvas\", null],\n  \"engines\": { \"node\": \">=20\", \"strict\": false, \"workers\": 4 }\n}",
  },
  {
    language: "php",
    caption: "PHP",
    code: "// Ligatures off: -> == === != !== => >= <= <> :: ||\n$node = Node::load(5); /* cached */\nif ($node && $node->access('view') && $node->id() == 5) {\n  return $node->label(); // 'Publishing Options'\n}",
  },
  {
    language: "python",
    caption: "Python",
    code: "# Count word frequencies.\nfrom collections import Counter\n\ndef frequencies(text: str) -> dict:\n    \"\"\"Return a word count.\"\"\"\n    return Counter(text.lower().split())",
  },
  {
    language: "ruby",
    caption: "Ruby",
    code: "# Greet each name in the list.\nnames = %w[Ada Grace Linus]\nnames.each do |name|\n  puts \"Hello, #{name}!\" # one per line\nend",
  },
  {
    language: "sql",
    caption: "SQL",
    code: "-- Published blog posts with a tag\nSELECT n.nid, n.title, FROM_UNIXTIME(n.created) AS posted\nFROM node_field_data n\nJOIN node__field_tags t ON t.entity_id = n.nid\nWHERE n.type = 'blog' AND n.status = 1 AND t.field_tags_target_id = 3\nORDER BY n.sticky DESC, n.created DESC\nLIMIT 6;",
  },
  {
    language: "twig",
    caption: "Twig",
    code: "{# Sample: a post card #}\n{% set tags = node.field_tags|default([]) %}\n<article class=\"card\">\n  <h2>{{ node.title.value }}</h2>\n  {% for tag in tags if tag.entity %}\n    <span class=\"tag\">{{ tag.entity.label }}</span>\n  {% endfor %}\n</article>",
  },
  {
    language: "typescript",
    caption: "TypeScript",
    code: "// Greet a user.\ninterface User {\n  name: string;\n  admin?: boolean;\n}\n\nexport const greet = (user: User): string => `Hello, ${user.name}!`; /* template literal */",
  },
  {
    language: "xml",
    caption: "XML",
    code: "<!-- A menu with two links -->\n<menu id=\"main\">\n  <link href=\"/blog\" active=\"true\">Blog</link>\n  <link href=\"/portfolio\">Portfolio</link>\n</menu>",
  },
  {
    language: "yaml",
    caption: "YAML",
    code: "# Sample: a Views filter\nfilters:\n  status:\n    value: '1'   # published only\n    plugin_id: boolean",
  },
];

/** One very long PHP line, to show the sideways scroll under a fixed bar. */
export const LONG_LINE_PHP =
  "$build = $this->entityTypeManager->getStorage('node')->getQuery()->accessCheck(TRUE)->condition('type', 'blog')->condition('status', 1)->condition('field_tags.entity.name', 'Drupal')->sort('sticky', 'DESC')->sort('created', 'DESC')->range(0, 6)->execute();";

export const ASIDE_INTRO =
  "Everything above is all a site builder needs. The rest is for developers who want to know how the module is built and why.";

export const ASIDE_PHP = "// Ligatures off: -> == === != !== => >= <= <> :: ||\n$node = Node::load(5); /* cached */\nif ($node && $node->access('view') && $node->id() == 5) {\n  return $node->label(); // 'Publishing Options'\n}";

export const ASIDE_YAML = "# Sample: a Views filter\nfilters:\n  status:\n    value: '1'   # published only\n    plugin_id: boolean";

export const ASIDE_BASH = "# Sample: update and clear the cache\ncomposer update drupal/canvas   # no --with-dependencies\ndrush cr";

/**
 * Repo card markup for the Repo Card stories: tech-writer's copy in the markup the post body
 * stores after a CKEditor 5 round trip. It has no Copy button; `enhanceRepoCards` adds it,
 * as the theme JS does on the site.
 */
export const REPO_CARD_TOP_HTML = `<aside class="code-block repo-card" aria-labelledby="repo-take"><div class="code-block__bar"><div class="code-block__label">Repo</div><div class="repo-card__actions"><a class="repo-card__link" href="https://github.com/Colorfulbloom/claude-code-model-routing">Open on GitHub</a></div></div><div class="repo-card__body"><h3 class="repo-card__heading" id="repo-take"><span class="article-heading__accent">The multi-model agent</span> <span class="article-heading__light">routing repo.</span></h3><p>Everything this post describes is in the repo. It holds the six agents, the two rules files, the two hooks, the two skills, an example project agent, a reference doc and the installer. Swap any model you cannot reach and add your own project agents.</p><p class="repo-card__clone" data-clone="git clone https://github.com/Colorfulbloom/claude-code-model-routing">git clone <a href="https://github.com/Colorfulbloom/claude-code-model-routing">https://github.com/Colorfulbloom/<wbr>claude-code-model-routing</a></p></div></aside>`;

export const REPO_CARD_END_HTML = `<aside class="code-block repo-card" aria-labelledby="repo-make"><div class="code-block__bar"><div class="code-block__label">Repo</div><div class="repo-card__actions"><a class="repo-card__link" href="https://github.com/Colorfulbloom/claude-code-model-routing">Open on GitHub</a></div></div><div class="repo-card__body"><h3 class="repo-card__heading" id="repo-make"><span class="article-heading__accent">The multi-model agent</span> <span class="article-heading__light">routing installer.</span></h3><p>The installer prints its plan with a dry run before it changes anything. Every file it replaces is backed up first, and the uninstall backs up anything you edited. The code is MIT licensed, so change whatever does not fit the way you work.</p><p class="repo-card__clone" data-clone="git clone https://github.com/Colorfulbloom/claude-code-model-routing">git clone <a href="https://github.com/Colorfulbloom/claude-code-model-routing">https://github.com/Colorfulbloom/<wbr>claude-code-model-routing</a></p></div></aside>`;
