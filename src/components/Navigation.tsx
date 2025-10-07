export interface NavigationItemProps {
  caption: string;
  description: string;
  hreflang: string;
  url: string;
}

export interface NavigationCollectionProps {
  NavigationCollection: NavigationItemProps[];
}

const Navigation = ({ NavigationCollection }: NavigationCollectionProps) => {
  return (
    <nav className='m-0 p-0 pt-5'>
      <ul className='mb-4 flex flex-col gap-1 xl:mb-0 xl:flex-row'>
        {NavigationCollection.map((NavigationItem, index) => (
          <li key={'nav-item-' + index}>
            <a
              href={NavigationItem.url}
              hrefLang={NavigationItem.hreflang}
              title={NavigationItem.description}
              className='badge badge-lg bg-orange-daisy text-black'
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
