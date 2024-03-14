import Link from 'next/link';
import { Theme } from './interfaces/themes';

interface props {
    theme: Theme;
}

export const Logo: React.FC<props> = ({ theme }) => {
    return (
        <Link href="/">
            <span
                className="fs-200 bold-900"
                style={{ color: theme === Theme.DARK ? 'black' : 'white' }}
            >
                KN
            </span>
        </Link>
    );
};
