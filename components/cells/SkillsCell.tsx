"use client";

import { useState } from "react";
import Cell from "./Cell";

interface SkillGroup {
  label: string;
  skills: string;
}

interface SkillsCellProps {
  groups: SkillGroup[];
  cellNumber?: number;
  timestamp?: string;
}

const CATEGORY_COLORS: Record<
  string,
  { bg: string; text: string; ring: string; accent: string; iconBg: string }
> = {
  "Programming & Tools": {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-700 dark:text-blue-300",
    ring: "ring-blue-200 dark:ring-blue-800",
    accent: "border-blue-400 dark:border-blue-500",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
  },
  "Analytics & ML": {
    bg: "bg-purple-50 dark:bg-purple-900/20",
    text: "text-purple-700 dark:text-purple-300",
    ring: "ring-purple-200 dark:ring-purple-800",
    accent: "border-purple-400 dark:border-purple-500",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
  },
  "LLMs & GenAI": {
    bg: "bg-rose-50 dark:bg-rose-900/20",
    text: "text-rose-700 dark:text-rose-300",
    ring: "ring-rose-200 dark:ring-rose-800",
    accent: "border-rose-400 dark:border-rose-500",
    iconBg: "bg-rose-100 dark:bg-rose-900/40",
  },
  "ML Operations": {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    text: "text-emerald-700 dark:text-emerald-300",
    ring: "ring-emerald-200 dark:ring-emerald-800",
    accent: "border-emerald-400 dark:border-emerald-500",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
  },
  Databricks: {
    bg: "bg-orange-50 dark:bg-orange-900/20",
    text: "text-orange-700 dark:text-orange-300",
    ring: "ring-orange-200 dark:ring-orange-800",
    accent: "border-orange-400 dark:border-orange-500",
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
  },
  "Soft Skills": {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    text: "text-amber-700 dark:text-amber-300",
    ring: "ring-amber-200 dark:ring-amber-800",
    accent: "border-amber-400 dark:border-amber-500",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
  },
};

const DEFAULT_COLOR = {
  bg: "bg-db-gray-50 dark:bg-db-gray-800",
  text: "text-db-gray-700 dark:text-db-gray-300",
  ring: "ring-db-gray-200 dark:ring-db-gray-700",
  accent: "border-db-gray-400",
  iconBg: "bg-db-gray-100 dark:bg-db-gray-800",
};

/* Category icons */
function CategoryIcon({ label, className }: { label: string; className?: string }) {
  const base = `h-5 w-5 ${className ?? ""}`;
  switch (label) {
    case "Programming & Tools":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "Analytics & ML":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20v-4" />
        </svg>
      );
    case "LLMs & GenAI":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.92" />
          <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.57 3.25 3.92" />
          <path d="M12 10v4" />
          <circle cx="12" cy="18" r="4" />
          <path d="M10 18h4" />
        </svg>
      );
    case "ML Operations":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "Databricks":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12l10 5 10-5" />
          <path d="M2 17l10 5 10-5" />
          <path d="M12 2L2 7l10 5 10-5L12 2z" />
        </svg>
      );
    case "Soft Skills":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    default:
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default function SkillsCell({
  groups,
  cellNumber,
  timestamp = "11:34 AM",
}: SkillsCellProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <Cell
      cellNumber={cellNumber}
      timestamp={timestamp}
      duration={"<1s"}
      executed
      commandDuration="0.12s"
    >
      <div>
        {/* Category cards grid */}
        <div className="grid gap-3 sm:grid-cols-2">
          {groups.map((g, idx) => {
            const color = CATEGORY_COLORS[g.label] ?? DEFAULT_COLOR;
            const skills = g.skills.split(",").map((s) => s.trim());
            const isExpanded = expandedIdx === idx;

            return (
              <button
                key={g.label}
                type="button"
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className={`group flex flex-col text-left rounded-xl border border-db-border transition-all duration-200 overflow-hidden
                  ${isExpanded ? "ring-1 " + color.ring + " border-transparent shadow-md" : "hover:border-db-border-dark hover:shadow-sm"}
                `}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 px-4 py-3">
                  {/* Icon */}
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${color.iconBg}`}>
                    <CategoryIcon label={g.label} className={color.text} />
                  </span>

                  {/* Label + count */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-db-gray-900 dark:text-db-gray-100">
                      {g.label}
                    </p>
                    <p className="text-xs text-db-gray-500 dark:text-db-gray-400">
                      {skills.length} skills
                    </p>
                  </div>

                  {/* Chevron */}
                  <svg
                    className={`h-4 w-4 shrink-0 text-db-gray-400 transition-transform duration-200 ${
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

                {/* Compact preview (collapsed) */}
                {!isExpanded && (
                  <div className="px-4 pb-3 -mt-1">
                    <p className="text-xs leading-relaxed text-db-gray-500 dark:text-db-gray-400 line-clamp-2">
                      {skills.join(" · ")}
                    </p>
                  </div>
                )}

                {/* Expanded skill tags */}
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-wrap gap-1.5 border-t border-db-border/50 px-4 pt-3 pb-3.5">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ${color.bg} ${color.text} ${color.ring}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Cell>
  );
}
