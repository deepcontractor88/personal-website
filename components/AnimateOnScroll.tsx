"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  /** Delay in ms before animation starts (for stagger effects) */
  delay?: number;
  /** CSS class applied when visible. Defaults to "animate-in--visible" */
  visibleClass?: string;
  /** IntersectionObserver threshold. Defaults to 0.1 */
  threshold?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  visibleClass = "animate-in--visible",
  threshold = 0.1,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`animate-in ${visible ? visibleClass : ""} ${className}`}
      style={{ animationDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
