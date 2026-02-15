"use client";

import Cell from "./Cell";
import { MapPin } from "lucide-react";

/* ── Component ────────────────────────────────────────────── */

interface AboutCellProps {
  name: string;
  subtitle: string;
  location?: string;
  summary: string;
  cellNumber?: number;
  timestamp?: string;
}

export default function AboutCell({
  name,
  subtitle,
  location,
  summary,
  cellNumber = 1,
  timestamp = "11:31 AM",
}: AboutCellProps) {
  return (
    <Cell
      cellNumber={cellNumber}
      timestamp={timestamp}
      duration="<1s"
      executed
    >
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-extrabold tracking-tight text-db-gray-900 sm:text-3xl">
          {name}
        </h1>
        <p className="mt-1 text-base font-semibold text-db-blue sm:text-lg">
          {subtitle}
        </p>

        {/* Location */}
        {location && (
          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-db-gray-500">
            <MapPin className="h-3.5 w-3.5" />
            {location}
          </p>
        )}

        {/* Gradient accent bar (Databricks brand) */}
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#FF3621] to-[#FF6A52] sm:mx-0 sm:w-32" />

        {/* Summary */}
        <p className="mt-4 text-[15px] leading-[1.75] text-db-gray-700 sm:text-base sm:leading-[1.8]">
          {summary}
        </p>

      </div>
    </Cell>
  );
}
