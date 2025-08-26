import path from 'node:path';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    path.join(__dirname, './src/**/*.{astro,html,jsx,tsx}'),
    path.join(__dirname, './src/**/*.css'),
    path.join(__dirname, './public/**/*.html'),
  ],
  safelist: [
    'max-w-36',
  ],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
        'dx-kord': ['Dx Kord', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'clamp-10ch': 'clamp(5rem, 10ch, 24rem)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        blue: {
          'slate': '#6181bd',
          /* TODO remove unused: */
          sky: '#e3f3ff',
          azure: '#9dc0fa',
          indigo: '#8f97e8',
          violet: '#401f6b',
          dusk: '#271f47',
          midnight: '#191970',
          black: '#0b1522',
          DEFAULT: '#0000ff',
        },
        'tahiti': {
          light: '#cffafe',
          200: '#a5f3fc',
          DEFAULT: '#06b6d4',
        },
        black: '#000000',
      },
    },
  },
  plugins: [],
};

export default config;
