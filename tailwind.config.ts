import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { colors } from "./tailwind.colors";
export default {
  content: [
    './node_modules/flyonui/dist/js/accordion.js', 
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '0', // or any padding you want
      screens: {
        // Progressive max-widths that won't overflow
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1348px', // Your desired maximum width
      },
    },
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
  plugins: [animatePlugin,require("flyonui"),require("flyonui/plugin")],
} satisfies Config;

