import { bookSchema } from '@schemas/bookSchema';
import { z } from 'zod';

type BookProps = z.infer<typeof bookSchema>;

// Infer the Book type/interface from the imported schema
type Book = z.infer<typeof bookSchema>;

//
export const fetchBooks = (): Promise<Book[]> => {
  // relative fetch URL only works in client-side code,
  // not in an Astro build-time server environment!
  return fetch('/books.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data: unknown) => {
      // Type guard to ensure we have an array of books
      if (Array.isArray(data)) {
        return data as Book[];
      }
      console.warn('API returned non-array data:', data);
      return [];
    })
    .catch((error: Error) => {
      console.error('Failed to fetch books:', error);
      throw error;
    });
};

