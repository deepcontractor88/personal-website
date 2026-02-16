"use client";

import { useState } from "react";
import Image from "next/image";
import Cell from "./Cell";

/* ── Icon helpers ────────────────────────────────────────────── */
function TrophyIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function MedalIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

function AwardIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

/* Maps icon keys to components */
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  trophy: TrophyIcon,
  star: StarIcon,
  medal: MedalIcon,
  award: AwardIcon,
};

/* ── Types ───────────────────────────────────────────────────── */
export interface TimelineItem {
  name: string;
  year: string;
  detail?: string;
  icon?: string;
  image?: string;
}

interface TimelineCellProps {
  items: TimelineItem[];
  cellNumber?: number;
  timestamp?: string;
  duration?: string;
  showPerformance?: boolean;
  performanceExpanded?: boolean;
  onPerformanceToggle?: () => void;
}

/* ── Color palette for icon circles ──────────────────────────── */
const COLORS = [
  { bg: "bg-db-blue/10", text: "text-db-blue" },
  { bg: "bg-emerald-500/10", text: "text-emerald-600" },
  { bg: "bg-amber-500/10", text: "text-amber-600" },
  { bg: "bg-violet-500/10", text: "text-violet-600" },
  { bg: "bg-rose-500/10", text: "text-rose-600" },
];

/* ── Helpers ─────────────────────────────────────────────────── */

/** Extract the last 4-digit year from a string for sorting. */
function sortYear(y: string): number {
  const matches = y.match(/\d{4}/g);
  if (!matches) return 0;
  return Math.max(...matches.map(Number));
}

/* ── Component ───────────────────────────────────────────────── */

export default function TimelineCell({
  items,
  cellNumber,
  timestamp,
  duration,
  showPerformance,
  performanceExpanded,
  onPerformanceToggle,
}: TimelineCellProps) {
  const totalItems = items.length;

  /* Sort items by year descending */
  const sorted = [...items].sort((a, b) => sortYear(b.year) - sortYear(a.year));

  /* Performance block state */
  const [localPerf, setLocalPerf] = useState(false);
  const perfOpen = performanceExpanded ?? localPerf;
  const handlePerfToggle = onPerformanceToggle ?? (() => setLocalPerf((p: boolean) => !p));

  return (
    <Cell cellNumber={cellNumber} timestamp={timestamp} duration={duration ?? "<1s"} executed>
      <div>
        {/* Award cards grid — 1 col mobile, 2 col desktop */}
        <div className="grid gap-3 sm:grid-cols-2">
          {sorted.map((item, i) => {
            const color = COLORS[i % COLORS.length];
            const IconComp = iconMap[item.icon ?? ""] ?? StarIcon;

            return (
              <div
                key={`${item.name}-${item.year}`}
                className="group flex items-center gap-3.5 rounded-xl border border-db-border bg-db-white px-4 py-3.5 transition-all duration-200 hover:border-db-border-dark hover:shadow-md"
              >
                {/* Image or icon */}
                {item.image ? (
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain transition-transform duration-200 group-hover:scale-110"
                      sizes="44px"
                    />
                  </span>
                ) : (
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${color.bg}`}
                  >
                    <IconComp className={`h-5 w-5 ${color.text}`} />
                  </span>
                )}

                {/* Title + detail + year */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[14px] font-semibold leading-snug text-db-gray-900 sm:text-[15px]">
                      {item.name}
                    </p>
                    <span className="mt-0.5 shrink-0 rounded-md bg-db-gray-200 px-1.5 py-0.5 text-2xs font-medium tabular-nums text-db-gray-600">
                      {item.year}
                    </span>
                  </div>
                  {item.detail && (
                    <p className="mt-0.5 text-[13px] leading-relaxed text-db-gray-500 sm:text-sm">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* See performance strip */}
        {showPerformance && (
          <div className="mt-3 border-t border-db-border pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs text-db-gray-500 transition hover:text-db-blue"
              onClick={(e) => {
                e.stopPropagation();
                handlePerfToggle();
              }}
            >
              <span>See performance (1)</span>
              <svg
                className={`h-3 w-3 transition-transform ${perfOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M3 4.5l3 3 3-3" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                perfOpen ? "mt-2 max-h-16 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-xs text-db-gray-500">
                {totalItems} awards &middot; 0.06 seconds &middot; Refreshed 5 hours ago
              </p>
            </div>
          </div>
        )}
      </div>
    </Cell>
  );
}
