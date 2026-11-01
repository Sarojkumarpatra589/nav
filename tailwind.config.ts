import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#72E73E",
          emerald: "#10B981",
          teal: "#06B6D4",
          cyan: "#0EA5E9",
          blue: "#0284C7",
          dark: "#0F172A",
          muted: "#475569",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(135deg, #72E73E 0%, #10B981 35%, #06B6D4 70%, #0EA5E9 100%)",
        "brand-gradient-hover": "linear-gradient(135deg, #84F04D 0%, #34D399 35%, #22D3EE 70%, #38BDF8 100%)",
        "brand-subtle": "linear-gradient(135deg, rgba(114, 231, 62, 0.08) 0%, rgba(16, 185, 129, 0.08) 50%, rgba(14, 165, 233, 0.08) 100%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 3s infinite",
        "float-fast": "float 6s ease-in-out 1.5s infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
