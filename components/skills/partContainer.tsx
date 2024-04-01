
import { part } from "./skillContainer"

export const Part:React.FC<part> = ({name,content}) => {
    return (
        <div style={{flexBasis:"min(400px,100%)"}}>
            <h4 className="fs-200" style={{paddingBottom:".4rem"}} >{name}</h4>
            <p>{content}</p>
        </div>
    )
}