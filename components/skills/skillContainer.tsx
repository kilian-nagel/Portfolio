import { Dispatch, SetStateAction } from "react";
import { Part } from "./partContainer";

export interface part {
	name: string;
	content: string;
	url:string;
}

export interface partComponent extends part {
	setUrl:Dispatch<SetStateAction<string>>
	setDisplay:Dispatch<SetStateAction<boolean>>
}

interface props {
	title: string;
	parts: part[];
	niveau:string
	setUrl:Dispatch<SetStateAction<string>>
	setDisplay:Dispatch<SetStateAction<boolean>>
}

export const Skill: React.FC<props> = ({ title, parts,niveau,setDisplay,setUrl }) => {
	return (
		<div style={{paddingTop:"var(--spacing-lg)"}}>
			<h3
				className="fs-400 bold-700">
				{title}
			</h3>
			<p style={{ paddingBottom: "1rem"}}>Niveau de compétence : <u>{niveau}</u></p>
			<div
				style={{
					display: "flex",
                    flexWrap:"wrap",
					gap: "var(--spacing-sm)",
				}}>
				{parts.map((part) => (
					<Part key={Math.random()} name={part.name} content={part.content} url={part.url} setUrl={setUrl} setDisplay={setDisplay}></Part>
				))}
			</div>
		</div>
	);
};
