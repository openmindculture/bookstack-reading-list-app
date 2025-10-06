import { bookSchema } from '@schemas/bookSchema';
import { z } from 'zod';

// Infer the Book type/interface from the imported schema
type Book = z.infer<typeof bookSchema>;

//
export async function fetchBooks (): Promise<Book[]> {
  try {
    // relative fetch URL only works in client-side code,
    // not in an Astro build-time server environment!
    const response = await fetch('/books.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      return data as Book[];
    }
    console.warn('API returned non-array data:', data);
    return [];
  } catch (error) {
    console.error('Failed to fetch books:', error);
    throw error; // Re-throw to let caller handle it
  }
};

