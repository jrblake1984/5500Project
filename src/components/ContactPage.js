"use client";

import { useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText("contact@processfeedback.org");
      setCopied(true);
      setMessage("Email address copied. Open your email, paste the address, and send your message.");
      setTimeout(() => { setCopied(false); setMessage(""); }, 10000);
    } catch {
      const el = document.createElement("textarea");
      el.value = "contact@processfeedback.org";
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setMessage("Email address copied. Open your email, paste the address, and send your message.");
      setTimeout(() => { setCopied(false); setMessage(""); }, 10000);
    }
  }

  return (
    <div className="text-center justify-center">
      <button
        type="button"
        onClick={handleCopy}
        disabled={copied}
        className={`nounderline whitespace-nowrap m-4 inline-flex items-center gap-2 px-6 py-2 rounded-full font-medium border border-[#003066] dark:border-slate-500 text-[#003066] dark:text-blue-300 bg-transparent shadow-lg transition-transform duration-300 hover:scale-95 ${copied ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {copied ? "Email Address Copied" : "Copy Email Address"}
      </button>
      {message && (
        <p className="mt-1 text-green-800 dark:text-green-300 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg px-3 py-2 mx-auto max-w-md">
          {message}
        </p>
      )}
    </div>
  );
}

export default function ContactPageContent() {
  return (
    <div className="w-screen bg-white dark:bg-slate-900">
      {/* ── Ellipse header ── */}
      <div className="relative pt-8 md:pt-15 pb-6 md:pb-10 overflow-hidden flex items-center justify-center bg-websiteSectionBlue dark:bg-slate-800">
        {Array.from({ length: 30 }, (_, i) => {
          const t = i / 29;
          const w = 160 - 130 * t;
          const left = -30 + 65 * t;
          const top = 30 + 75 * t;
          const r = Math.round(231 - 52 * t);
          const g = Math.round(237 - 26 * t);
          const b = Math.round(251 + 3 * t);
          return (
            <div
              key={i}
              className="absolute z-0 rounded-full"
              style={{
                width: `${w}%`,
                aspectRatio: "4 / 1.1",
                top: `${top}%`,
                left: `${left}%`,
                backgroundColor: `rgb(${r}, ${g}, ${b})`,
                opacity: t,
              }}
            />
          );
        })}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
          <h1 className="opacity-80 text-5xl max-w-4xl mx-auto text-websiteHeaderText dark:text-blue-200">
            Contact Us
          </h1>
          <p className="opacity-80 mt-4">Reach out to us with your questions or feedback</p>
        </div>
      </div>

      {/* ── Section 1: Send us an email ── */}
      <div className="w-full text-center bg-white dark:bg-slate-900">
        <section className="pt-10 pb-20 px-4 w-[clamp(320px,92vw,1024px)] mx-auto">
          <h2 className="font-bold text-[#003066] dark:text-blue-300">Send us an email</h2>
          <div className="mt-6 max-w-3xl mx-auto text-left flex flex-col lg:flex-row gap-10">
            <div className="nomb mt-1 max-w-3xl mx-auto text-left">
              <div>
                <p>
                  We can be reached at{" "}
                  <a href="mailto:contact@processfeedback.org">contact@processfeedback.org</a>,
                  which is <strong>our preferred method</strong> of communication. Please email us
                  directly with your email account.
                </p>
              </div>
              <CopyEmailButton />
            </div>
            <div className="my-2 mx-auto">
              <Image
                src="/images/contact/email-us.webp"
                alt="Vector illustration of contact us."
                width={768}
                height={752}
                className="rounded-xl max-w-[260px]"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── Section 2: Send us a message ── */}
      <div className="w-screen bg-blue-50 dark:bg-slate-800">
        <section className="pt-10 pb-20 px-4 w-[clamp(320px,92vw,1024px)] mx-auto flex flex-col justify-center">
          <h2 className="mb-2">Send us a message</h2>
          <p className="text-center max-w-3xl mx-auto">
            Use this form below to send us a message. Please double check your email address before
            submitting the form because that is where we will reply. Also, sometimes our reply to you
            could land in your spam folder. Please check back with us by emailing us if you don&apos;t
            hear from us.
          </p>
          <div className="mt-6 max-w-6xl mx-auto text-left flex flex-col lg:flex-row gap-10">
            <div>
              <Image
                src="/images/contact/send-message.webp"
                alt="Vector illustration of mail inbox in phone."
                width={1600}
                height={1600}
                className="mx-auto w-full max-w-[350px]"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-[95%] bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 border border-gray-200 dark:border-slate-600 shadow-xl rounded-3xl p-4 py-4">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      {/* ── Section 3: Schedule a meeting ── */}
      <div className="w-screen bg-white dark:bg-slate-900">
        <div className="w-full text-center bg-white dark:bg-slate-900">
          <section className="pt-10 pb-20 px-4 w-[clamp(320px,92vw,1024px)] mx-auto">
            <h2 className="font-bold text-[#003066] dark:text-blue-300">Schedule a meeting with the founder</h2>
            <div className="mt-6 max-w-3xl mx-auto text-left flex flex-col lg:flex-row gap-10">
              <div className="nomb mt-1 max-w-3xl mx-auto text-left">
                <div>
                  <p>
                    If you&apos;d like to ask a question or share your thoughts with the founder of
                    the project,{" "}
                    <a href="https://www.badriadhikari.com" target="_blank" rel="noopener noreferrer">
                      Dr. Badri Adhikari
                    </a>
                    , you&apos;re welcome to schedule a meeting with him.
                  </p>
                </div>
                <div className="text-center justify-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://cal.com/badri/30min?user=badri"
                    className="nounderline whitespace-nowrap m-4 inline-flex items-center gap-2 px-6 py-2 rounded-full font-medium border border-[#003066] dark:border-slate-500 text-[#003066] dark:text-blue-300 bg-transparent shadow-lg transition-transform duration-300 hover:scale-95"
                  >
                    Schedule a Meeting
                  </a>
                </div>
              </div>
              <div className="my-2 mx-auto">
                <Image
                  src="/images/contact/founder-meeting.webp"
                  alt="Icon of calendar"
                  width={1450}
                  height={1059}
                  className="rounded-xl max-w-[260px]"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </div>
        <div className="bg-white dark:bg-slate-900">
          <div className="w-full text-center bg-[#D9EBFF] dark:bg-slate-800">
            <section className="pt-10 pb-20 px-4 w-[clamp(320px,92vw,1024px)] mx-auto">
              <h2 className="font-bold text-[#003066] dark:text-blue-300">Careers at Process Feedback</h2>
              <div className="mt-6 max-w-3xl mx-auto text-left flex flex-col lg:flex-row gap-10">
                <div className="my-2 mx-auto">
                  <Image
                    src="/images/contact/career-at-pf.webp"
                    alt="Icon of planning a tree."
                    width={1621}
                    height={1188}
                    className="rounded-xl max-w-[260px]"
                    loading="lazy"
                  />
                </div>
                <p className="mt-1 max-w-3xl mx-auto text-left"></p>
                <div>
                  <p>
                    We are always looking for volunteers and students who are passionate about solving
                    meaningful problems.
                  </p>
                  <p>
                    If you&apos;re interested in contributing, please email us with the subject line
                    &apos;Interested to contribute to Process Feedback&apos;. Be sure to include at
                    least one idea for how you think Process Feedback could be improved.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ── Section 5: Social media ── */}
      <div className="w-screen bg-white dark:bg-slate-900">
        <section className="py-8 px-4 w-[clamp(320px,92vw,1024px)] mx-auto">
          <div
            className="rounded-2xl p-5 lg:pt-5 bg-gradient-to-b from-[#B2D6FF] to-[#F2F8FF] dark:from-blue-900 dark:to-slate-800"
          >
            <div className="mx-auto lg:grid lg:grid-cols-[30%_70%] gap-6 items-center">
              <Image
                src="/images/contact/follow-us.webp"
                alt="Vector illustration of follows us."
                width={571}
                height={468}
                className="mx-auto w-full max-w-[350px]"
                loading="lazy"
              />
              <div className="flex flex-col items-center mt-6 lg:mt-0">
                <div className="px-4 text-center">
                  <h2>Don&apos;t miss our updates</h2>
                  <p className="mt-4 text-center">
                    Follow us on social media to stay updated on new features and improvements
                    happening at Process Feedback.
                  </p>
                  <div className="mt-6 flex justify-center text-center">
                    <div className="flex gap-2 flex-shrink-0 max-lg:mt-5">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/processfeedback" aria-label="Facebook"
                        className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 hover:opacity-80">
                        <svg className="text-gray-200 w-3.5 h-3.5" fill="currentColor" viewBox="0 0 320 512">
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://x.com/processfeedback" aria-label="Twitter"
                        className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 hover:opacity-80">
                        <svg className="text-gray-200 w-3.5 h-3.5" fill="currentColor" viewBox="0 0 512 512">
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/process-feedback/" aria-label="LinkedIn"
                        className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 hover:opacity-80">
                        <svg className="text-gray-200 w-3.5 h-3.5" fill="currentColor" viewBox="0 0 448 512">
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@ProcessFeedback" aria-label="Youtube"
                        className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-600 hover:opacity-80">
                        <svg className="text-gray-200 w-3.5 h-3.5" fill="currentColor" viewBox="0 0 576 512">
                          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
