import type { Meta, StoryObj } from '@storybook/react-vite';
import ToggleButton from './ToggleButton';

const meta = {
  component: ToggleButton,
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    initiallySelected: true,
  },
};

export const InitiallyNotSelected: Story = {
  args: {
    initiallySelected: true,
  },
};
