import { useState } from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
}

interface SearchProps {
  books: Book[];
}

export function Search({ books }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (!value.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate async search
    setTimeout(() => {
      const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(value.toLowerCase()) ||
        book.author.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredBooks);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {isLoading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      )}

      {!isLoading && results.length > 0 && (
        <div className="space-y-4">
          {results.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-start space-x-4">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-24 h-32 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{book.title}</h3>
                  <p className="text-gray-600">by {book.author}</p>
                  <p className="mt-2 text-gray-700">{book.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && results.length === 0 && query && (
        <p className="text-gray-600 text-center">No books found matching "{query}"</p>
      )}
    </div>
  );
}
