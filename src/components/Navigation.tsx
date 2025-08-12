export interface NavigationItemProps {
  caption: string;
  url: string;
}

export interface NavigationCollectionProps {
  NavigationCollection: NavigationItemProps[];
}



const Navigation = ({ NavigationCollection }: NavigationCollectionProps) => {
  return <nav>
    <ul>
      {NavigationCollection.map((NavigationItem, index) => (
        <li key={'nav-item-'+index}><a href={NavigationItem.url}>{NavigationItem.caption}</a></li>
      ))}
    </ul>
  </nav>;
}

export default Navigation;
