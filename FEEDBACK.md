# Feedback Log - Phase II

> **Course**: CMP_SCI-5500-001 · Software Engineering · Spring 2026 · UMSL
> **Team**: Project Group 2 - Abdul Rafay Ahmed Khan, Jason Blake, Rosmin Rose Binoy, Yusuf Mohamed Said Ali

---

## Midterm Feedback (March 31, 2026)

The midterm exam on March 31, 2026 surfaced the following feedback items on our Phase I website. Each was categorized, prioritized, and resolved.

| # | Category | Priority | Feedback | Fix Applied | Status |
|---|----------|----------|----------|-------------|--------|
| 1 | UI/UX | High | Site colors and page layouts do NOT match the original processfeedback.org | Updated exact color palette in all components: navbar `#88C0F9`, footer `#88C0F9`, hero `#cfe7fb`, blue sections `#F2F8FF`/`#EDF1FA`, green sections `#F2FFF8`. Fixed Hero to single-column centered layout matching original. | ✅ Fixed |
| 2 | UI/UX | High | Navigation does not match original - flat links instead of dropdown mega-menu | Rebuilt Navbar.js with full dropdown mega-menu: Student Tools, Teacher Tools, Institutions, About - each with dropdown items matching processfeedback.org structure. Desktop hover + mobile accordion. Keyboard accessible. | ✅ Fixed |
| 3 | UI/UX | Medium | Contact page does not match original - basic form only, missing 5 sections | Rebuilt /contact as ContactPage.js with all 5 original sections: Send email (copy button), Contact form (retype email field added), Schedule meeting, Careers, Social media links. | ✅ Fixed |
| 4 | Branding | Medium | Branding (logo, tagline) does not match course project requirements | Replaced generic logo with UMSL-themed maroon gear icon + "UMSL PROJECT" text. Tagline updated to reflect academic nature. | ✅ Fixed |
| 5 | Accessibility | Medium | Site not evaluated for WCAG 2.1 AA accessibility | Performed full audit (Prompt 2.1): added aria-hidden on decorative emoji, replaced dead href="#" links with real URLs, added unique aria-labels on tool cards, added aria-controls + id matching on mobile dropdowns. | ✅ Fixed |

---

## Peer Feedback

| # | Source | Feedback | Fix Applied | Status |
|---|--------|----------|-------------|--------|
| 1 | Multiple peers | Contact page was broken - form did not submit properly | Rebuilt contact form with Web3Forms integration, server-side validation, honeypot spam protection, and success/error feedback | ✅ Fixed |
| 2 | Group 1 | Hamburger menu disappearing on mobile, along with navbar and footer | Fixed mobile navbar with proper `lg:hidden` toggle, hamburger button with aria attributes, and persistent footer | ✅ Fixed |
| 3 | Nora | Bottom footer links still needed work | Rebuilt Footer.js with full 4-column grid matching original site; added `validRoutes` logic for link handling | ✅ Fixed |
| 4 | Peer (unnamed) | Last push seemed to undo a lot of progress (merge conflict damage) | Established proper branching workflow; test live site after every push, not just before deadline | ✅ Fixed (process) |
| 5 | Nora | Site resizes well between devices and is responsive _(positive)_ | No fix needed - validated responsiveness maintained | ✅ Confirmed |
| 6 | Multiple peers | Site looked good visually and on phones/other screen sizes _(positive)_ | No fix needed - layout and design quality validated by peers | ✅ Confirmed |

---

## Instructor Feedback (Midterm - March 31, 2026)

| # | Instructor | Feedback | Fix Applied | Status |
|---|-----------|----------|-------------|--------|
| 1 | Prof. Badri | Fix website colors and spacing to closely match the original ProcessFeedback website | Updated exact color palette across all components; adjusted spacing, padding, and layout to achieve pixel-level fidelity with processfeedback.org | ✅ Fixed |
| 2 | Prof. Sambridhi | Current division of work is not effective; workflow feels like waterfall - an iterative model would work better | Adopted iterative incremental model; divided remaining tasks clearly with parallel work assignments; test after every push | ✅ Fixed (process) |

---

## Self-Review / QA Findings

| # | Found By | Issue | Fix | Status |
|---|----------|-------|-----|--------|
| 1 | Self | Hero tagline disclosure too vague | Added explicit subtitle: "This project is a duplicate of a real public website created solely for academic purposes. The original website is available at www.processfeedback.org." | ✅ Fixed |
| 2 | Self | Dark mode flash of unstyled content on first load | Added anti-flash inline script in layout.js <head> that reads localStorage before React hydrates | ✅ Fixed |
| 3 | Self | Contact form missing email confirmation to prevent typos | Added "Retype email" field with client-side and server-side match validation | ✅ Fixed |
| 4 | Self | Attribution not clearly visible for section 4.2 compliance | Added global footer attribution banner + dedicated /attribution page with team info and course context | ✅ Fixed |

---

## Phase II Enhancement Proposal

**Enhancement chosen**: Dark Mode Toggle

**Proposal rationale** (documented in [IMPROVEMENTS.md](IMPROVEMENTS.md)):
- Most users prefer dark mode in low-light environments
- Lines up with WCAG 2.1 Guideline 1.4 (Distinguishable) - user control over presentation
- Shows production-level frontend engineering (context, localStorage, CSS variables)
- Easy to demo live during exam

**Status**: ✅ Implemented and deployed
