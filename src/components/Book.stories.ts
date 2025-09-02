import type { Meta, StoryObj } from '@storybook/react-vite';
import Book from './Book';

const meta = {
  component: Book,
} satisfies Meta<typeof Book>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    author: 'Jane Doe',
    description: 'my description',
    pubYear: 1234,
    title: 'Storybook',
  },
};
