/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phone: "270px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      ultrawide: "1536px",
    },
    colors: {
      color1: "#CC7E87",
      color2: "#1A92B4",
      color3: "#CCCCCC",
      color4: "#8ACCCC",
      color5: "#CCBAB9",
      dark: "#1f2124",
      white: "#ffffff",
    },
    fontFamily: {
      karla: ["karla", "sans-serif"],
      inter: ["inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
