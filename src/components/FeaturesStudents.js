const ArrowIcon = () => (
  <svg
    className="opacity-50 flex-shrink-0 mt-1 w-4 h-4"
    fill="currentColor"
    viewBox="0 0 512 512"
    aria-hidden="true"
  >
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
  </svg>
);

const ExpandIcon = () => (
  <svg
    className="opacity-80"
    width="14"
    height="14"
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

const QuoteOpenIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z" />
  </svg>
);

const QuoteCloseIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z" />
  </svg>
);

const features = [
  {
    title: "Self-reflect on your working habits or AI use",
    intro: "Process Feedback helps students look back and understand what role AI played in their writing process, especially during collaborative work.",
    listIntro: "It helps you to:",
    bullets: [
      "Identify when AI was used and whether it was actually helpful",
      "Support honest conversations about AI in learning",
      "Use AI\u2019s help to understand your writing process report",
    ],
    titleColor: "#003066",
    cardBg: "#F2F8FF",
    cardBgClass: "bg-[#F2F8FF] dark:bg-slate-800",
    titleColorClass: "text-[#003066] dark:text-blue-300",
    cta: { label: "Read Tutorial", href: "/docs/how-to-reflect-on-ai-use", ariaLabel: "Read Tutorial - Reflect on AI Use" },
    image: {
      src: "https://www.processfeedback.org/_astro/Illustrations-for-home-main-landing-page-13.DQujP5zI_ZnEBgs.avif",
      alt: "Students discussing their work together.",
    },
    review: {
      text: "This tool allowed me to prove that I did not use AI.",
      rating: "5.0 rating \u00b7 Jan 2026",
      source: "Verified Firefox Web Store Review",
    },
    imageRight: true,
  },
  {
    title: "Offers evidence to prove your own work",
    intro: "Students can use Process Feedback to demonstrate authorship during academic integrity reviews or group projects.",
    listIntro: "With this feature, you can:",
    bullets: [
      "Provide transparent evidence of your writing process",
      "Show how your work evolved over time",
      "Verify authorship when needed",
    ],
    titleColor: "#05448C",
    cardBg: "#D9EBFF",
    cardBgClass: "bg-[#D9EBFF] dark:bg-slate-800",
    titleColorClass: "text-[#05448C] dark:text-blue-300",
    cta: null,
    image: {
      src: "https://www.processfeedback.org/_astro/student-effort.DLFwMBF5_ZBAe9x.avif",
      alt: "A student on a laptop with time and graph next to it.",
    },
    review: {
      text: "You can prove you wrote your own documents with this bad boy.",
      rating: "5.0 rating \u00b7 Nov 2025",
      source: "Verified Firefox Web Store Review",
    },
    imageRight: false,
  },
  {
    title: "No account needed; does not collect data automatically",
    intro: "Students can use Process Feedback without creating an account. It is built with privacy in mind.",
    listIntro: "By default:",
    bullets: [
      "No sign-up is required",
      "Student data stays on the device unless they choose to save or share it",
      "Designed to minimize data collection and maximize trust",
    ],
    titleColor: "#003066",
    cardBg: "#F2F8FF",
    cardBgClass: "bg-[#F2F8FF] dark:bg-slate-800",
    titleColorClass: "text-[#003066] dark:text-blue-300",
    cta: null,
    image: {
      src: "https://www.processfeedback.org/_astro/easy-access.CRD-zeFY_Z1ESgHP.avif",
      alt: "Easy access illustration.",
    },
    review: null,
    imageRight: true,
  },
];

export default function FeaturesStudents() {
  return (
    <div className="w-full relative overflow-hidden justify-center bg-[#F2F8FF] bg-opacity-10 dark:bg-slate-900">
      {/* Decorative background ellipses - matching original */}
      <div className="overflow-hidden w-full">
        <div aria-hidden="true" className="w-[15%] aspect-square absolute z-0 rounded-full -left-[10%] -top-[5%] blur" style={{ backgroundColor: "#D9EBFF" }} />
        <div aria-hidden="true" className="w-[15%] aspect-square absolute z-0 rounded-full -left-[12%] top-[45%] blur" style={{ backgroundColor: "#D9EBFF" }} />
        <div aria-hidden="true" className="w-[5%] aspect-square absolute z-0 rounded-full -left-[20%] top-[65%] blur" style={{ backgroundColor: "#D9EBFF" }} />
        <div aria-hidden="true" className="w-[15%] aspect-square absolute z-0 rounded-full -left-[12%] top-[95%] blur" style={{ backgroundColor: "#D9EBFF" }} />
        <div aria-hidden="true" className="w-[5%] aspect-square absolute z-0 rounded-full right-[13%] top-[5%] blur" style={{ backgroundColor: "#D9EBFF" }} />
        <div aria-hidden="true" className="w-[15%] aspect-square absolute z-0 rounded-full -right-[6%] top-[10%] blur" style={{ backgroundColor: "#D9EBFF" }} />
        <div aria-hidden="true" className="w-[5%] aspect-square absolute z-0 rounded-full right-[13%] top-[55%] blur" style={{ backgroundColor: "#D9EBFF" }} />
        <div aria-hidden="true" className="w-[15%] aspect-square absolute z-0 rounded-full -right-[6%] top-[60%] blur" style={{ backgroundColor: "#D9EBFF" }} />
        <div aria-hidden="true" className="w-[5%] aspect-square absolute z-0 rounded-full right-[13%] top-[95%] blur" style={{ backgroundColor: "#D9EBFF" }} />
      </div>

      <section className="relative z-10 pt-[40px] pb-[80px] px-4 mx-auto w-[clamp(320px,92vw,1024px)]">
        <h2 className="mb-10">Features Loved by Students</h2>

        <div className="mt-10 flex flex-col gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-8">

              {/* Feature card - same structure as FeaturesTeachers */}
              <div className={`hover:-translate-y-2 duration-300 rounded-4xl shadow-lg p-6 pb-10 md:px-10 text-left z-10 ${feature.cardBgClass}`}>
                <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6">

                  {/* Text side */}
                  <div className={`w-full lg:w-[65%] ${feature.imageRight ? "lg:order-1" : "lg:order-2"}`}>
                    <h3 className={`mt-4 ${feature.titleColorClass}`}>{feature.title}</h3>
                    <p className="mt-1 mb-2">{feature.intro}</p>
                    {feature.listIntro && <p>{feature.listIntro}</p>}
                    <ul className="mt-1 space-y-1">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <ArrowIcon /><span className="break-words">{b}</span>
                        </li>
                      ))}
                    </ul>
                    {feature.cta && (
                      <a href={feature.cta.href} aria-label={feature.cta.ariaLabel || feature.cta.label} className="nounderline inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.1)] self-start border border-gray-200 dark:border-slate-600 text-blue-600 dark:text-blue-300 dark:bg-slate-700">
                        {feature.cta.label}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Image side */}
                  <div className={`w-full lg:w-[35%] flex justify-center ${feature.imageRight ? "lg:order-2" : "lg:order-1"}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={feature.image.src} alt={feature.image.alt} width={560} height={400} className="w-full max-w-[280px] object-contain hover:scale-110 duration-200" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>

              {/* Review quote - outside card, corner-line style in blue (#003066) */}
              {feature.review && (
                <div className="lg:w-[60%] px-2 mx-auto my-2 relative">
                  <div className="absolute top-5 ml-10 left-0 w-16 h-px bg-[#003066]" />
                  <div className="absolute top-0 ml-0 mt-12 left-0 w-px h-5 bg-[#003066]" />
                  <div className="absolute -bottom-3 right-0 mr-12 w-16 h-px bg-[#003066]" />
                  <div className="absolute bottom-0 right-2 mb-5 w-px h-5 bg-[#003066]" />
                  <div className="text-[#003066] dark:text-blue-400 text-5xl leading-none font-serif absolute top-0 -left-4"><QuoteOpenIcon /></div>
                  <div className="pt-8 pl-6">
                    <p className="relative inline-block max-w-full overflow-hidden text-left leading-relaxed mb-1 text-[#003066] dark:text-blue-300">{feature.review.text}</p>
                  </div>
                  <p className="mb-0 pb-0 text-gray-600 dark:text-slate-400 text-right pr-10 text-base">&#9733;&#9733;&#9733;&#9733;&#9733; {feature.review.rating}</p>
                  <p className="mb-2 text-gray-600 dark:text-slate-400 text-right pr-10 text-base">{feature.review.source}</p>
                  <div className="text-[#003066] dark:text-blue-400 text-5xl leading-none font-serif absolute -bottom-7 right-0"><QuoteCloseIcon /></div>
                </div>
              )}

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
