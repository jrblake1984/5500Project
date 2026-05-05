"use client";

import { useActionState, useRef, useEffect, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { submitContact } from "@/app/contact/actions";

const initialState = { success: null, message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );
  const formRef = useRef(null);
  const captchaRef = useRef(null);
  const [emailMismatch, setEmailMismatch] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [captchaMissing, setCaptchaMissing] = useState(false);

  useEffect(() => {
    if (state.success === true) {
      if (formRef.current) formRef.current.reset();

      captchaRef.current?.resetCaptcha();
      setCaptchaToken("");
      setCaptchaMissing(false);

      // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting form state after server action requires setState
      setEmailMismatch(false);
    }
  }, [state]);

  function handleSubmit(formData) {
    const email = formData.get("email")?.toString().trim();
    const retypeEmail = formData.get("retypeEmail")?.toString().trim();
    if (email !== retypeEmail) {
      setEmailMismatch(true);
      return;
    }
    if (!captchaToken) {
      setCaptchaMissing(true);
      return;
    }
    setEmailMismatch(false);
    setCaptchaMissing(false);

    formData.set("h-captcha-response", captchaToken);
    formAction(formData);
  }

  return (
    <form ref={formRef} action={handleSubmit} className="flex flex-col gap-1 w-full p-2">
      {/* Honeypot - hidden from real users, catches bots */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="text-left relative group max-md:flex flex-col md:grid md:grid-cols-4 md:items-center mt-2">
        <label htmlFor="cf-name" className="font-medium text-gray-700 mb-2">
          Your name <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          name="name"
          required
          aria-required="true"
          placeholder="John Doe"
          className="col-span-3 border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-[border-color,box-shadow] duration-200 outline-none bg-white hover:border-gray-300"
        />
      </div>

      <div className="text-left relative group max-md:flex flex-col md:grid md:grid-cols-4 md:items-center mt-2">
        <label htmlFor="cf-email" className="font-medium text-gray-700 mb-2">
          Your email <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          required
          aria-required="true"
          placeholder="you@university.edu"
          className="col-span-3 border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-[border-color,box-shadow] duration-200 outline-none bg-white hover:border-gray-300"
        />
      </div>

      <div className="text-left relative group max-md:flex flex-col md:grid md:grid-cols-4 md:items-center mt-2">
        <label htmlFor="cf-retype-email" className="font-medium text-gray-700 mb-2">
          Retype email <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-retype-email"
          type="email"
          name="retypeEmail"
          required
          aria-required="true"
          aria-describedby={emailMismatch ? "email-mismatch-error" : undefined}
          placeholder="you@university.edu"
          className={`col-span-3 border-2 px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-200 transition-[border-color,box-shadow] duration-200 outline-none bg-white hover:border-gray-300 ${emailMismatch ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"}`}
        />
        {emailMismatch && (
          <p id="email-mismatch-error" className="col-span-4 mt-1 text-sm text-red-600" role="alert">
            Emails do not match!
          </p>
        )}
      </div>

      <div className="text-left relative group max-md:flex flex-col md:grid md:grid-cols-4 md:items-center mt-2">
        <label htmlFor="cf-subject" className="font-medium text-gray-700 mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-subject"
          type="text"
          name="subject"
          required
          aria-required="true"
          placeholder="Topic of your message"
          className="col-span-3 border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-[border-color,box-shadow] duration-200 outline-none bg-white hover:border-gray-300"
        />
      </div>

      <div className="text-left relative group max-md:flex flex-col md:grid md:grid-cols-4 mt-2">
        <label htmlFor="cf-message" className="font-medium text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          aria-required="true"
          placeholder="Share us your question or feedback"
          rows={5}
          className="col-span-3 border-2 border-gray-200 px-4 py-3 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-[border-color,box-shadow] duration-200 outline-none resize-none bg-white hover:border-gray-300"
        />
      </div>
      <div className="flex justify-center my-4">
        <HCaptcha
          ref={captchaRef}
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          onVerify={(token) => {
            setCaptchaToken(token);
            setCaptchaMissing(false);
          }}
          onExpire={() => {
            setCaptchaToken("");
          }}
          onError={() => {
            setCaptchaToken("");
          }}
        />
      </div>

      {captchaMissing && (
        <p className="text-center text-sm text-red-600" role="alert">
          Please complete the captcha before submitting.
        </p>
      )} 
      <button
        type="submit"
        disabled={isPending}
        className="header-btn self-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{isPending ? "Sending..." : "Send Message"}</span>
        {!isPending && (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2.3 11.3l18.6-9.3a1 1 0 0 1 1.4 1.4l-9.3 18.6a1 1 0 0 1-1.9-.2l-1.1-6.1-6.1-1.1a1 1 0 0 1-.2-1.9zm7.9 2.7l1 5.4 6.7-13.4-13.4 6.7 5.4 1a1 1 0 0 1 .3.2z" />
          </svg>
        )}
        {isPending && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
      </button>

      {state.success === true && (
        <div className="mt-2 px-2 py-4 rounded-xl text-center font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-700" role="status" aria-live="polite">
          {state.message}
        </div>
      )}

      {state.success === false && (
        <div className="mt-2 px-2 py-4 rounded-xl text-center font-medium bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-700" role="alert" aria-live="polite">
          {state.message}
        </div>
      )}
    </form>
  );
}
