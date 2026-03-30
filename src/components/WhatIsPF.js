const flowSteps = [
  { icon: "📝", label: "Student works on assignment" },
  { icon: "📄", label: "Online document (Google Docs, etc.)" },
  { icon: "⚙️", label: "Process Feedback generates" },
  { icon: "📊", label: "Writing Process Report" },
  { icon: "💬", label: "Student self-reflects / Teacher provides feedback" },
];

const benefits = [
  {
    title: "Students",
    text: "Students can show their effort by sharing how they wrote their work — not just the final product.",
  },
  {
    title: "Teachers",
    text: "Teachers can quickly see who needs help and who is on track, without relying on guesswork.",
  },
  {
    title: "AI Usage",
    text: "When students use AI, the report shows when and how it was used — making AI part of the conversation, not a secret.",
  },
];

export default function WhatIsPF() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          What is Process Feedback?
        </h2>

        {/* Opening paragraph */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          AI detectors are unreliable and don&apos;t help students learn.
          Process Feedback takes a different approach: instead of guessing, just
          look at what actually happened. As students write, it captures their
          editing time, revision patterns, copy-paste events, and AI usage. The
          result? A clear picture of how the work was created along with evidence
          that can start honest conversations about learning.
        </p>

        {/* Flow diagram */}
        <div className="mt-12 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-2">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-2">
              <div className="flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-2xl">
                  {step.icon}
                </span>
                <span className="mt-2 max-w-[120px] text-xs font-medium text-slate-700 sm:text-sm">
                  {step.label}
                </span>
              </div>
              {i < flowSteps.length - 1 && (
                <svg
                  className="hidden h-5 w-5 flex-shrink-0 text-primary-400 md:block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mx-auto mt-12 max-w-2xl border-l-4 border-primary-500 py-2 pl-6">
          <p className="text-lg font-medium italic text-slate-700">
            &ldquo;Our approach shifts the conversation from &lsquo;Did you
            cheat?&rsquo; to &lsquo;How did you learn?&rsquo;&rdquo;
          </p>
        </blockquote>

        {/* Benefits grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl bg-white p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold text-primary-700">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {b.text}
              </p>
            </div>
          ))}
        </div>

        {/* Review quote with star rating */}
        <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-white p-8 text-center shadow-card">
          <div className="flex justify-center gap-1" role="img" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mt-4 text-base italic leading-relaxed text-slate-700">
            &ldquo;Process Feedback is incredibly helpful in helping hold
            students accountable to academic integrity. I don&apos;t know what I
            would do without it!&rdquo;
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            5.0 rating &middot; Jan 2026
          </p>
        </div>
      </div>
    </section>
  );
}
