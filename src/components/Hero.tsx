export default function ProcessHero() {
  const featuresLeft = [
    "See copy-paste events, editing time, etc.",
    "Encourage students to think and reflect",
    "Identify why students struggle to write",
  ];

  const featuresRight = [
    "Prevent plagiarism through transparency",
    "Promote academic integrity meaningfully",
    "Explore how students use AI",
  ];

  const stats = [
    {
      value: "100+",
      title: "Countries",
      description: "Used by teachers and students",
    },
    {
      value: "500+",
      title: "Institutions",
      description: "Used in schools, colleges, and universities",
    },
    {
      value: "50K+",
      title: "Active Users",
      description: "Have reviewed their writing process",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#cfe7fb] pt-16 md:pt-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#0b4a97] md:text-6xl">
          Process First. AI Second.
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-[#4d647d] md:text-xl">
          Process Feedback is a learning-first alternative to plagiarism or AI
          detection. It enables teachers and students to see the writing
          process or AI use, and to discuss how the learning process can be
          improved.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-[#1e88ff] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#1675e6]">
            View Sample Student Report
          </button>

          <button className="rounded-full bg-[#1e88ff] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#1675e6]">
            Try It In Google Docs
          </button>
        </div>

        <div className="mt-8">
          <div className="text-2xl text-[#f4a62a]">★★★★★</div>
          <p className="mt-2 text-lg font-medium text-[#2e74ff]">
            Loved by students and teachers!
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 text-left md:grid-cols-2">
          <div className="space-y-5">
            {featuresLeft.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 text-xl text-[#5ea0ff]">→</span>
                <p className="text-lg text-[#24384d]">{item}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            {featuresRight.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 text-xl text-[#5ea0ff]">→</span>
                <p className="text-lg text-[#24384d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 bg-[#eef1f6] px-6 pb-20 pt-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-[28px] bg-white px-8 py-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="text-5xl font-extrabold text-[#5ea0ff]">
                {stat.value}
              </div>
              <h3 className="mt-3 text-2xl font-bold text-[#1e2d3d]">
                {stat.title}
              </h3>
              <p className="mt-4 text-lg text-[#697b8f]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}