import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        db: {
          bg: "var(--db-bg)",
          white: "var(--db-white)",
          blue: "var(--db-blue)",
          "blue-hover": "var(--db-blue-hover)",
          green: "#2e7d32",
          "green-light": "#4caf50",
          orange: "#e65100",
          red: "#d32f2f",
          border: "var(--db-border)",
          "border-dark": "var(--db-border-dark)",
          gray: {
            50: "var(--db-gray-50)",
            100: "var(--db-gray-100)",
            200: "var(--db-gray-200)",
            300: "var(--db-gray-300)",
            400: "var(--db-gray-400)",
            500: "var(--db-gray-500)",
            600: "var(--db-gray-600)",
            700: "var(--db-gray-700)",
            800: "var(--db-gray-800)",
            900: "var(--db-gray-900)",
          },
          header: "var(--db-header)",
          sidebar: "var(--db-sidebar)",
          "cell-hover": "var(--db-cell-hover)",
        },
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      minHeight: {
        touch: "44px",
      },
      width: {
        sidebar: "40px",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
