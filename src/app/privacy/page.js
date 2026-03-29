import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Course Project at UMSL",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>

        <p className="mt-6 text-base leading-relaxed text-slate-600">
          This privacy policy explains what data this site collects, how that
          data is handled, and your rights as a visitor. This site is a student
          project — not a commercial service.
        </p>

        {/* What data is collected */}
        <h2 className="mt-10 text-xl font-semibold text-slate-900">
          What Data We Collect
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          The only data collected on this site comes from the contact form. When
          you submit the form, we receive your name, email address, subject, and
          message.
        </p>

        {/* How data is processed */}
        <h2 className="mt-10 text-xl font-semibold text-slate-900">
          How Your Data Is Processed
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          Contact form submissions are sent through Web3Forms to the project
          team&rsquo;s email. No data is stored on this website&rsquo;s server.
          Web3Forms acts as a relay — your message goes straight to our inbox.
        </p>

        {/* No tracking */}
        <h2 className="mt-10 text-xl font-semibold text-slate-900">
          Cookies, Analytics & Tracking
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          This site does not use cookies. There are no analytics scripts, no
          tracking pixels, and no third-party tracking of any kind. Your
          browsing activity on this site is not monitored or recorded.
        </p>

        {/* No storage */}
        <h2 className="mt-10 text-xl font-semibold text-slate-900">
          Data Storage
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          No personal data is stored on the server. The site is statically
          hosted on Vercel and does not have a database.
        </p>

        {/* Academic project */}
        <h2 className="mt-10 text-xl font-semibold text-slate-900">
          Academic Project Disclaimer
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          This website is a student project for CMP_SCI-5500-001 (Software
          Engineering), Spring 2026, at the University of Missouri–St. Louis.
          The site is not a commercial service and is not intended for public
          use beyond academic evaluation.
        </p>

        {/* Contact */}
        <h2 className="mt-10 text-xl font-semibold text-slate-900">
          Questions
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          If you have questions about this privacy policy, reach out through
          the{" "}
          <Link
            href="/contact"
            className="text-primary-600 underline hover:text-primary-700"
          >
            contact page
          </Link>
          .
        </p>

        {/* Attribution */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm leading-relaxed text-slate-500">
            This page is part of an academic reconstruction. The original
            website&rsquo;s privacy policy is available at{" "}
            <a
              href="https://www.processfeedback.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline hover:text-primary-700"
            >
              www.processfeedback.org
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
