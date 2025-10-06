import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
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

  // Load data once on mount
  useEffect(() => {
    async function loadBooks() {
      try {
        const data = await fetchBooks();
        setAllBooks(data);
        console.log('after setAllBooks data:', data);
      } catch (err) {
        console.error(err instanceof Error ? err.message : 'Failed to load books');
      } finally {
        console.log('finished loading all books');
      }
    }

    void loadBooks();
  }, []);

  // 2. useEffect reacts when searchQuery changes (after setSearchQuery is called)
  useEffect(() => {
    // TODO debounce handler
    // TODO fetch from API again when we have a backend that can handle search
    // TODO filter books matching more fields
    const searchQueryToLowerCase = searchQuery.toLowerCase();
    const filtered = allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchQueryToLowerCase) ||
      book.author.toLowerCase().includes(searchQueryToLowerCase) ||
      (book.description && book.description.toLowerCase().includes(searchQueryToLowerCase)) ||
      (book.isbn && book.isbn.toLowerCase().includes(searchQueryToLowerCase))
    );
    setFilteredBooks(filtered);
    console.log('setFilteredBooks filtered: ', filtered);
  }, [searchQuery, allBooks]);  // Runs when these change

  return (
    <BooksContext.Provider value={{
      filteredBooks,
      searchQuery,
      setSearchQuery,
    }}>
      {children}
    </BooksContext.Provider>
  );
};



