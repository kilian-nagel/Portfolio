
interface props {
    title:string,
    text:string,
    info:string,
    index:number,
}

export const ParcoursContainer:React.FC<props> = ({title,text,info,index})=>{
    return (
        <div className="flex w-[100%] gap-8 lg:gap-14 items-center py-2">
            <div class="flex">
               <p className="text-3xl bold-700">0{index}</p>
            </div>
            <div> 
               <p>{text}</p>
               <p class="text-[#BBBBBB]">{info}</p>
            </div>
        </div>
    );
}
