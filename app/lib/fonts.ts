import localFont from "next/font/local";

export const messinaSans = localFont({
  src: [
    {
      path: "../../public/fonts/MessinaSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSans-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/MessinaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-messina-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const messinaSerif = localFont({
  src: [
    {
      path: "../../public/fonts/MessinaSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MessinaSerif-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/MessinaSerif-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-messina-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
