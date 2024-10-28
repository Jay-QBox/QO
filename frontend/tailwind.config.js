// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#F27303', // Define your custom color here
        light: '#F58A1F', // Define your custom color here
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Use Poppins for the default sans font
        poppins: ['Poppins', 'sans-serif'], // Optional: custom alias for Poppins
      },
    },
  },
  plugins: [],
}