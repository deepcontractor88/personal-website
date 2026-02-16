"use client";

import { useState } from "react";
import Image from "next/image";
import Cell from "./Cell";

interface ExperienceDetailCellProps {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  logo?: string;
  cellNumber?: number;
  timestamp?: string;
}

const INITIAL_VISIBLE = 3;

export default function ExperienceDetailCell({
  role,
  company,
  period,
  location,
  bullets,
  logo,
  cellNumber,
  timestamp = "11:33 AM",
}: ExperienceDetailCellProps) {
  const [showAll, setShowAll] = useState(false);
  const hasMore = bullets.length > INITIAL_VISIBLE;
  const visibleBullets = showAll ? bullets : bullets.slice(0, INITIAL_VISIBLE);

  return (
    <Cell cellNumber={cellNumber} timestamp={timestamp} duration={"<1s"} executed>
      {/* Left accent border with subtle background */}
      <div className="rounded-r-lg border-l-[3px] border-[#FF3621]/70 bg-db-gray-50/30 py-4 pl-4 pr-3">
        {/* Header with logo */}
        <div className="flex items-start gap-4">
          {logo && (
            <div className="relative mt-0.5 h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-db-border bg-db-white shadow">
              <Image
                src={logo}
                alt={company}
                fill
                className="object-contain p-1.5"
                sizes="56px"
              />
            </div>
          )}
          <div className="min-w-0">
            <h3 className="text-lg font-bold tracking-tight text-db-gray-900">
              {role}
            </h3>
            <p className="mt-0.5 text-[15px]">
              <span className="font-semibold text-db-gray-700">{company}</span>
              <span className="mx-1.5 text-db-gray-400">|</span>
              <span className="text-db-gray-500">{period}</span>
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-db-gray-500">
              <svg className="h-3.5 w-3.5 text-db-blue/70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {location}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-3.5 h-px bg-db-border/60" />

        {/* Contributions count */}
        <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-db-gray-500">
          Key Contributions
          <span className="ml-1.5 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-db-blue/10 px-1.5 text-[10px] font-bold text-db-blue">
            {bullets.length}
          </span>
        </p>

        {/* Bullets */}
        <ul className="space-y-3 pl-0">
          {visibleBullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[14px] leading-[1.7] text-db-gray-700"
            >
              <svg className="mt-1 h-4 w-4 shrink-0 text-db-blue/60" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Show more / less */}
        {hasMore && (
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-db-blue transition hover:opacity-80"
          >
            {showAll ? "Show less" : `Show ${bullets.length - INITIAL_VISIBLE} more`}
            <svg
              className={`h-3.5 w-3.5 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>
        )}
      </div>
    </Cell>
  );
}
