const teacherCards = [
  {
    title: "Editor for Your Students",
    bullets: ["Takes two minutes", "Use it for entire term"],
    link: { href: "#", label: "About Editors" },
  },
  {
    title: "Create Assignments",
    bullets: ["Teacher dashboard", "Automatic process feedback"],
    link: { href: "#", label: "About Assignments" },
  },
  {
    title: "Google Docs Extension",
    bullets: ["Easy to install", "Verified Chrome Web Store Review"],
    link: { href: "#", label: "About Extension" },
  },
  {
    title: "Extension for LMS",
    bullets: ["Works in discussion boards", "Canvas, D2L, etc."],
    link: { href: "#", label: "About Extension" },
  },
];

export default function ToolsTeachers() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Tools for Teachers
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          Ask students to submit their writing process reports or, instead, have
          them complete an additional self-reflection assignment. Either way,
          Process Feedback gives teachers a window into how students work.
        </p>

        {/* Card grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {teacherCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {card.title}
              </h3>
              <ul className="mt-3 space-y-1">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L7 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={card.link.href}
                className="mt-4 inline-block text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                {card.link.label} &rarr;
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate-500">
          Not sure where to start? Learn how to try Process Feedback in a class
          by reading our{" "}
          <a
            href="#"
            className="font-medium text-primary-600 underline hover:text-primary-700"
          >
            Teacher Guides
          </a>
          .
        </p>
      </div>
    </section>
  );
}
