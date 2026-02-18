export interface Badge {
  id: string;
  name: string;
  imageUrl: string;
  /** Optional image URL used when site is in dark mode */
  darkModeImageUrl?: string;
  link?: string;
  label?: string;
}

export const badges: Badge[] = [
  {
    id: "1",
    name: "Databricks Solutions Architect Champion",
    imageUrl: "/images/databricks-solutions-architect-champion.png",
    link: "https://credentials.databricks.com/profile/deepcontractor/wallet",
    label: "Solutions Architect Champion",
  },
  {
    id: "7",
    name: "Databricks Solution Architect Essentials",
    imageUrl: "/images/databricks-solution-architect-essentials.png",
    link: "https://credentials.databricks.com/profile/deepcontractor/wallet",
    label: "Solution Architect Essentials",
  },
  {
    id: "3",
    name: "Databricks Certified ML Professional",
    imageUrl: "/images/databricks_ml_professional.png",
    link: "https://credentials.databricks.com/profile/deepcontractor/wallet",
    label: "ML Professional",
  },
  {
    id: "4",
    name: "Databricks Certified GenAI Engineer Associate",
    imageUrl: "/images/associate-badge-gen-ai.png",
    link: "https://credentials.databricks.com/profile/deepcontractor/wallet",
    label: "GenAI Engineer Associate",
  },
  {
    id: "2",
    name: "Kaggle Grandmaster",
    imageUrl: "/images/kaggle-grandmaster-logo.png",
    link: "https://www.kaggle.com/deepcontractor",
    label: "Kaggle Grandmaster",
  },
  {
    id: "5",
    name: "Microsoft Azure MLOps Workshop Coach",
    imageUrl: "/images/mlops_coach_microsoft_badge.png",
    link: "https://www.credly.com/badges/5420bf8e-adff-42cf-8cfc-237ecd31dbf8?trk=public_profile_see-credential",
    label: "Azure MLOps Coach",
  },
  {
    id: "6",
    name: "Databricks Partner Program",
    imageUrl: "/images/databricks-logo.png",
    darkModeImageUrl:
      "https://lh3.googleusercontent.com/proxy/Rm5r-PcNIXtdbKqQX67lW2Fs3wrmKZ5s2srLHKgTYCOrgRmRf0siJz9-FqaFhi4cxXHXPJLubH3BZgrwuZYQC4hayaDvigIjmxM5Kz-OX7fS4CvB6dRlp9TBBm6nup1uNmvtSSk_FfycYNaAJA",
    link: "https://celebaltech.com/partnership/service-partners/databricks",
    label: "Databricks Partner",
  },
];
