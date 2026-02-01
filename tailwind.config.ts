import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14B8A6", // Transformative Teal
        secondary: "#CDDC39", // Wasabi (Electric Chartreuse)
        accent1: "#FF5722", // Persimmon (Vibrant Red-Orange)
        accent2: "#FFC107", // High-Voltage Yellow
        accent3: "#00E5FF", // Electric Cyan
        cream: "#F5F1E8", // Cloud Dancer (Soft Off-White)
        walnut: "#3E2723", // Walnut Brown
        mocha: "#5D4037", // Mocha Brown
      },
      fontFamily: {
        heading: ["var(--font-black-ops)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        display: ["7rem", { lineHeight: "1", fontWeight: "900" }],
        hero: ["5rem", { lineHeight: "1.1", fontWeight: "800" }],
      },
      boxShadow: {
        brutal: "8px 8px 0px #3E2723",
        "brutal-sm": "4px 4px 0px #3E2723",
        "brutal-lg": "12px 12px 0px #3E2723",
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#3E2723",
            maxWidth: "none",
            h1: {
              color: "#3E2723",
              fontWeight: "700",
            },
            h2: {
              color: "#3E2723",
              fontWeight: "700",
            },
            h3: {
              color: "#3E2723",
              fontWeight: "700",
            },
            strong: {
              color: "#3E2723",
              fontWeight: "700",
            },
            a: {
              color: "#14B8A6",
              textDecoration: "underline",
              "&:hover": {
                color: "#FF5722",
              },
            },
            code: {
              color: "#3E2723",
              backgroundColor: "#F5F1E8",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              fontWeight: "600",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
