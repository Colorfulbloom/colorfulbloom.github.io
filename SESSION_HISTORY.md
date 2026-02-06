# Session History & Memory Log

This file tracks significant changes, design decisions, and implementation patterns across development sessions for the jorgecalderon.codes Storybook project.

---

## Session: 2026-02-06

### Content Elements — New Design Spec Component
- **Created:** `ContentElements` component in `design-specs/` to showcase how all standard HTML content elements render with the project's design system
- **Sections Displayed:**
  - Headings (H1–H6), each followed by a descriptive paragraph
  - Paragraph & inline elements (bold, italic, bold-italic, inline code)
  - Links (inline within text + standalone in a list)
  - Unordered list (with nested sub-items)
  - Ordered list (with nested numbered sub-items)
  - Blockquote (two examples, one with footer/attribution)
  - Code block (TypeScript sample in JetBrains Mono)
- **Variants:** `light` (default) and `dark` (charcoal background, lighter text colors)
- **Styling:**
  - Section labels: uppercase, letterspaced, Azure Bolt underline
  - Links: Azure Bolt with underline, Deep Azure on hover (dark variant uses Sky Blue)
  - Blockquotes: Azure Bolt left border, subtle background tint, italic text
  - Code blocks: Obsidian background, Quicksilver text, JetBrains Mono font, Azure Bolt left border
  - Inline code: Pewter background tint, Deep Azure text (dark variant uses Sky Blue)
  - Dark variant: Charcoal background on the component wrapper with padding and border-radius
- **Stories:** Light and Dark, with Dark using charcoal (`#2D2D2D`) page background
- **Files Created:**
  - `src/stories/design-specs/ContentElements.tsx`
  - `src/stories/design-specs/ContentElements.stories.tsx`
  - `src/stories/assets/css/_content-elements.scss`
- **Files Modified:**
  - `src/stories/assets/css/main.scss` — Added `@use 'content-elements'`

### Card Icon Prop — Changed from ReactNode to String
- **Issue:** Card `icon` prop was typed as `ReactNode`, which caused Storybook autodocs to crash with "Objects are not valid as a React child" error when rendering the controls table
- **Fix:** Changed `icon` prop from `ReactNode` to `string` (icon class name)
  - Component now renders `<i className={icon} />` internally
  - Removed `ReactNode` import (no longer needed)
- **Stories:** Added `icon` as a `select` dropdown in argTypes with Font Awesome icon options (see Icon Library Migration below)
- **Files Modified:**
  - `src/stories/components/Card.tsx` — Changed prop type, renders `<i>` element internally
  - `src/stories/components/Card.stories.tsx` — Added icon select dropdown to argTypes

### Icon Library Migration — Bootstrap Icons → Font Awesome 6 Free
- **Reason:** Bootstrap Icons lacked brand icons (e.g. Drupal) needed for the Skills plain cards
- **Package Swap:**
  - Removed `bootstrap-icons` (`^1.13.1`)
  - Installed `@fortawesome/fontawesome-free` (`^7.1.0`)
- **Global Import:** `.storybook/preview.ts` changed from `bootstrap-icons/font/bootstrap-icons.css` to `@fortawesome/fontawesome-free/css/all.min.css`
- **Icon Prop Pattern Change:**
  - Previously: icon prop took a short name (e.g. `'code-slash'`), Card rendered `<i className="bi bi-{icon}" />`
  - Now: icon prop takes the full Font Awesome class string (e.g. `'fa-solid fa-code'`, `'fa-brands fa-drupal'`), Card renders `<i className={icon} />`
  - This supports mixing icon styles (`fa-solid`, `fa-brands`, `fa-regular`) in a single prop
- **Icon Mappings Applied:**
  - `code-slash` → `fa-solid fa-code`
  - `globe` → `fa-solid fa-globe`
  - `rocket` → `fa-solid fa-rocket`
  - `cloud` → `fa-solid fa-cloud`
  - `palette` → `fa-solid fa-palette`
  - `drupal` → `fa-brands fa-drupal` *(new — not available in Bootstrap Icons)*
  - `list` (hamburger) → `fa-solid fa-bars`
  - `x-lg` (close) → `fa-solid fa-xmark`
  - `person-circle` → `fa-solid fa-circle-user`
  - `github` → `fa-brands fa-github`
  - `unity` → `fa-brands fa-unity`
- **Files Modified:**
  - `package.json` — Swapped dependency
  - `.storybook/preview.ts` — Swapped CSS import
  - `src/stories/components/Card.tsx` — Changed icon rendering to use full class string, updated JSDoc
  - `src/stories/components/Card.stories.tsx` — Updated all icon options and story icon values
  - `src/stories/layout/Header.tsx` — Updated hamburger (`fa-bars`) and close (`fa-xmark`) icons
  - `src/stories/modules/AboutMe.tsx` — Updated placeholder icon (`fa-circle-user`)
  - `src/stories/modules/Skills.tsx` — Updated JSDoc comment
  - `src/stories/modules/Skills.stories.tsx` — Updated sample skill icon values
  - `src/stories/pages/Home.tsx` — Updated skill icon values
  - `CLAUDE.md` — Updated tech stack and global imports references

### Build Verification
- **Verified:** `npm run build-storybook` completed successfully after all changes

### Card Component — Plain Variant
- **Purpose:** Minimal icon + text card for showcasing skills on the homepage, displayed below the Jumbotron
- **Design:** Horizontal layout (icon left, content right) on transparent background — no border, no border-radius, no shadow, no hover effects
- **Implementation:**
  - Added `'plain'` to `CardVariant` type: `'default' | 'charcoal' | 'plain'`
  - Created `.card--plain` modifier class in `card.scss`
  - `flex-direction: row` with `1rem` gap for horizontal icon + content layout
  - Icon: `1.25rem` size, `$pewter` color
  - Title: `1.1rem`, `font-weight: 600`, `$quicksilver` color
  - Description: `0.9rem`, `$pewter` color, `line-height: 1.55`
  - Body padding reset to `0` (icon provides the left spacing)
  - All hover effects disabled (`transform: none`, `box-shadow: none`, `animation: none`)
- **Stories Added:**
  - `PlainTextOnly` — Icon + title + description
  - `PlainTitleOnly` — Icon + title only
  - `PlainGrid` (Plain — Grid 2×2) — Four skills in a 2-column Bootstrap grid
- **Story Parameters:** All Plain stories display on Obsidian background (`#1A1A1A`)
- **Initial Approach:** Started as a standalone `SkillCard` component with link/badge props, then simplified per user feedback (no links needed — purely a skill showcase), then merged into Card as a variant
- **Files Deleted:**
  - `src/stories/components/SkillCard.tsx` — Standalone component removed
  - `src/stories/components/SkillCard.stories.tsx` — Standalone stories removed
  - `src/stories/assets/css/_skill-card.scss` — Standalone partial removed
- **Files Modified:**
  - `src/stories/components/Card.tsx` — Added `'plain'` to `CardVariant` type
  - `src/stories/assets/css/card.scss` — Added `.card--plain` modifier styles
  - `src/stories/components/Card.stories.tsx` — Added `'plain'` to variant argTypes, added 3 Plain variant stories
  - `src/stories/assets/css/main.scss` — Removed `@use 'skill-card'`

### Build Verification
- **Verified:** `npm run build-storybook` completed successfully after Plain variant changes

### Skills Module — New Composite Section
- **Purpose:** 2-column grid of plain cards showcasing major skills, displayed below the Jumbotron on the Home page
- **Component:** `Skills` in `modules/` — accepts `heading` (`React.ReactNode`) and `skills` array
- **Heading:** Two-tone `<h2>` matching Jumbotron color pattern
  - "My" uses `$deep-azure` (`.skills__heading-accent`) — same as "Hi, I'm Jorge"
  - "Skills." uses `$frost` (`.skills__heading-light`) — same as "I build with Drupal."
  - Manrope font, `1.75rem`, `fw-bold`
- **Divider:** Reuses `Divider` component with `divider--blue-100` and Bootstrap `w-25` class
- **Grid:** Bootstrap `row g-0` with `col-12 col-md-6` for each skill card (`variant="plain"`)
- **Alignment Fix:** Removed `padding-left` from `.skills__heading` and changed `.card--plain` padding from `1.5rem` (all sides) to `1.25rem 0` (vertical only) so Skills content aligns flush with the Jumbotron container edge
- **Stories:** `Default` (with two-tone heading) and `NoHeading` variant; file uses `.tsx` for JSX heading
- **Files Created:**
  - `src/stories/modules/Skills.tsx` — Module component
  - `src/stories/modules/Skills.stories.tsx` — Stories with heading and no-heading variants
  - `src/stories/assets/css/_skills.scss` — Section and heading styles
- **Files Modified:**
  - `src/stories/assets/css/main.scss` — Added `@use 'skills'`
  - `src/stories/assets/css/card.scss` — Changed `.card--plain` padding to `1.25rem 0`
  - `src/stories/pages/Home.tsx` — Imported Skills module, added below Jumbotron with two-tone heading and four skills

### Build Verification
- **Verified:** `npm run build-storybook` completed successfully after Skills module changes

### Form Components — New `components/form/` Directory
- **Purpose:** Full set of themed HTML form elements matching the site's dark design system
- **Directory:** `src/stories/components/form/` — all form components live here, separate from atomic components
- **Storybook Path:** `jorgecalderon.codes > Components > Form > [component]`
- **Shared Styles:** Single Sass partial `_form.scss` with `@use 'variables' as *;`, added to `main.scss`
- **Design Tokens:**
  - `$form-radius: 10px` — matches `%btn-base` `border-radius` in `button.scss`
  - `$form-bg: $charcoal` — input backgrounds
  - `$form-border-focus: $azure-bolt` — focus ring color
  - `$form-text: $quicksilver` — input text
  - `$form-placeholder: $pewter` — placeholder text
  - Focus state: `border-color: $azure-bolt` + `box-shadow: 0 0 0 3px rgba($azure-bolt, 0.25)`
- **Components Created:**

| Component | File | Stories | Key Details |
|---|---|---|---|
| **Input** | `Input.tsx` | 7 (Default, Email, Password, WithHelperText, Error, Disabled, NoLabel) | Supports text, email, password, number, search, tel, url types; error state via `--error` modifier |
| **Textarea** | `Textarea.tsx` | 4 (Default, WithHelperText, CustomRows, Disabled) | Configurable rows, vertical resize only |
| **Select** | `Select.tsx` | 5 (Default, WithHelperText, Preselected, Disabled, WithDisabledOption) | Custom SVG dropdown arrow (Pewter, turns Azure Bolt on focus), `appearance: none` |
| **Checkbox** | `Checkbox.tsx` | 5 (Default, Checked, Disabled, DisabledChecked, Group) | Custom checkmark via `::after` pseudo-element, Azure Bolt checked state |
| **Radio** | `Radio.tsx` | 4 (Default, Preselected, Disabled, WithDisabledOption) | Radio group with `fieldset`/`legend`, inner dot via `::after`, Azure Bolt checked state |
| **Toggle** | `Toggle.tsx` | 5 (Default, Checked, Disabled, DisabledChecked, Group) | Custom track/thumb switch, `role="switch"`, thumb translates on check |

- **Controlled/Uncontrolled Fix:** Checkbox, Radio, and Toggle were initially fully controlled (passing `checked` always), which prevented visual toggling in Storybook. Fixed by conditionally spreading `{ checked }` only when the prop is explicitly provided (`!== undefined`), allowing uncontrolled behavior in stories.
- **All stories render on Obsidian background** (`#1A1A1A`) to match the Home page context
- **Files Created:**
  - `src/stories/components/form/Input.tsx` + `Input.stories.tsx`
  - `src/stories/components/form/Textarea.tsx` + `Textarea.stories.tsx`
  - `src/stories/components/form/Select.tsx` + `Select.stories.tsx`
  - `src/stories/components/form/Checkbox.tsx` + `Checkbox.stories.tsx`
  - `src/stories/components/form/Radio.tsx` + `Radio.stories.tsx`
  - `src/stories/components/form/Toggle.tsx` + `Toggle.stories.tsx`
  - `src/stories/assets/css/_form.scss`
- **Files Modified:**
  - `src/stories/assets/css/main.scss` — Added `@use 'form'`

### ContactForm Module — New Composite Section
- **Purpose:** Contact form section displayed below Skills on the Home page
- **Component:** `ContactForm` in `modules/` — assembles Input, Textarea, and Button into a two-column layout
- **Layout:** Bootstrap grid `row g-4` with `col-lg-7` (form) and `col-lg-5` (sidebar)
  - Form column: Name + Email side-by-side (`col-md-6` each), Subject full-width, Message textarea (6 rows), Send Message button (Azure Bolt)
  - Sidebar column: Azure Bolt left border accent on content wrapper
- **Heading:** Two-tone `<h2>` matching Skills/Jumbotron pattern
  - "Get in" uses `$deep-azure` (`.contact-form__heading-accent`)
  - "Touch." uses `$frost` (`.contact-form__heading-light`)
- **Sidebar Content — Three Sections:**
  1. **Intro list** (`introItems` prop) — Icon + text items with Deep Azure circular icon backgrounds (2.25rem), bold Quicksilver text. Example items: "Need help with a project?" (lightbulb), "Got ideas?" (rocket), "Want to chat Drupal?" (Drupal icon)
  2. **Closing paragraph** (`introClosing` prop) — Pewter text, lighter weight. "Or just want to say hello? Drop me a message and let's get started."
  3. **Contact details** (`details` prop) — Simple inline icon + text rows. Azure Bolt icons, Sky Blue links (hover → Azure Bolt). Items: email, GitHub, LinkedIn, location
- **Props:**
  - `heading?: React.ReactNode`
  - `introItems?: IntroItem[]` — `{ icon: string, text: string }`
  - `introClosing?: string`
  - `details?: ContactDetail[]` — `{ icon: string, text: string, href?: string }`
  - `onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void`
- **Background:** `$obsidian` on the section
- **Sidebar alignment:** Top-aligned with form labels (not vertically centered)
- **Stories:** `Default` (full sidebar with intro list, closing, and details) and `NoSidebar` (form only)
- **Files Created:**
  - `src/stories/modules/ContactForm.tsx`
  - `src/stories/modules/ContactForm.stories.tsx`
  - `src/stories/assets/css/_contact-form.scss`
- **Files Modified:**
  - `src/stories/assets/css/main.scss` — Added `@use 'contact-form'`
  - `src/stories/pages/Home.tsx` — Imported ContactForm, added below Skills with full sidebar content

### Home Page — Updated Flow
- **Page sections (top to bottom):** Header → Jumbotron → Skills → ContactForm
- **ContactForm content on Home page:**
  - Intro items: lightbulb ("Need help with a project?"), rocket ("Got ideas?"), Drupal ("Want to chat Drupal?")
  - Closing: "Or just want to say hello? Drop me a message and let's get started."
  - Details: email (hello@jorgecalderon.codes), GitHub, LinkedIn, location (Florida, USA)

### Build Verification
- **Verified:** `npm run build-storybook` completed successfully after all form components, ContactForm module, and Home page integration

---

## Session: 2025-02-05 (Part 3)

### Card Component - Charcoal Variant
- **Created:** New Charcoal card variant for use on Obsidian backgrounds
- **Design Rationale:** Needed a dark card variant that stands out against dark Obsidian page backgrounds
- **Implementation:**
  - Added `CardVariant` type: `'default' | 'charcoal'`
  - Added `variant` prop to Card component with default value `'default'`
  - Created `.card--charcoal` modifier class in `card.scss`
  - Solid charcoal background (`$charcoal`) - removed gradients per user feedback
  - Sky Blue title color (`$sky-blue`) - changed from gradient to solid color for simplicity
  - Ash body text (`$ash`)
  - Azure Bolt bottom border accent
  - Subtle border: `rgba(226, 226, 226, 0.15)`
- **Files Modified:**
  - `src/stories/components/Card.tsx` - Added variant prop and logic
  - `src/stories/assets/css/card.scss` - Added Charcoal variant styles
  - `src/stories/components/Card.stories.tsx` - Added variant control to argTypes

### Charcoal Card Variant Stories
- **Created:** Complete set of Charcoal variant stories matching all default card patterns
- **Stories Added:**
  - `CharcoalTextOnly` - Title + body text
  - `CharcoalTitleOnly` - Title alone
  - `CharcoalWithImage` - Title + text + image
  - `CharcoalWithButton` - Title + text + Azure Bolt button
  - `CharcoalWithImageAndButton` - Full card with image and button
  - `CharcoalTitleAndButton` - Compact card with title and button
  - `CharcoalButtonDeepAzure` - Card with Deep Azure button
  - `CharcoalButtonQuicksilver` - Card with Quicksilver button
- **Story Parameters:** All Charcoal stories display on Obsidian background (`#1A1A1A`) for proper contrast
- **File:** `src/stories/components/Card.stories.tsx`

### New Color Added - Sky Blue
- **Color Value:** `#75B8E6`
- **Variable Name:** `$sky-blue`
- **Description:** Light accent color
- **Usage:** Card titles in Charcoal variant
- **Files Modified:**
  - `src/stories/assets/css/_variables.scss` - Added `$sky-blue` variable
  - `src/stories/design-specs/ColorPalette.tsx` - Added to `quicksilverColors` array
  - `src/stories/design-specs/ColorPalette.stories.tsx` - Added `SkyBlue` story

### Design Iterations - Charcoal Card Title
- **Iteration 1:** Azure Bolt solid color
- **Iteration 2:** Gradient from Sky Blue to Frost
- **Iteration 3:** Three-color gradient (Deep Azure → Sky Blue → Frost)
- **Iteration 4:** Adjusted gradient stops - Sky Blue at 45% (22.5% to 67.5%)
- **Iteration 5:** Adjusted gradient stops - Sky Blue at 60% (20% to 80%)
- **Final Decision (User):** Reverted to solid Sky Blue color for simplicity
  - User commented out gradient code in `card.scss`
  - Title now uses `color: $sky-blue;` instead of gradient

### Pewter Variant Removed
- **Reason:** User feedback - "It looks ugly"
- **Removed From:**
  - `CardVariant` type (removed `'pewter'` option)
  - `card.scss` (removed `.card--pewter` styles)
  - `Card.stories.tsx` (removed Pewter variant stories and comparison)
  - `Card.stories.tsx` argTypes (removed from variant options)
- **Kept:** Only `'default'` and `'charcoal'` variants remain

### Color Palette Updates
- **Added:** Sky Blue to Design Specs color palette
- **Display:** Shows in both main Quicksilver palette story and individual SkyBlue story
- **Purpose:** Documents the new light accent color for reference

### Technical Decisions
- **Gradient vs Solid Color:** User preferred solid Sky Blue over complex gradients for title
- **Background Simplicity:** Solid charcoal background instead of gradients for cleaner look
- **Variant System:** Established pattern for creating card variants using BEM modifiers
- **Story Organization:** Grouped all Charcoal variant stories together with consistent naming

### Build Verification
- **Verified:** `npm run build-storybook` completed successfully multiple times throughout session
- **All Variants:** Both default and Charcoal variants render correctly in Storybook

---

## Session: 2025-02-05 (Part 2)

### Project Restructure - New Modules Directory
- **Created:** New `src/stories/modules/` directory for larger, composite components
- **Moved Components:** Relocated Jumbotron, BlogPostGrid, and AboutMe from `components/` to `modules/`
- **Rationale:** These are composite sections that combine multiple smaller components, distinct from atomic UI components like Button, Card, Label, Divider
- **Files Moved:**
  - `Jumbotron.tsx` + `Jumbotron.stories.tsx`
  - `BlogPostGrid.tsx` + `BlogPostGrid.stories.tsx`
  - `AboutMe.tsx` + `AboutMe.stories.tsx`

### Import Path Updates
- **Updated:** All import statements to reflect new module locations
- **Module Internal Imports:** Changed from `./Component` to `../components/Component`
  - `AboutMe.tsx`: Imports Divider, Label, Button, Card from `../components/`
  - `BlogPostGrid.tsx`: Imports Card, Divider from `../components/`
  - `Jumbotron.tsx`: Imports Button, Card, Divider from `../components/`
- **Page Imports:** Updated `Home.tsx` to import Jumbotron from `../modules/Jumbotron`
- **Storybook Titles:** Changed story titles from `Components/*` to `Modules/*`

### Button Hover Color Fix
- **Issue:** Azure Bolt button text was turning black on hover
- **Fix:** Added explicit `color: $quicksilver;` to hover states for all dark button variants
- **Affected Variants:**
  - `.btn-azure-bolt` - Added `color: $quicksilver;` to `:hover`
  - `.btn-deep-azure` - Added `color: $quicksilver;` to `:hover`
  - `.btn-obsidian` - Added `color: $quicksilver;` to `:hover`
  - `.btn-charcoal` - Added `color: $quicksilver;` to `:hover`
- **Unchanged:** `.btn-quicksilver` already had `color: $obsidian;` in hover state
- **File:** `src/stories/assets/css/button.scss`

### Documentation Updates
- **Updated:** `CLAUDE.md` to reflect new project structure
- **Added:** `modules/` directory to project layout documentation
- **Description:** "Larger, composite sections (Jumbotron, BlogPostGrid, AboutMe) + stories"

### Build Verification
- **Verified:** `npm run build-storybook` completed successfully
- **Output:** All stories properly organized under new Modules section in Storybook

---

## Session: 2025-02-05 (Part 1)

### Navigation Pills - Azure Bolt Styling
- **Changed:** Nav menu items (desktop & mobile) to match Azure Bolt button styling
- **Implementation:**
  - Added `@use 'sass:color'` to `header.scss`
  - Background: `linear-gradient(135deg, color.adjust($azure-bolt, $lightness: 5%), $azure-bolt, color.adjust($azure-bolt, $lightness: -5%))`
  - Border-bottom: `5px solid transparent` (base) → `$deep-azure` (hover)
  - Removed box-shadow from nav pills (user requested no drop shadow on text)
  - Removed `border-bottom-color` from transition list so border snaps instantly with background

### Navigation Fade-in Animation
- **Added:** Staggered fade-in for desktop menu items on page load
- **Implementation:**
  - Items start at `opacity: 0`
  - Cascade timing: Home (0.2s) → Blog (0.3s) → Portfolio (0.4s) → Contact (0.5s)
  - Pure opacity animation (no movement) via `@keyframes header-item-fade-in`
  - No fade-out on mouse interactions
- **File:** `src/stories/assets/css/header.scss`

### Card Component - Metallic Background
- **Changed:** Card background from light gradient to metallic sheen effect
- **Design:** Light metallic (not dark) - bright white highlight sweeping diagonally
- **Implementation:**
  - Layered gradients: white sheen overlay (0.9 → 0.4 opacity) + base gradient (white → quicksilver → ash → pewter)
  - Sheen positioned bottom-right via `background-position`
  - Colors: `$obsidian` (title), `$charcoal` (text), `rgba($pewter, 0.3)` (footer border)
- **Files:** `src/stories/assets/css/card.scss`

### Card Hover Animation
- **Added:** Animated metallic sheen sweep on card hover
- **Implementation:**
  - 0.4s pause, then 1s smooth sweep left across card
  - Uses `background-position` animation (200% sized gradient)
  - `@keyframes card-sheen-sweep` with hold at 0-28%, sweep to 100%
  - No reverse animation on mouse-leave (instant snap back)
- **File:** `src/stories/assets/css/card.scss`

### Home Page Updates
- **Content Changes:**
  - Heading: "Hi, I'm Jorge / I build Drupal."
  - Bio trimmed to ~50 words focusing on DevOps, design, AI usage, family
  - Featured card: "Designing with AI in Storybook" (imgStyling image)
  - Labels: AI, React, Sass
- **Layout:**
  - Removed BlogPostGrid component
  - Navigation updated to: Home, Blog, Portfolio, Contact
  - Background: `$obsidian` with `min-height: 100vh`
- **Files:** `src/stories/pages/Home.tsx`, `src/stories/assets/css/pages.scss`

### Jumbotron Enhancements
- **Ambient Glow:**
  - Added subtle glow ball (quicksilver at 0.026/0.004 opacity) via `::after` pseudo-element
  - Positioned left side at `-180px`, 600x600px radial gradient
  - Multiple opacity iterations to achieve subtle effect
- **Divider Animation:**
  - Simplified to linear 0→25% width expansion (removed bounce)
  - Timing: 1.2s ease-out with 0.4s delay
  - Margins: `0.3125rem 0 0.5625rem` (top/bottom adjusted multiple times)
- **Button Alignment:**
  - Left column: `justify-content-start` with buttons using `mt-auto`
  - Buttons rise on hover: `translateY(-3px)` (no bounce animation)
- **Files:** `src/stories/assets/css/jumbotron.scss`, `src/stories/components/Jumbotron.tsx`

### Label Component Documentation
- **Created:** `Label.mdx` component documentation page
- **Fix:** Removed `tags: ['autodocs']` from `Label.stories.tsx` to prevent 404 conflict with MDX

### Technical Patterns Established
- **BEM Naming:** `.block__element--modifier` throughout
- **Sass Partials:** Every partial that uses palette variables must include `@use 'variables' as *;`
- **Bootstrap Integration:** Pre-built CSS (no Sass compilation), avoid `!important` conflicts
- **Animation Approach:**
  - Use `@keyframes` with `forwards` for load animations
  - Use `transition` for interactive hover states
  - Instant snaps for properties that shouldn't ease (font-weight, border-color)
- **Gradient Animations:** Use `background-position` on oversized gradients (can't animate gradient angles directly)

---

## Design System Reference

### Color Usage Patterns
- **Nav/Header:** `$obsidian` background, `$quicksilver` text, `$azure-bolt` accents/active states
- **Cards (Default):** Metallic gradient from white → `$pewter`, `$obsidian` titles, `$charcoal` body text
- **Cards (Charcoal):** Solid `$charcoal` background, `$sky-blue` titles, `$ash` body text, for use on `$obsidian` backgrounds
- **Cards (Plain):** Transparent background, `$quicksilver` titles (600 weight), `$pewter` description and icon, horizontal layout, no borders/shadow/hover — for skill showcases on `$obsidian` backgrounds
- **Form Inputs:** `$charcoal` background, `$quicksilver` text, `$pewter` placeholders, `$azure-bolt` focus border + ring, `10px` border-radius (matching buttons)
- **ContactForm Sidebar:** Azure Bolt left border, Deep Azure circular icon backgrounds, `$quicksilver` intro text, `$pewter` closing text, Sky Blue links
- **Buttons:** Azure Bolt uses `color.adjust()` for lightness variations
- **Page Background:** `$obsidian` for dark themes

### Animation Timing
- **Fast interactions:** `$transition-fast` (0.2s) for hovers
- **Card sheen:** 0.4s pause + 1s sweep
- **Nav fade-in:** 0.4s duration, staggered 0.1s between items
- **Divider expand:** 1.2s ease-out with 0.4s delay

### Known Issues & Gotchas
- **Missing `@use 'variables'`:** Causes infinite preview spinner (Sass undefined variable error)
- **Bootstrap `w-25`:** Uses `!important`, blocks max-width animations - must animate `width` directly
- **Story file extensions:** `.ts` for CSF3 args-only, `.tsx` when using JSX/render functions
- **MDX vs autodocs:** Can't have both `tags: ['autodocs']` in stories AND a `.mdx` file

---

## Files Modified in Session 2025-02-05 (Part 3)
- `src/stories/components/Card.tsx` - Added CardVariant type, variant prop, variant class logic
- `src/stories/assets/css/card.scss` - Added Charcoal variant styles (solid background, Sky Blue title)
- `src/stories/components/Card.stories.tsx` - Added variant argTypes, created 8 Charcoal variant stories
- `src/stories/assets/css/_variables.scss` - Added `$sky-blue: #75B8E6`
- `src/stories/design-specs/ColorPalette.tsx` - Added Sky Blue to quicksilverColors array
- `src/stories/design-specs/ColorPalette.stories.tsx` - Added SkyBlue story

## Files Modified in Session 2025-02-05 (Part 2)
- Multiple files for project restructure (modules directory)
- `src/stories/assets/css/button.scss` - Hover color fixes
- `CLAUDE.md` - Documentation updates

## Files Modified in Session 2025-02-05 (Part 1)
- `src/stories/assets/css/header.scss` - Nav styling, fade-in animation
- `src/stories/assets/css/card.scss` - Metallic background, sheen animation
- `src/stories/assets/css/jumbotron.scss` - Glow ball, divider animation, margins
- `src/stories/assets/css/pages.scss` - Obsidian background
- `src/stories/assets/css/button.scss` - Subtle rise on hover (removed bounce)
- `src/stories/pages/Home.tsx` - Content updates, layout changes
- `src/stories/components/Jumbotron.tsx` - Button alignment, removed `w-25` from divider
- `src/stories/components/Label.mdx` - Created
- `src/stories/components/Label.stories.tsx` - Removed autodocs tag
- `src/stories/components/Jumbotron.stories.tsx` - Updated featured card content

---

## Next Session Considerations
- Portfolio page design/implementation
- Blog page layout
- Contact page with form
- Responsive behavior verification across breakpoints
- Accessibility audit (ARIA labels, keyboard nav, color contrast)
- Performance: consider reducing animation complexity on mobile
