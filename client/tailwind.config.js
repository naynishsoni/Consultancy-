/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#0f172a', // Slate 900 - Darker, more premium
        'brand-accent': '#3b82f6', // Bright Blue for highlights
        'brand-orange': '#f97316', // Orange for key CTAs (kept as requested)
      },
    },
  },
  plugins: [],
}
