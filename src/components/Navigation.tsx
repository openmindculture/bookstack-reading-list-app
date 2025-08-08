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
        <li key={'nav-item-'+index}>{NavigationItem.caption}</li>
      ))}
    </ul>
  </nav>;
}

export default Navigation;
