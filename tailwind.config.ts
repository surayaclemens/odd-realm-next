import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-bakbak)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'custom': '2px 2.654px 3.654px 0px #000'
      },
      borderWidth: {
        '1': '1.5px'
      },
      colors: {
        'purple': '#8A7CDA',
        'purple-light': '#B4ABE8',
        'orange': '#FFB537',
        'yellow': '#FFD24F',
        'pink': '#FD679F',
        'green': "#20A777",
        'blue': '#3064BE',
        'black': '#1A1A1D',
        'red': '#E35224',
        'red-light': '#FF5021',
        'placeholder': 'rgba(255, 255, 255, 0.5)',
        'midnight': '#0E3789',
        'magenta': '#BE5DD3'
      }
    },
  },
  plugins: [],
}
export default config
