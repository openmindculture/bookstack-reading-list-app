import type { Preview } from '@storybook/react-vite'
import '../src/styles/global.css';
console.log('storybook preview ts executed');

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
