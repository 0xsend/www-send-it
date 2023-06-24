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
          DEFAULT: "var(--color-primary)",
          50: "var(--color-primary-50)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          50: "var(--color-secondary-50)",
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
        },
        tertiary: {
          DEFAULT: "var(--color-tertiary)",
          50: "var(--color-tertiary-50)",
          100: "var(--color-tertiary-100)",
          200: "var(--color-tertiary-200)",
          300: "var(--color-tertiary-300)",
          400: "var(--color-tertiary-400)",
          500: "var(--color-tertiary-500)",
          600: "var(--color-tertiary-600)",
          700: "var(--color-tertiary-700)",
          800: "var(--color-tertiary-800)",
          900: "var(--color-tertiary-900)",
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
  plugins: [require("daisyui")],
  emojiColors: emojiColors,

  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          primary: "#46dd11",

          secondary: "#f3db33",

          accent: "#ff6161",

          neutral: "#2b3440",

          "base-100": "#2b3440",

          info: "#bf9fff",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "mytheme", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
