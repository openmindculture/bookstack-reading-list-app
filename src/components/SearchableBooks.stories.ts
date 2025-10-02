import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchableBooks from '@components/SearchableBooks.tsx';

const meta = {
  component: SearchableBooks,
} satisfies Meta<typeof SearchableBooks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    gridId: 'foo',
    books: [
      {
        id: '1',
        author: 'Jane Doe',
        title: 'Storybook',
        description: 'my description',
        pubYear: 1234,
        coverUrl: 'nadia-makarevich-web-performance-fundamentals.png',
        icon: 'book',
      },
      {
        id: '2',
        author: 'Hubert K. Blaine Wolfeschlegelsteinhausenbergerdorff von und zu Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch',
        title:
          'Things to do in Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch and Bad Gottleuba-Berggießhübel',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis eu arcu ac convallis. Maecenas non magna a sem tincidunt bibendum vel et urna. Fusce eu ligula vel ligula feugiat congue. In hac habitasse platea dictumst. Donec feugiat sit amet elit id tempor. Nunc et dolor vitae justo volutpat cursus. Phasellus lacinia tristique est non condimentum. Donec dignissim pellentesque metus, eget venenatis risus.',
        pubYear: 1975,
        updatedYear: 2025,
        icon: 'blogpost',
        language: 'de',
        coverClassName: 'bg-blue',
        coverUrl: 'nadia-makarevich-web-performance-fundamentals.png',
        externalUrl: 'https://en.wikipedia.org/wiki/Hubert_Blaine_Wolfeschlegelsteinhausenbergerdorff_Sr.',
        showOnHomepage: true,
      },
    ],
  },
};
