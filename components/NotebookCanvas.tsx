import { ReactNode } from "react";

export default function NotebookCanvas({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-db-bg pl-0 pt-[var(--db-header-h)] lg:pl-[var(--db-sidebar-w)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-3 md:px-6 lg:px-10 lg:py-5 2xl:max-w-7xl">
        {children}
      </div>
    </main>
  );
}
