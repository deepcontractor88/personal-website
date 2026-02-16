"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-db-border bg-db-white ml-0 lg:ml-[var(--db-sidebar-w)]">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Left: copyright */}
          <p className="text-sm text-db-gray-500">
            &copy; {currentYear} Deep Contractor. All rights reserved.
          </p>

          {/* Center: social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/deepcontractor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-db-gray-400 transition-colors hover:text-db-blue"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:deep.contractor88@gmail.com"
              className="text-db-gray-400 transition-colors hover:text-db-blue"
              aria-label="Email"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://kaggle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-db-gray-400 transition-colors hover:text-db-blue"
              aria-label="Kaggle"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374V23.47c0 .246-.154.369-.462.369H5.381c-.308 0-.462-.123-.462-.369V.879c0-.246.154-.369.462-.369h2.444c.308 0 .462.123.462.369v15.218l6.305-6.564c.181-.187.354-.277.492-.277h3.264c.154 0 .246.051.277.154a.31.31 0 01-.061.277l-6.627 6.748 6.843 8.344c.072.092.092.174.044.28z" />
              </svg>
            </a>
          </div>

          {/* Right: built with */}
          <p className="text-xs text-db-gray-400">
            Built with Next.js &middot; Styled as a Data Science Notebook
          </p>
        </div>
      </div>
    </footer>
  );
}
