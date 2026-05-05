# ProcessFeedback.org Reconstruction - Course Project

A reconstruction of [processfeedback.org](https://www.processfeedback.org) built for a university software engineering course.

## Course

CMP_SCI-5500-001 · Software Engineering · Spring 2026 · UMSL

## Team

**Team 2**

- Abdul Rafay Ahmed Khan
- Jason Blake
- Rosmin Rose Binoy
- Yusuf Mohamed Said Ali

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Contact Form**: Web3Forms

## Attribution

Content from [www.processfeedback.org](https://www.processfeedback.org). This project is a duplicate of a real public website created solely for academic purposes.

## SDLC

Iterative Incremental

## Search Engine Indexing

This site uses `robots.txt` and `noindex` meta tags to prevent search engine indexing. The site is not intended to appear in search results.

## Known Console Warnings

Audited March 2026. No console errors or non-critical warnings found. The project uses no third-party libraries beyond Next.js 16, Tailwind CSS 4, and React 19. All warnings from those frameworks were resolved during development.

## PageSpeed Insights (May 4, 2026)

Lighthouse 13.0.1, Slow 4G throttling on Mobile, custom throttling on Desktop. Single page load on `/`.

| Category | Mobile | Desktop |
|---|---|---|
| Performance | 90 | 99 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 66 (intentional - blocked from indexing per guidelines section 5) | 66 |

Mobile core web vitals:

| Metric | Value |
|---|---|
| First Contentful Paint | 1.7s |
| Speed Index | 4.2s |
| Largest Contentful Paint | 3.0s |
| Total Blocking Time | 140ms |
| Cumulative Layout Shift | 0.00 |

Desktop core web vitals:

| Metric | Value |
|---|---|
| First Contentful Paint | 0.4s |
| Speed Index | 0.8s |
| Largest Contentful Paint | 0.5s |
| Total Blocking Time | 110ms |
| Cumulative Layout Shift | 0.00 |

---

## Phase II Enhancements

### Dark Mode Toggle
- System-aware dark/light theme with manual toggle
- Persists user preference across sessions (localStorage)
- Respects OS-level dark mode preference on first visit

### Accessibility (WCAG 2.1 AA)
- Full audit using Lighthouse, keyboard testing, and screen reader
- All pages score 100 on Lighthouse accessibility (mobile and desktop, May 4, 2026)
- Full report: [ACCESSIBILITY.md](ACCESSIBILITY.md)

### Documentation
- [ACCESSIBILITY.md](ACCESSIBILITY.md) - WCAG 2.1 AA audit report
- [FEEDBACK.md](FEEDBACK.md) - Feedback log with all fixes
- [IMPROVEMENTS.md](IMPROVEMENTS.md) - Detailed improvements and decisions

