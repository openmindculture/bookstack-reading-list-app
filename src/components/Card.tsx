import ToggleButton from './ToggleButton';

// TODO import setSelected or define using React useState

interface CardProps {
  author: string;
  title: string;
  description?: string;
  isbn: string;
  coverUrl: string;
}

const Card = ({
  author = '',
  title = '',
  description = '',
  isbn = '',
  coverUrl = '',
}: CardProps) => {
  return (
    <article className="flex flex-nowrap space-x-1 font-dx-kord text-blue-violet {{isFavorite ? 'isFavorite' : '' }}">
      <div className={'omc-hex-tile bg-blue-violet p-0.5'}>
        <div className={'omc-hex-tile m-0 bg-blue-sky p-1'}>
          <h3 className="bg-pink-500">{title}</h3>
          <p>{description}</p>
          <p>Author: {author}</p>
          <p>ISBN: {isbn}</p>
        </div>
      </div>
      <div className="omc-hex-tile relative">
        {!!coverUrl && (
          <img
            className="w-3xs max-w-full object-cover"
            src={coverUrl}
            alt={`Cover of ${title}`}
          />
        )}
        <ToggleButton
          className="absolute top-3 right-[calc(50%-12px)] z-10"
          forTargetId={isbn}
          /* selected = isFavorite state, not of the card, but of the toggle */
          /* the actual state is in a global stateful ReadingList component synchronized with local storage */
          /* onChange={() => setSelected((prevSelected) => !prevSelected)} */ /* put that code inside the button component to ensure this Card component can be rendered statically */
        />
      </div>
    </article>
  );
};

export default Card;
