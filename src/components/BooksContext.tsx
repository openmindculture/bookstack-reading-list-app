import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { bookSchema } from '@schemas/bookSchema';
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

  // 2. useEffect reacts when searchQuery changes (after setSearchQuery is called)
  useEffect(() => {
    console.log('useEffect for searchQuery, allBooks');
    const filtered = allBooks.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
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



