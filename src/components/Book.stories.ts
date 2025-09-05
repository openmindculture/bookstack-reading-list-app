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
    title: 'Storybook',
    description: 'my description',
    pubYear: 1234,
  },
};

export const Blogpost: Story = {
  args: {
    ...Primary.args,
    icon: 'blogpost'
  },
};

export const PodcastGerman: Story = {
  args: {
    ...Primary.args,
    icon: 'podcast',
    language: 'de',
  },
};

export const Maximum: Story = {
  args: {
    author: 'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff',
    title: 'Things to do in Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis eu arcu ac convallis. Maecenas non magna a sem tincidunt bibendum vel et urna. Fusce eu ligula vel ligula feugiat congue. In hac habitasse platea dictumst. Donec feugiat sit amet elit id tempor. Nunc et dolor vitae justo volutpat cursus. Phasellus lacinia tristique est non condimentum. Donec dignissim pellentesque metus, eget venenatis risus.',
    pubYear: 1975,
    icon: 'blogpost',
    language: 'de',
  },
};
