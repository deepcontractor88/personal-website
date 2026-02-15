"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const SECTIONS = [
  { id: "about", label: "About", icon: "user" },
  { id: "badges", label: "Badges", icon: "award" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "expertise", label: "Expertise", icon: "lightbulb" },
  { id: "skills", label: "Skills", icon: "sparkles" },
  { id: "education", label: "Education", icon: "academic" },
  { id: "contact", label: "Contact", icon: "mail" },
  { id: "gallery", label: "Gallery", icon: "image" },
] as const;

const EXPANDED_W = 200;
const COLLAPSED_W = 56;

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string | null>("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Auto-collapse: collapsed by default, expands on hover ── */
  const collapsed = !hovered;

  const handleMouseEnter = useCallback(() => {
    if (collapseTimer.current) clearTimeout(collapseTimer.current);
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Small delay before collapsing to avoid flickering
    collapseTimer.current = setTimeout(() => setHovered(false), 200);
  }, []);

  /* ── Sync CSS variable when hover state changes ── */
  useEffect(() => {
    const w = collapsed ? COLLAPSED_W : EXPANDED_W;
    document.documentElement.style.setProperty("--db-sidebar-w", `${w}px`);
  }, [collapsed]);

  /* ── Intersection observer for active section ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <>
      {/* Mobile FAB: larger for touch */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-db-blue text-white shadow-lg transition-transform hover:scale-105 active:scale-95 lg:hidden"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        style={{ width: collapsed ? COLLAPSED_W : EXPANDED_W }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          sidebar-rail fixed left-0 top-[var(--db-header-h)] z-40 flex h-[calc(100vh-var(--db-header-h))] flex-col
          border-r border-db-border bg-db-sidebar
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Nav items */}
        <nav className={`flex flex-1 flex-col gap-0.5 overflow-y-auto overflow-x-hidden py-3 ${collapsed ? "items-center px-0" : "px-2.5"}`}>
          {SECTIONS.map(({ id, label, icon }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                className={`
                  group relative flex items-center rounded-lg transition-all duration-200
                  ${collapsed ? "h-10 w-10 justify-center" : "h-9 w-full gap-3 px-2.5"}
                  ${
                    isActive
                      ? "bg-db-blue/10 text-db-blue"
                      : "text-db-gray-500 hover:bg-db-gray-100 hover:text-db-gray-700"
                  }
                `}
                title={collapsed ? label : undefined}
              >
                {/* Active left bar indicator */}
                {isActive && (
                  <span
                    className={`absolute top-1.5 h-6 w-[3px] rounded-r-full bg-db-blue transition-all duration-300 ${
                      collapsed ? "-left-[5px]" : "-left-[10px]"
                    }`}
                  />
                )}

                <SidebarIcon name={icon} className="h-[22px] w-[22px] shrink-0" />

                {/* Label (expanded only) */}
                {!collapsed && (
                  <span
                    className="sidebar-label text-[13px] font-medium leading-tight"
                    style={{ opacity: collapsed ? 0 : 1 }}
                  >
                    {label}
                  </span>
                )}

                {/* Tooltip (collapsed only) */}
                {collapsed && (
                  <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-db-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 lg:block -translate-x-1">
                    {label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom section: decorative icons */}
        <div className={`flex flex-col border-t border-db-border py-2 ${collapsed ? "items-center px-0" : "px-2.5"}`}>
          <button
            type="button"
            className={`
              flex items-center rounded-lg text-db-gray-400 hover:bg-db-gray-100 hover:text-db-gray-600 transition-all duration-200
              ${collapsed ? "h-10 w-10 justify-center" : "h-9 w-full gap-3 px-2.5"}
            `}
            aria-label="Notifications"
          >
            <BellIcon className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && (
              <span className="sidebar-label text-[13px] font-medium leading-tight text-db-gray-400">
                Notifications
              </span>
            )}
          </button>
          <button
            type="button"
            className={`
              flex items-center rounded-lg text-db-gray-400 hover:bg-db-gray-100 hover:text-db-gray-600 transition-all duration-200
              ${collapsed ? "h-10 w-10 justify-center" : "h-9 w-full gap-3 px-2.5"}
            `}
            aria-label="Analytics"
          >
            <ChartIcon className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && (
              <span className="sidebar-label text-[13px] font-medium leading-tight text-db-gray-400">
                Analytics
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Mobile: labels panel */}
      {mobileOpen && (
        <div
          style={{ left: COLLAPSED_W }}
          className="fixed top-[var(--db-header-h)] z-40 h-[calc(100vh-var(--db-header-h))] w-56 border-r border-db-border bg-db-white p-4 shadow-lg lg:hidden"
        >
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className={`
                block w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-all duration-200
                ${activeId === id ? "bg-db-blue/10 text-db-blue" : "text-db-gray-700 hover:bg-db-gray-100"}
              `}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

/* ---------- Icons (24x24, stroke 1.5, round caps/joins) ---------- */

const iconProps = {
  className: "",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

function SidebarIcon({ name, className }: { name: string; className?: string }) {
  const p = { ...iconProps, className };
  switch (name) {
    case "user":
      return (
        <svg {...p}>
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case "award":
      return (
        <svg {...p}>
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...p}>
          <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...p}>
          <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg {...p}>
          <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      );
    case "academic":
      return (
        <svg {...p}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...p}>
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "image":
      return (
        <svg {...p}>
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    default:
      return <span className={className} />;
  }
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 20 20">
      <path d="M10 17c1.1 0 2-.9 2-2H8c0 1.1.9 2 2 2zm5-4V9c0-2.76-1.86-5.07-4.5-5.73V3a.5.5 0 00-1 0v.27C6.86 3.93 5 6.24 5 9v4l-1 1v1h12v-1l-1-1z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 20 20">
      <path d="M3 17V9h3v8H3zM8.5 17V5h3v12h-3zM14 17V1h3v16h-3z" />
    </svg>
  );
}
