import { linkItem } from "../interfaces/footer";
import { FooterItem } from "./footerItem";

interface props {
    title:string,
    links:linkItem[]
}

export const FooterSection:React.FC<props> = ({title,links}) =>{
    return (
        <ul className="items">
            <li className="item text-heading">{title}</li>
            {
                links.map(link=><FooterItem text={link.text} url={link.url} ariaText={link.ariaText}/>)
            }
        </ul>
    )
}