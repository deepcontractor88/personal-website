/** Grouped skills for SkillsCell display */
export const technicalSkillsGrouped = [
  {
    label: "Programming & Tools",
    skills: "Python, PySpark, SQL, Scikit-learn, SparkML, Pandas, NumPy, Matplotlib, Seaborn, MLflow, Git, GitHub, Bitbucket, Airflow, SageMaker, Azure ML Studio, Databricks, JIRA, Confluence, Jenkins, JFrog, LangChain, LlamaIndex, Hugging Face",
  },
  {
    label: "Analytics & ML",
    skills: "Regression, Classification, Clustering, Forecasting, Recommendation Systems, Decision Trees, Bagging, Boosting, Ensembling, Random Forest, XGBoost, CatBoost, Feature Engineering, Data Wrangling, Data Visualization, AutoML, Time Series Forecasting",
  },
  {
    label: "LLMs & GenAI",
    skills: "GPT Enterprise Models, Anthropic Claude, Meta Llama, RAG, Agentic & Multi-Agent Orchestration, Vector Embeddings, Prompt Engineering, Databricks Vector Search, Foundation Model Endpoints, Azure OpenAI, LLM Evaluation, Model Governance, HuggingFace Transformers",
  },
  {
    label: "ML Operations",
    skills: "MLOps, MLflow, CI/CD, ML Pipelines, Feature Store, Model Registry, Experiment Tracking, Model Training & Tuning, Deployment & Inferencing, Drift Detection, Monitoring & Alerts, Docker, Kubernetes, Jenkins, Airflow, Great Expectations, Pytest",
  },
  {
    label: "Databricks",
    skills: "Foundation Model Endpoints, Vector Search, Model Serving, AI/BI Genie, Unity Catalog, Workflows, RAG on Lakehouse, Mosaic AI Agent Framework, Embedding Management, LLMOps, MLflow & Model Registry",
  },
  {
    label: "Soft Skills",
    skills: "Consulting, Stakeholder Management, Storytelling, Presentation, Analytical Thinking, Business Problem Solving, Post-Sales Support, Reporting",
  },
];

export interface CertificationRow {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export const certifications: CertificationRow[] = [
  { name: "Databricks Solution Architect Essentials", issuer: "Databricks", year: "2025" },
  { name: "Databricks Certified Generative AI Associate", issuer: "Databricks", year: "2023" },
  { name: "Databricks Certified Machine Learning Associate", issuer: "Databricks", year: "2022" },
  { name: "Databricks Certified Machine Learning Professional", issuer: "Databricks", year: "2022" },
  { name: "DP-100: Designing and Implementing a Data Science Solution on Azure", issuer: "Microsoft", year: "2021" },
];

export interface AwardRow {
  name: string;
  year: string;
  detail?: string;
  /** Icon key: "trophy" | "star" | "medal" | "award". Falls back to "star". */
  icon?: string;
  /** Path to an image file (takes precedence over icon when rendered) */
  image?: string;
}

export const awards: AwardRow[] = [
  { name: "Databricks Solutions Architect Champion", year: "2025", icon: "trophy", image: "/images/awards/databricks.png" },
  { name: "Shell AI Award", year: "2024", icon: "award", image: "/images/awards/ai-award.png" },
  { name: "Kaggle Grandmaster Title", year: "2022", icon: "medal", image: "/images/awards/kaggle.png" },
  { name: "Featured in Analytics India Magazine", year: "2021", detail: "Contributions to data science community", icon: "star", image: "/images/awards/magazine.png" },
  { name: "Letter of Appreciation", year: "2023", detail: "Celebal Technologies", icon: "award", image: "/images/awards/appreciation.png" },
  { name: "Letter of Appreciation", year: "2021", detail: "JK Lakshmipat University", icon: "award", image: "/images/awards/appreciation.png" },
  { name: "Ranked top 1% in 10+ ML hackathons", year: "2022", icon: "medal", image: "/images/awards/hackathon.png" },
];

/** Legacy table format for Skills section if we show a simplified table */
export interface SkillRow {
  skill: string;
  level: string;
  category: string;
}

export const skillsTable: SkillRow[] = [
  { skill: "Python / PySpark / SQL", level: "Expert", category: "Core" },
  { skill: "Databricks / Azure ML / MLOps", level: "Expert", category: "Platform" },
  { skill: "GenAI / RAG / Agentic Systems", level: "Advanced", category: "AI" },
  { skill: "MLflow / CI-CD / Docker / K8s", level: "Advanced", category: "Engineering" },
];
