import Link from "next/link";

const ILLUSTRATION = "/images/404-illustration.webp";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen bg-gray-100 dark:bg-slate-900">
      <section className="pt-10 pb-20 px-4 w-[clamp(320px,92vw,1024px)] mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ILLUSTRATION}
          alt="404 error illustration"
          loading="lazy"
          decoding="async"
          width={600}
          height={434}
          className="mx-auto my-auto h-[220px] w-auto mb-9"
        />
        <h1 className="text-center text-[22px] font-semibold text-[#495565] dark:text-slate-200">Page Not Found</h1>
        <p className="text-center text-lg text-[#697282] dark:text-slate-400 mt-[23px]">
          We can&apos;t find the page you were looking for.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/" className="header-btn nounderline text-white">
            Return Home
            <svg className="text-base w-4 h-4" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true" focusable="false">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
