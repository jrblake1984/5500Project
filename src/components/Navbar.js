"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const dropdownMenus = {
  "Student Tools": [
    { label: "Start Writing", href: "https://write.processfeedback.org", external: true },
    { label: "Start Coding", href: "https://code.processfeedback.org", external: true },
    { label: "For Google Docs", href: "/gdocs" },
    { label: "For Visual Studio Code", href: "/vscode" },
    { label: "For Microsoft Word", href: "/word" },
    { label: "Process Feedback Extension", href: "/extension" },
    { label: "Student Guides", href: "/docs/students" },
  ],
  "Teacher Tools": [
    { label: "Create an Editor", href: "/editor" },
    { label: "Create an Assignment", href: "/assignment" },
    { label: "Google Docs Extension", href: "/gdocs" },
    { label: "For LMS", href: "/extension" },
    { label: "Upcoming Webinar", href: "https://dateful.com/eventlink/1050208120", external: true },
    { label: "Teacher Guides", href: "/docs/teachers" },
  ],
  "Institutions": [
    { label: "Canvas Users", href: "/canvas" },
    { label: "D2L Users", href: "/d2l" },
    { label: "Moodle Users", href: "/moodle" },
    { label: "Blackboard Users", href: "/blackboard" },
    { label: "Google Docs Users", href: "/gdocs" },
    { label: "LTI Access", href: "/lti" },
    { label: "Institutional Docs", href: "/docs/institutions" },
  ],
  "About": [
    { label: "About the Project", href: "/about" },
    { label: "Related Research", href: "/research" },
    { label: "Team", href: "/team" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const dropdownKeys = ["Student Tools", "Teacher Tools", "Institutions", "About"];

// Pages that actually exist in src/app/ - use <Link> only for these
const validRoutes = new Set(["/", "/about", "/attribution", "/contact", "/docs", "/privacy"]);

// Shared item link class for desktop dropdown and mobile accordion
const dropItemCls =
  "nounderline block px-2 py-2 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-600 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2";

function DropdownItem({ item, onClick }) {
  if (item.external) {
    return (
      <li>
        <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={dropItemCls}>
          {item.label}
        </a>
      </li>
    );
  }
  if (validRoutes.has(item.href)) {
    return (
      <li>
        <Link href={item.href} onClick={onClick} className={dropItemCls}>
          {item.label}
        </Link>
      </li>
    );
  }
  return (
    <li>
      <a href={item.href} onClick={onClick} className={dropItemCls}>
        {item.label}
      </a>
    </li>
  );
}

// Shared accordion item class for mobile
const accordionItemCls =
  "accordion-link nounderline block rounded-lg ml-4 mr-2 px-5 py-2 transition-colors focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_rgba(96,165,250,0.95)] focus-visible:bg-blue-50 dark:focus-visible:bg-slate-600 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-600 hover:text-blue-700 dark:hover:text-blue-300";

function MobileDropdownItem({ item, onClick }) {
  if (item.external) {
    return (
      <li>
        <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={accordionItemCls}>
          {item.label}
        </a>
      </li>
    );
  }
  if (validRoutes.has(item.href)) {
    return (
      <li>
        <Link href={item.href} onClick={onClick} className={accordionItemCls}>
          {item.label}
        </Link>
      </li>
    );
  }
  return (
    <li>
      <a href={item.href} onClick={onClick} className={accordionItemCls}>
        {item.label}
      </a>
    </li>
  );
}

function ChevronDown({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setOpenDropdown(null);
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  function closeMobileMenu() {
    setIsOpen(false);
    setOpenMobileSection(null);
  }

  function handleDesktopMouseEnter(label) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  }

  function handleDesktopMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  function toggleMobileSection(label) {
    setOpenMobileSection(openMobileSection === label ? null : label);
  }

  return (
    <nav
      ref={navRef}
      id="main-nav"
      aria-label="Primary"
      className="h-20 bg-websiteNav dark:bg-slate-900 flex items-center z-50"
    >
      <div className="mx-auto flex justify-between items-center py-1 px-4 max-md:px-2 w-full max-w-7xl">

        {/* â”€â”€ LOGO â”€â”€ */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="nounderline flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            aria-label="Course Project home"
            onClick={closeMobileMenu}
          >
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#8C1515] shrink-0" aria-hidden="true">
                <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6a14 14 0 100 28 14 14 0 000-28zm0 3a11 11 0 110 22 11 11 0 010-22z" fill="#8C1515" />
                  <path d="M18.5 4h3v4h-3zM18.5 32h3v4h-3zM4 18.5v3h4v-3zM32 18.5v3h4v-3zM8.3 8.3l2.1 2.1 2.1-2.1-2.1-2.1zM27.5 27.5l2.1 2.1 2.1-2.1-2.1-2.1zM8.3 29.6l2.1-2.1-2.1-2.1-2.1 2.1zM27.5 10.4l2.1-2.1-2.1-2.1-2.1 2.1z" fill="#8C1515" />
                  <path d="M14 18c0-1.5 2.5-3 6-3s6 1.5 6 3v7h-6-6v-7z" fill="#D4A843" opacity="0.9" />
                  <path d="M20 15v10" stroke="#8C1515" strokeWidth="0.8" />
                  <path d="M16.5 13l2.5 2.5 5-5" stroke="#D4A843" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-[#8C1515] dark:text-red-400 tracking-wide">UMSL PROJECT</span>
                <span className="text-[10px] text-[#8C1515] dark:text-red-400 tracking-wide whitespace-nowrap">Course Project at UMSL</span>
              </div>
          </Link>
        </div>

        {/* â”€â”€ DESKTOP NAVBAR (hidden below lg) â”€â”€ */}
        <div className="max-lg:hidden justify-center h-full">
          <ul className="nav-list ml-3 h-full flex items-center gap-1" role="list" aria-label="Site navigation">

            {/* Home */}
            <li className="h-full flex items-center">
              <Link
                href="/"
                className="nounderline h-10 px-3 inline-flex items-center rounded-md text-slate-700 dark:text-slate-200 font-medium hover:bg-blue-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
              >
                Home
              </Link>
            </li>

            {/* Dropdown items */}
            {dropdownKeys.map((label) => {
              const isOpen_ = openDropdown === label;
              const id = `navmenu-${label.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <li
                  key={label}
                  className="nav-dropdown relative h-full flex items-center group"
                  onMouseEnter={() => handleDesktopMouseEnter(label)}
                  onMouseLeave={handleDesktopMouseLeave}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen_}
                    aria-controls={id}
                    className="nav-trigger h-10 px-3 inline-flex items-center gap-1 rounded-md font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
                    onClick={() => setOpenDropdown(isOpen_ ? null : label)}
                  >
                    <span className="whitespace-nowrap">{label}</span>
                    <ChevronDown className={`w-5 h-5 opacity-80 transition-[transform,opacity] duration-200 ${isOpen_ ? "rotate-180 opacity-100" : "group-hover:opacity-100"}`} />
                  </button>

                  {isOpen_ && (
                    <div className={`absolute top-full pt-2 z-50 ${label === "About" ? "right-0" : "left-0"}`}>
                      <ul
                        id={id}
                        aria-label={`${label} menu`}
                        className="nav-list min-w-[220px] overflow-visible rounded-xl border border-blue-300 dark:border-slate-600 bg-blue-100 dark:bg-slate-700 shadow-lg p-2 text-left"
                      >
                        {dropdownMenus[label].map((item) => (
                          <DropdownItem key={item.label} item={item} onClick={() => setOpenDropdown(null)} />
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}

            <li className="h-full flex items-center">
              <ThemeToggle />
            </li>
          </ul>
        </div>

        {/* â”€â”€ MOBILE HAMBURGER (shown below lg) â”€â”€ */}
        <div className="lg:hidden mr-2 ml-auto flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="ml-auto inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-blue-700 hover:bg-blue-200 transition-colors focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_rgba(96,165,250,0.95)] focus-visible:bg-blue-50"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="mobile-menu-panel"
            onClick={() => { setIsOpen(!isOpen); if (isOpen) setOpenMobileSection(null); }}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* â”€â”€ MOBILE MENU PANEL â”€â”€ */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20" onClick={closeMobileMenu} />
          {/* Panel */}
          <div className="absolute top-[80px] left-0 right-0">
            <ul
              id="mobile-menu-panel"
              className="nav-list w-full bg-websiteNavMobile dark:bg-slate-800 shadow-lg border-t border-blue-100 py-3 max-h-[calc(100vh-80px)] overflow-auto"
              aria-label="Site navigation"
            >
              {/* Home */}
              <li className="px-3 text-left">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="nounderline block rounded-lg px-5 py-3 font-medium text-[#4400FF] dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_rgba(96,165,250,0.95)] focus-visible:bg-blue-50 dark:focus-visible:bg-slate-600"
                >
                  Home
                </Link>
              </li>

              {/* Accordion sections */}
              {dropdownKeys.map((label) => {
                const isExpanded = openMobileSection === label;
                const panelId = `mobile-section-${label.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <li key={label} className="mobile-accordion px-3 mt-1" data-category={label}>
                    <button
                      type="button"
                      className={`accordion-trigger w-full flex items-center justify-between rounded-lg px-5 py-3 font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_2px_rgba(96,165,250,0.95)] focus-visible:bg-blue-50 dark:focus-visible:bg-slate-600 ${isExpanded ? "bg-blue-100 dark:bg-slate-600 text-blue-700 dark:text-blue-300" : ""}`}
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() => toggleMobileSection(label)}
                    >
                      <span className="text-left">{label}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {/* CSS grid accordion matching original */}
                    <div
                      id={panelId}
                      className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out overflow-hidden ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <ul className="min-h-0 text-left">
                        {dropdownMenus[label].map((item) => (
                          <MobileDropdownItem key={item.label} item={item} onClick={closeMobileMenu} />
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
