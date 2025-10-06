export interface NavigationItemProps {
  caption: string;
  url: string;
}

export interface NavigationCollectionProps {
  NavigationCollection: NavigationItemProps[];
}

const Navigation = ({ NavigationCollection }: NavigationCollectionProps) => {
  return (
    <nav className="m-0 p-0 pt-5">
      <ul className='flex gap-1 mb-4 xl:mb-0 flex-col xl:flex-row '>
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
