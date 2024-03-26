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
import sanitizeHtml from "sanitize-html";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";
import { RoundBadge } from "../../../components/roundBadge";
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
		return <div>error...</div>;

	const metadata = {
		"Type de projet": project.typeOfProject,
		"Type d'application": project.typeOfApplication,
		Dates: project.dates,
	};

	// On nettoie le html fourni par le CRM avant de l'injecter
	const sanitizedHtml = sanitizeHtml(project.content.html);

	return (
		<main>
			<section
				id="presentation"
				style={{
					justifyContent: "space-between",
					alignItems: "flex-end",
          marginBottom:"var(--spacing-xl)"
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
              display:"flex",
              justifyContent:"end",
              gap:".5rem"
						}}>
            <RoundBadge
							url={"/media/icones/mail.svg"}
							rotate={0}></RoundBadge>
						<RoundBadge
							url={"/media/icones/github.svg"}
							rotate={0}></RoundBadge>
						<RoundBadge
							url={"/media/icones/arrow-down.svg"}
							rotate={225}></RoundBadge>
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
								rotate={45}></RoundBadge>
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
						background: "url(/media/nodes.jpg) center center/cover",
						borderRadius: "8px",
						height: 650,
					}}></div>
			</div>

			<div id="sections">
				<aside id="aside">
					<div className="content">
						<p className="text bold-700">Navigation</p>
						<ul style={{ listStyle: "none" }}>
							<li className="text">
								<a href="#context">Contexte du projet</a>
							</li>
							<li className="text">
								<a href="#skills">Apprentissages</a>
							</li>
							<li className="text">
								<a href="./">Résultats</a>
							</li>
						</ul>
					</div>
					<a id="top-link" href="#header">
						aller à l'en-tête de page
					</a>
				</aside>
				<div
					className="content"
					dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>
			</div>
		</main>
	);
}
