export const metadata = {
  title: "About — Course Project at UMSL",
};

export default function AboutPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Page heading */}
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          About This Project
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          This website is an academic reconstruction of processfeedback.org,
          built as a course project for CMP_SCI-5500-001 (Software Engineering),
          Spring 2026, at the University of Missouri–St. Louis (UMSL).
        </p>

        {/* Content Attribution — NON-NEGOTIABLE */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Content Attribution
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Content from{" "}
          <a
            href="https://www.processfeedback.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 underline hover:text-primary-700"
          >
            www.processfeedback.org
          </a>
        </p>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          All text, images, and design elements on this site are sourced from
          the original Process Feedback website. This project is a duplicate
          created solely for academic purposes.
        </p>

        {/* Team */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Project Group 2
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-base text-slate-600">
          <li>Rosmin Rose Binoy</li>
          <li>Jason Blake</li>
          <li>Yusuf Mohamed Said Ali</li>
          <li>Abdul Rafay Ahmed Khan</li>
        </ul>

        {/* Technology */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Technology
        </h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-base text-slate-600">
          <li>
            <span className="font-medium text-slate-700">Built with:</span>{" "}
            Next.js 16, Tailwind CSS, Vercel
          </li>
          <li>
            <span className="font-medium text-slate-700">SDLC:</span> Iterative
            Incremental
          </li>
        </ul>

        {/* Disclosure */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm leading-relaxed text-slate-500">
            This site is not affiliated with, endorsed by, or connected to
            Process Feedback in any way. It is a student project for educational
            purposes only.
          </p>
        </div>
      </div>
    </section>
  );
}
