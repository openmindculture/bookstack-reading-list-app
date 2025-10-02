import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
  use,
  Suspense,
  Component,
  type ReactNode,
} from 'react';
import { bookSchema } from '@schemas/bookSchema';
import { z } from 'zod';

type BookProps = z.infer<typeof bookSchema>;

// Infer the Book type/interface from the imported schema
type Book = z.infer<typeof bookSchema>;

// Alternative: If you prefer an interface, you can also do:
// interface Book extends z.infer<typeof bookSchema> {}

interface BooksContextType {
  books: Book[];
  favorites: Record<string, boolean>;
  toggleFavorite: (bookId: string) => void;
  isFavorite: (bookId: string) => boolean;
  favoriteIds: string[];
}

interface BooksProviderProps {
  children: ReactNode;
}

interface BooksDataProviderProps {
  children: ReactNode;
  booksPromise: Promise<Book[]>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Helper function for safe localStorage operations
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(key);
      }
    } catch (error) {
      console.warn('localStorage getItem failed:', error);
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(key, value);
      }
    } catch (error) {
      console.warn('localStorage setItem failed:', error);
    }
  },
};

// Create a promise for fetching books
const createBooksPromise = (): Promise<Book[]> => {
  return fetch('/api/books')
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

// Create context with default value
const BooksContext = createContext<BooksContextType>({
  books: [],
  favorites: {},
  toggleFavorite: () => {},
  isFavorite: () => false,
  favoriteIds: [],
});

// Component that uses the use() hook to fetch books
function BooksDataProvider({ children, booksPromise }: BooksDataProviderProps) {
  // Use the use() hook to unwrap the promise
  const books = use(booksPromise);

  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    const saved = safeLocalStorage.getItem('bookFavorites');
    try {
      const parsed = saved ? JSON.parse(saved) : {};
      // Ensure we return a valid object
      return typeof parsed === 'object' && parsed !== null ? parsed : {};
    } catch (error) {
      console.warn('Failed to parse favorites from localStorage:', error);
      return {};
    }
  });

  const toggleFavorite = useCallback((bookId: string): void => {
    if (!bookId) {
      console.warn('toggleFavorite called without bookId');
      return;
    }

    setFavorites((prev) => {
      const newFavs = { ...prev };

      if (newFavs[bookId]) {
        delete newFavs[bookId];
      } else {
        newFavs[bookId] = true;
      }

      safeLocalStorage.setItem('bookFavorites', JSON.stringify(newFavs));
      return newFavs;
    });
  }, []);

  const value = useMemo<BooksContextType>(
    () => ({
      books,
      favorites,
      toggleFavorite,
      // Helper to check if a book is favorited
      isFavorite: (bookId: string) => Boolean(favorites[bookId]),
      // Get array of favorite book IDs
      favoriteIds: Object.keys(favorites).filter((id) => favorites[id]),
    }),
    [books, favorites, toggleFavorite],
  );

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

// Main provider component that handles the promise creation and suspense
function BooksProvider({ children }: BooksProviderProps) {
  const [booksPromise] = useState(() => createBooksPromise());

  return (
    <Suspense fallback={<div>Loading books...</div>}>
      <BooksDataProvider booksPromise={booksPromise}>
        {children}
      </BooksDataProvider>
    </Suspense>
  );
}

// Error boundary component for handling fetch errors
class BooksErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Books fetch error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h3>Failed to load books</h3>
          <p>Error: {this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Complete provider with error handling
function BooksProviderWithErrorBoundary({ children }: BooksProviderProps) {
  return (
    <BooksErrorBoundary>
      <BooksProvider>{children}</BooksProvider>
    </BooksErrorBoundary>
  );
}

// Custom hook for using the context
function useBooks(): BooksContextType {
  const context = useContext(BooksContext);

  if (context === undefined) {
    throw new Error('useBooks must be used within a BooksProvider');
  }

  return context;
}

// Export the complete provider and hook
export { BooksProviderWithErrorBoundary as BooksContextProvider, useBooks };

// Export types for consumers
export type { Book, BooksContextType };

// Optional: Export individual components for advanced use cases
export { BooksContext, BooksDataProvider, BooksErrorBoundary };
