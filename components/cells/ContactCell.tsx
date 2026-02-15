"use client";

import Cell from "./Cell";

interface ContactCellProps {
  email: string;
  location: string;
  linkedIn: string;
  cellNumber?: number;
  timestamp?: string;
}

export default function ContactCell({
  email,
  location,
  linkedIn,
  cellNumber = 11,
  timestamp = "11:36 AM",
}: ContactCellProps) {
  return (
    <Cell cellNumber={cellNumber} timestamp={timestamp} duration={"<1s"} executed>
      <div className="space-y-5">
        <h3 className="text-lg font-semibold text-db-gray-900">
          Get in Touch
        </h3>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-3 rounded-lg border border-db-border bg-db-gray-50 p-3 transition-all duration-200 hover:border-db-blue/40 hover:bg-db-cell-hover hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-db-blue/10 text-db-blue transition-transform duration-200 group-hover:scale-110">
              <MailIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-db-gray-500">
                Email
              </p>
              <p className="truncate text-[15px] font-medium text-db-gray-900">
                {email}
              </p>
            </div>
          </a>

          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-lg border border-db-border bg-db-gray-50 p-3 transition-all duration-200 hover:border-db-blue/40 hover:bg-db-cell-hover hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-db-blue/10 text-db-blue transition-transform duration-200 group-hover:scale-110">
              <LinkedInIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-db-gray-500">
                LinkedIn
              </p>
              <p className="text-[15px] font-medium text-db-gray-900">
                linkedin.com/in/deepcontractor
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3 rounded-lg border border-db-border bg-db-gray-50 p-3 sm:col-span-2">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-db-gray-200 text-db-gray-600">
              <LocationIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-db-gray-500">
                Location
              </p>
              <p className="text-[15px] font-medium text-db-gray-900">
                {location}
              </p>
            </div>
          </div>
        </div>

        <p className="border-t border-db-border pt-3 text-xs text-db-gray-500">Last updated: 2025</p>
      </div>
    </Cell>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
