import "react-loading-skeleton/dist/skeleton.css";
import { Carousel } from "../components/carousel";
import Image from "next/image";
import { SkillContainer } from "../components/skillContainer";
import { TechnologyContainer } from "../components/technologyContainer";
import { ParcoursContainer } from "../components/parcoursContainer";

import "../public/styles/footer.css";
import "../public/styles/navbar.css";
import "../public/styles/normalize.css";
import "../public/styles/project-1.css";
import "../public/styles/projet-professionnel.css";
import "../public/styles/reset.css";
import "../public/styles/utility.css";
import "../public/styles/style.css";
import "../public/styles/variables.css";

const developmentSkills = [
	{
		title: "Webdesign",
		text: "Conception d'interfaces centrées sur l'utilisateur, intuitives, minimalistes et responsives.",
	},
	{
		title: "Maintenabilité",
		text: "Conception, modélisation et développement d'applications modulaires, extensibles qui respectent les principes SOLID.",
	},
	{
		title: "Optimisation",
		text: "Recherche continuelle d'amélioration sous tous les métriques: performances, accessibiltié, sécurité, robustesse des applications",
	},
];

const softSkills = [
	{
		title: "Communication",
		text: "Communication et compréhension des besoins clients efficaces en utilisant les outils (User stories, Cahier des charges) et méthodologies adaptées (SCRUM)",
	},
	{
		title: "Vertus",
		text: "Curieux et passionné, je cherche constamment à m'améliorer. Persistant et résilient je perçois les difficultés comme des opportunités.",
	},
	{
		title: "Collaboration",
		text: "Collaboration et coordination efficace en équipes de travail. Bonnne intégration au sein d'équipes avec des profils divers",
	},
];

const technologies = [
	{
		title: "Frontend",
		badges: [
			"HTML 5",
			"CSS 3",
			"TypeScript",
			"Bootstrap 5",
			"Tailwind 3.3",
			"React.js 18.2",
			"Next.js 13.3",
			"JavaFX",
			"Auth0",
		],
		description: "Technologies pour créer des interfaces et les dynamiser",
	},
	{
		title: "Backend",
		badges: [
			"Node.js 13.2",
			"PHP 8.2",
			"MySQL",
			"Oracle SQL",
			"PL/SQL",
			"MongoDB",
			"Mongoose",
		],
		description:
			"Technologies pour concevoir et intéragir avec des serveurs et bases de données",
	},
	{
		title: "Développement",
		badges: ["Git", "Npm", "Jest", "Cypress", "Postman", "Maven", "JUnit"],
		description: "Outils de déploiement, versionnage et de test",
	},
];

const parcours = [
	{
		title:"Supérieur",
		text:"Acquisition du BUT (bachelor universitaire de technologie) en cours.",
		info:"IUT Montpellier-Sète ● Montpellier, France ● 2022 - présent"
	},
	{
		title:"Lycée",
		text:"Obtention du baccalauréat mention très Bien (2022).",
		info:"Lycée Albert Einstein ● Bagnols-sur-cèze, France ● 2019 - 2022"
	},
	{
		title:"Collège",
		text:"Obtention du brevet des collèges mention très bien (2019)",
		info:"Lycée Albert Einstein ● Pont-saint-esprit, France ● 2015 - 2019"
	}

];

export default function Page() {
	return (
		<>
			<main>
				<section id="home">
					<div className="content">
						<div className="left">
							<div>
								<h1 className="title fs-900 bold-900">
									Kilian Nagel <span className="deco">*</span>
								</h1>
							</div>
							<div
								className="desc-part"
								style={{ marginBottom: "2rem" }}>
								<p className="text fs-200">
									Je suis un étudiant en informatique basé en
									France. J'ai beaucoup d'attrait pour le
									webdesign et les technologies du web. Depuis
									5 ans je m'exerce à développer des sites
									web.
								</p>
							</div>
							<div className="flex gap-2 actions">
								<div className="container">
									<Image
										width={16}
										height={16}
										src="/media/icones/contact.png"
										style={{ height: 16 }}
										alt="icone contact"
									/>
									<a
										className="text fs-200"
										href="mailto:nagelkilian05@gmail.com">
										Me contacter
									</a>
								</div>
								<div className="container">
									<Image
										width={16}
										height={16}
										src="/media/icones/arrow-down.svg"
										style={{ height: 16 }}
										alt="icone contact"
									/>
									<a className="text fs-200">
										Télécharger CV
									</a>
								</div>
							</div>
						</div>
						<div className="right">
							<div className="container">
								<div className="number fs-600 bold-900">05</div>
								<p className="text">Applications réalisées</p>
							</div>
							<div className="container">
								<div className="number fs-600 bold-900">15</div>
								<p className="text">
									Sites statiques réalisées
								</p>
							</div>
							<div className="container">
								<div className="number fs-600 bold-900">04</div>
								<p className="text">Projets en groupe</p>
							</div>
						</div>
						<Image className="deco-sphere" src="/media/shape.png" style={{position:"absolute",bottom:0,right:120,zIndex:-5}} width={400} height={400} alt="" priority={true} />
					</div>
				</section>

				<section id="biographie">
					<div className="orb"></div>
					<div className="element"></div>
					<h2
						className="title fs-700 bold-900"
						style={{ marginTop: "4rem" }}>
						Biographie
					</h2>
					<div className="content">
						<div className="column">
							<p className="text fs-200">
								J’ai commencé mon parcours dans l’informatique
								en 3ème lorsque j’ai programmé mes premières
								lignes de code en HTML/CSS.
							</p>
							<p className="text fs-200">
								J’ai tout de suite accroché et depuis j’ai
								continuellement cherché à m’améliorer et à
								apprendre de nouvelles compétences dans le web
								et ses domaines transversaux (webdesign,
								réseau…).
							</p>
							<p className="text fs-200">
								Tout ceci, en passant par les différents types
								de site web (statiques, dynamiques et réactifs).
							</p>
						</div>
						<div className="column">
							<p className="text fs-200">
								Aujourd'hui, je suis en 2nd année de de BUT
								informatique (Bachelor Universitaire de
								Technologie).
							</p>
							<p className="text fs-200">
								Chaque jour, ma formation et mes projets
								personnels nourrissent ma curiosité et me
								rapprochent progressivement de mon projet
								professionnel : devenir développeur web
								frontend.
							</p>
						</div>
					</div>
				</section>

				<section id="projects">
					<div className="header">
						<h2 className="subtitle fs-700 bold-900">
							Réalisations
						</h2>
						<div className="btn-group">
							<button className="arrow-btn backward-arrow">
								{"<"}
							</button>
							<button className="arrow-btn forward-arrow">
								{">"}
							</button>
						</div>
					</div>
					<Carousel />
				</section>

				<section id="skills">
					<h2 className="subtitle fs-700 bold-900">Compétences</h2>
					<h3
						className="fs-400 bold-700"
						style={{
							marginBottom: "1rem",
							marginTop: "2rem",
							color: "rgb(30,30,30)",
						}}>
						Développement
					</h3>
					<div className="abilities">
						{developmentSkills.map((x, i) => (
							<SkillContainer
								index={i + 1}
								title={x.title}
								text={x.text}
							/>
						))}
					</div>
					<h3
						className="fs-400 bold-700"
						style={{
							marginBottom: "1rem",
							marginTop: "3rem",
							color: "rgb(30,30,30)",
						}}>
						Travail d'équipe
					</h3>
					<div className="abilities">
						{softSkills.map((x, i) => (
							<SkillContainer
								index={i + 1}
								title={x.title}
								text={x.text}
							/>
						))}
					</div>
				</section>

				<section id="technologies">
					<div className="content">
						<h2 className="fs-700 bold-900">Technologies</h2>
						<div className="technologies">
							{technologies.map((tech,i) => (
								<>
									<TechnologyContainer
										title={tech.title}
										description={tech.description}
										badges={tech.badges}
									/>
									{i!=technologies.length-1 ? <div className="separator" style={{height:"3px",background:"var(--background-muted-dark)",margin:'1.25rem 0 1rem 0'}}></div> : ''}
								</>
							))}
						</div>
					</div>
				</section>

				<section id="parcours">
					<h2
						className="fs-700 bold-900"
						style={{ marginBottom: "1rem" }}>
						Parcours
					</h2>
					<div className="content" style={{ maxWidth: "900px" }}>
						{
							parcours.map(p=><ParcoursContainer title={p.title} text={p.text} info={p.info}/>)
						}
					</div>
				</section>
			</main>
		</>
	);
}
