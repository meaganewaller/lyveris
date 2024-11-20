const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "selector",
  content: [
    "./public/*.html",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/views/**/*.{erb,haml,html,slim}",
  ],
  safeList: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
    "bg-opacity-50",
    "dark:bg-opacity-80",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      transitionProperty: {
        width: "width",
      },
      textDecoration: ["active"],
      minWidth: {
        kanban: "28rem",
      },
      // custom color palette for branding, see https://tailwindcss.com/docs/customizing-colors
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: colors.black,
        orange: {
          50: "#fef7ee",
          100: "#fdedd7",
          200: "#f9d7af",
          300: "#f5b97c",
          400: "#f09247",
          500: "#ed7d31",
          600: "#dd5b19",
          700: "#b74417",
          800: "#92371a",
          900: "#762f18",
          950: "#40160a",
        },
        brown: {
          50: "#f4f3f2",
          100: "#e3e1de",
          200: "#c9c4bf",
          300: "#aaa19a",
          400: "#92857d",
          500: "#83756f",
          600: "#6c5f5b",
          700: "#5b4f4d",
          800: "#4f4544",
          900: "#463d3d",
          950: "#272121",
        },
        gray: {
          50: "#f4f4f2",
          100: "#e3e3de",
          200: "#c9c8bf",
          300: "#aaa79a",
          400: "#918c7e",
          500: "#827d70",
          600: "#6f6a5f",
          700: "#5a554e",
          800: "#4f4a45",
          900: "#45413e",
          950: "#272421",
        },
        white: {
          50: "#f6f1ee",
          100: "#f0e9e4",
          200: "#e1d0c7",
          300: "#ceb1a3",
          400: "#b98e7e",
          500: "#aa7565",
          600: "#9d6459",
          700: "#83514b",
          800: "#6b4441",
          900: "#573937",
          950: "#2e1d1c",
        },
        green: {
          50: "#f2f7f2",
          100: "#e1ebe0",
          200: "#c4d6c4",
          300: "#9cb99e",
          400: "#86a789",
          500: "#507955",
          600: "#3c5f41",
          700: "#304c35",
          800: "#283d2c",
          900: "#213324",
          950: "#121c15",
        },
        red: {
          50: "#fcf5f4",
          100: "#fae8e6",
          200: "#f6d5d2",
          300: "#efb7b2",
          400: "#e48d85",
          500: "#d6675d",
          600: "#c4544a",
          700: "#a23c33",
          800: "#86352e",
          900: "#70322c",
          950: "#3c1613",
        },
        camelot: {
          50: "#fbf4f8",
          100: "#f8ebf1",
          200: "#f3d7e5",
          300: "#ebb6d0",
          400: "#dd89b0",
          500: "#cf6592",
          600: "#bb4774",
          700: "#a0365b",
          800: "#88304e",
          900: "#702b43",
          950: "#431424",
        },
        amaranth: {
          50: "#fef2f3",
          100: "#fde6e8",
          200: "#fad1d5",
          300: "#f5acb4",
          400: "#ef7d8b",
          500: "#e23e57",
          600: "#d02e4e",
          700: "#af2141",
          800: "#931e3c",
          900: "#7e1d39",
          950: "#460b1b",
        },
        voodoo: {
          50: "#fdf6fc",
          100: "#faedf9",
          200: "#f5d9f2",
          300: "#ecbbe4",
          400: "#df93d1",
          500: "#cd68ba",
          600: "#b0499a",
          700: "#913a7d",
          800: "#773165",
          900: "#522546",
          950: "#3f1333",
        },
        revolver: {
          50: "#f4f0fd",
          100: "#eae3fc",
          200: "#dbcdf8",
          300: "#c6aef3",
          400: "#b78eeb",
          500: "#aa72e2",
          600: "#a057d4",
          700: "#8c48ba",
          800: "#723c97",
          900: "#5b3778",
          950: "#311d3f",
        },
      },
      keyframes: {
        flashfade: {
          "0%, 100%": { opacity: "0" },
          "5%, 80%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "hero-pattern": "url('hero-pattern.svg')",
        hero: "url('hero.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
