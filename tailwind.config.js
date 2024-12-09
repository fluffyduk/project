/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy_bold: ['"Gilroy Bold"', "sans-serif"],
        gilroy_semibold: ['"Gilroy SemiBold"', "sans-serif"],
        gilroy_medium: ['"Gilroy Medium"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

