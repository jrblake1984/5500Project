const studentCards = [
  {
    title: "Online Document Editor",
    bullets: ["No account needed", "No monitoring"],
    action: { href: "#", label: "Start Writing" },
  },
  {
    title: "Online Compiler",
    bullets: ["AI explains errors", "Supports Python, Java, C++, and more"],
    action: { href: "#", label: "Start Coding" },
  },
  {
    title: "Google Docs Extension",
    bullets: ["Easy to install", "No need to preinstall"],
    action: { href: "#", label: "Install" },
  },
  {
    title: "Process Feedback Extension",
    bullets: ["Runs locally", "Student-centered"],
    action: { href: "#", label: "Install" },
  },
];

export default function ToolsStudents() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          Our Tools for Students
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          Process Feedback works for both writing, coding, Google Docs, Canvas,
          and more. Pick the tool that fits your workflow and get started.
        </p>

        {/* Card grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {studentCards.map((card) => (
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
                href={card.action.href}
                className="mt-4 inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              >
                {card.action.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
