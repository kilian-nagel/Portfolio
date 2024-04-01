import { Part } from "./partContainer";

export interface part {
	name: string;
	content: string;
}

interface props {
	title: string;
	parts: part[];
}

export const Skill: React.FC<props> = ({ title, parts }) => {
	return (
		<div>
			<h3
				className="fs-400 bold-700"
				style={{ paddingBottom: "1rem" }}>
				{title}
			</h3>
			<div
				style={{
					display: "flex",
                    flexWrap:"wrap",
					gap: "var(--spacing-sm)",
				}}>
				{parts.map((part) => (
					<Part name={part.name} content={part.content}></Part>
				))}
			</div>
		</div>
	);
};
