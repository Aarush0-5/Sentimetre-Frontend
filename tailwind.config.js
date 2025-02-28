/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#D6B29B', // Light brown
          200: '#C69C6D', // Medium-light brown
          300: '#A26A3C', // Medium brown
          400: '#8B4F2F', // Dark brown
          500: '#6A3C1F', // Deep brown
          600: '#4E2A17', // Darker brown
          700: '#3C1D0F', // Very dark brown
        },
        beige: '#f5f5dc',
        cream: '#f5f5dc',
      },
      fontFamily: {
        serif: ['Times New Roman, serif'],
        amatic: ['"Amatic SC"', 'cursive'],
        banger: ['"Bangers"', 'cursive'],
        comic: ['Coming Soon', 'cursive']
      },
    },
  },
  plugins: [],
}

