/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'nav': '#1F1F1F',
        'abt': '#131313',
        'yel': '#D7B400'
      },
      spacing: {
        'name-w': '392px',
        'name-h': '139px',
        'tag-w': '387px',
        'tag-h': '111px'
      }
    },
  },
  plugins: [],
}
