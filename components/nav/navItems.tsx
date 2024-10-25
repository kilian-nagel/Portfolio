import { randomUUID } from 'crypto';
import { NavItem } from './navItem';

interface item {
    textContent: string;
    url: string;
}

interface props {
    items: item[];
}

export const NavItems: React.FC<props> = ({ items }) => {
    7;
    const listItems = items.map((item) => (
        <NavItem
            key={Math.random() * 10000000}
            text={item.textContent}
            url={item.url}
        />
    ));
    return <ul className="nav-items flex items-center">{listItems}</ul>;
};
