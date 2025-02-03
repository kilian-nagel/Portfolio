import Link from "next/link";

interface props {
    title:string,
    text:string,
    link?:string,
    date:string
}

export const ParcoursContainer:React.FC<props> = ({title,text,date,link})=>{
    return (
        <div className="parcours-card min-w-[320px] w-[320px]">
            <div className="card flex flex-col gap-10 bg-gray p-6 justify-between rounded-lg h-[350px]">

                <div>
                    <h2 className="fs-400 font-bold leading-[34px] pt-2">{title}</h2>
                    <p className="text-[14px]">{date}</p>
                </div>
                <div>
                   <p className="leading-[22px] min-h-[88px]">{text}</p> 
                   { link ? <Link href={link} className="text-[14px] mt-3">explorer {'->'}</Link> : ''}
                </div>
            </div>
        </div>
    );
}
