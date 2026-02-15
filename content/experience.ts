export interface ExperienceRow {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export interface ExperienceDetail {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  logo?: string;
}

/** Overview for table */
export const experience: ExperienceRow[] = [
  {
    role: "Senior Consultant - Data Science",
    company: "Celebal Technologies",
    period: "2025 – Present",
    location: "London, United Kingdom",
    description: "3 enterprise clients (EMEA/US); Resident Solution Architect at Databricks; multi-million dollar AI value delivered.",
  },
  {
    role: "Consultant - Data Science",
    company: "Celebal Technologies",
    period: "2023 – 2025",
    location: "Jaipur, Rajasthan",
    description: "10+ production ML models; millions of rows on Spark; ML migrations to Databricks Lakehouse.",
  },
  {
    role: "Associate Consultant - Data Science",
    company: "Celebal Technologies",
    period: "2021 – 2023",
    location: "Jaipur, Rajasthan",
    description: "Led team of 8; 16% accuracy improvement; multi-cloud ML on Azure, AWS & Databricks.",
  },
];

/** Full details for expandable / markdown cells */
export const experienceDetails: ExperienceDetail[] = [
  {
    role: "Senior Consultant - Data Science",
    company: "Celebal Technologies",
    period: "2025 – Present",
    location: "London, United Kingdom",
    logo: "/images/celebal-technologies-logo.jpeg",
    bullets: [
      "Leading Celebal Technologies' Data & AI practice across UK and EU, partnering with 3 enterprise clients in EMEA and the US across oil & gas and financial services to deliver high-impact AI initiatives.",
      "Embedded as a Resident Solution Architect within Databricks Professional Services, collaborating with Solution Architects and Account Executives to architect and deploy scalable GenAI, ML, and MLOps solutions using Mosaic AI Agent Framework, Vector Search, Model Serving, and Unity Catalog.",
      "Architected and delivered enterprise RAG and agentic AI solutions that generated multi-million dollar business value, accelerating clients' transition from experimentation to production-grade AI systems.",
      "Led multiple Generative AI engagements, building advanced multi-agent systems and proof-of-concepts that improved business process automation and decision-making efficiency for top-tier clients.",
      "Recognized as a Databricks Partner Solution Architect Champion (2025) for excellence in solution delivery, technical innovation, and cross-team collaboration.",
    ],
  },
  {
    role: "Consultant - Data Science",
    company: "Celebal Technologies",
    period: "2023 – 2025",
    location: "Jaipur, Rajasthan",
    logo: "/images/celebal-technologies-logo.jpeg",
    bullets: [
      "Joined Databricks Consultancy Services (DCS) as a partner resource, delivering end-to-end ML, MLOps, and Generative AI solutions for enterprise clients in pharmaceutical and oil & gas sectors.",
      "Built and deployed 10+ production ML models processing millions of data rows using PySpark on Databricks, serving business users with real-time and batch inference pipelines.",
      "Led ML workload migrations to Databricks Lakehouse, re-platforming pipelines, model registries, and serving endpoints to improve scalability and reduce operational overhead.",
      "Collaborated with senior Solutions Architects across time zones to design scalable ML pipelines using MLflow, Model Registry, Feature Store, and Unity Catalog for end-to-end governance.",
      "Co-designed enterprise-level solutions within an Intelligent Data Platform (IDP), integrating diverse data sources and enabling advanced analytics capabilities across client organizations.",
    ],
  },
  {
    role: "Associate Consultant - Data Science",
    company: "Celebal Technologies",
    period: "2021 – 2023",
    location: "Jaipur, Rajasthan",
    logo: "/images/celebal-technologies-logo.jpeg",
    bullets: [
      "Managed and mentored a team of 8 Data Science professionals, delivering solutions for multiple clients across diverse industries from proposal through production deployment.",
      "Improved predictive model accuracy by 16% by integrating XGBoost and ensemble learning techniques, directly enhancing forecast reliability for client decision-making.",
      "Processed millions of data points for a major non-profit client using distributed Spark clusters and a custom-built data processing framework, enabling large-scale analytics previously infeasible.",
      "Architected and deployed end-to-end ML solutions across Azure, AWS, and Databricks, integrating MLOps and CI/CD pipelines for production-grade scalability and governance.",
      "Led client engagements from concept to delivery, owning stakeholder alignment, solution proposals, technical documentation, and sustained operational impact across engagements.",
    ],
  },
];
