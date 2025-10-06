import SearchInput from '@components/SearchInput.tsx';
import BooksGrid from '@components/BooksGrid.tsx';
import {BooksContextProvider} from '@components/BooksContext.tsx';
interface SearchableBooksProps {

}

// add context TODO

// load books list TODO

/*
provide either api url or book data?
What is the real best practice for a testable/mockable API fetch
in a React component within an Astro app?
 */

const searchableBooks = () => {
  return <div id="searchable-books">
    <BooksContextProvider>
      <SearchInput/>
      <BooksGrid books={[]} gridId='book-search-result'/>
    </BooksContextProvider>
  </div>
};

export default searchableBooks;

