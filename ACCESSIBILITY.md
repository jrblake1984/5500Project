# Accessibility Evaluation Report (WCAG 2.1 AA)

## Overview

This report covers the accessibility evaluation we did on the Process Feedback course project website (processfeedback-project on Vercel). Team 2 performed this evaluation as part of Phase II of CMP_SCI-5500-001 (Software Engineering), Spring 2026, UMSL.

Pages evaluated: Home (`/`), Contact (`/contact`), About (`/about`), Privacy (`/privacy`), Docs (`/docs`), 404 (not found).

---

## Tools Used

| Tool | Purpose |
|------|---------|
| Google Chrome Lighthouse | Automated accessibility scoring |
| Manual keyboard testing | Tab navigation, focus visibility, keyboard traps |
| Windows Narrator | Screen reader compatibility |
| Chrome DevTools (Contrast) | Color contrast verification |

---

## Lighthouse Scores (After Fixes)

Latest run: May 4, 2026 with Lighthouse 13.0.1.

| Page | Score | Issues Found | Issues Fixed |
|------|-------|-------------|--------------|
| Home (`/`) | 100 | 5 | 5 |
| Contact (`/contact`) | 100 | 2 | 2 |
| About (`/about`) | 100 | 1 | 1 |
| Privacy (`/privacy`) | 100 | 1 | 1 |
| Docs (`/docs`) | 100 | 0 | 0 |
| 404 | 100 | 0 | 0 |

---

## Issues Found and Fixed

The "WCAG Criterion" column below references official success criterion IDs from the [W3C Web Content Accessibility Guidelines (WCAG) 2.1 specification](https://www.w3.org/TR/WCAG21/). Each ID maps to a named rule in the spec (for example, `1.3.1 Info and Relationships` is Level A, `2.4.6 Headings and Labels` is Level AA).

| # | Issue | WCAG Criterion | Page(s) | Fix Applied |
|---|-------|---------------|---------|-------------|
| 1 | Decorative emoji icons in flow steps did not have `aria-hidden="true"` - screen readers were reading out emoji names | 1.3.1 Info and Relationships | Home (`/`) | Added `aria-hidden="true"` to emoji `<span>` elements in `WhatIsPF.js` |
| 2 | Tool card CTA links used `href="#"` (dead anchors) - keyboard users had no real destination | 2.4.4 Link Purpose | Home (`/`) | Replaced all `href="#"` with real paths (`/editor`, `/assignment`, `/gdocs`, `/extension`) and external URLs in `ToolsTeachers.js` and `ToolsStudents.js` |
| 3 | Two "About Extension" links and two "Install" links had the same accessible names - screen reader users could not tell them apart | 2.4.6 Headings and Labels | Home (`/`) | Updated `aria-label` and `label` values to be unique and descriptive ("About Google Docs Extension" vs "About LMS Extension") |
| 4 | Mobile dropdown buttons in Navbar did not have `aria-controls` - assistive tech could not link the button to the panel it opens | 4.1.2 Name, Role, Value | All pages | Added `aria-controls` with matching `id` to mobile dropdown buttons and panels in `Navbar.js` |
| 5 | External links in `ToolsStudents.js` did not have `rel="noopener noreferrer"` and did not tell screen readers the link opens in a new tab | 2.4.4 Link Purpose | Home (`/`) | Added `target="_blank" rel="noopener noreferrer"` and `aria-label="... (opens in new tab)"` to all external links |

---

## Manual Testing Results

### Keyboard Navigation

| Test | Result |
|------|--------|
| All links reachable via Tab | PASS |
| Visible focus ring on all elements | PASS |
| Skip-to-content link works | PASS |
| Hamburger menu keyboard accessible | PASS |
| FAQ accordion keyboard accessible | PASS |
| No keyboard traps | PASS |
| Dark mode toggle reachable via Tab | PASS |
| Escape key closes open dropdowns | PASS |

### Screen Reader (Windows Narrator)

| Test | Result |
|------|--------|
| Page titles announced | PASS |
| Heading hierarchy read correctly | PASS |
| Images described meaningfully | PASS |
| Form labels announced | PASS |
| Accordion state announced | PASS |
| Dark mode toggle label announced | PASS |
| Skip link announced | PASS |

### Color Contrast (4.5:1 minimum for AA)

| Element | Foreground | Background | Ratio | Pass? |
|---------|-----------|-----------|-------|-------|
| Body text | #374151 (gray-700) | #FFFFFF | 10.69:1 | PASS |
| Navbar text | #003066 | #88C0F9 | 8.14:1 | PASS |
| Hero heading | #0B4A97 | #cfe7fb | 8.28:1 | PASS |
| Secondary text | #4B5563 (gray-600) | #FFFFFF | 7.07:1 | PASS |

### Zoom Test (200%)

| Test | Result |
|------|--------|
| Content readable at 200% | PASS |
| No horizontal scroll | PASS |
| No overlapping elements | PASS |

---

## Structural Accessibility (Pre-existing from Phase I)

These items were already correctly implemented and passed evaluation without changes:

| Feature | Implementation | Status |
|---------|---------------|--------|
| Skip-to-content link | `<a href="#main" className="skip-link">` in layout | Pass |
| `lang="en"` on `<html>` | `<html lang="en">` in layout | Pass |
| `<main id="main">` landmark | `<main id="main">` wrapping page content | Pass |
| Visible focus ring | `:focus-visible { outline: 2px solid #2563eb; }` in globals.css | Pass |
| Print CSS | Hides nav/buttons/skip-link, forces light background | Pass |
| FAQ accordion ARIA | `aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby` | Pass |
| Navbar hamburger | `aria-expanded`, `aria-controls="mobile-menu"`, `aria-label` | Pass |
| Desktop dropdown ARIA | `aria-expanded`, `aria-haspopup="true"`, `aria-controls` | Pass |
| Contact form labels | All fields have `<label htmlFor>`, `aria-required="true"` | Pass |
| Form status messages | `role="status" aria-live="polite"` (success) and `role="alert"` (error) | Pass |
| Image alt text | All `<Image>` components have descriptive `alt` attributes | Pass |
| Heading hierarchy (h1 to h2 to h3) | Verified on all 6 pages - no skipped levels | Pass |
| Page `<title>` metadata | Unique and descriptive per page | Pass |
| Decorative SVGs | `aria-hidden="true"` on all decorative icon SVGs | Pass |

---

## Summary

We took care of accessibility from the start in Phase I, so the site was already in good shape before Phase II testing. During Phase II, we found and fixed four more issues through code review: decorative emoji that screen readers were reading aloud, dead anchor links, duplicate link labels, and missing `aria-controls` on mobile nav buttons. After those fixes plus a final cleanup pass, every page scores 100 on Lighthouse accessibility (verified May 4, 2026 on both mobile and desktop).
