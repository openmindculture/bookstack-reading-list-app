import { bookSchema } from '@schemas/bookSchema';
import Book from './Book.tsx';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useBooksContext } from './BooksContext.tsx';
// import refineMasonryLayout from '@utils/refineMasonryLayout';
import refineMasonryLayout, { initMasonryLayouts, removeMasonryEventListeners } from 'hexagonal-masonry-placement';

import { z } from 'zod';

type BookProps = z.infer<typeof bookSchema>;

interface BooksGridProps {
  gridId: string;
}

const BooksGrid = ({ gridId }: BooksGridProps) => {
  const { filteredBooks } = useBooksContext();
  // useLayoutEffect runs after the DOM elements are rendered and the layout (including flexbox or CSS box model) is calculated, but before the browser actually paints the pixels on screen. All CSS styles, including flex layouts, have been applied and computed. This should avoid a visual glitch when adjusting our masonry layout.
  useEffect(() => {
    initMasonryLayouts();
    return () => {
      removeMasonryEventListeners();
    };
  })
  const ulRef = useRef<HTMLUListElement>(null);
  useLayoutEffect(() => {
    if (ulRef.current) {
      // can we rely on a global window.refineMasonryLayout?
      refineMasonryLayout(ulRef.current.id);
    }
  }, [filteredBooks]);
  return (
    <div className="custom-grid-container">
      <ul
        className="relative flex flex-wrap gap-0 custom-grid-has-row-behavior"
        id={gridId}
      >
        {filteredBooks.map((book: BookProps) => (
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
