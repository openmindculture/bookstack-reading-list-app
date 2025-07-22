import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/**/*.{astro,html,jsx,tsx}',
    './src/**/*.css',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        atkinson: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
        'dx-kord': ['Dx Kord', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        /* generated classes automatically prefix with "text-" */
        'clamp-10ch': 'clamp(5rem, 10ch, 24rem)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        blue: {
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
          DEFAULT: '#06b6d4', // color-tahiti (without suffix)
        },
        black: '#000000',
        // usage e.g. color-tahiti-light for background-color:var(--color-tahiti-light)
        // Every color in the default palette includes 11 steps, with 50 being the lightest, and 950 being the darkest,
        // Use color utilities like bg-white, border-pink-300, and text-gray-950 to set the different color properties of elements in your design.
        // Here's a full list of utilities that use your color palette:
        // https://tailwindcss.com/docs/colors#using-color-utilities
        // You can adjust the opacity of a color using syntax like bg-black/75, where 75 sets the alpha channel of the color to 75%
        // also consider https://hextotailwind.com/ to find approximate matches of Tailwind built-ins
        // In Tailwind CSS v4 (alpha/beta, not recommended for astro yet) we would define custom properties in global.css
        // @theme {
        //  --color-my-custom-blue: #1a73e8;
      },
    },
  },
  plugins: [],
};

export default config;
