interface props {
	index: Number;
	title: string;
	text: string;
}

export const SkillContainer: React.FC<props> = ({ index, title, text }) => {
	return (
		<div className="max-w-[540px] min-w-[350px] w-[100%] flex-1 rounded-lg bg-gray relative">
			<p
				style={{
					marginBottom: ".25rem",
				}}>
				0{index.toString()}.
			</p>
			<h3 className="fs-400 bold-700">{title}</h3>
			<br />
			<p className="text fs-100">{text}</p>
		</div>
	);
};
