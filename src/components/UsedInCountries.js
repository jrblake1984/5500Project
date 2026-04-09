"use client";

export default function UsedInCountries() {
  return (
    <div className="w-screen bg-white dark:bg-slate-900">
      <section className="flex flex-col items-center pt-8 pb-16 px-4 max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="font-extrabold text-center text-[#213547] dark:text-white">
          Used In 100+ Countries
        </h2>

        {/* Description */}
        <p className="text-center text-base leading-[1.75] mb-4 text-[#213547] dark:text-slate-300 max-w-2xl mx-auto">
          Process Feedback is used by teachers and students in more than 100
          countries. Thousands of teachers and students all around the world use
          it every day.
        </p>

        {/* World map image - zooms on hover */}
        <div className="mt-10 w-[92vw] max-w-[900px] rounded-2xl bg-[#F3F4F6] dark:bg-slate-800 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/user-map.B8h-LAc4_2cePjR.webp"
            alt="World map showing extensive use, moderate use and occasional use of Process Feedback."
            loading="lazy"
            decoding="async"
            width={1512}
            height={682}
            className="w-full transition-transform duration-500 ease-in-out hover:scale-105 cursor-zoom-in"
          />
        </div>

        {/* Legend row */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          {/* Legend squares */}
          <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span
                className="w-3.5 h-3.5 rounded-[3px] inline-block shadow-[inset_0_0_0_1px_rgba(17,24,39,0.08)] shrink-0"
                style={{ backgroundColor: "#184EA7" }}
                aria-hidden="true"
              />
              <span className="text-base text-[#111827] dark:text-slate-300">
                Extensive Use
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-3.5 h-3.5 rounded-[3px] inline-block shadow-[inset_0_0_0_1px_rgba(17,24,39,0.08)] shrink-0"
                style={{ backgroundColor: "#1568D2" }}
                aria-hidden="true"
              />
              <span className="text-base text-[#111827] dark:text-slate-300">
                Moderate Use
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="w-3.5 h-3.5 rounded-[3px] inline-block shadow-[inset_0_0_0_1px_rgba(17,24,39,0.08)] shrink-0"
                style={{ backgroundColor: "#89B4FA" }}
                aria-hidden="true"
              />
              <span className="text-base text-[#111827] dark:text-slate-300">
                Occasional Use
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
