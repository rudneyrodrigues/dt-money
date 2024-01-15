import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#00B37E',
          mid: '#00875F',
          dark: '#015F43',
          low: '#00291D',
        },
        zinc: {
          50: '#FAFAFA',
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#7C7C8A',
          500: '#505059',
          600: '#323238',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
          950: '#09090A',
        },
        danger: {
          light: '#F75A68',
          mid: '#CC2937',
          low: '#2D090C',
        },
      },
      fontFamily: {
        sans: "'Roboto', sans-serif",
      },
      keyframes: {
        'emerge-from-bottom': {
          from: {
            opacity: '0',
            transform: 'translateY(16px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'emerge-from-top': {
          from: {
            opacity: '0',
            transform: 'translateY(-16px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        appear: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
      },
      animation: {
        appear: 'appear .3s ease-in-out',
        'emerge-from-top': 'emerge-from-top .3s ease-in-out',
        'emerge-from-bottom': 'emerge-from-bottom .3s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-radix')],
}

export default config
