"use client";
import { useRef, useEffect, useCallback } from "react";

const conferences = [
  {
    name: "IWCA",
    href: "https://writingcenters.org/",
    img: "/conferences/IWCA-conference-3.MXwl3ni2_Z1L8zs.webp",
  },
  {
    name: "NELTA",
    href: "https://www.nelta.org.np/",
    img: "/conferences/NELTA-conference-13.D0E2MBk2_2iywH1.webp",
  },
  {
    name: "SIGCSE",
    href: "https://sigcse2025.sigcse.org/",
    img: "/conferences/SIGCSE-conference-9.B7s5Fmsy_1cjr62.webp",
  },
  {
    name: "STAR Global Conference",
    href: "https://starscholarspress.org/conferences.html",
    img: "/conferences/STAR-conference-12.NCOM-siq_1mlQLN.webp",
  },
  {
    name: "WCCS",
    href: "https://american-cse.org/csce2024/",
    img: "/conferences/WCCS-conference-6.qNDt8ulh_bHPbY.webp",
  },
  {
    name: "ACE",
    href: "https://iafor.org/dvteam/ace2024/",
    img: "/conferences/ACE-conference-8.B-UmdHzh_bjoeS.webp",
  },
  {
    name: "MIT AI Education Summit",
    href: "https://raise.mit.edu/events/ai-education-summit-2024/",
    img: "/conferences/ai-edu-conference-2.B5JU4LDG_pvQem.webp",
  },
  {
    name: "CICE",
    href: "https://ciceducation.org/",
    img: "/conferences/CICE-conference-5.D88xYWMI_Z1Nafyi.webp",
  },
  {
    name: "CWSC",
    href: "https://creativewritingstudies.net/",
    img: "/conferences/CWSC-conference-11.BOK7z4_a_Z2tCfva.webp",
  },
  {
    name: "FTTC",
    href: "https://www.umsl.edu/services/ctl/fttc/index.html",
    img: "/conferences/FTTC-conference-7.DiYZaANA_28Ph0N.webp",
  },
  {
    name: "GSOLE",
    href: "https://gsole.org/",
    img: "/conferences/GSOLE-conference-10.C_vmp_9__vv8x2.webp",
  },
  {
    name: "ITLC at MST",
    href: "https://cafe.mst.edu/itlc/",
    img: "/conferences/ITLC-conference-1.DqoENTkh_Zwskhg.webp",
  },
];

const SCROLL_BY = 220;
const AUTO_INTERVAL = 2500;

export default function Conferences() {
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  const scrollRight = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 2) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: SCROLL_BY, behavior: "smooth" });
    }
  }, []);

  const scrollLeft = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    if (el.scrollLeft <= 2) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -SCROLL_BY, behavior: "smooth" });
    }
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(scrollRight, AUTO_INTERVAL);
  }, [scrollRight]);

  useEffect(() => {
    timerRef.current = setInterval(scrollRight, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [scrollRight]);

  return (
    <div className="w-screen bg-white dark:bg-slate-900">
      <section className="pt-[40px] pb-[80px] px-4 mx-auto w-[clamp(320px,92vw,1024px)]">
        <h2 className="font-bold mb-4">Academic Conferences Where It Was Presented</h2>
        <p className="w-full md:w-4/5 mx-auto text-center mb-8 text-[#213547] dark:text-slate-300 text-base leading-[1.75] tracking-[0.01em]">
          Process Feedback is grounded in{" "}
          <a
            href="https://www.processfeedback.org/research"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            peer-reviewed
          </a>{" "}
          research and has been presented at international academic conferences. It
          isn&apos;t just a website! Below are some of the academic conferences where its
          findings and methods were presented.
        </p>

        {/* Carousel */}
        <div className="relative flex items-center gap-2">
          {/* Left arrow */}
          <button
            aria-label="Scroll left"
            onClick={() => { scrollLeft(); resetTimer(); }}
            className="flex-shrink-0 p-1 cursor-pointer bg-transparent border-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 dark:text-gray-300 block">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex-1 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex items-center gap-16 px-2" style={{ width: "max-content" }}>
              {conferences.map((conf) => (
                <a
                  key={conf.name}
                  href={conf.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conference Icon of ${conf.name}`}
                  title={conf.name}
                  className="flex-shrink-0 block hover:opacity-80 transition-opacity w-[160px] px-4"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={conf.img}
                    alt={`Conference Icon of ${conf.name}`}
                    width={160}
                    height={160}
                    className="w-full max-w-[160px] h-auto mx-auto rounded-lg object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            aria-label="Scroll right"
            onClick={() => { scrollRight(); resetTimer(); }}
            className="flex-shrink-0 p-1 cursor-pointer bg-transparent border-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 dark:text-gray-300 block">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
