/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {
      fontFamily: {
        'cursive':['Shadows Into Light'],
        'sans-serif':['Protest Revolution'],
        'system-ui':['Poor Story']
        
    },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};


