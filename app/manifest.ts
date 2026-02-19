import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deep Contractor | AI Consultant, Engineer & Architect",
    short_name: "Deep Contractor",
    description:
      "AI Consultant, Engineer & Architect with 5+ years delivering GenAI, ML & MLOps on Databricks & Azure. Databricks Partner Champion, Kaggle Grandmaster.",
    start_url: "/",
    display: "standalone",
    background_color: "#1B1B1B",
    theme_color: "#FF3621",
    icons: [],
  };
}
