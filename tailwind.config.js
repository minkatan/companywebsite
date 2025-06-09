/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    darkMode: false, // Enables dark mode support using class="dark"
    theme: {
      extend: {
        colors: {
          brand: {
            light: '#93c5fd',
            DEFAULT: '#3b82f6',
            dark: '#1e40af',
          },
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
          mono: ['ui-monospace', 'SFMono-Regular'],
        },
      },
    },
    plugins: [],
  }