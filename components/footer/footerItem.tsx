
interface props {
    text:string,
    url:string,
    ariaText:string
}

export const FooterItem:React.FC<props> = ({text,url,ariaText}) => {
    return (
        <li className="item text">
            <a
                href={url}
                aria-label={ariaText}
            >
            {text}
            </a>
        </li>
    )
}