const BooksContext = React.createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = React.useState([]); // API data
  const [favorites, setFavorites] = React.useState(() => {
    // Initialize from local storage
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : {};
  });

  const toggleFavorite = (bookId) => {
    setFavorites((prev) => {
      const newFavs = { ...prev, [bookId]: !prev[bookId] };
      localStorage.setItem('favorites', JSON.stringify(newFavs));
      return newFavs;
    });
  };

  React.useEffect(() => {
    // Fetch API books and setBooks here
  }, []);

  const value = React.useMemo(() => ({
    books,
    favorites,
    toggleFavorite,
  }), [books, favorites]);

  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
}


// read books from API (file)
// (not filtered by search criteria here, but the list (wrapper) can do that)
// read favorite from local storage
























