import Image from "next/image";

export const metadata = {
  title: "About - Course Project at UMSL",
};

/* -- Arrow-right icon matching original (FaArrowRight, color #0852A6) -- */
function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 text-lg shrink-0 mt-1 text-[#0852A6] dark:text-blue-300"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      aria-hidden="true"
    >
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* â”€â”€ Page header with gradient ellipse background â”€â”€ */}
      <section className="relative pt-8 md:pt-[60px] pb-6 md:pb-10 overflow-hidden flex items-center justify-center bg-[#EDF1FA] dark:bg-slate-800">
        {/* Concentric ellipse overlays matching the original */}
        {Array.from({ length: 30 }, (_, i) => {
          const t = i / 29;
          const w = 160 - 130 * t;
          const left = -30 + 65 * t;
          const top = 30 + 75 * t;
          const r = Math.round(231 - 52 * t);
          const g = Math.round(237 - 26 * t);
          const b = Math.round(251 + 3 * t);
          return (
            <div
              key={i}
              className="absolute z-0 rounded-full"
              style={{
                width: `${w}%`,
                aspectRatio: "4 / 1.1",
                top: `${top}%`,
                left: `${left}%`,
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                opacity: t,
              }}
            />
          );
        })}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
          <h1 className="opacity-80 text-5xl max-w-4xl mx-auto text-[#003f81] dark:text-blue-200">
            About Process Feedback
          </h1>
          <p className="opacity-80 mt-4">
            How Process Feedback started, the research behind it, and our principles
          </p>
        </div>
      </section>

      {/* â”€â”€ Section 1: Grounded in research â”€â”€ */}
      <section className="bg-white dark:bg-slate-900 pt-10 pb-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-bold text-[#003066] dark:text-blue-300">Grounded in research</h2>

          {/* First paragraph - full width */}
          <div className="mt-1 text-left">
            <p>
              Process Feedback was conceived by{" "}
              <a
                href="https://www.badriadhikari.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Badri Adhikari
              </a>{" "}
              in January 2023, when generative AI began rapidly entering classrooms. The
              project was soon featured in{" "}
              <a
                href="https://blogs.umsl.edu/news/2023/05/19/badri-adhikari-develops-online-tool-process-feedback/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UMSL Daily News
              </a>{" "}
              and{" "}
              <a
                href="https://teaching.missouri.edu/blog/faculty-spotlight-badri-adhikari"
                target="_blank"
                rel="noopener noreferrer"
              >
                Missouri Online
              </a>
              .
            </p>
          </div>

          {/* Image LEFT + second paragraph RIGHT */}
          <div className="mt-6 flex flex-col lg:flex-row gap-10">
            <div className="my-2 mx-auto self-end">
              <Image
                src="/images/about/innovator-thinking.webp"
                alt="A man with hands in chin looking at a light bulb next to it."
                width={885}
                height={661}
                className="rounded-lg max-w-[260px]"
                loading="lazy"
              />
            </div>
            <div>
              <p className="mt-1">
                In September 2023 the first{" "}
                <a href="/research">
                  peer-reviewed paper
                </a>{" "}
                on Process Feedback was published in Education Sciences. The research behind
                Process Feedback continues to evolve, with ongoing studies exploring its impact on
                student writing, learning, and academic integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Section 2: From computer programming to writing â”€â”€ */}
      <section className="bg-[#D9EBFF] dark:bg-slate-800 pt-10 pb-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-bold text-[#003066] dark:text-blue-300">From computer programming to writing</h2>

          {/* First paragraph â€” full width */}
          <div className="mt-1 text-left">
            <p>
              The earliest version of Process Feedback was designed to visualize students&rsquo;
              coding processes for students in the Computer Science Department at the University
              of Missouri-St. Louis.
            </p>
          </div>

          {/* Remaining paragraphs LEFT + image RIGHT */}
          <div className="mt-6 flex flex-col lg:flex-row gap-10">
            <div>
              <p className="mt-1">
                Within months, it became clear that the same process-oriented insights were just
                as valuable for writing. English composition teachers helped test early
                versions, and within three months a working prototype for exploring the writing process
                was also developed.
              </p>
              <p>
                After pilot studies across multiple universities in Missouri and Arkansas in
                Fall 2023, a revised platform launched in January 2024. Throughout 2024 and 2025,
                contributions from researchers, freelancers, and volunteers continued to expand
                the tool.
              </p>
              <p>
                In 2026, Process Feedback began offering institutional integrations for
                institutions that require LMS connectivity and administrative support.
              </p>
            </div>
            <div className="my-2 mx-auto self-end">
              <Image
                src="/images/about/pf-timeline.webp"
                alt="A cartoon illustration showing research and data analysis"
                width={962}
                height={1103}
                className="rounded-lg max-w-full lg:max-w-[500px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Section 3: Reflection over policing â”€â”€ */}
      <section className="bg-white dark:bg-slate-900 pt-10 pb-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-bold text-[#003066] dark:text-blue-300">Reflection over policing</h2>

          <div className="mt-1 text-left">
            <p>
              Process Feedback is sometimes framed solely as an academic integrity tool. That
              was never the only core vision.
            </p>
          </div>

          <div className="mt-6 text-left">
            <p>
              Our goal is to help students reflect on how they work. Reflection strengthens
              learning far more reliably than surveillance ever could.
            </p>
            <p>
              Students who engage with their own process develop stronger metacognitive
              skills, learn to self-assess, and become more intentional about how they use emerging
              technologies (including AI).
            </p>
            <p>
              We believe our education practices should focus not only on outcomes, but also
              on how learners arrive there.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€ Section 4: What kind of organization we are â”€â”€ */}
      <section className="bg-[#D9EBFF] dark:bg-slate-800 pt-10 pb-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-bold text-[#003066] dark:text-blue-300">What kind of organization we are</h2>

          <div className="mt-1 text-left">
            <p>
              Process Feedback LLC is a social-purpose for-profit education technology
              company.
            </p>
          </div>

          <div className="mt-6 text-left">
            <p className="mt-1">Our model is simple:</p>

            <ul className="justify-start list-none pl-0">
              <li className="flex flex-row items-start gap-3 text-base my-3">
                <ArrowIcon />
                <span className="min-w-0">
                  Individual teachers and students use Process Feedback at no cost
                </span>
              </li>
              <li className="flex flex-row items-start gap-3 text-base my-3">
                <ArrowIcon />
                <span className="min-w-0">
                  Institutions fund organizational needs such as LMS integration, compliance
                  documentation, and support.
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-4 text-left">
            <p>
              <strong>Why a .org domain?</strong>{" "}
              While we are registered as a for-profit LLC to allow sustainable operations and
              institutional partnerships, our primary focus is educational impact rather than
              monetizing individual teachers or students. We chose a .org domain to reflect
              that focus: the platform exists first to support teaching and learning.
            </p>
          </div>
        </div>
      </section>

      {/* â”€â”€ Section 5: Our guiding principles â”€â”€ */}
      <section className="bg-white dark:bg-slate-900 pt-10 pb-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-bold text-[#003066] dark:text-blue-300">Our guiding principles</h2>

          <div className="mt-1 text-left">
            <p>
              Our mission is to <strong>improve students&rsquo; reflective thinking</strong>. The following principles guide our decisions, including what data we collect
              and how the platform is designed and accessed:
            </p>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row gap-10">
            <div className="my-2 mx-auto self-end">
              <Image
                src="/images/about/principles.webp"
                alt="Map icon with compass on top."
                width={327}
                height={263}
                className="rounded-lg max-w-[260px]"
                loading="lazy"
              />
            </div>
            <div>
              <ul className="justify-start list-none pl-0">
                <li className="flex flex-row items-start gap-3 text-base my-3">
                  <ArrowIcon />
                  <span className="min-w-0">
                    User data should be collected only when necessary, and when collected, it must
                    be protected with the highest priority.
                  </span>
                </li>
                <li className="flex flex-row items-start gap-3 text-base my-3">
                  <ArrowIcon />
                  <span className="min-w-0">
                    Students and teachers should be able to use core features without creating an
                    account.
                  </span>
                </li>
                <li className="flex flex-row items-start gap-3 text-base my-3">
                  <ArrowIcon />
                  <span className="min-w-0">
                    Core tools and features should be available to individual teachers and students
                    for free.
                  </span>
                </li>
                <li className="flex flex-row items-start gap-3 text-base my-3">
                  <ArrowIcon />
                  <span className="min-w-0">
                    Our tools should behave consistently and predictably, so teachers and students
                    can focus on learning rather than figuring out the interface.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ Section 6: Open by design â€” gradient card with image â”€â”€ */}
      <section className="w-screen bg-white dark:bg-slate-900 py-10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="bg-gradient-to-b from-[#94CFFA] to-[#B5DEFB] dark:from-blue-900 dark:to-blue-800 rounded-2xl p-3 lg:pt-10">
            <div className="mx-auto lg:grid lg:grid-cols-[30%_70%] gap-6 items-center">
              <Image
                src="/images/teachers.BMv3acBb_ZEWi0j.webp"
                alt="Group of teachers discussing with laptop on table."
                width={1512}
                height={682}
                className="mx-auto w-full max-w-[350px]"
                loading="lazy"
              />
              <div className="flex flex-col items-center mt-6 lg:mt-0">
                <div className="px-4">
                  <h2>Open by design</h2>
                  <p>
                    Whenever possible, our content is released under{" "}
                    <a
                      href="https://www.processfeedback.org/copyleft"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      copyleft terms
                    </a>{" "}
                    to encourage reuse and collaboration across the education community. Learning
                    tools improve when we are free to build on each other&rsquo;s work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
