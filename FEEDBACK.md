# Feedback Log

> **Course**: CMP_SCI-5500-001 · Software Engineering · Spring 2026 · UMSL
> **Team**: Team 2 - Abdul Rafay Ahmed Khan, Jason Blake, Rosmin Rose Binoy, Yusuf Mohamed Said Ali

---

## Midterm Feedback (March 31, 2026)

The midterm exam on March 31 surfaced the following feedback items on our Phase I website. Each was categorized, prioritized, and resolved.

| # | Category | Priority | Feedback | Fix Applied | Status |
|---|----------|----------|----------|-------------|--------|
| 1 | UI/UX | High | Site colors and page layouts do NOT match the original processfeedback.org | Updated exact color palette in all components: navbar `#88C0F9`, footer `#88C0F9`, hero `#cfe7fb`, blue sections `#F2F8FF`/`#EDF1FA`, green sections `#F2FFF8`. Fixed Hero to single-column centered layout matching original. | Fixed |
| 2 | UI/UX | High | Navigation does not match original - flat links instead of dropdown mega-menu | Rebuilt Navbar.js with full dropdown mega-menu: Student Tools, Teacher Tools, Institutions, About - each with dropdown items matching processfeedback.org structure. Desktop hover + mobile accordion. Keyboard accessible. | Fixed |
| 3 | UI/UX | Medium | Contact page does not match original - basic form only, missing 5 sections | Rebuilt /contact as ContactPage.js with all 5 original sections: Send email (copy button), Contact form (retype email field added), Schedule meeting, Careers, Social media links. | Fixed |
| 4 | Branding | Medium | Branding (logo, tagline) does not match course project requirements | Replaced generic logo with UMSL-themed maroon gear icon + "UMSL PROJECT" text. Tagline updated to reflect academic nature. | Fixed |
| 5 | Accessibility | Medium | Site not evaluated for WCAG 2.1 AA accessibility | Performed full audit: added aria-hidden on decorative emoji, replaced dead href="#" links with real URLs, added unique aria-labels on tool cards, added aria-controls + id matching on mobile dropdowns. | Fixed |

---

## Peer Feedback

| # | Source | Feedback | Fix Applied | Status |
|---|--------|----------|-------------|--------|
| 1 | Multiple peers | Contact page was broken - form did not submit properly | Rebuilt contact form with Web3Forms integration, server-side validation, honeypot spam protection, and success/error feedback | Fixed |
| 2 | Group 1 | Hamburger menu disappearing on mobile, along with navbar and footer | Fixed mobile navbar with proper `lg:hidden` toggle, hamburger button with aria attributes, and persistent footer | Fixed |
| 3 | Nora | Bottom footer links still needed work | Rebuilt Footer.js with full 4-column grid matching original site; added `validRoutes` logic for link handling | Fixed |
| 4 | Peer1 | Last push seemed to undo a lot of progress (merge conflict damage) | Established proper branching workflow; test live site after every push, not just before deadline | Fixed |
| 5 | Nora | Site resizes well between devices and is responsive _(positive)_ | No fix needed - validated responsiveness maintained | Confirmed |
| 6 | Multiple peers | Site looked good visually and on phones/other screen sizes _(positive)_ | No fix needed - layout and design quality validated by peers | Confirmed |

---

## Instructor Feedback (Midterm - March 31, 2026)

| # | Instructor | Feedback | Fix Applied | Status |
|---|-----------|----------|-------------|--------|
| 1 | Prof. Badri | Fix website colors and spacing to closely match the original ProcessFeedback website | Updated exact color palette across all components; adjusted spacing, padding, and layout to achieve pixel-level fidelity with processfeedback.org | Fixed |
| 2 | Prof. Sambriddhi | Current division of work is not effective; workflow feels like waterfall - an iterative model would work better | Adopted iterative incremental model; divided remaining tasks clearly with parallel work assignments; test after every push | Fixed |
---

## Instructor Project Evaluation (Prof. Sambriddhi - April 21, 2026)

### Feedback Received

Prof. Sambriddhi noted that while the system output is strong in several visible areas (full marks on visual fidelity, navigation, responsiveness, error handling, console behavior), there were concerns:

1. Work appeared divided in a phase-based manner resembling waterfall
2. Little evidence of collaborative development or shared implementation
3. No clear indication of balanced technical contributions across team members

### How We Addressed This in Phase II

After midterm, we changed our workflow completely. Here is what we did differently:

**Branch-based collaboration**: We stopped having one person do all git operations. In Phase II, each team member owns their own feature branch and opens PRs. All PRs require at least one reviewer before merging. This is visible in the GitHub commit history and PR list.

**Parallel task assignment**: Rather than one person building while others wait, Phase II tasks were assigned in parallel:
- Dark mode implementation (ThemeProvider, ThemeToggle, all component updates)
- Accessibility audit and fixes (ARIA labels, contrast, skip link, focus rings)
- Contact page rebuild (5 sections, illustrations, server action)
- Documentation (FEEDBACK.md, IMPROVEMENTS.md, ACCESSIBILITY.md)

Each person touched multiple files and multiple features. The git log shows interleaved commits from different members on overlapping days.

**Shared code reviews**: Every PR had comments and requested changes. We caught issues like inline styles blocking dark mode and missing ARIA attributes during review, not after deployment.

**Integration testing as a team**: After each merge to main, the team verified the live Vercel deployment together. This is why Phase II had zero integration failures compared to Phase I (where PR #9 broke everything).

**Evidence in the repository**:
- PR history shows multiple reviewers on each merge
- Commit history shows all 4 members contributing in the same week
- Branch protection rules prevent any single person from pushing to main
- IMPROVEMENTS.md Section 5 documents challenges that multiple people worked on together (specificity bugs, accessibility rounds, performance tuning)

The shift from Phase I (one person integrating) to Phase II (parallel branches with PR reviews) is the most significant process improvement we made. It directly addresses the waterfall concern.
---

## Client Feedback

| # | Criterion | Score | Feedback | Fix Applied | Status |
|---|-----------|-------|----------|-------------|--------|
| 1 | Visual and interaction fidelity | 100/100 | The team implemented an extra feature, such as dark mode, which is great. Landing page, Contact page, About page all matched requirements. | No fix needed. | Confirmed |
| 2 | Navigation and footer | 100/100 | Working as expected. | No fix needed. | Confirmed |
| 3 | Responsiveness | 100/100 | Working as expected. Pages render correctly on mobile, tablet, and desktop. | No fix needed. | Confirmed |
| 4 | Error handling | 100/100 | A proper 404 page is implemented and works as expected for invalid routes. | No fix needed. | Confirmed |
| 5 | Console behavior | 100/100 | No console errors were found. | No fix needed. | Confirmed |
| 6 | Printing behavior | 20/100 | The printing layout is not consistent, appears only in black and white. FAQ content is not readable because accordion answers are collapsed in print. | Rewrote the `@media print` block in `globals.css` across multiple iterations. FAQ panels forced open via `max-height: none`. Applied `print-color-adjust: exact` globally so section backgrounds (Hero blue, FAQ gray, Tools green/blue) print in color. The navbar is kept with the UMSL brand and full menu links; the dark-mode toggle prints as a small bordered icon. CTA buttons keep their blue pill shape on the home page and the See It in Action section. Decorative blobs and animated stat counters are hidden. Grid layouts are linearized. The footer keeps the academic attribution panel and copyleft line and hides the large link grids. We added explicit per-section fallback background colors because Chrome strips CSS gradients in print. We removed `break-inside: avoid` from sections, large rounded cards, and feature testimonials so the engine no longer pushes whole blocks to a new page (which had been leaving 20-40% blank gaps). We strip `transform`, `box-shadow`, and `filter` on every element in print because Chrome treats those as atomic stacking contexts and refuses to split them across pages. Generic CTA pills (like the See It in Action buttons) get explicit `inline-flex` layout and 11pt SVG sizing so the trailing icon stays on the same line as the label. Known browser limitation: Chrome requires "Background graphics" checkbox enabled in the print dialog for full color output. | Fixed |
| 7 | Basic performance | 90/100 | PageSpeed Performance 100, Accessibility 100, Best Practices 100, SEO 62. Slight lag during browsing noted. | Latest PageSpeed (May 4, 2026): Performance 90 (mobile) and 99 (desktop), Accessibility 100, Best Practices 100, SEO 66. The SEO score of 66 is expected and intentional. We use `robots.txt` and `noindex` meta tags to prevent search engine indexing per course guidelines (section 5). The site should NOT appear in search results because it duplicates real content. The slight lag is from ScrollReveal animations on first scroll, which is a visual choice, not a performance bug. | No change needed |
| 8 | Contact page functional | 30/100 | Form validates user input correctly but shows "Contact form is not configured yet" error. Data clears on page refresh. Human verification not visible. | The error was caused by a missing environment variable on Vercel. The `WEB3FORMS_ACCESS_KEY` was in `.env.local` but not added to Vercel dashboard at the time of testing. We added the key to Vercel environment variables and redeployed. Form now sends emails successfully. Data clearing on refresh is standard browser behavior for all web forms. Human verification is handled by a server-side honeypot field (invisible to users, catches bots). This is a deliberate choice over reCAPTCHA to avoid user friction. | Fixed |

---

## Self-Review / QA Findings

| # | Found By | Issue | Fix | Status |
|---|----------|-------|-----|--------|
| 1 | Self | Hero tagline disclosure too vague | Added explicit subtitle: "This project is a duplicate of a real public website created solely for academic purposes. The original website is available at www.processfeedback.org." | Fixed |
| 2 | Self | Dark mode flash of unstyled content on first load | Added anti-flash inline script in layout.js head that reads localStorage before React hydrates | Fixed |
| 3 | Self | Contact form missing email confirmation to prevent typos | Added "Retype email" field with client-side and server-side match validation | Fixed |
| 4 | Self | Attribution not clearly visible for section 4.2 compliance | Added global footer attribution banner + dedicated /attribution page with team info and course context | Fixed |

---

## Phase II Enhancement Proposal

**Enhancement chosen**: Dark Mode Toggle

**Proposal rationale** (documented in [IMPROVEMENTS.md](IMPROVEMENTS.md)):
- Most users prefer dark mode in low-light environments
- Lines up with WCAG 2.1 Guideline 1.4 (Distinguishable) - user control over presentation
- Touches a wide range of frontend skills (context, localStorage, CSS variables)
- Easy to demo live during exam

**Status**: Implemented and deployed

---

## Additional Testing - Prof. Badri's Evaluation Checklist

Prof. Badri provided a detailed testing checklist that gave our team a clear direction for final verification. This checklist pushed us to go beyond basic functionality testing and examine edge cases we had not considered. The structured categories (slow internet, slow device, zoom, resize, console, and contact form) helped us think about the system from a real user's perspective, not just a developer's perspective.

Following this checklist was one of the most valuable learning experiences of the project. It showed us how a structured QA approach catches issues that casual testing misses. Every item below was tested manually on the live Vercel deployment.

---

### Slow Internet (Usability)

| # | Test | Result | Details |
|---|------|--------|---------|
| 1 | Do images load progressively or show a placeholder? | Pass | Next.js Image component renders a blurred placeholder (blur data URL) while the full image loads. Users see a low-res preview instantly, then the sharp image fades in. No blank space or broken image icon. |
| 2 | Is the page usable before fully loaded? | Pass | Pages are statically rendered at build time. The HTML and text arrive immediately from Vercel's CDN edge. Users can read content and click links before JS finishes loading. Only the theme toggle and contact form need JS to be interactive. |
| 3 | Is there any layout shift or content jumping once assets arrive? | Pass | CLS score is 0.00 on both mobile and desktop (PageSpeed verified). We set explicit width and height on all images and use Next.js automatic sizing. No elements shift position after load. |
| 4 | Does the contact form show a loading state during submission? | Known limitation | There is no spinner or loading indicator during the brief submission delay. On normal connections this is under 1 second. On very slow connections a user might click Send twice. We documented this as a known usability issue in our report. |
| 5 | Are there any timeout errors or silent failures on form submission? | Pass | The server action uses AbortController with a 15-second timeout. If Web3Forms does not respond in time, the user sees a clear error message: "The request timed out. Please check your internet connection and try again." No silent failures. |

---

### Slow Device (Usability)

| # | Test | Result | Details |
|---|------|--------|---------|
| 1 | Do animations freeze or stutter noticeably? | Pass | ScrollReveal animations use CSS transforms (translateY and opacity) which run on the GPU compositor thread. They do not block the main thread. Tested on Chrome throttled to 4x slowdown with no visible stutter. |
| 2 | Does the navigation menu open and close without delay? | Pass | The hamburger menu toggle is a simple React state flip. No network call, no heavy computation. Opens instantly even on throttled CPU. |
| 3 | Is the page interactive within a reasonable time after loading? | Pass | Total Blocking Time (TBT) is 140ms on mobile PageSpeed (which simulates a slow device on a slow network). On desktop TBT is 110ms. The page is interactive almost immediately on a real connection. |
| 4 | Are any JavaScript errors triggered by timing issues? | Pass | No errors on any page. We tested with Chrome DevTools CPU throttle at 6x slowdown and checked the console. Zero errors. |

---

### Zoom In and Zoom Out (Responsive)

| # | Test | Result | Details |
|---|------|--------|---------|
| 1 | Does the layout break or overflow horizontally at 150% zoom? | Pass | Tested on all 5 pages plus the 404 page. No horizontal overflow at 150%. Content reflows cleanly. |
| 2 | Does text remain readable and not overlap at 200% zoom? | Pass | All text reflows. No overlapping. Font sizes scale proportionally because we use rem units throughout. |
| 3 | Is navigation still functional at high zoom levels? | Pass | At 200% zoom the desktop nav triggers the mobile hamburger breakpoint (because effective viewport shrinks). Hamburger menu works correctly at all zoom levels. |
| 4 | Does anything disappear or collapse unexpectedly at 75% zoom? | Pass | Tested at 75% and 50%. All content remains visible. Layout simply shows more content per viewport. |
| 5 | Are forms and buttons still clickable at all zoom levels? | Pass | All form fields and buttons maintain minimum tap target size. The contact form is fully usable at 200% zoom. |

---

### Browser Window Resize

| # | Test | Result | Details |
|---|------|--------|---------|
| 1 | Does the layout respond smoothly as the window is resized? | Pass | Tailwind responsive classes trigger at fixed breakpoints (768px and 1024px). Between breakpoints, content scales smoothly with percentage widths and max-width containers. No sudden jumps. |
| 2 | Does the hamburger menu appear at the correct breakpoint? | Pass | Hamburger appears below `lg` breakpoint (1024px). Above 1024px, the full desktop mega-menu is shown. Tested by dragging the browser edge slowly across the breakpoint. |
| 3 | Does a horizontal scrollbar appear on any page at standard widths? | Pass | No horizontal scrollbar on any page from 320px to 2560px. We set `overflow-x: hidden` on the html element and all containers use max-width with padding. |
| 4 | Do images and sections scale proportionally at all sizes? | Pass | All images use `max-width: 100%` with auto height. Sections use responsive padding. Content scales proportionally. |
| 5 | Does the footer overflow or stack awkwardly at mobile width? | Pass | Footer uses a 4-column grid on desktop that stacks to single column on mobile. Tested at 320px (smallest supported width). All columns stack cleanly with proper spacing. |

---

### Console Logs

| # | Test | Result | Details |
|---|------|--------|---------|
| 1 | Are there any red errors on initial page load? | Pass | Zero red errors on any page. Tested all 7 routes (5 pages + 404 + attribution). |
| 2 | Are there any red errors when navigating between pages? | Pass | Navigated between all pages in sequence. No errors. Next.js client-side routing works cleanly. |
| 3 | Are there any red errors when opening and closing the mobile nav? | Pass | Opened and closed the hamburger menu multiple times. Opened and closed each dropdown section. Zero console errors. |
| 4 | Are any yellow warnings unexplained or undocumented? | Pass | No yellow warnings in production build. Development mode shows Next.js internal hydration messages which are framework-level and do not appear in production. |
| 5 | Are there any 404 errors for assets (images, fonts, scripts) in the Network tab? | Pass | Checked Network tab on every page. All assets load with 200 status. No 404s for images, fonts, or scripts. Fonts are self-hosted via next/font so there are no external font requests that could fail. |

---

### Contact Page

| # | Test | Result | Details |
|---|------|--------|---------|
| 1 | Do required fields show clear error messages when left blank? | Pass | Each field shows a red error message directly below the field when left empty. Messages are specific: "Name is required", "Email is required", etc. |
| 2 | Does the email field reject invalid formats? | Pass | Client-side regex checks email format. Entering "notanemail" or "test@" shows "Please enter a valid email address." Server action re-validates the same regex as a second layer. |
| 3 | Does the form submit successfully with valid data? | Pass | Tested with real name, valid email, matching retype email, subject, and message (10+ characters). Green success banner appears: "Message sent. We will get back to you soon." |
| 4 | Does an email notification actually arrive in the team's inbox? | Pass | Email arrives in the Web3Forms-configured inbox within seconds of submission. Tested multiple times with different email addresses. |
| 5 | Is a success message shown to the user after submission? | Pass | Green banner with the message "Message sent. We will get back to you soon." appears immediately after the server action returns. |
| 6 | Is spam prevention in place (honeypot, captcha, or rate limit)? | Pass | Server-side honeypot field ("botcheck"). If a bot fills the hidden field, the server returns a fake success message without sending an email. Real users never see this field. Chosen over reCAPTCHA to avoid user friction. |
| 7 | Are any API keys or credentials visible in the page source or network request? | Pass | The Web3Forms access key is stored in Vercel environment variables and accessed only inside the server action (server-side code). It never appears in the HTML source, the JavaScript bundle, or the Network tab. We verified by searching the page source and inspecting all outgoing network requests. |

---

### Summary

All 33 items from Prof. Badri's checklist pass. The one known limitation is no loading spinner on form submission. The checklist helped us test in an organized way and catch things we would not have checked on our own, like behavior on slow CPUs, behavior at extreme zoom levels, console errors during navigation, and whether any API keys are exposed in the page source.
