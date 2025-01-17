/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        twilight: {
          primary: '#2D1B69',
          secondary: '#8B6DFF',
          accent: '#FF61D8',
          background: '#150B33',
          text: '#E2D9FF',
        },
        accent: {
          DEFAULT: '#8B6DFF',
          hover: '#FF61D8',
        },
        primary: {
          light: '#f0f2f5',
          dark: '#150B33',
          darker: '#0D071F',
        },
        card: {
          light: '#ffffff',
          dark: '#2D1B69',
          darker: '#1E1245',
        },
      },
      boxShadow: {
        accent: '0 0 30px rgba(139, 109, 255, 0.3)',
        twilight: '0 0 30px rgba(255, 97, 216, 0.2)',
      },
      backgroundColor: {
        'black-90': 'rgba(0, 0, 0, 0.9)',
      },
      textColor: {
        inherit: 'inherit',
      },
      borderColor: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
}
