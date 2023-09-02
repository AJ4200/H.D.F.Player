module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixelade': ['Pixelade', 'cursive'],
        'minecraftia': ['Minecraftia', 'cursive'],
        '04b03': ['04b03', 'cursive'],
      },
      boxShadow: {
        'lime': '2px 2px lime',
        'magenta': '2px 2px magenta',
      },
      textShadow: {
        'lime': '1px 1px lime',
        'magenta': '1px 1px magenta',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};