export const metadata = {
  title: "Attribution - Course Project at UMSL",
};

export default function AttributionPage() {
  return (
    <section className="bg-white dark:bg-slate-900 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">

        {/* Page heading */}
        <h1 className="text-3xl font-bold tracking-tight text-[#003066] dark:text-blue-300 sm:text-4xl">
          Content Attribution
        </h1>

        <p className="mt-6 text-base leading-relaxed text-[#213547] dark:text-slate-300">
          This website is a course project created by students at the University
          of Missouri-St. Louis (UMSL) for academic purposes only. It is not
          affiliated with, endorsed by, or representative of Process Feedback,
          LLC.
        </p>

        {/* Original source */}
        <div className="mt-10 rounded-xl border border-[#D9EBFF] dark:border-slate-700 bg-[#F2F8FF] dark:bg-slate-800 p-6">
          <h2 className="text-lg font-semibold text-[#003066] dark:text-blue-300">
            Original Website
          </h2>
          <p className="mt-2 text-base leading-relaxed text-[#213547] dark:text-slate-300">
            All text content, images, and illustrations used on this website are
            sourced from the original website:
          </p>
          <a
            href="https://www.processfeedback.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-base font-semibold text-[#0B4A97] dark:text-blue-400 underline hover:text-[#083a77]"
          >
            www.processfeedback.org
            <span className="text-xs" aria-hidden="true">↗</span>
          </a>
          <p className="mt-3 text-sm leading-relaxed text-[#213547] dark:text-slate-400">
            The original website and all its content are the property of Process
            Feedback, LLC. No ownership of the original content is claimed or
            implied by this project. All trademarks, branding, and original
            content belong to their respective owners.
          </p>
        </div>

        {/* Purpose */}
        <h2 className="mt-10 text-xl font-semibold text-[#003066] dark:text-blue-300">
          Purpose of This Project
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[#213547] dark:text-slate-300">
          This project was built solely for educational purposes as part of
          CMP_SCI-5500-001 (Software Engineering), Spring 2026, at UMSL. The
          goal was to reconstruct a real-world public website to demonstrate
          skills in software engineering, responsive design, component-based
          architecture, accessibility (WCAG 2.1 AA), and iterative development
          practices.
        </p>
        <p className="mt-3 text-base leading-relaxed text-[#213547] dark:text-slate-300">
          Content from{" "}
          <a href="https://www.processfeedback.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-200">
            www.processfeedback.org
          </a>{" "}
          is used under the understanding that this is a non-commercial, academic
          reproduction with full attribution provided as required by the course
          guidelines.
        </p>

        {/* Course guideline reference */}
        <h2 className="mt-10 text-xl font-semibold text-[#003066] dark:text-blue-300">
          Course Guidelines
        </h2>
        <p className="mt-3 text-base leading-relaxed text-[#213547] dark:text-slate-300">
          This project follows the attribution requirements defined by the
          instructor at:
        </p>
        <a
          href="https://processfeedback.org/docs/umsl-course-project/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#0B4A97] dark:text-blue-400 underline hover:text-[#083a77]"
        >
          processfeedback.org/docs/umsl-course-project
          <span className="text-xs" aria-hidden="true">↗</span>
        </a>

        {/* Project team */}
        <h2 className="mt-10 text-xl font-semibold text-[#003066] dark:text-blue-300">
          Project Team - Group 2
        </h2>
        <ul className="mt-3 space-y-1 text-base text-[#213547] dark:text-slate-300">
          <li>Rosmin Rose Binoy</li>
          <li>Jason Blake</li>
          <li>Abdul Rafay Ahmed Khan</li>
          <li>Yusuf Mohamed Said Ali</li>
        </ul>
        <p className="mt-3 text-sm text-[#213547]/60 dark:text-slate-500">
          CMP_SCI-5500-001 · Software Engineering · Spring 2026 ·
          University of Missouri-St. Louis
        </p>

        {/* Disclaimer */}
        <div className="mt-10 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30 p-6">
          <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-300">
            <span className="font-semibold">Disclaimer:</span> This site is not
            affiliated with, endorsed by, or officially connected to Process
            Feedback or its creators. It is a student project for academic
            evaluation only and is not intended for public or commercial use.
          </p>
        </div>

      </div>
    </section>
  );
}
