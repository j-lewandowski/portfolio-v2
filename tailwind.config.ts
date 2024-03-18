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
        primary: "#0C0C0C",
        "primary-light": "#202020",
        secondary: "#8a8a8a",
        "badge-bg": "#71D14F",
        "bagde-text": "#81E685",
      },
      fontFamily: {
        sans: ["var(--font-SFPro)"],
      },
      animation: {
        slideFromRight: "slideFromRight 0.15s ease-out forwards",
        dotMove: "dotMove 3s infinite linear",
        spinSlow: "spin 3s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
