import type { Meta, StoryObj } from '@storybook/react-vite';
import Book from './Book.tsx';

const meta = {
  component: Book,
} satisfies Meta<typeof Book>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'my title',
    description: 'my description',
  },
};
