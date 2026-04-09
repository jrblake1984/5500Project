import Link from "next/link";

// Pages that actually exist in src/app/ - use <Link> only for these
const validRoutes = new Set(["/", "/about", "/attribution", "/contact", "/docs", "/privacy"]);

// ── Row 1 columns (desktop) ──
const row1 = [
  {
    heading: "Teacher Tools",
    links: [
      { href: "/editor", label: "Create an Editor" },
      { href: "/assignment", label: "Create an Assignment" },
      { href: "/gdocs", label: "Google Docs Extension" },
    ],
  },
  {
    heading: "Student Tools",
    links: [
      { href: "https://app.processfeedback.org/writing", label: "Writing Editor", external: true },
      { href: "https://app.processfeedback.org/coding", label: "Online Compiler", external: true },
      { href: "/gdocs", label: "For Google Docs", ariaLabel: "Google Docs Extension" },
      { href: "/vscode", label: "For VS Code" },
      { href: "/word", label: "For Microsoft Word" },
      { href: "/extension", label: "Process Feedback Extension" },
    ],
  },
  {
    heading: "Institutions",
    links: [
      { href: "/canvas", label: "Canvas Users" },
      { href: "/d2l", label: "D2L Users" },
      { href: "/moodle", label: "Moodle Users" },
      { href: "/blackboard", label: "Blackboard Users" },
      { href: "/gdocs", label: "Google Docs Users", ariaLabel: "Google Docs Extension" },
      { href: "/lti", label: "LTI Access" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/about", label: "About the Project" },
      { href: "/research", label: "Related Research" },
      { href: "https://www.processfocus.org", label: "Blog Articles", external: true },
      { href: "/team", label: "Team" },
    ],
  },
];

// ── Row 2 columns (desktop) ──
const row2 = [
  {
    heading: "Teacher Guides",
    links: [
      { href: "/samples", label: "Samples" },
      { href: "https://dateful.com/eventlink/1050208120", label: "Upcoming Webinar", external: true },
      { href: "/docs/teachers", label: "Guides & Tutorials", ariaLabel: "Teacher Guides" },
    ],
  },
  {
    heading: "Student Guides",
    links: [
      { href: "/why-use-process-feedback", label: "Why Use It" },
      { href: "#coming-soon", label: "Online Course", comingSoon: true },
      { href: "/docs/students", label: "Student Guides" },
    ],
  },
  {
    heading: "General",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/docs/institutions", label: "Institutional Docs" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  {
    heading: "Contact Us",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "https://cal.com/badri/30min", label: "Schedule a Meeting", external: true },
    ],
  },
];

// Helper to render a link item matching original style
function NavLink({ href, label, external, comingSoon, ariaLabel }) {
  const spanClass = "text-blue-950 dark:text-slate-200 hover:text-blue-800 dark:hover:text-blue-300";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="nounderline hover:underline hover:text-blue-800 dark:hover:text-blue-300" aria-label={ariaLabel || undefined}>
        <span className={spanClass}>{label}</span>
      </a>
    );
  }
  if (comingSoon) {
    return (
      <a href={href} className="nounderline hover:underline hover:text-blue-800 dark:hover:text-blue-300 coming-soon-link" data-coming-soon="true" aria-label={ariaLabel || undefined}>
        <span className={spanClass}>{label}</span>
      </a>
    );
  }
  if (validRoutes.has(href)) {
    return (
      <Link href={href} className="nounderline hover:underline hover:text-blue-800 dark:hover:text-blue-300" aria-label={ariaLabel || undefined}>
        <span className={spanClass}>{label}</span>
      </Link>
    );
  }
  return (
    <a href={href} className="nounderline hover:underline hover:text-blue-800 dark:hover:text-blue-300" aria-label={ariaLabel || undefined}>
      <span className={spanClass}>{label}</span>
    </a>
  );
}

const teamMembers = [
  "Rosmin Rose Binoy",
  "Jason Blake",
  "Yusuf Mohamed Said Ali",
  "Abdul Rafay Ahmed Khan",
];

export default function Footer() {
  return (
    <section className="bg-websiteFooter dark:bg-slate-800">
      <footer className="flex flex-col items-center justify-center py-10 w-[clamp(320px,92vw,1024px)] max-w-[1280px] mx-auto px-4">

        {/* -- DESKTOP: Row 1 - Primary sections -- */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 w-full mb-8">
          {row1.map((col) => (
            <div key={col.heading} className="text-left">
              <p className="font-semibold uppercase text-blue-950/90 dark:text-slate-300 my-3">{col.heading}</p>
              <ul className="nav-list">
                {col.links.map((link) => (
                  <li key={link.label} className="py-1">
                    <NavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* -- DESKTOP: Row 2 - Subsections -- */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 w-full mb-10">
          {row2.map((col) => (
            <div key={col.heading} className="text-left">
              <p className="font-semibold uppercase text-blue-950/90 dark:text-slate-300 my-3">{col.heading}</p>
              <ul className="nav-list">
                {col.links.map((link) => (
                  <li key={link.label} className="py-1">
                    <NavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── MOBILE: All sections fully expanded ── */}
        <div className="md:hidden w-full mb-4">
          {[...row1, ...row2].map((col) => (
            <div key={col.heading} className="mb-5">
              <p className="font-semibold uppercase text-blue-950/90 dark:text-slate-300 mb-1 text-sm">{col.heading}</p>
              <ul className="nav-list mb-8">
                {col.links.map((link) => (
                  <li key={link.label} className="py-0.5 text-sm">
                    <NavLink {...link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* -- Academic attribution (required by project guidelines section 4.2) -- */}
        <div className="w-full mb-6 rounded-lg border border-blue-100 dark:border-slate-600 bg-blue-50 dark:bg-slate-800 px-5 py-4">
          <p className="text-sm leading-relaxed text-blue-950 dark:text-slate-200">
            <span className="font-semibold">Course Project at UMSL</span>
            {" - "}Content from{" "}
            <a href="https://www.processfeedback.org" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200 transition-colors">
              www.processfeedback.org
            </a>
            {" "}used solely for academic purposes.{" "}
            <Link href="/attribution" className="underline text-blue-800 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200 transition-colors font-medium">
              View full attribution
            </Link>.
          </p>
          <p className="mt-1 text-xs text-blue-900/80 dark:text-slate-400">
            Team: {teamMembers.join(" · ")} · CMP_SCI-5500-001 · Software Engineering · Spring 2026 · UMSL
          </p>
        </div>

        <hr className="border-t border-white/25 w-full" />

        {/* ── BOTTOM BAR ── */}
        <div className="w-full mt-6 lg:flex items-center justify-between text-sm">
          <div className="flex text-left flex-wrap gap-x-2">
            <span>No copyrights;</span>
            <a href="/copyleft" className="text-blue-800 dark:text-blue-300 underline hover:text-blue-600 dark:hover:text-blue-200 transition-colors">Copyleft</a>
            <span><span className="copyleft">©</span> 2025, Process Feedback, LLC</span>
            <span className="opacity-80">•</span>
            <a href="/privacy" className="text-blue-950 dark:text-slate-200 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Privacy Policy</a>
            <span className="opacity-80">•</span>
            <a href="/terms" className="text-blue-950 dark:text-slate-200 hover:underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Terms of Use</a>
          </div>

          {/* Social icons - white icon on blue-600 circle (matching original) */}
          <div className="flex gap-2 flex-shrink-0 max-lg:mt-5">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/processfeedback" aria-label="Facebook"
              className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 hover:opacity-80">
              <svg className="text-white w-3.5 h-3.5" fill="currentColor" viewBox="0 0 320 512" aria-hidden="true">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://x.com/processfeedback" aria-label="Twitter"
              className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 hover:opacity-80">
              <svg className="text-white w-3.5 h-3.5" fill="currentColor" viewBox="0 0 512 512" aria-hidden="true">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/process-feedback/" aria-label="LinkedIn"
              className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 hover:opacity-80">
              <svg className="text-white w-3.5 h-3.5" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@ProcessFeedback" aria-label="Youtube"
              className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 hover:opacity-80">
              <svg className="text-white w-3.5 h-3.5" fill="currentColor" viewBox="0 0 576 512" aria-hidden="true">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
