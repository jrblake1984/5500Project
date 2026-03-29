export const metadata = {
  title: "Guides and Tutorials — Course Project at UMSL",
};

const studentGuides = [
  "Instructions for students",
  "Student submission guide",
  "How to explore Google Docs documents with multiple tabs",
  "How to reflect on your generative AI use",
  "How to share the edit link of a Google Docs document",
  "How to install Process Feedback for Google Docs extension? A step-by-step tutorial",
  "Writing process reflection prompts",
];

const teacherGuides = [
  "Classroom announcement or syllabus statement",
  "Integration option 1 – let students choose what editor they want to use",
  "Integration option 2 – create a custom editor for your class",
  "Integration option 3 – create an assignment in Process Feedback",
  "Example Feedback prompts library",
  "How to explore Google Docs documents with multiple tabs",
  "Identify AI-assisted writing patterns",
  "How to create an assignment? A step-by-step tutorial",
  "How to create a custom editor? A step-by-step tutorial",
  "How to install Process Feedback for Google Docs extension? A step-by-step tutorial",
  "Writing process reflection prompts",
  "How to use AI to explore the writing process",
  "I have a large class. How can I use Process Feedback?",
];

const institutionGuides = [
  "How 'Process Feedback for Google Docs' extension compares to others",
  "Compliance with Australian Privacy Principles",
  "How Process Feedback extensions work",
];

function GuideList({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item, i) => (
        <li key={i}>
          <a
            href="#"
            className="group flex items-start gap-2 text-base text-primary-600 hover:text-primary-700"
          >
            <svg
              className="mt-1 h-4 w-4 shrink-0 text-slate-400 group-hover:text-primary-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            <span className="underline decoration-primary-200 group-hover:decoration-primary-500 transition-colors">
              {item}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function DocsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Guides and Tutorials
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Resources for teachers, students, writing centers, teaching
          assistants, institution representatives, and more to discuss the
          writing process, reflect on AI use, and explore writing process
          reports.
        </p>

        {/* Students */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Students
        </h2>
        <GuideList items={studentGuides} />

        {/* Teachers */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Teachers
        </h2>
        <GuideList items={teacherGuides} />

        {/* Institutions */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-900">
          Institutions
        </h2>
        <GuideList items={institutionGuides} />
      </div>
    </section>
  );
}
