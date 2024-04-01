import Image from "next/image";
import Link from "next/link";

interface props {
	url: string;
	rotate: Number;
	link: string;
}

export const RoundBadge: React.FC<props> = ({ url, rotate, link }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: 40,
				height: 40,
				borderRadius: "50%",
				background: "rgba(255,255,255,0.1)",
			}}>
			<Link href={link}>
				<Image
					src={url}
					style={{ transform: `rotate(${rotate}deg)` }}
					width={20}
					height={20}
					alt=""
				/>
			</Link>
		</div>
	);
};
