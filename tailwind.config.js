/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scans all files in the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Scans all files in the components directory
  ],
  darkMode: 'class', // Enables dark mode with the 'dark' class
  theme: {
    extend: {
      // Add customizations (e.g., colors from your portfolio)
      colors: {
        accent: '#10b981', // Green accent from your portfolio
      },
    },
  },
  plugins: [],
};