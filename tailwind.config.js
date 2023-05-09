/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color: "#331A15",
      },
      backgroundImage: {
        hero: "url('./src/assets/header.png')",
        footer1: "url('./src/assets/footer.png')",
        footer2: "url('./src/assets/footer2.png')",
        banner: "url('./src/assets/Rectangle.png')",
      },
    },
  },
  plugins: [],
};
