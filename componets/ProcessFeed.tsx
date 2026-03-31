export default function ProcessFeedbackSection() {
  return (
    <section className="bg-[#f5f5f5] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#8b3200] md:text-5xl">
            What is Process Feedback?
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[#3f5368] md:text-[20px]">
            AI detectors are unreliable and don&apos;t help students learn.
            Process Feedback takes a different approach:
            <span className="italic">
              {" "}
              instead of guessing, just look at what actually happened.
            </span>{" "}
            As students write, it captures their editing time, revision
            patterns, copy-paste events, and AI usage. The result? A clear
            picture of how the work was created along with evidence that can
            start honest conversations about learning.
          </p>
        </div>

        

        <div className="mx-auto mt-10 max-w-4xl">
          <p className="text-lg leading-9 text-[#3f5368] md:text-[20px]">
            Our approach shifts the conversation from{" "}
            <span className="italic">&quot;Did you cheat?&quot;</span> to{" "}
            <span className="italic">&quot;How did you learn?&quot;</span>{" "}
            Students can demonstrate their effort transparently. Teachers can
            identify who needs help before deadlines, not after. And when AI is
            involved, it reveals exactly when and how. This turns fear into an
            opportunity to teach responsible use.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative">
            //<div className="absolute -left-2 -top-7 text-7xl font-bold leading-none text-[#9a3605]">

              “
            </div>

            <div className="ml-10  pl-8">
              <div className="mb-5  w-20 bg-[#b95a2b]" />
              <p className="text-[20px] leading-9 text-[#3f5368]">
                Process Feedback is incredibly helpful in helping hold students
                accountable to academic integrity. I dont know what I
                would do without it!
              </p>

              <div className="mt-6 text-right text-[16px] text-[#7c8998]">
                ★★★★★ 5.0 rating · Jan 2026
                <br />
                Verified Chrome Web Store Review
              </div>
            </div>

            <div className="absolute -bottom-15 right-0 text-7xl font-bold leading-none text-[#9a3605]">
              ”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FlowItemProps = {
  icon: string;
  top: string;
  label: string;
  sublabel: string;
};

function FlowItem({ icon, top, label, sublabel }: FlowItemProps) {
  return (
    <div className="relative text-center">
      <div className="mx-auto min-h-[56px] max-w-[180px] text-[18px] leading-8 text-[#b5d9b6]">
        {top}
      </div>

      <div className="mx-auto flex h-16 w-16 items-center justify-center text-5xl">
        {icon}
      </div>

      <div className="mt-3 inline-block rounded-xl bg-gradient-to-b from-[#d8ecff] to-[#9ecaf8] px-5 py-2 text-[18px] font-medium text-[#0b4a97] shadow-sm">
        {label}
      </div>

      {sublabel ? (
        <div className="mt-2 text-[16px] text-[#4086ee]">{sublabel}</div>
      ) : (
        <div className="mt-2 h-6" />
      )}
    </div>
  );
}