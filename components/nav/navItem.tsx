'use client';
import Link from 'next/link';

interface props {
    text: string;
    url: string;
}

export const NavItem: React.FC<props> = ({ text, url }) => {
    return (
        <li className="nav-item py-1 px-2">
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

}
