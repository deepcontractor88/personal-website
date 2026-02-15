"use client";

import { useState, useEffect, useCallback } from "react";


interface HeaderBarProps {
  onRunAll?: () => void;
  title?: string;
}

export default function HeaderBar({
  onRunAll,
  title = "The Next Generation of Notebooks",
}: HeaderBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  /* Read initial dark state */
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  /* Scroll shadow */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Toggle dark mode */
  const toggleDark = useCallback(() => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* noop */
    }
  }, [dark]);

  return (
    <header
      className={`sticky top-0 z-50 flex h-[var(--db-header-h)] items-center border-b border-db-border bg-db-header ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      {/* Left: title */}
      <div className="flex min-w-0 flex-1 items-center gap-2 pl-3 sm:pl-4 md:gap-3 md:pl-5">
        <h1 className="truncate text-sm font-semibold text-db-gray-900 sm:text-base">
          {title}
        </h1>
        <span className="ml-1 hidden shrink-0 items-center gap-0.5 rounded bg-[color-mix(in_srgb,var(--db-blue)_12%,transparent)] px-2 py-1 text-xs font-medium text-db-blue md:flex">
          SQL
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
        <button type="button" className="ml-1 hidden text-db-gray-400 hover:text-db-gray-600 md:block" aria-label="Star">
          <StarIcon className="h-4.5 w-4.5" />
        </button>
        <span className="ml-2 hidden text-2xs text-db-gray-400 lg:inline">
          Revised 2 days ago
        </span>
      </div>

      {/* Right controls: shrink-wrapped, no flex-1 so title gets remaining space */}
      <div className="flex shrink-0 items-center gap-1 pr-2 sm:gap-2.5 sm:pr-5">
        {/* Dark mode toggle */}
        <button
          type="button"
          onClick={toggleDark}
          className="flex h-8 w-8 items-center justify-center rounded-md text-db-gray-500 transition hover:bg-db-gray-100 hover:text-db-gray-700 sm:h-9 sm:w-9"
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? <SunIcon className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" /> : <MoonIcon className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" />}
        </button>

        {/* Run all: icon-only on mobile, icon+text on sm+ */}
        <button
          type="button"
          onClick={onRunAll}
          className="flex h-8 items-center gap-1.5 rounded-md bg-db-blue/[0.08] px-2.5 text-sm font-medium text-db-blue transition-all duration-150 hover:bg-db-blue/[0.15] active:scale-[0.97] sm:gap-2 sm:px-4"
          aria-label="Run all"
        >
          <PlayTriangle className="h-3 w-3" />
          <span className="hidden sm:inline">Run all</span>
        </button>

        {/* Cluster indicator: display only, not interactive */}
        <div className="flex h-8 items-center gap-1 rounded-md border border-db-border bg-db-white px-2 text-sm pointer-events-none select-none sm:h-9 sm:gap-1.5 sm:px-3">
          <span className="cluster-dot h-2 w-2 shrink-0 rounded-full bg-[#4caf50] sm:h-2.5 sm:w-2.5" />
          <span className="max-w-[80px] truncate text-xs text-db-gray-700 sm:max-w-[130px] sm:text-sm md:max-w-[170px]">
            Serverless
          </span>
        </div>

        {/* Schedule: hidden on mobile + tablet */}
        <a
          href="https://calendly.com/deep-contractor88"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-9 items-center gap-1.5 rounded-md border border-db-border bg-db-white px-3 text-sm font-medium text-db-gray-700 hover:bg-db-gray-100 md:flex"
          aria-label="Schedule"
        >
          <CalendarIcon className="h-4 w-4" />
          Schedule
        </a>

        {/* LinkedIn: icon-only on mobile, icon+text on sm+ */}
        <a
          href="https://linkedin.com/in/deepcontractor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 items-center gap-1.5 rounded-md bg-[#0A66C2] px-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 active:scale-[0.97] sm:h-9 sm:px-4"
          aria-label="LinkedIn profile"
        >
          <LinkedInIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </div>
    </header>
  );
}

/* ---------- SVG icons ---------- */

function PlayTriangle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 10 12" fill="currentColor">
      <path d="M0 0v12l10-6L0 0z" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M10 1l2.39 4.84L17.82 6.9l-3.91 3.81.92 5.39L10 13.38l-4.83 2.72.92-5.39L2.18 6.9l5.43-1.06L10 1z" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" />
      <path d="M5 1v3M11 1v3M1.5 6.5h13" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
