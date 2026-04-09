export default function WhatIsPF() {
  return (
    <section
      className="bg-white dark:bg-slate-900 pt-10 pb-20 px-4 text-center mx-auto"
      style={{ width: "clamp(320px, 92vw, 1024px)" }}
    >
      <h2 className="font-bold text-[#802800] dark:text-amber-400">
        What is Process Feedback?
      </h2>

      <div className="mt-1 max-w-3xl mx-auto text-left">
        <p>
          AI detectors are unreliable and don&#39;t help students learn.
          Process Feedback takes a different approach:{" "}
          <em>instead of guessing, just look at what actually happened</em>.
          As students write, it captures their editing time, revision patterns,
          copy-paste events, and AI usage. The result? A clear picture of how
          the work was created along with evidence that can start honest
          conversations about learning.
        </p>
      </div>

      <div className="w-full mt-6 max-w-3xl mx-auto text-left flex flex-col lg:flex-row gap-10 bg-white dark:bg-slate-900">
        <div className="w-full my-2 mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/what-is-pf.svg"
            alt="Flowchart of process feedback working modality."
            loading="lazy"
            decoding="async"
            width={800}
            height={400}
            className="rounded-xl w-full"
          />
        </div>
      </div>

      <div className="mt-4 max-w-3xl mx-auto text-left">
        <p>
          Our approach shifts the conversation from{" "}
          <em>&#39;Did you cheat?&#39;</em> to{" "}
          <em>&#39;How did you learn?&#39;</em> Students can demonstrate their
          effort transparently. Teachers can identify who needs help before
          deadlines, not after. And when AI is involved, it reveals exactly
          when and how. This turns fear into an opportunity to teach responsible
          use.
        </p>
      </div>

      <div className="lg:w-[60%] px-2 mx-auto my-5 relative">
        <div className="absolute top-5 ml-10 left-0 w-16 h-px bg-[#802800]" />
        <div className="absolute top-0 ml-0 mt-12 left-0 w-px h-5 bg-[#802800]" />
        <div className="absolute -bottom-3 right-0 mr-12 w-16 h-px bg-[#802800]" />
        <div className="absolute bottom-0 right-2 mb-5 w-px h-5 bg-[#802800]" />

        <div className="text-[#802800] dark:text-amber-400 text-5xl leading-none font-serif absolute top-0 -left-4">
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z" />
          </svg>
        </div>

        <div className="pt-8 pl-6">
          <p className="relative inline-block max-w-full overflow-hidden text-left leading-relaxed mb-1 text-[#802800] dark:text-amber-300">
            Process Feedback is incredibly helpful in helping hold students
            accountable to academic integrity. I don&#39;t know what I would
            do without it!
          </p>
        </div>

        <p className="mb-0 pb-0 text-gray-600 dark:text-slate-400 text-right pr-10 text-base">&#9733;&#9733;&#9733;&#9733;&#9733; 5.0 rating &middot; Jan 2026</p>
        <p className="mb-2 text-gray-600 dark:text-slate-400 text-right pr-10 text-base">Verified Chrome Web Store Review</p>

        <div className="text-[#802800] dark:text-amber-400 text-5xl leading-none font-[Libre_Baskerville,serif] absolute -bottom-7 right-0">
          <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z" />
          </svg>
        </div>
      </div>
    </section>
  );
}