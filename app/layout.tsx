import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Deep Contractor | AI Consultant, Engineer & Architect",
  description:
    "AI Consultant, Engineer & Architect with 5+ years delivering GenAI, ML & MLOps on Databricks & Azure. Databricks Partner Champion, Kaggle Grandmaster.",
  keywords: [
    "Deep Contractor",
    "Data Science",
    "AI Architect",
    "ML Engineer",
    "Databricks",
    "MLOps",
    "Kaggle Grandmaster",
    "GenAI",
    "Azure",
  ],
  authors: [{ name: "Deep Contractor" }],
  creator: "Deep Contractor",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://deepcontractor.com",
    title: "Deep Contractor | Data Science Consultant & AI Architect",
    description:
      "5+ years delivering production-grade GenAI, ML & MLOps. Databricks Partner Champion, Kaggle Grandmaster.",
    siteName: "Deep Contractor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Contractor | Data Science Consultant & AI Architect",
    description:
      "5+ years delivering production-grade GenAI, ML & MLOps. Databricks Partner Champion, Kaggle Grandmaster.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* Script to set dark class before paint (prevents flash) */
/* Only apply dark mode if user explicitly toggled it; default to light */
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
      </head>
      <body className="min-h-screen bg-db-bg">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
