import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
];

const teamMembers = [
  "Rosmin Rose Binoy",
  "Jason Blake",
  "Yusuf Mohamed Said Ali",
  "Abdul Rafay Ahmed Khan",
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Brand + Attribution */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-xs font-bold text-white">
                PF
              </span>
              <span className="text-base font-semibold text-white">
                Process Feedback
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Content from{" "}
              <a
                href="https://www.processfeedback.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-400 underline hover:text-primary-300"
              >
                www.processfeedback.org
              </a>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Project Group 2 · CMP_SCI-5500-001 · Software Engineering · Spring
              2026 · UMSL
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Team */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Team Members
            </h3>
            <ul className="mt-4 space-y-2">
              {teamMembers.map((name) => (
                <li key={name} className="text-sm">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + Bottom row */}
        <div className="mt-10 border-t border-slate-700 pt-6">
          <p className="text-center text-xs text-slate-400">
            This project is a duplicate of a real public website created solely
            for academic purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
