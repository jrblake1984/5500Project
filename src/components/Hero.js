"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Countries", value: 100, suffix: "+", sub: "Used by teachers and students" },
  { label: "Institutions", value: 500, suffix: "+", sub: "Used in schools, colleges, and universities" },
  { label: "Active Users", value: 50, suffix: "K+", sub: "Have reviewed their writing process" },
];

const features = [
  "See copy-paste events, editing time, etc.",
  "Encourage students to think and reflect",
  "Identify why students struggle to write",
  "Prevent plagiarism through transparency",
  "Promote academic integrity meaningfully",
  "Explore how students use AI",
];

function ArrowIcon() {
  return (
    <svg
      className="mt-1 w-4 h-4 shrink-0 text-[#6EB3FA]"
      fill="currentColor"
      viewBox="0 0 448 512"
      aria-hidden="true"
    >
      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    </svg>
  );
}

function CountUpStat({ value, suffix, label, sub, active, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const duration = 1400;
    const steps = 20;
    const increment = value / steps;
    const interval = duration / steps;
    const delayId = setTimeout(() => {
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);
      // store for cleanup
      cleanupRef.current = timer;
    }, delay);
    const cleanupRef = { current: null };
    return () => {
      clearTimeout(delayId);
      if (cleanupRef.current) clearInterval(cleanupRef.current);
    };
  }, [active, value, delay]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl px-6 py-6 flex flex-col items-center gap-1 w-full sm:w-[48%] md:w-[30%] lg:w-[22%] max-w-sm -translate-y-1/3 dark:bg-slate-700">
      <p className="nomb text-4xl text-blue-600 font-bold dark:text-blue-400 min-w-[5ch] text-center">
        <span className="counter">{count}</span>{suffix}
      </p>
      <p className="nomb text-lg font-medium text-black dark:text-white">{label}</p>
      <p className="nomb text-gray-700 dark:text-gray-300 text-center">{sub}</p>
    </div>
  );
}

export default function Hero() {
  const [hydrated, setHydrated] = useState(false);
  const [statsActive, setStatsActive] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    // Mark hydrated so the entrance animation class applies after first paint
    const id = requestAnimationFrame(() => setHydrated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[rgb(149,207,250)] to-[rgb(231,245,254)] dark:from-slate-900 dark:to-slate-800"
    >
      {/* Decorative blurred circles */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#b8d9f7] dark:bg-blue-900/30 opacity-50 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 rounded-full bg-[#b8d9f7] dark:bg-blue-900/20 opacity-40 blur-3xl" aria-hidden="true" />

      <div
        className={`relative mx-auto max-w-3xl ${
          hydrated
            ? "transition-[opacity,transform] ease-out opacity-100 translate-y-0"
            : ""
        }`}
        style={hydrated ? { transitionDuration: "0.9s" } : undefined}
      >
        {/* Outer flex column matching original: px-1 flex flex-col items-center gap-4 */}
        <div className="px-1 flex flex-col items-center gap-4">

          {/* H1 wrapper: md:pt-10 lg:flex flex-row md:gap-4 mt-10 */}
          <div className="md:pt-10 lg:flex flex-row md:gap-4 mt-10">
            <h1 className="nomb text-center text-[#003f81] dark:text-blue-300 font-bold text-4xl lg:text-[60px]" style={{ lineHeight: 1.2 }}>
              Course Project at UMSL
            </h1>
          </div>

          {/* Slide-up area: w-full, contains h2 + buttons + stars + features */}
          <div className="w-full">

            {/* H2 wrapper: items-center text-center justify-center mt-0 mx-auto */}
            <div className="items-center text-center justify-center mt-0 mx-auto">
              <h2 className="text-base font-normal max-w-4xl mx-auto text-center text-[#213547] dark:text-slate-300">
                This project is a duplicate of a real public website created solely
                for academic purposes. The original website is available at{" "}
                <a
                  href="https://www.processfeedback.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#003066] dark:text-blue-300 underline hover:text-blue-800"
                >
                  www.processfeedback.org
                </a>
                .
              </h2>
            </div>

            {/* CTA buttons: md:flex flex-row items-center justify-center text-center md:space-x-8 space-y-2 mt-10 mb-5 */}
            <div className="md:flex flex-row items-center justify-center text-center md:space-x-8 space-y-2 mt-10 mb-5">
              <a
                href="https://app.processfeedback.org/gdocs/g_17GWSvODr0wQtxPBXeplzkoqWw3xv4cOL_9ZbWmIpXOU_d6351d?report=true&token=4d4453da-f306-4e6f-9bd9-4223d9d145cb"
                target="_blank"
                rel="noopener noreferrer"
                className="header-btn"
              >
                View Sample Student Report{" "}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/sample-report-icon.svg" alt="" aria-hidden="true" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
              <a
                href="https://www.processfeedback.org/gdocs"
                target="_blank"
                rel="noopener noreferrer"
                className="header-btn"
              >
                Try It In Google Docs{" "}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/google-docs-icon.svg" alt="" aria-hidden="true" width="20" height="20" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
            </div>

            {/* Stars row */}
            <div className="flex items-center justify-center gap-1 w-full" role="img" aria-label="5 out of 5 stars">
              {[0,1,2,3,4].map((i) => (
                <svg key={i} className="w-4 h-4 text-[#F0AD4E]" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              ))}
            </div>
            <div className="mt-2 text-center text-blue-800 dark:text-blue-400">
              Loved by students and teachers!
            </div>

            {/* Feature lists: md:flex flex-row text-black justify-center my-10 gap-8 pb-10 */}
            <div className="md:flex flex-row text-black justify-center my-10 gap-8 pb-10">
              <ul className="nav-list justify-start list-none p-0 m-0">
                {features.slice(0, 3).map((text) => (
                  <li key={text} className="flex flex-row items-left text-left gap-3 text-md my-4">
                    <ArrowIcon />
                    <span className="text-base leading-[1.5] tracking-[0.01em] text-[#213547] dark:text-slate-200">{text}</span>
                  </li>
                ))}
              </ul>
              <ul className="nav-list list-none p-0 m-0">
                {features.slice(3).map((text) => (
                  <li key={text} className="flex flex-row items-left text-left gap-3 text-md my-4">
                    <ArrowIcon />
                    <span className="text-base leading-[1.5] tracking-[0.01em] text-[#213547] dark:text-slate-200">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>{/* end slide-up area */}
        </div>{/* end px-1 flex col */}
      </div>

      {/* Stats row - full-bleed breakout, cards use -translate-y-1/3 to float into hero */}
      <div
        ref={statsRef}
        id="overlay-cards-container"
        className="bg-[#EDF1FA] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen flex flex-wrap justify-center gap-6 px-4 sm:px-6 md:gap-8 z-10 dark:bg-slate-800"
      >
        {stats.map((stat, i) => (
          <CountUpStat
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            sub={stat.sub}
            active={statsActive}
            delay={i * 200}
          />
        ))}
      </div>
    </section>
  );
}
