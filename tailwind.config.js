/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  safelist:[`text-zinc-500`,`border-zinc-500`,`text-green-500`,`border-green-500`,`text-red-600`,`border-red-600`,`text-yellow-400`,`border-yellow-400`]
}