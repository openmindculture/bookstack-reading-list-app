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
    <div className="font-dx-kord text-blue-violet {{isFavorite ? 'isFavorite' : '' }}">
      <ToggleButton
        forTargetId={isbn}
        /* selected = isFavorite state, not of the card, but of the toggle */
        /* the actual state is in a global stateful ReadingList component synchronized with local storage */
        /* onChange={() => setSelected((prevSelected) => !prevSelected)} */ /* put that code inside the button component to ensure this Card component can be rendered statically */
      />

      <h3 className="bg-pink-500">{title}</h3>
      <p>{description}</p>
      <p>Author: {author}</p>
      <p>ISBN: {isbn}</p>
      {!!coverUrl && <img className='max-w-3xs' src={coverUrl} alt={`Cover of ${title}`} />}

</div>
);
};

export default Card;
