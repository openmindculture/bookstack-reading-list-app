import { bookSchema } from '@schemas/bookSchema';
import Book from './Book.tsx';
import refineMasonryLayout from '../utils/refineMasonryLayout';
import SvgSymbolBlogpost from './SvgSymbolBlogpost.svg';
import SvgSymbolBook from './SvgSymbolBook.svg';
import SvgSymbolFavorite from './SvgSymbolFavorite.svg';
import SvgSymbolPodcast from './SvgSymbolPodcast.svg';
import { z } from 'zod';

type BookProps = z.infer<typeof bookSchema>;

interface BooksGridProps {
  books: BookProps[];
  gridId: string;
}

const BooksGrid = ({ books, gridId }: BooksGridProps) => {
  return (
    <div>
      <SvgSymbolBlogpost />
      <SvgSymbolBook />
      <SvgSymbolFavorite />
      <SvgSymbolPodcast />
      <ul
        className="relative flex flex-wrap gap-0 custom-grid-has-row-behavior"
        id={gridId}
      >
        {books.map((book) => (
          <li key={book.id} className="pb-1">
            <Book
              id={book.id}
              title={book.title}
              author={book.author}
              description={book.description}
              coverUrl={book.coverUrl}
              coverClassName={book.coverClassName}
              externalUrl={book.externalUrl}
              icon={book.icon}
              isbn={book.isbn}
              language={book.language}
              pubYear={book.pubYear}
              updatedYear={book.updatedYear}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksGrid;
