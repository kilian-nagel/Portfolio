"use client";
import { Badge } from "../../../components/generic/badge";
import {
	ILongProject,
	ILongProjectsApiResponse,
} from "../../../components/interfaces/project";
import { getLongProjectQuery } from "../../../data/queries";
import { fetcher } from "../../../data/fetch";
import useSWR from "swr";
import { Category } from "../../../components/projectPage/category";
import Skeleton from "react-loading-skeleton";
import { RoundBadge } from "../../../components/roundBadge";

import "../../../public/styles/footer.css";
import "../../../public/styles/navbar.css";
import "../../../public/styles/normalize.css";
import "../../../public/styles/project-1.css";
import "../../../public/styles/projet-professionnel.css";
import "../../../public/styles/reset.css";
import "../../../public/styles/utility.css";
import "../../../public/styles/style.css";
import "../../../public/styles/variables.css";

function extractH2Elements(htmlString: string): string {
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlString, "text/html");
	const h2Elements = Array.from(doc.querySelectorAll("h2"));
	const resultList: string[] = [];

	h2Elements.forEach((h2Element) => {
		if (h2Element instanceof HTMLElement) {
			const id =
				h2Element.textContent
					?.trim()
					.toLowerCase()
					.replace(/\s+/g, "-") || "";

			resultList.push(
				`<li className="text">
                    <a href="#${id}">${h2Element.textContent?.trim()}</a>
                </li>`
			);
		}
	});

	return resultList.join("\n");
}

function getH2ElementsContent(htmlString: string): string[] {
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlString, "text/html");
	const h2Elements = doc.querySelectorAll("h2");
	const h2Contents: string[] = [];

	h2Elements.forEach((h2Element) => {
		if (h2Element instanceof HTMLElement) {
			const content = h2Element.textContent?.trim().toLowerCase();
			h2Contents.push(content || "");
		}
	});

	return h2Contents;
}

function replaceH2WithIds(htmlString: string, ids: string[]): string {
	const regex = /<h2>(.*?)<\/h2>/g;
	let index = 0;

	return htmlString.replace(regex, (_, content) => {
		const id = ids[index++];
		return `<h2 id="${id}">${content}</h2>`;
	});
}

function replaceImgWithImage(htmlString: string): string {
    const regex = /<img\s+src="([^"]+)"\s+alt="([^"]+)"[^>]*\/>/g;

    return htmlString.replace(regex, (_, src, alt) => {
        return `<Image alt="${alt}" src="${src}" layout="fill" objectFit="contain" />`;
    });
}

export default function Page({ params }: { params: { id: string } }) {
	// Si la clé n'est pas chargé on renvoie un message d'attente à l'user
	const startCondition = !process.env.NEXT_PUBLIC_API_URL || !params.id;

	// On récupère l'id du projet.
	const parsedId = params.id.split(".")[0];

	// Si la clé de l'api n'est pas chargé alors
	const variablesNotInitialized = startCondition || !parsedId;
	const { data, isLoading, error } = useSWR<
		ILongProjectsApiResponse | undefined
	>(variablesNotInitialized ? null : process.env.NEXT_PUBLIC_API_URL, () =>
		fetcher<ILongProjectsApiResponse>(
			process.env.NEXT_PUBLIC_API_URL || "",
			getLongProjectQuery(parsedId)
		)
	);

	const loader = (
		<div id="presentation">
			<img
				src="/media/background-202020.png"
				style={{ maxWidth: "640px" }}
				alt="image"
			/>
			<div>
				<Skeleton baseColor="#202020" highlightColor="#444" />
			</div>
		</div>
	);

	if (isLoading) return loader;

	if (!data || variablesNotInitialized || error) {
		return <div>error</div>;
	}

	const project: ILongProject = data.data.posts[0];
	if (!project || !project.content || !project.content.html)
		return <div>si rien ne s'affiche. rechargez la page.</div>;

	const metadata = {
		"Type de projet": project.typeOfProject,
		"Type d'application": project.typeOfApplication,
		Dates: project.dates,
	};

	const html = project.content.html;
	const navList = extractH2Elements(html);
	const h2Content = getH2ElementsContent(html);
	let newHtml = replaceH2WithIds(html, h2Content);
	newHtml = replaceImgWithImage(newHtml);

	// On nettoie le html fourni par le CRM avant de l'injecter

	return (
		<main>
			<section
				id="presentation"
				style={{
					justifyContent: "space-between",
					alignItems: "flex-end",
					marginBottom: "var(--spacing-xl)",
				}}>
				<div className="info">
					<div className="up">
						<h3 className="bold-900 fs-900">{project.title}</h3>
						<div className="badges">
							{project.tags.map((tag) => (
								<Badge key={tag} text={tag} />
							))}
						</div>
						<p className="text fs-200" style={{ maxWidth: 600 }}>
							{project.excerpt}
						</p>
					</div>
					<div
						className="down"
						style={{
							maxWidth: "1500px",
							gap: "var(--spacing-xxl)",
							display: "flex",
							flexWrap: "wrap",
							marginBottom: "var(--spacing-lg)",
						}}>
						{Object.keys(metadata).map((key, i) => (
							<Category
								key={key}
								category={key}
								content={metadata[key]}
							/>
						))}
					</div>
				</div>
				<div>
					<div
						style={{
							borderRadius: "8px",
							minWidth: 400,
							marginBottom: "var(--spacing-sm)",
							display: "flex",
							justifyContent: "end",
							gap: ".5rem",
						}}>
						<RoundBadge
							url={"/media/icones/mail.svg"}
							rotate={0} link={"mailto:nagelkilian05@gmail.com"}></RoundBadge>
						<RoundBadge
							url={"/media/icones/github.svg"}
							rotate={0} link={"https://github.com/kilian-nagel"}></RoundBadge>
						<RoundBadge
							url={"/media/icones/arrow-down.svg"}
							rotate={225} link={"mailto:nagelkilian05@gmail.com"}></RoundBadge>
					</div>
					<div
						className="cta-section"
						style={{
							background: "var(--background-accent)",
							padding: "1.5rem",
							borderRadius: "8px",
							minWidth: 400,
							marginBottom: "var(--spacing-lg)",
						}}>
						<p
							className="fs-400 bold-700"
							style={{ marginBottom: "1rem" }}>
							Explorez le projet.
						</p>
						<div>
							<RoundBadge
								url={"/media/icones/arrow-down.svg"}
								rotate={45} link={""}></RoundBadge>
						</div>
					</div>
				</div>
			</section>

			<div
				style={{
					maxWidth: "1500px",
					height: 650,
					padding: "0 var(--spacing-xl)",
					margin: "0 auto",
				}}>
				<div
					style={{
						background: `url(${project.coverImage.url}) center center/cover`,
						borderRadius: "8px",
						height: 650,
					}}></div>
			</div>

			<div id="sections">
				<aside id="aside">
					<div className="content">
						<p className="text bold-700">Navigation</p>
						<ul
							style={{ listStyle: "none" }}
							dangerouslySetInnerHTML={{ __html: navList }}></ul>
					</div>
					<a id="top-link" href="#header">
						aller à l'en-tête de page
					</a>
				</aside>
				<div
					className="content"
					dangerouslySetInnerHTML={{ __html: newHtml }}>
				</div>
			</div>
		</main>
	);
}
