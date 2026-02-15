interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-5 mt-10 first:mt-0">
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
