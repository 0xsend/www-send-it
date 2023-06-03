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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
  emojiColors: emojiColors,
};
