/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#01008A",
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
