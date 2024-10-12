import Link from 'next/link';
import { Theme } from './interfaces/themes';

interface props {
    theme: Theme;
}

export const Logo: React.FC<props> = ({ theme }) => {
    return (
        <Link href="/">
            <span
                className="fs-200 font-black"
                style={{ color: theme === Theme.DARK ? 'black' : 'white' }}
            >
                KN
            </span>
        </Link>
    );
};
