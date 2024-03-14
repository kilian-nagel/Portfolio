import Link from 'next/link';

interface props {
    id: string;
}

export const InfoLowerPart: React.FC<props> = ({ id }) => {
    const link = `./projects/${decodeURIComponent(id)}.html`;
    return (
        <div className="down">
            <Link href={link} className="link">
                lien d'accès
            </Link>
        </div>
    );
};
