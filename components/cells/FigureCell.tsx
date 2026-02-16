"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef, ReactNode } from "react";
import Cell from "./Cell";

interface FigureCellProps {
  children?: ReactNode;
  images?: { src: string; alt: string; caption?: string; link?: string }[];
  cellNumber?: number;
  timestamp?: string;
  duration?: string;
  showPerformance?: boolean;
  performanceExpanded?: boolean;
  onPerformanceToggle?: () => void;
  performanceContent?: string;
  gridCols?: 1 | 2 | 3;
  /** When true, badges scroll horizontally left-to-right in discrete steps */
  scrollAnimation?: boolean;
  /** When true, images slide one at a time in a carousel */
  slideshow?: boolean;
  /** Auto-advance interval in ms (default 5000). Set 0 to disable. */
  slideshowInterval?: number;
}

export default function FigureCell({
  children,
  images = [],
  cellNumber,
  timestamp = "11:31 AM",
  duration = "<1s",
  showPerformance = true,
  performanceExpanded: controlledExpanded,
  onPerformanceToggle,
  performanceContent = "Rendered successfully.",
  gridCols = 3,
  scrollAnimation = false,
  slideshow = false,
  slideshowInterval = 5000,
}: FigureCellProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const [userHasToggled, setUserHasToggled] = useState(false);

  /* Slideshow state */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(2);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Track viewport for 1-per-view (mobile) vs 2-per-view (sm+) */
  useEffect(() => {
    if (!slideshow) return;
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => {
      setPerView(mq.matches ? 2 : 1);
      setCurrentSlide(0); // reset on breakpoint change
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [slideshow]);

  const maxSlide = Math.max(0, images.length - perView);

  const goTo = useCallback(
    (idx: number) => {
      setCurrentSlide(Math.max(0, Math.min(idx, maxSlide)));
    },
    [maxSlide],
  );

  const next = useCallback(() => goTo(currentSlide + 1), [goTo, currentSlide]);
  const prev = useCallback(() => goTo(currentSlide - 1), [goTo, currentSlide]);

  useEffect(() => {
    if (!slideshow || paused || slideshowInterval <= 0 || images.length <= 2) return;
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, slideshowInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slideshow, paused, slideshowInterval, maxSlide, images.length]);

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
    <Cell cellNumber={cellNumber} timestamp={timestamp} duration={duration} executed>
      <div>
        {/* See performance */}
        {showPerformance && (
          <div className="mb-3">
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
              <svg className="h-3.5 w-3.5 text-db-blue" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M2 14V8h3v6H2zM6.5 14V4h3v10h-3zM11 14V1h3v13h-3z" />
              </svg>
              <span>See performance (1)</span>
            </button>
            {expanded && (
              <div className="mt-1 rounded border border-db-border bg-db-gray-50 px-3 py-2 text-xs text-db-gray-600">
                {performanceContent}
              </div>
            )}
          </div>
        )}

        {/* Image slideshow, scrolling strip, or grid */}
        {images.length > 0 ? (
          slideshow ? (
            <div
              className="relative overflow-hidden rounded-lg border border-db-border"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Slide track: 1 image on mobile, 2 on sm+ */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (100 / perView)}%)`,
                }}
              >
                {images.map((img, i) => (
                  <div
                    key={`${img.src}-${i}`}
                    className="w-full shrink-0 px-1.5 first:pl-0 last:pr-0 sm:w-1/2"
                  >
                    <div className="overflow-hidden rounded-lg border border-db-border bg-db-gray-50">
                      <div className="relative aspect-square w-full p-3">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 640px) 90vw, 320px"
                          priority={i <= 1}
                        />
                      </div>
                      {img.caption && (
                        <div className="border-t border-db-border bg-db-white px-3 py-2 text-center text-xs font-medium text-db-gray-700">
                          {img.caption}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev / Next arrows (min-h-0 overrides mobile touch target rule) */}
              {images.length > 2 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    disabled={currentSlide === 0}
                    className="absolute left-1.5 top-1/2 -translate-y-1/2 flex !min-h-0 h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 disabled:opacity-30 disabled:pointer-events-none"
                    aria-label="Previous slide"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    disabled={currentSlide >= maxSlide}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 flex !min-h-0 h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 disabled:opacity-30 disabled:pointer-events-none"
                    aria-label="Next slide"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              )}

              {/* Dot indicators (min-h-0 overrides mobile touch target rule) */}
              {images.length > 2 && (
                <div className="mt-3 flex justify-center gap-2 pb-2">
                  {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      className={`!min-h-0 h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSlide
                          ? "w-5 bg-db-blue"
                          : "w-1.5 bg-db-gray-300 hover:bg-db-gray-400"
                      }`}
                      aria-label={`Go to position ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : scrollAnimation ? (
            <div className="badge-scroll-mask flex justify-center">
              <div
                className="badge-scroll-track flex gap-5"
                style={{
                  animation: images.length > 4
                    ? `badge-scroll-step ${images.length * 3}s steps(${images.length}) infinite`
                    : undefined,
                }}
              >
                {(images.length > 4 ? [...images, ...images] : images).map((img, i) => {
                  const fig = (
                    <figure className="badge-scroll-item shrink-0 overflow-hidden rounded-2xl border border-db-border bg-db-white shadow-sm transition-all duration-200 hover:border-db-blue/40 hover:shadow-lg hover:-translate-y-0.5">
                      <div className="badge-img-area relative w-full bg-db-white flex items-center justify-center p-3">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          unoptimized
                          className="object-contain p-3"
                          sizes="(min-width: 768px) 320px, 200px"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="badge-caption border-t border-db-border bg-db-gray-50 px-3 text-center text-[13px] font-semibold text-db-gray-700 leading-tight flex items-center justify-center">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                  const key = `${img.src}-${i}`;
                  return img.link ? (
                    <a
                      key={key}
                      href={img.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block shrink-0 focus:outline-none focus:ring-2 focus:ring-db-blue/30 focus:ring-offset-2 rounded-2xl"
                    >
                      {fig}
                    </a>
                  ) : (
                    <div key={key} className="shrink-0">
                      {fig}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
          <div
            className={`grid gap-3 ${
              gridCols === 1
                ? "grid-cols-1"
                : gridCols === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {images.map((img, i) => {
              const fig = (
                <figure className="overflow-hidden rounded-lg border border-db-border bg-db-white transition hover:border-db-blue/50 hover:shadow-sm">
                  <div className="relative aspect-square w-full bg-db-white p-3">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="border-t border-db-border bg-db-gray-50/80 px-2.5 py-2 text-center text-xs font-medium text-db-gray-700">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              );
              const key = `${img.src}-${i}`;
              return img.link ? (
                <a
                  key={key}
                  href={img.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-db-blue/30 focus:ring-offset-1 rounded"
                >
                  {fig}
                </a>
              ) : (
                <div key={key}>{fig}</div>
              );
            })}
          </div>
          )
        ) : (
          children
        )}
      </div>
    </Cell>
  );
}
