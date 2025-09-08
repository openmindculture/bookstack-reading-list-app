import type { Preview, StoryFn } from '@storybook/react';
import '../src/styles/global.css';

// Rename to withConditionalWrapper and ensure its visibility in decorators array below
const withConditionalWrapper: StoryFn = (Story, context) => {
  return context.args?.showWrapper ? (
    <div className="wrapper">
      <Story />
      </div>
  ) : (
    <Story />
  );
};

const preview: Preview = {
  decorators: [withConditionalWrapperlWrapper],
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
