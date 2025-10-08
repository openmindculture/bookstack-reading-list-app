import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { bookSchema } from '@schemas/bookSchema';
import { fetchBooks } from '@lib/fetchBooks.ts';
import { z } from 'zod';

type BookProps = z.infer<typeof bookSchema>;
interface BooksContextType {
  // allBooks: BookProps[];
  // setAllBooks: React.Dispatch<React.SetStateAction<BookProps[]>>;
  filteredBooks: BookProps[];
  // setFilteredBooks: React.Dispatch<React.SetStateAction<BookProps[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface BooksProviderProps {
  children: ReactNode;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

export function useBooksContext(): BooksContextType {
  const context = useContext(BooksContext);
  if (context === undefined) {
    throw new Error('useBooksContext must be used within BooksContextProvider');
  }
  return context;
}

export const BooksContextProvider = ({ children }: BooksProviderProps) => {
  const [allBooks, setAllBooks] = useState<BookProps[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<BookProps[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');

  useEffect(() => {
    // Set a timeout to update debounced value after 500ms
    const debounceHandler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    // Cleanup the timeout if `query` changes before 500ms
    return () => {
      clearTimeout(debounceHandler);
    };
  }, [searchQuery]);

  // Load data once on mount
  useEffect(() => {
    async function loadBooks() {
      try {
        const data = await fetchBooks();
        setAllBooks(data);
      } catch (err) {
        console.error(
          err instanceof Error ? err.message : 'Failed to load books',
        );
      }
    }

    void loadBooks();
  }, []);

  useEffect(() => {
    // TODO fetch from API again when we have a backend that can handle search
    if (!debouncedSearchQuery) {
      setFilteredBooks([]);
      return;
    }
    const searchQueryToLowerCase = debouncedSearchQuery.toLowerCase();
    const filtered = allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQueryToLowerCase) ||
        book.author.toLowerCase().includes(searchQueryToLowerCase) ||
        (book.description &&
          book.description.toLowerCase().includes(searchQueryToLowerCase)) ||
        (book.isbn && book.isbn.toLowerCase().includes(searchQueryToLowerCase)),
    );
    setFilteredBooks(filtered);
  }, [debouncedSearchQuery, allBooks]); // Runs when these change

  return (
    <BooksContext.Provider
      value={{
        filteredBooks,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};
