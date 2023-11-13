import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryRedHex: "#DC3535",
        primaryOrangeHex: "#D17842",
        primaryBlackHex: "#0C0F14",
        primaryDarkGreyHex: "#141921",
        secondaryDarkGreyHex: "#21262E",
        primaryGreyHex: "#252A32",
        secondaryGreyHex: "#252A32",
        primaryLightGreyHex: "#52555A",
        secondaryLightGreyHex: "#AEAEAE",
        primaryWhiteHex: "#FFFFFF",
        primaryBlackRGBA: "rgba(12,15,20,0.5)",
        secondaryBlackRGBA: "rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
