/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        darkred: '#6B010A',
        midred: '#A41C23',
        lightred: '#BF7D81',
        navred: '#C0878A',
        buttonbeige: '#EDDFC3',
        beige: '#FFF5EC',
      },
       fontFamily: {
      sans: ["Lato", 'sans-serif'],
    },
    },
   
  },
  plugins: [
        require('flowbite/plugin')
    ]

}
