import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
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
        primary_orange: "#D17842",
        primary_red: "#DC3535",
        primary_black: "#0C0F14",
        primary_dark_grey: "#141921",
        secondary_dark_grey: "#21262E",
        primary_grey: "#252A32",
        secondary_grey: "#252A32",
        primary_light_grey: "#52555A",
        secondary_light_grey: "#AEAEAE",
        primary_white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
