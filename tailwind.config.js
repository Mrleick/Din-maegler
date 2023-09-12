/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      heading1: "#263048",
      primary: "#162A41",
      second: "#F8F8FB",
      third: "#FFFFFF",
      para01: "#333333",
      para02: "#7B7B7B",
      shape01: "#D3DEE8",
      shape2: "#EEF7FF",
      maskbg: "#33485c",
      agentbordercolor: "#D3DEE8",
      agentshadow: "rgba(0, 115, 225, 0.06)",
    },
    fontFamily: {},
    extend: {
      backgroundImage: {
        banner: "url('./assets/banner.png')",
      },
    },
  },

  plugins: [],
};
