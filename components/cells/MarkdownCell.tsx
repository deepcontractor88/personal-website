import ReactMarkdown from "react-markdown";
import Cell from "./Cell";

interface MarkdownCellProps {
  content: string;
  cellNumber?: number;
  timestamp?: string;
  /** If true, shows as a standalone header cell with larger styling */
  isHeader?: boolean;
}

export default function MarkdownCell({
  content,
  cellNumber,
  timestamp,
  isHeader = false,
}: MarkdownCellProps) {
  return (
    <Cell
      cellNumber={cellNumber}
      timestamp={timestamp}
      typeLabel="Markdown"
      hideGutter={isHeader}
      executed={!isHeader}
    >
      <div
        className={`md-content ${
          isHeader ? "border-b border-db-border pb-2" : ""
        }`}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Cell>
  );
}
