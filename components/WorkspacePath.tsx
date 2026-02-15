export default function WorkspacePath() {
  const segments = [
    { label: "Workspace", href: "#" },
    { label: "Users", href: "#" },
    { label: "deep.contractor", href: "#" },
    { label: "deep-contractor-notebook-prod", href: "#", active: true },
  ];

  return (
    <div className="sticky top-[var(--db-header-h)] z-40 flex items-center gap-1 border-b border-db-border bg-db-header px-3 py-1.5 text-xs text-db-gray-500 sm:px-5">
      <svg className="mr-0.5 h-3.5 w-3.5 shrink-0 text-db-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {segments.map((seg, i) => (
        <span key={seg.label} className="flex items-center gap-1">
          {i > 0 && (
            <svg className="h-3 w-3 text-db-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 12 12">
              <path d="M4.5 2l4 4-4 4" />
            </svg>
          )}
          <span
            className={
              seg.active
                ? "font-semibold text-db-gray-800 dark:text-db-gray-200"
                : "text-db-gray-500 hover:text-db-gray-700 dark:text-db-gray-400 dark:hover:text-db-gray-300"
            }
          >
            {seg.label}
          </span>
        </span>
      ))}
    </div>
  );
}
