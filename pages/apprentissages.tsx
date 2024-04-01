"use client";
import "../public/styles/footer.css";
import "../public/styles/mixins.css";
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
import { SkillContainer } from "../components/skillContainer";
import { Skill } from "../components/skills/skillContainer";

const parts = [
	{
		name: "AC 2 - Utiliser des techniques algorithmiques adaptées pour des problèmes",
		content:
			"Afin d'optimiser les performances de mes applications j'ai été amené à mettre en place divers algorithmes et méthodes d'optimisation. J'ai notamment utilisé le multithreading pour optimiser des communications sur des programmes client-serveur en C.",
	},
    {
		name: "AC 3 - Comprendre les enjeux et moyens de sécurisation des données et du code",
		content:
			"Lors de la SAE concernant la création d'applications d'enchères, j'ai dû examiner les failles de sécurité potentielles dans notre appliation. Cela m'a permis de prendre conscience des nombreuses faiblesses des systèmes informatiques. J'ai ensuite pu mettre en place un système de signature RSA pour afin de rendre les communication plus sûres.",
	},
    {
        name: "AC 1 - Choisir des structures de données complexes adaptées au problème",
		content:
			"Au fur et à mesure que j’ai appris à développer des applications de plus complexes, j’ai pu accroître ma panoplie de structures de données et d’algorithmes. Ceci m’a aidé à faire des choix plus éclairés pour mieux optimiser mes programmes et les rendre plus efficaces. Par exemple j'ai appris à utiliser les arbres pour faciliter la recherche et l'organisation d'information de façon hiérarchique, ou encore les listes chaînées qui sont excellentes lorsque j'ai besoin d'une structure de donnée dynamique.",
    }, 
    {
        name:"CE "
    }
];

const data = [
	{
		title: "Optimiser des applications",
		parts: parts,
	},
	{
		title: "Gérer des données de l’information",
	},
	{
		title: "Conduire un projet",
	},
];

export default function apprentissages() {
	return (
		<>
			<Navbar />
			<main style={{ padding: "var(--spacing-md) var(--spacing-xl)" }}>
				<div style={{paddingBottom:"var(--spacing-lg)"}}>
					<h1 className="title fs-700 bold-900">Apprentissages</h1>
					<div>
						<p>
							Découvez les différentes compétences que j'ai
							développé au cours de cette année scolaire.
						</p>
					</div>
				</div>
				<Skill title={data[0].title} parts={parts} />
			</main>
			<Footer />
		</>
	);
}
