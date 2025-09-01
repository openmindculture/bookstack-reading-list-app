import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchInput from './SearchInput.tsx';

const meta = {
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

