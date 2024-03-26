'use client';
import Link from 'next/link';
import { disableScroll, enableScroll } from './navbar';

interface props {
    text: string;
    url: string;
}

export const NavItem: React.FC<props> = ({ text, url }) => {
    return (
        <li className="nav-item">
            <Link href={url} onClick={hideFullScreenNavbar}>
                {text}
            </Link>
        </li>
    );
};

function hideFullScreenNavbar() {
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    if (fullscreenMenu) {
        fullscreenMenu.classList.remove('menu-open');
    }

    enableScroll();
}
