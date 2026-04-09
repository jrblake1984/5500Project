"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full text-lg transition-colors hover:bg-[#C3E0FD] dark:hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
    >
      <span aria-hidden="true" className="transition-transform duration-200 select-none">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
