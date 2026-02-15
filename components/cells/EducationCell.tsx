"use client";

import Image from "next/image";
import Cell from "./Cell";

interface EducationCellProps {
  rows: {
    degree: string;
    school: string;
    year: string;
    field?: string;
    logo?: string;
  }[];
  cellNumber?: number;
  timestamp?: string;
}

const ACCENT_COLORS = [
  "from-db-blue/10 to-indigo-100/60 dark:from-db-blue/20 dark:to-indigo-900/20",
  "from-emerald-50 to-teal-100/60 dark:from-emerald-900/20 dark:to-teal-900/20",
  "from-amber-50 to-orange-100/60 dark:from-amber-900/20 dark:to-orange-900/20",
];

export default function EducationCell({
  rows,
  cellNumber,
  timestamp = "11:35 AM",
}: EducationCellProps) {
  return (
    <Cell cellNumber={cellNumber} timestamp={timestamp} duration={"<1s"} executed>
      <div className="grid gap-4 sm:grid-cols-2">
        {rows.map((row, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-xl border border-db-border bg-db-white transition-all duration-200 hover:border-db-blue/30 hover:shadow-md"
          >
            {/* Gradient header strip */}
            <div className={`h-2 w-full bg-gradient-to-r ${ACCENT_COLORS[i % ACCENT_COLORS.length]}`} />

            <div className="flex items-start gap-3 p-4">
              {row.logo && (
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-db-border bg-white shadow-sm transition-transform duration-200 group-hover:scale-105 dark:bg-db-gray-100">
                  <Image
                    src={row.logo}
                    alt={row.school}
                    fill
                    className="object-contain p-1.5"
                    sizes="56px"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h4 className="text-base font-bold text-db-gray-900 leading-snug">
                  {row.degree}
                </h4>
                <p className="mt-0.5 text-[15px] text-db-gray-600">{row.school}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-db-gray-100 px-2.5 py-0.5 text-xs font-medium text-db-gray-600 dark:bg-db-gray-200 dark:text-db-gray-700">
                    {row.year}
                  </span>
                  {row.field && (
                    <span className="inline-flex items-center rounded-full bg-db-blue/10 px-2.5 py-0.5 text-xs font-medium text-db-blue">
                      {row.field}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Cell>
  );
}
