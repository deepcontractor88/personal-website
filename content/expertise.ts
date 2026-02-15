/** Specialized Technical Expertise for ExpertiseCell display */

export interface ExpertiseArea {
  title: string;
  subtitle: string;
  summary: string;
  icon: string; // icon identifier for inline SVG
  highlights: string[];
  color: {
    accent: string; // border / icon accent
    bg: string; // card background tint
    tag: string; // highlight tag colors
    tagText: string;
  };
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Agentic AI",
    subtitle: "RAG, Multi-Agent & Autonomous AI Systems",
    summary:
      "Building production-grade agentic AI systems including RAG pipelines, multi-agent orchestration, tool-calling agents, and autonomous workflows with evaluation and guardrails.",
    icon: "agent",
    highlights: [
      "RAG Pipelines",
      "Multi-Agent",
      "LangGraph",
      "Mosaic AI Agent Framework",
      "Guardrails",
    ],
    color: {
      accent: "border-violet-500 dark:border-violet-400",
      bg: "bg-violet-50/60 dark:bg-violet-900/15",
      tag: "bg-violet-100 ring-violet-200 dark:bg-violet-900/30 dark:ring-violet-700",
      tagText: "text-violet-700 dark:text-violet-300",
    },
  },
  {
    title: "Platform Modernization",
    subtitle: "MLOps & LLMOps on Databricks Lakehouse",
    summary:
      "Designing end-to-end MLOps and LLMOps architectures on Databricks Lakehouse — experiment tracking, feature stores, model serving, monitoring, and governance via Unity Catalog.",
    icon: "platform",
    highlights: [
      "MLOps",
      "LLMOps",
      "Feature Store",
      "Unity Catalog",
      "Model Serving",
    ],
    color: {
      accent: "border-blue-500 dark:border-blue-400",
      bg: "bg-blue-50/60 dark:bg-blue-900/15",
      tag: "bg-blue-100 ring-blue-200 dark:bg-blue-900/30 dark:ring-blue-700",
      tagText: "text-blue-700 dark:text-blue-300",
    },
  },
  {
    title: "ML Migration",
    subtitle: "Legacy to Lakehouse",
    summary:
      "Leading large-scale migrations of legacy ML workloads (SageMaker, Azure ML, on-prem) to Databricks — re-platforming pipelines, model registries, and inference endpoints with zero downtime.",
    icon: "migration",
    highlights: [
      "SageMaker",
      "Azure ML",
      "Zero Downtime",
      "Re-platforming",
    ],
    color: {
      accent: "border-emerald-500 dark:border-emerald-400",
      bg: "bg-emerald-50/60 dark:bg-emerald-900/15",
      tag: "bg-emerald-100 ring-emerald-200 dark:bg-emerald-900/30 dark:ring-emerald-700",
      tagText: "text-emerald-700 dark:text-emerald-300",
    },
  },
  {
    title: "Technical Pre-Sales",
    subtitle: "Solutioning & Architecting",
    summary:
      "Translating complex business requirements into actionable technical blueprints — discovery workshops, POCs, and architecture proposals that accelerate deal closure.",
    icon: "presales",
    highlights: [
      "Architecture Design",
      "POCs",
      "Discovery Workshops",
      "Deal Acceleration",
    ],
    color: {
      accent: "border-amber-500 dark:border-amber-400",
      bg: "bg-amber-50/60 dark:bg-amber-900/15",
      tag: "bg-amber-100 ring-amber-200 dark:bg-amber-900/30 dark:ring-amber-700",
      tagText: "text-amber-700 dark:text-amber-300",
    },
  },
  {
    title: "Forward-Deployed Engineering",
    subtitle: "Embedded Consulting & Delivery",
    summary:
      "Embedding directly with customer teams to build, ship, and iterate on AI solutions — bridging product vision and production-grade implementation.",
    icon: "consulting",
    highlights: [
      "Customer-Embedded",
      "End-to-End Delivery",
      "Production AI",
      "Rapid Iteration",
    ],
    color: {
      accent: "border-rose-500 dark:border-rose-400",
      bg: "bg-rose-50/60 dark:bg-rose-900/15",
      tag: "bg-rose-100 ring-rose-200 dark:bg-rose-900/30 dark:ring-rose-700",
      tagText: "text-rose-700 dark:text-rose-300",
    },
  },
];
