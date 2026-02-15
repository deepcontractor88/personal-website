"use client";

import { useState, useEffect, ReactNode } from "react";
import Cell from "./Cell";

export interface TableCardRow {
  [key: string]: string;
}

export interface ColumnDef {
  key: string;
  label: string;
  /** Type indicator shown before column name: "str", "1.2", "date", etc. */
  type?: string;
  /** Right-align (for numbers) */
  numeric?: boolean;
}

interface TableCellProps {
  columns: ColumnDef[];
  rows: Record<string, string | number>[];
  cellNumber?: number;
  timestamp?: string;
  duration?: string;
  runtime?: string;
  refreshed?: string;
  showPerformance?: boolean;
  performanceExpanded?: boolean;
  onPerformanceToggle?: () => void;
  /** Extra content below the table (like description) */
  children?: ReactNode;
}

export default function TableCell({
  columns,
  rows,
  cellNumber,
  timestamp = "11:31 AM",
  duration = "<1s",
  runtime = "0.22 seconds",
  refreshed = "5 hours ago",
  showPerformance = true,
  performanceExpanded: controlledExpanded,
  onPerformanceToggle,
  children,
}: TableCellProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const [userHasToggled, setUserHasToggled] = useState(false);

  useEffect(() => {
    if (controlledExpanded === true) setUserHasToggled(false);
  }, [controlledExpanded]);

  const expanded =
    controlledExpanded !== undefined && !userHasToggled
      ? controlledExpanded
      : internalExpanded;

  const handleToggle = () => {
    onPerformanceToggle?.();
    setUserHasToggled(true);
    setInternalExpanded((e) => !e);
  };

  return (
    <Cell
      cellNumber={cellNumber}
      timestamp={timestamp}
      duration={duration}
      executed
      commandDuration="0.08s"
    >
      <div>
        {/* See performance */}
        {showPerformance && (
          <div className="mb-2">
            <button
              type="button"
              onClick={handleToggle}
              className="see-perf-btn"
              aria-expanded={expanded}
            >
              <span
                className={`inline-block text-[10px] transition-transform ${
                  expanded ? "rotate-90" : ""
                }`}
              >
                &#9654;
              </span>
              <ChartBarIcon className="h-3.5 w-3.5 text-db-blue" />
              <span>See performance (1)</span>
            </button>

            {expanded && (
              <div className="mt-1 rounded border border-db-border bg-db-gray-50 px-3 py-2 text-xs text-db-gray-600">
                <div className="flex flex-wrap gap-3">
                  <span>Rows: {rows.length}</span>
                  <span className="text-db-gray-300">|</span>
                  <span>Runtime: {runtime}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Table toolbar */}
        <div className="flex items-center justify-between border-b border-db-border pb-1.5">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-db-gray-700">Table</span>
            <svg className="h-3 w-3 text-db-gray-400" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M3 4.5l3 3 3-3" />
            </svg>
            <button type="button" className="ml-1 text-db-gray-400 hover:text-db-gray-600 text-sm">
              +
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden text-2xs text-db-gray-500 sm:inline">
              New result table: ON
            </span>
            <button type="button" className="text-db-gray-400 hover:text-db-gray-600" aria-label="Search">
              <SearchIcon className="h-3.5 w-3.5" />
            </button>
            <button type="button" className="text-db-gray-400 hover:text-db-gray-600" aria-label="Filter">
              <FilterIcon className="h-3.5 w-3.5" />
            </button>
            <button type="button" className="text-db-gray-400 hover:text-db-gray-600" aria-label="Copy">
              <CopyIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Table (horizontally scrollable on mobile) */}
        <div className="overflow-x-auto pt-1">
          <table className="db-table">
            <thead>
              <tr>
                <th className="row-num" />
                {columns.map((col) => (
                  <th key={col.key} className={`col-header ${col.numeric ? "text-right" : ""}`}>
                    {col.type && (
                      <span className="col-type">{col.type}</span>
                    )}
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td className="row-num">{i + 1}</td>
                  {columns.map((col) => (
                    <td key={col.key} className={col.numeric ? "text-right" : ""}>
                      {row[col.key] ?? ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-2 flex flex-wrap items-center gap-2 border-t border-db-border pt-2 text-xs text-db-gray-500">
          <span className="inline-flex items-center gap-1">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M6 2v8M2 6h8" strokeLinecap="round" />
            </svg>
            {rows.length} rows
          </span>
          <span className="text-db-gray-300">|</span>
          <span>{runtime} runtime</span>
          <span className="ml-auto">Refreshed {refreshed}</span>
        </div>

        {children}
      </div>
    </Cell>
  );
}

/* ----- Icons ----- */

function ChartBarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M2 14V8h3v6H2zM6.5 14V4h3v10h-3zM11 14V1h3v13h-3z" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="7" cy="7" r="4.5" />
      <path d="M10.5 10.5L14 14" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M1.5 3h13M4 7.5h8M6 12h4" />
    </svg>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="5" y="5" width="9" height="9" rx="1" />
      <path d="M3 11V3a1 1 0 011-1h8" />
    </svg>
  );
}
