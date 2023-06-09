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
        add: "url('./src/assets/add.png')",
        coffee: "url('./src/assets/5.png')",
        single: "url('./src/assets/single.png')",
      },
    },
  },
  plugins: [],
};
