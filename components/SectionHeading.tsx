interface SectionHeadingProps {
  title: string;
  /** Remove top margin (use for the first section) */
  first?: boolean;
}

export default function SectionHeading({ title, first = false }: SectionHeadingProps) {
  return (
    <div className={`mb-5 ${first ? "mt-0" : "mt-10"}`}>
      <div className="flex items-center gap-3">
        <div className="h-6 w-1 rounded-full bg-db-blue" />
        <h2 className="section-heading text-xl font-semibold tracking-tight text-db-gray-900 sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="ml-4 mt-2 h-px bg-gradient-to-r from-db-border via-db-border to-transparent" />
    </div>
  );
}
