import { Badge } from "./generic/badge";

interface props {
    title:string,
    description:string,
    badges:string[]
}

export const TechnologyContainer:React.FC<props> = ({title,description,badges}) => {
    return (
        <div className="container">
            <h3 className="fs-400 bold-900">{title}</h3>
            <p>{description}</p>
            <div className="badges">
                {
                    badges.map(badge=><Badge text={badge}></Badge>)
                }
            </div>
        </div>
    );
} 