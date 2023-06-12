const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
  "gray",
];

const shades = ["300", "400", "500"];

const emojiColors = [
  ...colors.flatMap((color) => shades.map((shade) => `text-${color}-${shade}`)),
];

/** @type {import('tailwindcss').Config & { emojiColors: string[] }} */
module.exports = {
  darkMode: "class",
  safelist: [...emojiColors],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#46DD11",
          50: "#E6F9E6",
          100: "#D0F3D0",
          200: "#A0E7A0",
          300: "#70DB70",
          400: "#40CF40",
          500: "#46DD11",
          600: "#1EBD00",
          700: "#1A9A00",
          800: "#156700",
          900: "#104400",
        },
        secondary: {
          DEFAULT: "#F3DB33",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFF9E6",
          500: "#F3DB33",
          600: "#E6C666",
          700: "#D9B999",
          800: "#CCADCC",
          900: "#BF9FFF",
        },
        tertiary: {
          DEFAULT: "#FF6161",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFC2C2",
          500: "#FF6161",
          600: "#FF2F2F",
          700: "#FF0000",
          800: "#CC0000",
          900: "#990000",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["var(--font-inter)", "Inter", "sans-serif"],
        sans: ["var(--font-poppins)", "Poppins", "serif"],
        mono: ["var(--font-source-code-pro)", "Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
  emojiColors: emojiColors,
};
