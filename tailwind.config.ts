import { darkColors, lightColors } from "./src/styles/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.875rem", // varsayılan padding değeri
          sm: "0.875rem", // küçük ekranlar için padding değeri
          lg: "1.5rem", // büyük ekranlar için padding değeri
          xl: "5rem", // ekstra büyük ekranlar için padding değeri
        },
        screens: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1512px",
        },
      },
      colors: {
        light: lightColors,
        dark: darkColors,
      },
      lineHeight(utils) {
        return {
          "2": "2px",
          "4": "4px",
          "6": "6px",
          "8": "8px",
          "10": "10px",
          "12": "12px",
          "14": "14px",
          "16": "16px",
          "18": "18px",
          "20": "20px",
          "22": "22px",
          "24": "24px",
          "26": "26px",
          "28": "28px",
          "30": "30px",
          "32": "32px",
          "34": "34px",
          "36": "36px",
          "38": "38px",
          "40": "40px",
          "42": "42px",
          "44": "44px",
          "46": "46px",
          "48": "48px",
          "50": "50px",
          "52": "52px",
          "54": "54px",
          "56": "56px",
          "58": "58px",
          "60": "60px",
          "62": "62px",
        };
      },
      borderRadius(utils) {
        return {
          "2": "2px",
          "4": "4px",
          "6": "6px",
          "8": "8px",
          "10": "10px",
          "12": "12px",
          "14": "14px",
          "16": "16px",
          "18": "18px",
          "24": "24px",
        };
      },
      gap: {
        "34": "34",
        "14": "14",
        "18": "18",
      },
      text: {},
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 3s infinite",
        fadeIn: "fadeIn 0.3s ease-out",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  // plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
