module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green: { A700: "#00d54b" },
        gray: { 400: "#b6b6b6" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { agrandir: "Agrandir", mulish: "Mulish" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
