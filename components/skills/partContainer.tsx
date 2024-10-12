
import { partComponent } from "./skillContainer"

export const Part:React.FC<partComponent> = ({name,content,url,setUrl,setDisplay}) => {
    return (
        <div style={{flexBasis:"min(400px,100%)"}}>
            <h4 className="fs-200" style={{paddingBottom:".4rem"}} >{name}</h4>
            <p>{content}</p>
            {
                url!=="" ? <p onClick={()=>{setUrl("/media/"+url);setDisplay(true)}}><u>voir la trace</u></p> : '' 
            }
        </div>
    )
}
