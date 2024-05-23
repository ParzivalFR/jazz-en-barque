/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        darkblue: "var(--dark-blue)",
        darkpurple: "var(--dark-purple)",
        lightblue: "var(--light-blue)",
        orange: "var(--orange)",
        otherorange: "var(--other-orange)",
        yellow: "var(--yellow)",
      },
    },
    boxShadow: { pxl: "rgba(100, 100, 100, 0.1) 0px 5px 15px 0px" },
  },
  plugins: [],
};
