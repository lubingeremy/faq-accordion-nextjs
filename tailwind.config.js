/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '55per': '55%'
      },
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        'soft-red': 'hsl(14, 88%, 65%)',
        'grayish-blue': 'hsl(240, 6%, 50%)',
        'dark-blue': 'hsl(238, 29%, 16%)'
      },
      backgroundImage: {
        'pattern-mobile': "url('/images/bg-pattern-mobile.svg')",
        'pattern-desktop': "url('/images/bg-pattern-deskptop.svg')"
      }
    },
  },
  plugins: [],
}