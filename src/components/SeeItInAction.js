"use client";

export default function SeeItInAction() {
  return (
    <div className="w-screen bg-[#edf1fa] dark:bg-slate-900">
      <section className="py-10 px-4">

        {/* Card: gradient bg from-[#94CFFA] to-[#B5DEFB], rounded-2xl, p-3 lg:pt-10 */}
        <div className="bg-gradient-to-b from-[#94CFFA] to-[#B5DEFB] rounded-2xl p-3 lg:pt-10 dark:from-blue-900 dark:to-blue-800 max-w-4xl mx-auto">

          {/* Inner: stacked on mobile, 30/70 grid on lg */}
          <div className="mx-auto lg:grid lg:grid-cols-[30%_70%] gap-6 items-center">

            {/* Image - max 350px wide, no hover animation */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/teachers.BMv3acBb_ZEWi0j.webp"
              alt="Group of teachers discussing with laptop on table."
              loading="lazy"
              decoding="async"
              width="1512"
              height="682"
              className="mx-auto w-full max-w-[350px]"
            />

            {/* Right content */}
            <div className="flex flex-col items-center mt-6 lg:mt-0">
              <div className="px-4">
                <h2>See It in Action</h2>
                <div>
                  <p>
                    See a sample student writing process report, or try it
                    yourself. It is free for teachers and students.
                  </p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-5 flex-wrap justify-center my-5">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.processfeedback.org/gdocs/g_17GWSvODr0wQtxPBXeplzkoqWw3xv4cOL_9ZbWmIpXOU_d6351d?report=true&token=4d4453da-f306-4e6f-9bd9-4223d9d145cb"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#0270E6] dark:bg-[#1e3a5f] px-6 h-10 text-base font-medium text-white shadow-lg hover:brightness-110 transition-[filter] duration-[300ms]"
                >
                  View Sample Student Report{" "}
                  <span aria-hidden="true">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>

                <a
                  href="https://www.processfeedback.org/gdocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#0270E6] dark:bg-[#1e3a5f] px-6 h-10 text-base font-medium text-white shadow-lg hover:brightness-110 transition-[filter] duration-[300ms]"
                >
                  Try It in Google Docs{" "}
                  <span aria-hidden="true">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
