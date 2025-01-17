import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#1a1a1a",
        },
        purple: {
          400: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
        },
      },
      backgroundImage: {
        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      },
      animation: {
        gradientMove: "gradientMove 6s ease infinite",
      },
      keyframes: {
        gradientMove: {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
