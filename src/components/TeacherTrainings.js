const QuoteOpenIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z" />
  </svg>
);

const QuoteCloseIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z" />
  </svg>
);

export default function TeacherTrainings() {
  return (
    <div className="w-screen bg-[#F2FFF8] dark:bg-slate-900">
      <section
        className="pt-[40px] pb-[80px] px-4 mx-auto text-center"
        style={{ width: "clamp(320px, 92vw, 1024px)" }}
      >
        {/* ── Heading ── */}
        <h2 className="dark:text-green-300">
          Teacher Trainings Every Month
        </h2>

        {/* ── Subtitle ── */}
        <p className="mt-4 max-w-2xl mx-auto text-base leading-[1.75] text-[#213547] dark:text-slate-300">
          We hold webinars every month and have trained hundreds of high school
          teachers and university instructors across multiple countries.
        </p>

        {/* ── Blockquote (corner-line style matching WhatIsPF) ── */}
        <div className="mt-10 lg:w-[60%] px-2 mx-auto relative">
          {/* Corner decorations */}
          <div className="absolute top-5 ml-10 left-0 w-16 h-px bg-[#037337]" />
          <div className="absolute top-0 ml-0 mt-12 left-0 w-px h-5 bg-[#037337]" />
          <div className="absolute -bottom-3 right-0 mr-12 w-16 h-px bg-[#037337]" />
          <div className="absolute bottom-0 right-2 mb-5 w-px h-5 bg-[#037337]" />

          {/* Open quote icon */}
          <div className="text-[#037337] dark:text-green-400 text-5xl leading-none font-serif absolute top-0 -left-4">
            <QuoteOpenIcon />
          </div>

          {/* Quote body */}
          <div className="pt-8 pl-6">
            <p className="relative text-left leading-relaxed mb-1 text-[#037337] dark:text-green-300">
              Thank you so much for the overview of Process Feedback yesterday
              morning. I came across it while actually looking for another
              extension, and I was blown away! I used it today, and seeing a
              copy and paste event was likely from voice typing was so helpful!
            </p>
          </div>

          {/* Attribution */}
          <p className="mb-0 pb-0 text-gray-600 dark:text-slate-400 text-right pr-10 text-base">
            Social Studies Teacher
          </p>
          <p className="mb-2 text-gray-600 dark:text-slate-400 text-right pr-10 text-base">
            High School in Atlanta USA (2025)
          </p>

          {/* Close quote icon */}
          <div className="text-[#037337] dark:text-green-400 text-5xl leading-none absolute -bottom-7 right-0">
            <QuoteCloseIcon />
          </div>
        </div>

        {/* ── Invite text ── */}
        <p className="mt-14 max-w-2xl mx-auto text-base leading-[1.75] text-[#213547] dark:text-slate-300">
          Invite us to lead a professional development (PD) session at your
          conference or institution and we will be happy to present.
        </p>

        {/* ── Upcoming event badge ── */}
        <div className="mt-8 mx-5 flex justify-center items-center hover:-translate-y-2 duration-300">
          <div className="inline-flex items-center justify-center px-5 bg-white dark:bg-slate-800 rounded-lg border border-[#037337] dark:border-green-700 relative shadow-md p-2">
            <span className="flex flex-col md:flex-row items-center justify-center text-center gap-0 md:gap-2">
              <span>🗓&nbsp; Upcoming Event</span>
              <span className="opacity-80">•</span>
              <span className="font-semibold">Free Webinar for Teachers</span>
              <span className="opacity-80">•</span>
              <a
                href="https://dateful.com/eventlink/1050208120"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upcoming Webinar"
                className="nounderline font-semibold text-blue-600 dark:text-blue-300"
              >
                Register
              </a>
              <span className="opacity-80">•</span>
              <a
                href="https://www.processfeedback.org/webinars"
                target="_blank"
                rel="noopener noreferrer"
                className="nounderline font-semibold text-blue-600 dark:text-blue-300"
              >
                Read Agenda
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
