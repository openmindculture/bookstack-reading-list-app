import SearchInput from '@components/SearchInput.tsx';
import BooksGrid from '@components/BooksGrid.tsx';
import {BooksContextProvider} from '@components/BooksContext.tsx';
interface SearchableBooksProps {

}

// add context TODO

// load books list TODO

const searchableBooks = () => {
  return <div>
    <BooksContextProvider>
      <div></div>
    </BooksContextProvider>
    <SearchInput/>
    <BooksGrid books={[]} gridId='book-search-result'/>
  </div>
};

export default searchableBooks;
