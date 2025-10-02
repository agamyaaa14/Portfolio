/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#242423',
        'secondary-bg': '#333533',
        'primary-text': '#E8EDDF',
        'secondary-text': '#CFDBD5',
        'accent': '#FF006E',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 5px #FF006E, 0 0 10px #FF006E, 0 0 15px #FF006E',
          },
          '100%': { 
            boxShadow: '0 0 10px #FF006E, 0 0 20px #FF006E, 0 0 30px #FF006E',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};