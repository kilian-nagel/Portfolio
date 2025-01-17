
interface props {
    title:string,
    text:string,
    index:number,
    date:string
}

export const ParcoursContainer:React.FC<props> = ({title,text,date,index})=>{
    return (
        <div className="parcours-card">
            <div className="card flex flex-col gap-10 bg-gray p-6 justify-between rounded-lg min-w-[320px] h-[350px]">
                <div>
                    <h2 className="fs-400 font-bold leading-[34px] pt-2">{title}</h2>
                    <h2 className="text-[14px]">{date}</h2>
                </div>
                <div>
                   <p className="leading-[22px] min-h-[66px]">{text}</p> 
                </div>
            </div>
        </div>
    );
}
