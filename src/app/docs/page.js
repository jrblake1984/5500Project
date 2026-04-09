export const metadata = {
  title: "Guides and Tutorials - Course Project at UMSL",
};

export default function DocsPage() {
  return (
    <div className="docs-main">
      <div className="docs-wrap">
        {/* Breadcrumb */}
        <nav className="docs-breadcrumb" aria-label="Breadcrumb">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-2 opacity-70" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
          </svg>
          <span className="docs-breadcrumb-icon" aria-hidden="true">/</span>
          <a rel="noopener noreferrer" href="/docs" className="docs-breadcrumb-link">Docs</a>
        </nav>

        {/* Article */}
        <article className="docs-content">
          <h1>Guides and Tutorials</h1>
          <p>
            Resources for teachers, students, writing centers, teaching assistants, institution representatives, and
            more to discuss the writing process, reflect on AI use, and explore writing
            process reports.
          </p>

          {/* Students */}
          <section className="docs-section">
            <h2>Students</h2>
            <ol className="docs-flat-list">
              <li><a href="/docs/student-instructions">Instructions for students</a></li>
              <li><a href="/docs/student-submission-guide">Student submission guide</a></li>
              <li><a href="/docs/exploring-gdocs-with-multiple-tabs">How to explore Google Docs documents with multiple tabs</a></li>
              <li><a href="/docs/how-to-reflect-on-ai-use">How to reflect on your generative AI use</a></li>
              <li><a href="/docs/how-to-provide-edit-access-in-gdocs">How to share the edit link of a Google Docs document</a></li>
              <li><a href="/docs/step-by-step-install-gdocs">How to install Process Feedback for Google Docs extension? A step-by-step tutorial</a></li>
              <li><a href="/docs/writing-process-reflection-prompts">Writing process reflection prompts</a></li>
            </ol>
          </section>

          {/* Teachers */}
          <section className="docs-section">
            <h2>Teachers</h2>
            <ol className="docs-flat-list">
              <li><a href="/docs/classroom-announcement">Classroom announcement or syllabus statement</a></li>
              <li><a href="/docs/option-type-in-google-docs-or-pf">Integration option 1 - Let students choose what editor they want to use</a></li>
              <li><a href="/docs/option-create-custom-editor">Integration option 2 - Create a custom editor for your class</a></li>
              <li><a href="/docs/option-create-assignment">Integration option 3 - Create an assignment in Process Feedback</a></li>
              <li><a href="/docs/feedback-prompts-library">Example Feedback prompts library</a></li>
              <li><a href="/docs/exploring-gdocs-with-multiple-tabs">How to explore Google Docs documents with multiple tabs</a></li>
              <li><a href="/docs/identify-ai-usage">Identify AI-assisted writing patterns</a></li>
              <li><a href="/docs/step-by-step-create-assignment">How to create an assignment? A step-by-step tutorial</a></li>
              <li><a href="/docs/step-by-step-create-editor">How to create a custom editor? A step-by-step tutorial</a></li>
              <li><a href="/docs/step-by-step-install-gdocs">How to install Process Feedback for Google Docs extension? A step-by-step tutorial</a></li>
              <li><a href="/docs/writing-process-reflection-prompts">Writing process reflection prompts</a></li>
              <li><a href="/docs/how-to-use-ai-with-pf">How to use AI to explore the writing process</a></li>
              <li><a href="/docs/i-have-a-large-class">I have a large class. How can I use Process Feedback?</a></li>
            </ol>
          </section>

          {/* Institutions */}
          <section className="docs-section">
            <h2>Institutions</h2>
            <ol className="docs-flat-list">
              <li><a href="/docs/how-our-gdocs-extension-is-different">How &apos;Process Feedback for Google Docs&apos; extension compares to others</a></li>
              <li><a href="/docs/app-compliance">Compliance with Australian Privacy Principles</a></li>
              <li><a href="/docs/how-pf-extensions-work">How Process Feedback extensions work</a></li>
            </ol>
          </section>
        </article>
      </div>
    </div>
  );
}
