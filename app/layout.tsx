import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://deepcontractor.me"),
  title: "Deep Contractor | AI Consultant, Engineer & Architect",
  description:
    "Deep Contractor – AI Consultant, Engineer & Architect with 5+ years delivering GenAI, ML & MLOps on Databricks & Azure. Databricks Partner Solution Architect Champion (2025), Kaggle Grandmaster.",
  keywords: [
    "Deep Contractor",
    "Deep Contractor AI",
    "Deep Contractor Databricks",
    "Deep Contractor London",
    "Deep Contractor Kaggle Grandmaster",
    "Deep Contractor portfolio",
    "Data Science Consultant",
    "AI Architect",
    "ML Engineer",
    "Databricks Partner Champion",
    "Databricks Solution Architect",
    "MLOps",
    "Kaggle Grandmaster",
    "GenAI",
    "Azure AI",
    "AI Consultant London",
    "Celebal Technologies",
  ],
  authors: [{ name: "Deep Contractor", url: "https://deepcontractor.me" }],
  creator: "Deep Contractor",
  publisher: "Deep Contractor",
  category: "technology",
  alternates: {
    canonical: "https://deepcontractor.me",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://deepcontractor.me",
    title: "Deep Contractor | AI Consultant, Engineer & Architect",
    description:
      "AI Consultant, Engineer & Architect – 5+ years delivering production-grade GenAI, ML & MLOps. Databricks Partner Champion, Kaggle Grandmaster.",
    siteName: "Deep Contractor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deep Contractor – AI Consultant, Engineer & Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Contractor | AI Consultant, Engineer & Architect",
    description:
      "AI Consultant, Engineer & Architect – 5+ years delivering production-grade GenAI, ML & MLOps. Databricks Partner Champion, Kaggle Grandmaster.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "v2QDWmH5F80fLArFwCI7Oy-78SKKdo3U52Eous-j4xM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://deepcontractor.me/#website",
      url: "https://deepcontractor.me",
      name: "Deep Contractor",
      alternateName: ["Deep Contractor | AI Consultant, Engineer & Architect", "deepcontractor.me"],
      description:
        "Personal portfolio of Deep Contractor – AI Consultant, Engineer & Architect",
      publisher: { "@id": "https://deepcontractor.me/#person" },
      inLanguage: "en-GB",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://deepcontractor.me/#profilepage",
      url: "https://deepcontractor.me",
      name: "Deep Contractor | AI Consultant, Engineer & Architect",
      isPartOf: { "@id": "https://deepcontractor.me/#website" },
      about: { "@id": "https://deepcontractor.me/#person" },
      mainEntity: { "@id": "https://deepcontractor.me/#person" },
      inLanguage: "en-GB",
    },
    {
      "@type": "Person",
      "@id": "https://deepcontractor.me/#person",
      name: "Deep Contractor",
      givenName: "Deep",
      familyName: "Contractor",
      url: "https://deepcontractor.me",
      image: "https://deepcontractor.me/og-image.png",
      jobTitle: "Senior Consultant – Data Science",
      description:
        "AI Consultant, Engineer & Architect with 5+ years delivering production-grade GenAI, ML & MLOps on Databricks & Azure. Databricks Partner Solution Architect Champion (2025), Kaggle Grandmaster.",
      worksFor: {
        "@type": "Organization",
        name: "Celebal Technologies",
        url: "https://www.celebaltech.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "JK Lakshmipat University",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "MLOps",
        "Generative AI",
        "Large Language Models",
        "Databricks",
        "Azure",
        "Data Science",
        "Retrieval Augmented Generation",
        "Agentic AI",
        "Python",
        "PySpark",
        "MLflow",
        "Unity Catalog",
        "Vector Search",
      ],
      sameAs: [
        "https://linkedin.com/in/deepcontractor",
        "https://www.kaggle.com/deepcontractor",
      ],
      email: "mailto:deep.contractor88@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Databricks Partner Solution Architect Champion",
          credentialCategory: "award",
          dateCreated: "2025",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Kaggle Grandmaster",
          credentialCategory: "award",
          dateCreated: "2023",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Databricks Certified Generative AI Associate",
          credentialCategory: "certification",
          dateCreated: "2023",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Databricks Certified Machine Learning Professional",
          credentialCategory: "certification",
          dateCreated: "2022",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Databricks Certified Machine Learning Associate",
          credentialCategory: "certification",
          dateCreated: "2022",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "DP-100: Designing and Implementing a Data Science Solution on Azure",
          credentialCategory: "certification",
          dateCreated: "2021",
        },
      ],
    },
  ],
};

const darkModeScript = `
  (function() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-db-bg">
        {children}
        <noscript>
          <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
            <h1>Deep Contractor</h1>
            <p>AI Consultant, Engineer &amp; Architect | London, UK</p>
            <p>
              Senior Consultant – Data Science at Celebal Technologies. 5+ years
              delivering production-grade GenAI, ML &amp; MLOps on Databricks
              &amp; Azure. Databricks Partner Solution Architect Champion
              (2025). Kaggle Grandmaster (2023).
            </p>
            <p>
              Contact:{" "}
              <a href="mailto:deep.contractor88@gmail.com">
                deep.contractor88@gmail.com
              </a>
              {" | "}
              <a href="https://linkedin.com/in/deepcontractor">LinkedIn</a>
            </p>
          </div>
        </noscript>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
