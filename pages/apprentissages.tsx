"use client";
import "../public/styles/footer.css";
import "../public/styles/navbar.css";
import "../public/styles/normalize.css";
import "../public/styles/project-1.css";
import "../public/styles/projet-professionnel.css";
import "../public/styles/reset.css";
import "../public/styles/utility.css";
import "../public/styles/style.css";
import "../public/styles/variables.css";
import { Navbar } from "../components/nav/navbar";
import { Footer } from "../components/footer";
import { Skill } from "../components/skills/skillContainer";
import { Preview } from "../components/preview/preview";
import { useState } from "react";

const parts1 = [
	{
		name: "AC 1 – Choisir des structures de données complexes adaptées au problème",
		content:
			"Au fur et à mesure que j’ai appris à développer des applications de plus complexes, j’ai pu accroître ma panoplie de structures de données et d’algorithmes. Ceci m’a aidé à faire des choix plus éclairés pour mieux optimiser mes programmes et les rendre plus efficaces. Par exemple j'ai appris à utiliser les arbres pour faciliter la recherche et l'organisation d'information de façon hiérarchique, ou encore les listes chaînées qui sont excellentes lorsque j'ai besoin d'une structure de donnée dynamique.",
		url: "preuve-structure.png",
	},
	{
		name: "AC 2 – Utiliser des techniques algorithmiques adaptées pour des problèmes",
		content:
			"Afin d'optimiser les performances de mes applications j'ai été amené à mettre en place divers algorithmes et méthodes d'optimisation. J'ai notamment utilisé le multithreading pour optimiser des communications sur des programmes client-serveur en C.",
		url: "preuve-multithreading.png",
	},
	{
		name: "AC 3 – Comprendre les enjeux et moyens de sécurisation des données et du code",
		content:
			"Lors de la SAE concernant la création d'applications d'enchères, j'ai dû examiner les failles de sécurité potentielles dans notre appliation. Cela m'a permis de prendre conscience des nombreuses faiblesses des systèmes informatiques. J'ai ensuite pu mettre en place un système de signature RSA pour afin de rendre les communication plus sûres.",
		url: "preuve-signature.png",
	},
	{
		name: "CE – Recenser les algorithmes et les structures de données usuels + CE – Justifier les choix et validant les résultats",
		content:
			"Avant de mettre en place un algorithme (tri, recherche), j'analyse le problème que je dois résoudre afin d'employer l'algo et la structure de donnée approprié. Par exemple lors de la SAE concernant le système d'enchères nous devions garder les différentes mises associés aux utilisateurs, en réflechissant nous avons déterminer l'objectif était de pouvoir stocker une donnée et la retrouver à partir d'un identifiant ainsi nous avons fait le choix d'employer la Hashmap pour résoudre ce problème.",
		url: "preuve-liste.png",
	},
];

const parts2 = [
	{
		name: "AC 1 – Optimiser les modèles de données de l’entreprise",
		content:
			"Lors de la manipulation des bases de données, à mesure que le nombre de données augmentait j'ai dû commencé à me pencher sur l'otpimisation de celles-ci. J'ai appris le côut des diverses opérations sur les base de donées relationnelles et l'emploi de différentes techniques telles que les clés d'indexation, les tables virtuelles etc... J'ai mis en place ces principes dans le projet web e-commerce.",
		url: "",
	},
	{
		name: "AC 2 – Assurer la confidentialité des données (intégrité et sécurité)",
		content:
			"Au cours cet année la sécurité a clairement été enjeu sous tous les points de vues, pas uniquement au niveau des communication mais aussi des données elles-mêmes. J'ai appris à utiliser diverses méthodes pour assurer l'intégrité en passant par des systèmes de signatures numériques, puis la sécurité des données grâce à des méthodes chiffrement symmétriques et asymmétrique puis l'emploi du salage et le poivrage dans les base de données. J'ai pu mettre en place ceci au sein du projet web e-commerce.",
		url: "",
	},
	{
		name: "AC 4 – Manipuler des données hétérogènes",
		content:
			"Lors de la manipulation de base de données realtionnelles (Oracle), j'ai eu l'occasion de découvrir comment manipuler des données non-structurées ou semi-structurés contenus dans des formats tels que le JSON.",
		url: "",
	},
	{
		name: "CE – Respecter les réglementations sur le respect de la vie privée et la protection des données personnelles",
		content:
			"Au cours de cette année j'ai été fortement sensibilisé aux problématiques sociétales, économiques et environnementales du numérique et des données numériques. Plus précisémment sur l'importance du respect de normes telles que le RGPD. J'ai également pu mettre en place un document de politique de confidentialité qui indique les données personnelles collectées, comment elles sont utilisées, partagées et protégées lors de la SAE de gestion d'enchères.",
		url: "",
	},
	{
		name: "CE – Assurer la cohérence et la qualité + CE – S'appuyer sur des bases mathématiques",
		content:
			"Réussir à concevoir des modèles de données cohérents et qualitatifs a été un élément de clé de mon apprentissage. Afin de normaliser les bases de données j'ai employé le théorème de Casey-Delobel qui permet décomposer des modèles sans pertes de données. Ce théorème et la normalisation en général se basent sur des concepts mathématiques (dépendances)",
		url: "",
	},
];

const parts3 = [
	{
		name: "AC 3 – Identifier les critères de faisabilité d’un projet informatique",
		content:
			"A travers des cas lors de TD en cours, j'ai appris à identifier les divers obstacles pouvant amenuir les chances de réussite d'un projet informatique. De plus lors d'interview que nous avons effectué en groupe nous avons pu avoir une idée plus concrète de ces éléments là.",
		url: "",
	},
	{
		name: "AC 4 – Définir et mettre en œuvre une démarche de suivi de projet",
		content:
			"Lors de la SAE de gestion d'enchères nous avons dû réflechir à une démarche de suivi de projet et la mettre en oeuvre. Ceci s'est concrétisé par l'application des rituels de la méthodologie scrum: sprint planning, daily scrum, sprint review et sprint retrospective. Ceci nous a permis d'avoir une idée plus claire l'avancement du projet, de pouvoir détecter de potentiels obstacles et les prévoir.",
		url: "",
	},
	{
		name: "CE – communiquer efficacement avec les différents acteurs d'un projet",
		content:
			"Au cours des divers projets communiquer efficacement a été un élément clé pour la réussite de nos projets. La communication s'effectuait par messages ou appels vocaux en utilisant des plateformes telles que discord. J'ai appris à décrire clairement mes intentions en utilisant les mots et la syntaxe adaptés à la situation.",
		url: "",
	},
	{
		name: "CE – Adopter une démarche proactive, créative et critique",
		content:
			"J'ai fait preuve d'initiative lors des sprints des sprints de SAE en réfléchissant et en faisant une introspection des éléments que je pouvais améliorer dans mon comportement et ma façon de travailler. Au sein de notre groupe on a tous fait cet effort, ce qui nous a permis de prendre plus conscience des faiblesses et forces de chacun. Je pense que c'est une bonne habitude à prendre car elle nous permet de continuellement nous améliorer.",
		url: "",
	},
];

const data = [
	{
		title: "Optimiser des applications",
		parts: parts1,
		niveau: "Acquis",
	},
	{
		title: "Gérer des données de l’information",
		parts: parts2,
		niveau: "Acquis",
	},
	{
		title: "Conduire un projet",
		parts: parts3,
		niveau: "Acquis",
	},
];

export default function apprentissages() {
	const [display, setDisplay] = useState(false);
	const [url, setUrl] = useState("");
	return (
		<>
			<Navbar />
			<Preview url={url} display={display} setDisplay={setDisplay} />
			<main style={{ padding: "var(--spacing-md) var(--spacing-xl)" }}>
				<div>
					<h1
						className="title fs-700 bold-900">
						Apprentissages
					</h1>
					<div>
						<p>
							Découvrez les différentes compétences que j'ai
							développé au cours de cette année scolaire.
						</p>
					</div>
				</div>
				{data.map((d) => (
					<Skill
						setDisplay={setDisplay}
						setUrl={setUrl}
						key={Math.random()}
						title={d.title}
						parts={d.parts}
						niveau={d.niveau}
					/>
				))}
			</main>
			<Footer />
		</>
	);
}
