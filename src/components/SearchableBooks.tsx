import SearchInput from '@components/SearchInput.tsx';
import BooksGrid from '@components/BooksGrid.tsx';
import {BooksContextProvider} from '@components/BooksContext.tsx';

const searchableBooks = () => {
  return <div id="searchable-books">
    <BooksContextProvider>
      <SearchInput/>
      <BooksGrid gridId='book-search-result'/>
    </BooksContextProvider>
  </div>
};

export default searchableBooks;

