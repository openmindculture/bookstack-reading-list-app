import ToggleButton from './ToggleButton';
import { z } from 'zod';
import { bookSchema } from '@schemas/bookSchema';

type BookProps = z.infer<typeof bookSchema>;

const Book = (props: BookProps) => {
  return (
    <article className="flex flex-nowrap space-x-1 font-dx-kord text-blue-violet {{isFavorite ? 'isFavorite' : '' }}">
      <div className={'custom-hex-tile  bg-blue-violet p-0.5'}>
        <div className={'custom-hex-tile w-80 max-w-full h-96 m-0 bg-blue-sky p-1'}>
          <h3 className='font-dx-kord text-2xl'>{props.title}</h3>
          <p>Author: {props.author}</p>
          {!!props.pubYear && <p>{props.pubYear} {!!props.updatedYear && <div>updated: {props.updatedYear}</div>}</p>}
          {!!props.icon && <svg><use href={`#symbol-${props.icon}`} /></svg>}
          {!!props.language && <img src={`../images/languages/${props.language}.svg`} alt={`language: ${props.language}`} />}
      </div>
    </div>
  <div className={'custom-hex-tile  relative' + (props.coverClassName ? ` ${props.coverClassName}` : '')}  >
    {!!props.coverUrl && (
      <img
        className="object-cover w-3xs max-w-full hover:scale-110 transition-transform"
            src={`../images/books/${props.coverUrl}`}
            alt={`Cover of ${props.title}`}
          />
        )}
        <ToggleButton
          className="absolute right-[calc(50%-12px)] top-3 z-10"
          forTargetId={props.id}
          /* selected = isFavorite state, not of the card, but of the toggle */
          /* the actual state is in a global stateful ReadingList component synchronized with local storage */
          /* onChange={() => setSelected((prevSelected) => !prevSelected)} */ /* put that code inside the button component to ensure this Card component can be rendered statically */
        />
      </div>
    </article>
  );
};

export default Book;
