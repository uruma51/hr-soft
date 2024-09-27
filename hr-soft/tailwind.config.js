/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderRadius: {
      2: "2px",
      4: "4px",
      8: '8px',
      20: '20px',
      full: '100%',
    },
    colors: {
      primary: '#09B188',
      primaryOpacity: '#E8F8F2',
      black: '#000',
      w: '#fff',
      indigo: '#9289FF',
      bg: {
        20: '#20364B',
        f2: '#F2F4F7',
      },
      gray: {
        70: '#707070',
        97: '#979DA2',
        24: '#24272A',
        f2: '#f2f2f2',
        f8: '#F8F8F8',
        d3: '#d3d3d3',
        e3: '#E3E3E3',
        d8: '#D8DDE4',
        c8: '#8C9298',
      },
      error: '#EB7171',
      red: '#ED302A',
      warning: '#FBAD29'
    },
    extend: {
      fontFamily: {
        neueNormal: ["neueNormal","sans-serif"],
        neueMedium: ["neueMedium","sans-serif"],
        neueBold: ["neueBold","sans-serif"],
      },
    },
  },
  plugins: [],
}

