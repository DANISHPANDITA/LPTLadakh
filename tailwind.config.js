/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg: "url('https://firebasestorage.googleapis.com/v0/b/lptwebapp.appspot.com/o/activities_back.jpg?alt=media&token=17d9c1c2-c880-4a51-aea2-11dc9c68e287')",
      },
      screens: {
        xs: { min: "301px", max: "639px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1535px" },
        xxl: { min: "1536px", max: "1600px" },
      },
      fontFamily: {
        ubuntu: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
