const teacherCards = [
  {
    title: "Editor for Your Students",
    bullets: ["Takes two minutes", "Use it for entire term"],
    link: { href: "/editor", label: "Create an Editor", text: "About Editors" },
  },
  {
    title: "Create Assignments",
    bullets: ["Teacher dashboard", "Automatic process feedback"],
    link: { href: "/assignment", label: "Create an Assignment", text: "About Assignments" },
  },
  {
    title: "Google Docs Extension",
    bullets: ["Easy to install", "No need to preinstall"],
    link: { href: "/gdocs", label: "Google Docs Extension", text: "About Extension" },
  },
  {
    title: "Extension for LMS",
    bullets: ["Works in discussion boards", "Canvas, D2L, etc."],
    link: { href: "/extension", label: "Process Feedback Extension", text: "About Extension" },
  },
];

const ArrowIcon = () => (
  <svg
    className="opacity-50 flex-shrink-0 mt-1"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const ExpandIcon = () => (
  <svg
    className="opacity-80"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v7h-7" />
    <path d="M3 10V3h7" />
    <path d="M3 21h7v-7" />
  </svg>
);

export default function ToolsTeachers() {
  return (
    <div className="w-screen bg-gradient-to-b from-[#E6FFF1] to-white dark:from-slate-800 dark:to-slate-900">
      <section className="pt-[40px] pb-[80px] px-4 mx-auto w-[clamp(320px,92vw,1024px)]">
        <h2 className="text-center">Our Tools for Teachers</h2>

        <div className="mx-auto mt-5 lg:w-[80%]">
          <p>
            Ask students to submit their writing process reports or, instead,
            have them complete an additional self-reflection assignment. For
            large classes, our{" "}
            <a
              href="https://processfeedback.org/docs/i-have-a-large-class/"
              target="_blank"
              rel="noopener noreferrer"
            >
              teacher dashboard
            </a>{" "}
            provides a summary of all your students&apos; writing processes in
            one place.
          </p>
        </div>

        {/* Card grid - 2 cols on md, 4 cols on xl */}
        <div className="md:grid md:grid-cols-2 xl:grid-cols-4 auto-rows-fr gap-7 w-full mt-10">
          {teacherCards.map((card) => (
            <div
              key={card.title}
              style={{
                "--card-bg-start": "#F2FFF8",
                "--card-bg-end": "#B2FFD6",
                "--card-hover-border": "#078C45",
                "--hover-rotate": "-2deg",
                "--hover-duration": "0.2s",
              }}
              className="shadow-lg rounded-4xl py-6 px-0 flex flex-col mt-4
                bg-gradient-to-b from-[var(--card-bg-start)] to-[var(--card-bg-end)]
                dark:from-slate-700 dark:to-slate-800
                border border-gray-300 dark:border-slate-600
                hover:border-[var(--card-hover-border)]
                transition-transform hover:rotate-[var(--hover-rotate)]
                duration-[var(--hover-duration)]"
            >
              <h3 className="w-[80%] mx-auto py-2 text-[#037337] dark:text-green-300 px-1 text-center items-center">
                {card.title}
              </h3>

              <ul className="text-left my-2 mb-4">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex flex-row gap-2 py-1 pr-1 leading-relaxed text-[#00592A] dark:text-slate-300"
                  >
                    <ArrowIcon />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={card.link.href}
                aria-label={card.link.label}
                className="whitespace-nowrap inline-flex items-center gap-2 self-start mx-auto mt-auto
                  shadow-lg py-2 px-4 rounded-full cursor-pointer
                  border border-[#E6FFF1] dark:border-slate-600
                  hover:border-[#078C45]
                  bg-[#B2FFD6] dark:bg-slate-600
                  text-[#00592A] dark:text-green-300"
              >
                {card.link.text || card.link.label}
                <ExpandIcon />
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 text-center">
          <p>
            <strong>Not sure where to start?</strong> Learn how to try Process
            Feedback in a class by reading our{" "}
            <strong>
              <a href="/docs/teachers">Teacher Guides</a>
            </strong>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
