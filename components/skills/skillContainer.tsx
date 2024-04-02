import { Part } from "./partContainer";

export interface part {
	name: string;
	content: string;
}

interface props {
	title: string;
	parts: part[];
	niveau:string
}

export const Skill: React.FC<props> = ({ title, parts,niveau }) => {
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
					<Part key={Math.random()} name={part.name} content={part.content}></Part>
				))}
			</div>
		</div>
	);
};
