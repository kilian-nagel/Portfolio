import { Badge } from '../../generic/badge';

interface props {
    title: string;
    badges: string[];
    excerpt: string;
}

export const InfoUpperPart: React.FC<props> = ({ title, badges, excerpt }) => {
    const badgesComponents = badges.map((badge) => {
        return <Badge key={Math.random() * 10000000} text={badge}></Badge>;
    });
    return (
        <div className="up">
            <h3 className="fs-600">{title}</h3>
            <div className="badges">{badgesComponents}</div>
            <p className="text fs-200">{excerpt}</p>
        </div>
    );
};
