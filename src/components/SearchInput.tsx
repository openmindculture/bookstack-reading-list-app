import { type JSX } from 'react';
import { useBooksContext } from './BooksContext.tsx';

function SearchInput(): JSX.Element {
  const { searchQuery, setSearchQuery } = useBooksContext();
  return (
    <label className='input input-bordered clear-both ml-auto flex max-w-[calc(100%-1rem)] items-center gap-2 lg:mr-2 lg:mt-2 lg:max-w-lg xl:clear-none 2xl:-mt-[4.75rem] 2xl:mb-8'>
      <span className='visually-hidden'>Search</span>
      <input
        type='text'
        className='grow'
        placeholder='Search author, title, tags, ISBN'
        id='global-search-input'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        fill='currentColor'
        className='h-4 w-4 opacity-70'
      >
        <path
          fillRule='evenodd'
          d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
          clipRule='evenodd'
        />
      </svg>
    </label>
  );
}

export default SearchInput;
