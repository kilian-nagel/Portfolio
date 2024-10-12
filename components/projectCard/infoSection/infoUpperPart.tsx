import { Badge } from '../../generic/badge';

interface props {
    title: string;
    badges: string[];
    excerpt: string;
}

export const InfoUpperPart: React.FC<props> = ({ title, badges, excerpt }) => {
    const badgesComponents = badges.map((badge) => {
        return <Badge style_class="inline-block py-1 px-3 rounded-lg bg-[#121212]"  key={Math.random() * 10000000} text={badge}></Badge>;
    });
    return (
        <div className="up">
            <h3 className="fs-600 font-bold">{title}</h3>
            <div className="badges flex flex-wrap pt-1 pb-2 gap-2">{badgesComponents}</div>
            <p className="text fs-200">{excerpt}</p>
        </div>
    );
};
