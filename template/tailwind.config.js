module.exports = {
  purge: {
    mode: "layers",
    content: [
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.ts",
      "src/**/*.tsx",
      "public/**/*.html",
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-color-light": "#6C2BD9",
        "theme-color-dark": "#baa5dc",
        "dark-mode": "#1E1F26",
        "dark-mode-content-bg": "#000000",
        "light-mode": "#ffffff",
        "light-mode-content-bg": "#F5F5F5",
        "light-mode-text": "#3c3c3c",
        "dark-mode-text": "#cccccc",
      },
    },
  },
  variants: {
    extend: {
      lineClamp: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
