export default function WeSimplyReveal() {
  const bullets = [
    "We neither endorse nor oppose students using AI - our technology simply reveals the steps a student took to complete their work. You decide how to use these insights.",
    "We believe that a student\u2019s working process matters, regardless of whether AI is involved.",
    <>Assigning students to reflect on their working process fosters metacognitive thinking. Feel free to use our sample assignment to guide such a reflection.</>,
    "Feedback on the process should be context-specific, which is why we don\u2019t provide explicit evaluations. Instead, we make it easier to offer or acquire meaningful process feedback.",
  ];

  return (
    <div className="w-full bg-[#FFF6F2] dark:bg-slate-800 py-8 md:py-12">
      <section className="mx-2 rounded-[2.5rem] bg-white dark:bg-slate-900 pt-8 pb-8 md:pt-16 max-w-4xl mx-auto">
        <div className="w-[95%] text-left mx-auto">
          {/* Heading */}
          <h2 className="text-center text-[#802800] dark:text-amber-300">
            We simply reveal the writing process data
          </h2>

          {/* Bullet list */}
          <ul className="mt-6 space-y-4 text-left">
            {bullets.map((text, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#B23F09]"
                  aria-hidden="true"
                />
                <span className="text-[#111827] dark:text-slate-300 leading-relaxed">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
