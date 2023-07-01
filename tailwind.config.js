/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-red': 'hsl(14, 88%, 65%)'
      }
    },
  },
  plugins: [],
}

