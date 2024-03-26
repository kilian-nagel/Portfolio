
interface props {
    title:string,
    text:string,
    info:string
}

export const ParcoursContainer:React.FC<props> = ({title,text,info})=>{
    return (
        <div className="container">
            <h3 className="fs-500 bold-700" style={{marginBottom:"1rem"}}>{title}</h3>
            <p>{text}</p>
            <p>{info}</p>
        </div>
    );
}