"use client";

import { useEffect, useState } from "react";

const stats = [
  { label: "Countries", value: "100+" },
  { label: "Institutions", value: "500+" },
  { label: "Active Users", value: "50K+" },
];

const bullets = [
  "See copy-paste events, editing time, etc.",
  "Encourage students to think and reflect",
  "Identify why students struggle to write",
  "Prevent plagiarism through transparency",
  "Promote academic integrity meaningfully",
  "Explore how students use AI",
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
      <div
        className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column: text */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
              Loved by students and teachers!
            </span>

            <h1 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Course Project at UMSL
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-100 sm:text-lg">
              This project is a duplicate of a real public website created
              solely for academic purposes. The original website is available at{" "}
              <a
                href="https://www.processfeedback.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline hover:text-primary-200"
              >
                www.processfeedback.org
              </a>
              .
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-card transition-shadow hover:shadow-card-hover"
              >
                View Sample Student Report
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Try It In Google Docs
              </a>
            </div>
          </div>

          {/* Right column: bullet points */}
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            <ul className="space-y-4">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
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
                  <span className="text-sm leading-relaxed text-primary-50 sm:text-base">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-white/20 pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
