import { Logo } from '../logo';
import { Theme } from '../interfaces/themes';
import { linksItems } from './navbar';
import Link from 'next/link';
import Image from 'next/image';

interface props {
    display: boolean;
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNavbar: React.FC<props> = ({ display, setDisplay }) => {
    return (
        <div
            id="fullscreenMenu"
            style={{
                height:600,
                top:"50%",
                left:"50%",
                transform: "translate(-50%, -50%)",
                position:"absolute",
                display: display ? 'flex' : 'none',
                flexDirection: 'column',
                zIndex:100
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: 'var(--spacing-md) var(--spacing-xl)'
                }}
            >
                <Logo theme={Theme.DARK}></Logo>
                <Image
                    width={16}
                    height={16}
                    onClick={() => {
                        setDisplay(false);
                    }}
                    src="/media/icones/xmark.png"
                    style={{ width: '16px', height: '16px' }}
                    alt="icone de fermeture du menu"
                    id="hideMenuBtn"
                />
            </div>
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ul>
                    {linksItems.map((link) => {
                        return (
                            <li key={Math.random() * 10000000}>
                                <Link
                                    onClick={() => setDisplay(false)}
                                    style={{
                                        color: 'black',
                                        fontSize: 24,
                                        fontWeight: 700
                                    }}
                                    href={link.url}
                                >
                                    {link.textContent}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
