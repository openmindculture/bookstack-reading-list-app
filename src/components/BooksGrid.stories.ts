import type { Meta, StoryObj } from '@storybook/react-vite';
import BooksGrid from './BooksGrid';

const meta = {
  component: BooksGrid,
} satisfies Meta<typeof BooksGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    gridId: 'foo',
    books: [{
      author: 'Jane Doe',
      title: 'Storybook',
      description: 'my description',
      pubYear: 1234,
      coverUrl: 'nadia-makarevich-web-performance-fundamentals.png',
      icon: 'book',
    }],
  },
};
