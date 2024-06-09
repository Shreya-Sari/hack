// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Blue1: '#0F1035',
        Blue2: '#071952',
        Blue3: '#0F4C75',
        Blue4: '#365486',
        Blue5: '#3795BD',
        BLue6: '#DCF2F1'
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
