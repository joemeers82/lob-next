import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { colors } from "./tailwind.colors";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["var(--font-messina-sans)"],
        serif: ["var(--font-messina-serif)"],
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-33.333% * 3))" }, // Adjust based on number of original slides
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 60s linear infinite",
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;
