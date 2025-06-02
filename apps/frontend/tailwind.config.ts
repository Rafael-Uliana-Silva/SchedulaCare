import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60A5FA",
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },
        background: {
          light: "#F9FAFB",
          DEFAULT: "#E5E7EB",
          gray: "#64748B",
        },
        text: {
          light: "#D9D9D9",
          DEFAULT: "#111827",
          gray: "#6B7280",
        },
        error: "#EF4444",
        success: "#22C55E",
        alert: "#F59E0B",
      },
    },
  },
  plugins: [],
};

export default config;
