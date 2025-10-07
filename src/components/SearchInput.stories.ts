import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchInput from './SearchInput';

const meta = {
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const FilledForm: Story = {
  args: {
    // Add your args here
  },
  play: async ({ canvasElement }) => {
    const searchInput = canvasElement.querySelector('input[type=text]');

    // Add your interactions here
    // await userEvent.type(searchInput, 'example@email.com');
  },
};
