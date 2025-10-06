import React, { createContext, useState, type ReactNode } from "react";

interface BooksContextType {
  books: string[];
  setBooks: React.Dispatch<React.SetStateAction<string[]>>;
}

const BooksContext = createContext<BooksContextType | undefined>(undefined);

interface BooksProviderProps {
  children: ReactNode;
}

export const BooksContextProvider = ({ children }: BooksProviderProps) => {
  const [books, setBooks] = useState<string[]>([]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
