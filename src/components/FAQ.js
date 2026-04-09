"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "If a student copy-pastes, will the writing process report show it?",
    a: "Yes. The writing process report logs every copy-paste event, including the source text and the time it happened. Teachers can see exactly what was pasted and when.",
  },
  {
    q: "Does Process Feedback analyze AI usage?",
    a: "It does. When a student uses AI-generated text, the report flags those sections and shows how the AI content entered the document. Teachers get a clear view of what was written by the student and what came from an AI tool.",
  },
  {
    q: "Besides English, what languages are supported?",
    a: "Process Feedback works with any language that uses a standard keyboard input. The editing-time tracking, copy-paste detection, and revision history features are language-independent.",
  },
  {
    q: "Does Process Feedback work with Microsoft Word?",
    a: "Right now, Process Feedback works best with Google Docs and the built-in online editor. Microsoft Word support is not available yet, but the team is looking into it for a future update.",
  },
  {
    q: "Reviewing students\u2019 processes can be time-consuming! Is there a way to make it easier?",
    a: "Absolutely. The teacher dashboard highlights key metrics like total editing time, number of revisions, and copy-paste events. You can scan a class at a glance and focus on students who need extra attention.",
  },
  {
    q: "Will students feel anxious about being tracked?",
    a: "The goal is transparency, not surveillance. Students can see their own writing process reports, which helps them reflect on how they work. Most students find it motivating once they understand the purpose.",
  },
  {
    q: "Does Process Feedback detect plagiarism?",
    a: "Process Feedback does not run plagiarism checks like Turnitin. Instead, it shows how the work was created. If a student copy-pasted large sections, the report makes that visible without needing a separate plagiarism tool.",
  },
  {
    q: "If I notice a student copy-pasted, how should I grade them?",
    a: "That depends on your class policy. Process Feedback gives you the evidence \u2014 what was pasted, when, and from where. You decide how to handle it based on your course rules and the context of the assignment.",
  },
  {
    q: "Does Process Feedback work with LMS platforms like Canvas or Blackboard?",
    a: "Yes. There is an LMS extension that works with Canvas, D2L, and other platforms. Students can use Process Feedback directly inside their LMS discussion boards and assignment pages.",
  },
  {
    q: "What technical support is available for teachers and students?",
    a: "The Process Feedback team offers documentation, teacher guides, and email support. If you run into any issue, you can reach out through the contact page and get help from the team.",
  },
  {
    q: "What value does Process Feedback add to good teaching?",
    a: "It gives teachers a clear picture of how students work, not just what they turn in. That makes it easier to give meaningful feedback, catch students who are struggling early, and have honest conversations about learning.",
  },
  {
    q: "We have large classes. How can Process Feedback support teachers?",
    a: "The dashboard is built for scale. You can sort and filter students by metrics like editing time or revision count. Summary views let you spot patterns across the whole class without reading every report individually.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-screen py-10 bg-[#edf1fa] dark:bg-slate-900">
      <section className="pt-0 py-10">
        {/* Heading */}
        <h2 className="font-bold mb-6 text-center text-[#213547] dark:text-slate-200">
          Frequently Asked Questions
        </h2>

        {/* Single big white card wrapping all 12 items */}
        <div className="text-left p-4 mx-auto max-w-4xl mb-6 bg-white dark:bg-slate-800 rounded-3xl w-full md:px-10">
          <div className="w-full">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-item-${i}`;
              return (
                <div key={i} className="my-4">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full text-left px-4 py-3 rounded-md border border-gray-200 font-medium flex flex-row justify-between items-center hover:border-blue-500 hover:bg-blue-100 dark:border-slate-600 dark:hover:border-blue-400 dark:hover:bg-slate-700 transition-colors duration-150 cursor-pointer"
                  >
                    <span className="text-[#213547] dark:text-slate-200 leading-snug">
                      {i + 1}. {item.q}
                    </span>
                    <svg
                      className={`flex-shrink-0 ml-3 transition-transform duration-200 text-[#213547] dark:text-slate-300 ${isOpen ? "rotate-180" : ""}`}
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <div
                    id={panelId}
                    className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"}`}
                  >
                    <div>
                      <div className="p-3 text-left">
                        <p className="text-base leading-relaxed text-[#213547] dark:text-slate-300">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}


