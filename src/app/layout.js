import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "optional",
  variable: "--font-inter",
});

export const metadata = {
  title: "Process Feedback - Course Project at UMSL",
  description:
    "A reconstruction of processfeedback.org built for CMP_SCI-5500-001 Software Engineering, Spring 2026, UMSL.",
  robots: { index: false, follow: false },
};

const antiFlashScript = `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://www.processfeedback.org" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.processfeedback.org" />
        <script dangerouslySetInnerHTML={{ __html: antiFlashScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          {/* Print-only header: shown only on printed pages so the brand survives when <nav> is hidden. */}
          <div className="print-only-header" aria-hidden="true">
            <span className="print-only-header__brand">UMSL PROJECT</span>
            <span className="print-only-header__tag">Course Project at UMSL &middot; CMP_SCI-5500-001 Software Engineering, Spring 2026</span>
          </div>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          {/* Print-only footer: simple single-line attribution that prints when the real footer is hidden. */}
          <div className="print-only-footer" aria-hidden="true">
            Process Feedback &middot; Course Project at UMSL &middot; processfeedback-project.vercel.app
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
