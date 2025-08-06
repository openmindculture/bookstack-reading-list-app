import type { Meta, StoryObj } from '@storybook/react-vite';
import Card from './Card';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'my title',
    description: 'my description',
  },
};
