"use client";

import { ReactNode, useState, useCallback, useEffect } from "react";

type RunStatus = "idle" | "running" | "success";

interface CellProps {
  children: ReactNode;
  /** Cell number shown on the right of the gutter bar */
  cellNumber?: number;
  /** Timestamp shown next to the status */
  timestamp?: string;
  /** Whether the cell has "run" (shows green check) */
  executed?: boolean;
  /** Duration label like "<1s" */
  duration?: string;
  /** Top-right label like "Markdown" or "SQL" */
  typeLabel?: string;
  /** Hide the gutter play/status row (for pure visual cells) */
  hideGutter?: boolean;
  /** Optional execution footer, e.g. "Command took 0.08s" */
  commandDuration?: string;
  className?: string;
}

const RUN_BUFFER_MS = 1200;
const STAGGER_MS = 180; // delay between each cell during "Run all"

export default function Cell({
  children,
  cellNumber,
  timestamp = "11:31 AM",
  executed = true,
  duration = "<1s",
  typeLabel,
  hideGutter = false,
  commandDuration,
  className = "",
}: CellProps) {
  const [hovered, setHovered] = useState(false);
  const [runStatus, setRunStatus] = useState<RunStatus>(executed ? "success" : "idle");

  const handleRun = useCallback(() => {
    setRunStatus((prev) => (prev === "running" ? prev : "running"));
  }, []);

  /* Listen for "Run all" event: stagger each cell by its number */
  useEffect(() => {
    const handler = () => {
      const delay = (cellNumber ?? 0) * STAGGER_MS;
      const t = setTimeout(() => {
        setRunStatus("running");
      }, delay);
      return () => clearTimeout(t);
    };

    // Wrap so we can clean up the inner timeout
    let innerCleanup: (() => void) | undefined;
    const listener = () => { innerCleanup = handler(); };
    window.addEventListener("run-all-cells", listener);
    return () => {
      window.removeEventListener("run-all-cells", listener);
      innerCleanup?.();
    };
  }, [cellNumber]);

  useEffect(() => {
    if (runStatus !== "running") return;
    const t = setTimeout(() => setRunStatus("success"), RUN_BUFFER_MS);
    return () => clearTimeout(t);
  }, [runStatus]);

  const showSuccess = runStatus === "success";

  return (
    <div
      className={`notebook-cell group rounded border border-db-border bg-db-white shadow-sm transition-[box-shadow,border-color] hover:border-db-border-dark hover:shadow-md ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gutter bar: run button highlighted as part of cell outline */}
      {!hideGutter && (
        <div className="cell-gutter flex items-center gap-2 border-b border-db-border bg-db-gray-50/70 px-2 py-1.5">
          {/* Run button: always visible, highlighted in gutter */}
          <button
            type="button"
            onClick={handleRun}
            disabled={runStatus === "running"}
            className={`cell-run-btn flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-150 active:scale-90 disabled:pointer-events-none ${
              runStatus === "running"
                ? "bg-db-blue/10"
                : hovered
                ? "bg-db-blue/10 text-db-blue"
                : "text-db-gray-400 hover:bg-db-blue/10 hover:text-db-blue"
            }`}
            aria-label={runStatus === "running" ? "Running..." : "Run cell"}
          >
            {runStatus === "running" ? (
              <span className="run-button-spinner h-3.5 w-3.5 rounded-full border-[1.5px] border-db-blue/30 border-t-db-blue" />
            ) : (
              <svg className="h-3 w-3 ml-0.5" viewBox="0 0 10 12" fill="currentColor">
                <path d="M0 0v12l10-6L0 0z" />
              </svg>
            )}
          </button>

          {/* Status: running label or success (green check + timestamp) */}
          {runStatus === "running" && (
            <span className="flex items-center gap-1.5 text-2xs font-medium text-db-blue whitespace-nowrap">
              <span className="inline-block h-1 w-1 rounded-full bg-db-blue animate-pulse" />
              Running
            </span>
          )}
          {showSuccess && (
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-db-green" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 8.5l3 3 6-6.5" />
              </svg>
              <span className="text-2xs text-db-gray-500 whitespace-nowrap">
                {timestamp} ({duration})
              </span>
            </span>
          )}

          {/* Cell number (right-aligned) */}
          {cellNumber !== undefined && (
            <span className="ml-auto pr-1 text-2xs tabular-nums text-db-gray-400">{cellNumber}</span>
          )}
        </div>
      )}

      {/* Cell content area - no duplicate border, outer cell has outline */}
      <div className="relative rounded-b">
        {/* Type label top-right */}
        {typeLabel && (
          <div className="absolute right-0 top-0 z-10 flex items-center gap-1 rounded-bl bg-db-gray-100/80 px-2 py-1 text-2xs text-db-gray-500">
            <span>{typeLabel}</span>
            <button type="button" className="text-db-gray-400 hover:text-db-gray-600" aria-label="Expand">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 12 12">
                <path d="M1 1h4M7 1h4M11 1v4M11 7v4M1 11h4M7 11h4M1 1v4M1 7v4" />
              </svg>
            </button>
            <button type="button" className="text-db-gray-400 hover:text-db-gray-600" aria-label="More">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 12 12">
                <circle cx="2" cy="6" r="1" />
                <circle cx="6" cy="6" r="1" />
                <circle cx="10" cy="6" r="1" />
              </svg>
            </button>
          </div>
        )}

        {/* Content - wider padding for recruiter readability */}
        <div className="px-4 py-4 md:px-5 md:py-4">{children}</div>
      </div>

      {/* Execution footer */}
      {commandDuration && showSuccess && (
        <div className="flex items-center gap-1.5 border-t border-db-border bg-db-gray-50/50 px-3 py-1.5 text-2xs text-db-gray-500">
          <svg className="h-3 w-3 text-db-green" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.5 8.5l3 3 6-6.5" />
          </svg>
          Command took {commandDuration}
        </div>
      )}
    </div>
  );
}
