module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
      },
       transformOrigin: {
            'center': 'center',
        }
    },


  },
  plugins: [],
}
