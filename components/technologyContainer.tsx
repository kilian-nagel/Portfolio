import { Badge } from "./generic/badge";

interface props {
    title:string,
    description:string,
    badges:string[]
}

export const TechnologyContainer:React.FC<props> = ({title,description,badges}) => {
    return (
        <div className="container bg-gray">
            <h3 className="fs-400 font-bold">{title}</h3>
            <p>{description}</p>
            <div className="pt-2 flex flex-wrap gap-2">
                {
                    badges.map(badge=><Badge style_class="inline-block text-white font-bold px-4 py-1 rounded-lg" text={badge} key={Math.random()}></Badge>)
                }
            </div>
        </div>
    );
} 
