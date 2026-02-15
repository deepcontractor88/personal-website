"use client";

import Image from "next/image";
import Cell from "./Cell";
import type { Industry } from "@/content/industries";

/* ── Component ────────────────────────────────────────────── */

interface IndustriesCellProps {
  industries: Industry[];
  cellNumber?: number;
  timestamp?: string;
}

export default function IndustriesCell({
  industries,
  cellNumber,
  timestamp = "11:33 AM",
}: IndustriesCellProps) {
  return (
    <Cell cellNumber={cellNumber} timestamp={timestamp} duration="<1s" executed>
      <div>
        {/* Section header */}
        <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-db-gray-500 dark:text-db-gray-400">
          Industry Experience
        </p>

        {/* Industry pillar cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group flex flex-col items-center gap-3 rounded-xl border border-db-border bg-db-white px-4 py-6 transition-all duration-200 hover:border-db-border-dark hover:shadow-lg dark:bg-db-gray-800/30"
            >
              <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-contain transition-transform duration-200 group-hover:scale-110"
                  sizes="80px"
                />
              </div>
              <span className="text-center text-xs font-semibold leading-tight text-db-gray-800 dark:text-db-gray-200 sm:text-sm">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Cell>
  );
}
