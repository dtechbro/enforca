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
        foreground: "var(--foreground)",
        main: "#00018B",
      },
      
      fontFamily: {
        acme: ['Acme', 'sans-serif'],
      },

      // backgroundImage: {
      //   'hero-bg': "url('@/app/assets/hero-bg.png')",
      // },
    },
  },
  plugins: [],
};
