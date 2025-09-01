export interface NavigationItemProps {
  caption: string;
  url: string;
}

export interface NavigationCollectionProps {
  NavigationCollection: NavigationItemProps[];
}

const Navigation = ({ NavigationCollection }: NavigationCollectionProps) => {
  return (
    <nav>
      <ul className='flex'>
        {NavigationCollection.map((NavigationItem, index) => (
          <li key={'nav-item-' + index}>
            <a
              href={NavigationItem.url}
              className="badge badge-lg bg-orange-daisy text-black"
            >
              {NavigationItem.caption}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
