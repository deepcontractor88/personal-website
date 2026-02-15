export default function AddCellDivider() {
  return (
    <div className="group flex items-center justify-center py-1">
      <div className="h-px flex-1 bg-db-border transition-colors group-hover:bg-db-blue/30" />
      <button
        type="button"
        className="mx-2 flex h-5 w-5 items-center justify-center rounded border border-db-border bg-db-white text-db-gray-400 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:border-db-blue/40 group-hover:text-db-blue"
        aria-label="Add cell"
        tabIndex={-1}
      >
        <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 12 12">
          <path d="M6 2v8M2 6h8" strokeLinecap="round" />
        </svg>
      </button>
      <div className="h-px flex-1 bg-db-border transition-colors group-hover:bg-db-blue/30" />
    </div>
  );
}
