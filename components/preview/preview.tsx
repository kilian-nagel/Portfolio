import { Dispatch, SetStateAction } from "react"

interface props {
    url:string
    display:boolean
    setDisplay:Dispatch<SetStateAction<boolean>>
}

export const Preview:React.FC<props> = ({url,display,setDisplay}) => {
    if(display){
        return (
            <div style={{background:"rgba(0,0,0,0.1)",backdropFilter:"blur(8px)",height:"100%",width:"100%",zIndex:10,position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}} onClick={()=>setDisplay(false)}>
                <img src={url} id="preview-img" style={{maxHeight:"50%"}} alt=""/>
            </div>
        )
    } else {
        return "";
    }
}