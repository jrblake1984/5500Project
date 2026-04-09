const studentCards = [
  {
    title: "Online Document Editor",
    bullets: ["No account needed", "No monitoring"],
    link: { href: "https://write.processfeedback.org/", label: "Start Writing", external: true },
  },
  {
    title: "Online Compiler",
    bullets: ["AI explains errors", "Supports Python, Java, C++, and more"],
    link: { href: "https://code.processfeedback.org/", label: "Start Coding", external: true },
  },
  {
    title: "Google Docs Extension",
    bullets: ["Easy to install", "No need to preinstall"],
    link: {
      href: "https://chromewebstore.google.com/detail/process-feedback-for-goog/chcbikmmlhbbdkfiaaaljabpefdfajnb",
      label: "Install Google Docs Extension",
      text: "Install",
      external: true,
    },
  },
  {
    title: "Process Feedback Extension",
    bullets: ["Runs locally", "Student-centered"],
    link: {
      href: "https://chromewebstore.google.com/detail/process-feedback/nbjgojiklfddkjphojibhjbmmmafpfgn",
      label: "Install Process Feedback Extension",
      text: "Install",
      external: true,
    },
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

export default function ToolsStudents() {
  return (
    <div className="w-screen bg-gradient-to-b from-[#EDF1FA] to-white dark:from-slate-800 dark:to-slate-900">
      <section className="pt-[40px] pb-[80px] px-4 mx-auto w-[clamp(320px,92vw,1024px)]">
        <h2 className="text-center">Our Tools for Students</h2>

        <div className="mx-auto mt-5 lg:w-[80%]">
          <p>
            Process Feedback works for both writing, coding, Google Docs, Canvas, and more. It
            shows typing time, breaks, and other writing-process data to help students reflect on
            how they worked.
          </p>
        </div>

        {/* Card grid - 2 cols on md, 4 cols on xl */}
        <div className="md:grid md:grid-cols-2 xl:grid-cols-4 auto-rows-fr gap-7 w-full mt-10">
          {studentCards.map((card) => (
            <div
              key={card.title}
              style={{
                "--card-bg-start": "#F2F8FF",
                "--card-bg-end": "#B2D6FF",
                "--card-hover-border": "#0852A6",
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
              <h3 className="w-[80%] mx-auto py-2 text-[#05448C] dark:text-blue-300 px-1 text-center items-center">
                {card.title}
              </h3>

              <ul className="text-left my-2 mb-4">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex flex-row gap-2 py-1 pr-1 leading-relaxed text-[#003066] dark:text-slate-300"
                  >
                    <ArrowIcon />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={card.link.href}
                {...(card.link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={card.link.label}
                className="whitespace-nowrap inline-flex items-center gap-2 self-start mx-auto mt-auto
                  shadow-lg py-2 px-4 rounded-full cursor-pointer
                  border border-[#D9EBFF] dark:border-slate-600
                  hover:border-[#0852A6]
                  bg-[#B2D6FF] dark:bg-slate-600
                  text-[#003066] dark:text-blue-300"
              >
                {card.link.text || card.link.label}
                <ExpandIcon />
              </a>
            </div>
          ))}
        </div>


      </section>
    </div>
  );
}
