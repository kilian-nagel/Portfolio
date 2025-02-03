import { ParcoursContainer } from "@/components/parcoursContainer";

const parcours = [
	{
		title: "Alternant dév web",
		text: "Développement d'un portail sécurité avec contrôles d'accès par role. Traitement automatique de mail et génration de licences",
        location: "Optima Concept, Barbentanes",
        date: "10/2024 - en cours",
        link: "/experiences/alternance-web"
	},
	{
		title: "Développeur web junior",
		text: "Développement web et APIs RESTFul, virtualisation et déploiement CI/CD.",
        location: "Optima Concept, Barbentanes",
        date: "07/2024 - 08/2024",
	},
	{
		title: "Stage dév web junior et CI/CD",
		text: "Développement web front-end, virtualisation et déploiement CI/CD de l'infrastructure.",
        location: "Optima Concept, Barbentanes",
        date: "04/2024 - 06/2024",
        link: "/experiences/stage-web-cicd"
	}
];

export default function Page(){
    return (
        <>
            <main className="section-padding mt-12 flex flex-col justify-between">
                <h1 className="title fs-700 bold-900 mb-2">Expériences</h1>
                <p>Mes expériences professionnelles.</p>

				  <div className="content gap-3 flex flex-1 mt-5 overflow-auto">
						{parcours.map((p,i) => (
						        <ParcoursContainer
								key={Math.random()}
								title={p.title}
								text={p.text}
                                date={p.date}
                                link={p.link}
							/>))}
				  </div>
            </main>
        </>
    )
}
