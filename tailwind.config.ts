import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bhs-lime": "#D6EE41",
        "bhs-lime-dark": "#c2d93a",
        "bhs-black": "#1a1a1a",
        "bhs-dark": "#2a2a2a",
        "bhs-gray": "#f5f5f5",
        "bhs-muted": "#999999",
        "bhs-border": "#e8e8e8",
        "bhs-card": "#f7f7f7",
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
