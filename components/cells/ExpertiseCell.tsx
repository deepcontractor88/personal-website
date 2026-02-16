"use client";

import { useState } from "react";
import Image from "next/image";
import Cell from "./Cell";
import type { ExpertiseArea } from "@/content/expertise";

/* ── Inline SVG icons keyed by expertise area ───────────── */

function ExpertiseIcon({ icon, className }: { icon: string; className?: string }) {
  const base = `h-7 w-7 sm:h-8 sm:w-8 ${className ?? ""}`;

  switch (icon) {
    case "agent":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          {/* Brain / network nodes */}
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="5" cy="17" r="2.5" />
          <circle cx="19" cy="17" r="2.5" />
          <path d="M12 7.5v3M8.5 15.5l2-3M15.5 15.5l-2-3" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity={0.3} />
        </svg>
      );
    case "platform":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          {/* Stacked layers */}
          <path d="M2 12l10 5 10-5" />
          <path d="M2 17l10 5 10-5" />
          <path d="M12 2L2 7l10 5 10-5L12 2z" fill="currentColor" opacity={0.1} />
          <path d="M12 2L2 7l10 5 10-5L12 2z" />
        </svg>
      );
    case "migration":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          {/* Transfer arrows */}
          <path d="M5 12h14" />
          <path d="M15 8l4 4-4 4" />
          <rect x="1" y="4" width="6" height="16" rx="1" opacity={0.15} fill="currentColor" />
          <rect x="17" y="4" width="6" height="16" rx="1" opacity={0.15} fill="currentColor" />
          <rect x="1" y="4" width="6" height="16" rx="1" />
          <rect x="17" y="4" width="6" height="16" rx="1" />
        </svg>
      );
    case "presales":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          {/* Blueprint / document with checkmark */}
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 7h8M8 11h5" />
          <path d="M10 16l2 2 4-4" strokeWidth={2} />
        </svg>
      );
    case "consulting":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          {/* Handshake / people */}
          <circle cx="8" cy="6" r="3" />
          <circle cx="16" cy="6" r="3" />
          <path d="M2 20c0-4 3-6 6-6 1.5 0 2.8.5 3.8 1.3" />
          <path d="M22 20c0-4-3-6-6-6-1.5 0-2.8.5-3.8 1.3" />
          <path d="M10 17l2 2 4-4" strokeWidth={2} />
        </svg>
      );
    default:
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 3" strokeLinecap="round" />
        </svg>
      );
  }
}

/* ── ExpertiseCell ───────────────────────────────────────── */

interface ExpertiseCellProps {
  areas: ExpertiseArea[];
  cellNumber?: number;
  timestamp?: string;
}

export default function ExpertiseCell({
  areas,
  cellNumber,
  timestamp = "11:34 AM",
}: ExpertiseCellProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <Cell cellNumber={cellNumber} timestamp={timestamp} duration={"<1s"} executed>
      {/* Responsive card grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, idx) => {
          const isExpanded = expandedIdx === idx;

          return (
            <button
              key={area.title}
              type="button"
              onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              className={`group relative flex flex-col overflow-hidden rounded-xl border-l-[3px] text-left transition-all duration-200
                ${area.color.accent}
                ${isExpanded ? `${area.color.bg} shadow-md` : "bg-db-white hover:shadow-md"}
                border-r border-t border-b border-r-db-border border-t-db-border border-b-db-border
                hover:border-r-db-border-dark hover:border-t-db-border-dark hover:border-b-db-border-dark
              `}
            >
              {/* Card header */}
              <div className="flex items-start gap-3 px-4 pt-4 pb-2">
                {area.image ? (
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg sm:h-11 sm:w-11">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-contain"
                      sizes="44px"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-lg p-1.5 transition-colors duration-200
                      ${area.color.bg}
                    `}
                  >
                    <ExpertiseIcon icon={area.icon} className={area.color.tagText} />
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-db-gray-900 sm:text-[15px] leading-tight">
                    {area.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-db-gray-500 leading-snug">
                    {area.subtitle}
                  </p>
                </div>
              </div>

              {/* Highlight tags — always visible */}
              <div className="flex flex-wrap gap-1.5 px-4 pb-3">
                {area.highlights.map((h) => (
                  <span
                    key={h}
                    className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ring-1 leading-relaxed
                      ${area.color.tag} ${area.color.tagText}
                    `}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Expandable summary */}
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                  isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-db-border/50 mx-4 pt-3 pb-4 text-[13px] leading-relaxed text-db-gray-600">
                    {area.summary}
                  </p>
                </div>
              </div>

              {/* Expand indicator */}
              <div className="flex items-center justify-center pb-2">
                <svg
                  className={`h-3.5 w-3.5 text-db-gray-400 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>
    </Cell>
  );
}
