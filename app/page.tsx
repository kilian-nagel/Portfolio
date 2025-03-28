'use client'
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import {SkillSection} from "@/components/skills/skill";
import {Carousel} from "@/components/carousel";
import {TechnologyContainer} from "@/components/technologyContainer";
import {ParcoursContainer} from "@/components/parcoursContainer";

import "@/styles/footer.css";
import "@/styles/navbar.css";
import "@/styles/normalize.css";
import "@/styles/project-1.css";
import "@/styles/projet-professionnel.css";
import "@/styles/reset.css";
import "@/styles/utility.css";
import "@/styles/style.css";
import "@/styles/variables.css";
import "@/styles/output.css";

const developmentSkills = [
    {
        title: "Webdesign",
        text: "Conception d'interfaces centrées sur l'utilisateur, intuitives, minimalistes et responsives. harmonisation des couleurs, la typographie, et l'optimisation de l'expérience utilisateur sur tous les types d'appareils. Intégration fluide des principes d'accessibilité web",
    },
    {
        title: "Maintenabilité",
        text: "Conception, modélisation et développement d'applications modulaires, extensibles qui respectent les principes SOLID. Mise en place de bonnes pratiques pour garantir la simplicité des mises à jour et la longévité des solutions logicielles. Maintenance proactive et refactoring régulier pour anticiper les besoins futurs.",
    },
    {
        title: "Optimisation",
        text: "Recherche continuelle d'amélioration sous tous les métriques: performances, accessibiltié, sécurité, robustesse des applications. Utilisation d'outils de benchmarking et de surveillance pour identifier les goulots d'étranglement. Mise en œuvre de techniques avancées de mise en cache et de réduction de la latence.",
    },
    {
        title: "Communication",
        text: "Communication et compréhension des besoins clients efficaces en utilisant les outils (User stories, Cahier des charges) et méthodologies adaptées (SCRUM). Capacité à traduire les exigences techniques en termes accessibles aux parties prenantes. Participation active aux réunions pour une collaboration renforcée.",
    },
    {
        title: "Vertus",
        text: "Curieux et passionné, je cherche constamment à m'améliorer. Persistant et résilient je perçois les difficultés comme des opportunités. Capable d'apprendre rapidement et de m'adapter à de nouveaux environnements technologiques avec souplesse et agilité. Feedback constructif, encourageant l'amélioration collective et le partage de connaissances au sein des projets.",
    },
    {
        title: "Collaboration",
        text: "Collaboration et coordination efficace en équipes de travail. Bonnne intégration au sein d'équipes avec des profils divers. J'aime contribuer à une bonne entente et à un travail d'équipe efficace.",
    },
];

const technologies = [
    {
        title: "Frontend",
        badges: [
            "HTML 5",
            "CSS 3",
            "TypeScript",
            "Bootstrap",
            "Tailwind",
            "React.js",
            "Next.js",
            "JavaFX",
            "Auth0",
        ],
        description: "Technologies pour créer des interfaces et les dynamiser",
    },
    {
        title: "Backend",
        badges: [
            "Node.js",
            "PHP",
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
        title: "Alternant dév web",
        text: "Développement d'un portail sécurité avec contrôles d'accès par role. Traitement automatique de mail et génration de licences",
        location: "Optima Concept, Barbentanes",
        date: "10/2024 - en cours"
    },
    {
        title: "Stage dév web junior et CI/CD",
        text: "Développement web front-end, virtualisation et déploiement CI/CD de l'infrastructure.",
        location: "Optima Concept, Barbentanes",
        date: "04/2024 - 06/2024"
    },
    {
        title: "Développeur web junior",
        text: "Développement web et APIs RESTFul, virtualisation et déploiement CI/CD.",
        location: "Optima Concept, Barbentanes",
        date: "07/2024 - 08/2024"
    },
    {
        title: "Parcours dans le supérieur",
        text: "Acquisition du BUT (bachelor universitaire de technologie) en cours.",
        location: "IUT Montpellier-Sète / Montpellier, France",
        date: "09/2022 - en cours"
    },
    {
        title: "Parcours au lycée",
        text: "Obtention du baccalauréat mention très bien (2022).",
        location: "Lycée Albert Einstein / Bagnols-sur-cèze, France",
        date: "09/2019 - 07/2022"
    },
    {
        title: "Parcours au collège",
        text: "Obtention du brevet des collèges mention très bien (2019).",
        location: "Collège Georges-ville / Pont-saint-esprit, France",
        date: "09/2015- 07/2019"
    },
];

export default function Page() {
    return (
        <>
            <main>
                <section className="section-margin flex items-end justify-between relative gap-15 pb-20" id="home">
                    <div className="content w-full flex pt-20 justify-between">
                        <div className="left">
                            <div>
                                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray text-blue-800 mb-2 md:mb-none">
                                    <span className="size-1.5 inline-block rounded-full bg-[#FFFFFF]"></span>
                                    En cours de 3ème année de BUT informatique.
                                </span>
                                <h1 className="title-2x leading-tight">
                                    Kilian Nagel
                                </h1>
                            </div>
                            <div
                                className="pb-2 mb-4">
                                <p className="text max-w-[720px]">
                                    Je suis un étudiant en informatique basé en
                                    France. J'ai beaucoup d'attrait pour le
                                    webdesign et les technologies du web. Depuis
                                    5 ans je m'exerce à développer des sites
                                    web.
                                </p>
                            </div>
                            <div className="flex max-w-[650px] gap-4 lg:gap-7 actions">
                                <div className="rounded-md flex flex-col justify-start items-start gap-3 p-5 container border-solid border-[#222222] border-2">
                                    <Image
                                        width={16}
                                        height={16}
                                        src="/media/icones/contact.png"
                                        style={{height: 16}}
                                        alt="icone contact"
                                    />
                                    <a
                                        className="text fs-200"
                                        href="mailto:nagelkilian05@gmail.com">
                                        Me contacter
                                    </a>
                                </div>
                                <div className="rounded-md flex flex-col justify-start items-start gap-3 p-5 container border-solid border-[#222222] border-2">
                                    <Image
                                        width={16}
                                        height={16}
                                        src="/media/icones/arrow-down.svg"
                                        style={{height: 16}}
                                        alt="icone contact"
                                    />
                                    <a className="text fs-200" href="/media/CV.pdf" download={"CV"}>
                                        Télécharger CV
                                    </a>
                                </div>
                            </div>
                        </div>



                        <div className="hidden lg:flex flex-col justify-center rounded-md py-4 px-2 gap-8 text-center backdrop-blur-lg" style={{background: "rgba(20,20,20,0.4)"}}>
                            <div className="container min-w-[200px] flex flex-col gap-1 justify-end">
                                <div className="number fs-600 bold-900">05</div>
                                <p className="text-sm">Applications réalisées</p>
                            </div>
                            <div className="container min-w-[200px] flex flex-col gap-1 justify-end">
                                <div className="number fs-600 bold-900">15</div>
                                <p className="text-sm">
                                    Sites statiques réalisées
                                </p>
                            </div>
                            <div className="container min-w-[200px] flex flex-col gap-1 justify-end">
                                <div className="number fs-600 bold-900">04</div>
                                <p className="text-sm">Projets en groupe</p>
                            </div>
                        </div>
                        <Image
                            className="deco-sphere"
                            src="/media/shape.png"
                            style={{
                                position: "absolute",
                                bottom: 0,
                                right: 120,
                                zIndex: -5,
                            }}
                            width={300}
                            height={300}
                            alt=""
                            priority={true}
                        />
                    </div>
                </section>

                <section className="hidden lg:block section-margin p-7 my-20 rounded-lg overflow-hidden md:bg-none" style={{background: "url('/media/oak-forest.jpg') center center/cover"}}>
                    <h2 className="title block sm:hidden pt-4 pb-8 text-[#FFFFFF]">
                        Biographie
                    </h2>
                    <div className="rounded-lg text hidden lg:inline-block p-3 pr-16 bg-[#131313]">
                        Explore projects
                    </div>
                    <div className="flex items-end justify-between mt-7">
                        <div className="relative">
                            <div className="relative hidden lg:block rounded-lg mb-24 items-end bg-[#131313] p-4 w-[250px] h-[150px]">
                                <Image
                                    className="absolute rotate-[37deg] top-[32px] right-0"
                                    width={75}
                                    height={75}
                                    src="/media/cube.png"
                                    alt="cube"
                                />
                                <Image
                                    className="absolute rotate-[344deg] top-[52px] right-[81px]"
                                    width={50}
                                    height={50}
                                    src="/media/cube.png"
                                    alt="cube"
                                />
                                <p className="font-black">K \ N</p>
                            </div>
                            <p className="text-6xl whitespace-nowrap mb-4  font-black absolute bottom-0">Webdesign - Digital identity - UX/UI</p>
                        </div>
                        <div className="bg-[#131313] rounded-lg px-12 p-8 pb-20 max-w-[560px] z-10">
                            <h2
                                className="title pt-4 pb-8 text-[#FFFFFF]">
                                Biographie
                            </h2>
                            <div className="text text-[#FFFFFF]">
                                J’ai commencé mon parcours dans l’informatique
                                en 3ème lorsque j’ai programmé mes premières
                                lignes de code en HTML/CSS.
                                J’ai tout de suite accroché et depuis j’ai
                                continuellement cherché à m’améliorer et à
                                apprendre de nouvelles compétences dans le web
                                et ses domaines transversaux (webdesign,
                                réseau…).<br /><br />
                                Tout ceci, en passant par les différents types
                                de site web (statiques, dynamiques et réactifs).
                                Aujourd'hui, je suis en 2nd année de de BUT
                                informatique (Bachelor Universitaire de
                                Technologie).
                                Chaque jour, ma formation et mes projets
                                personnels nourrissent ma curiosité et me
                                rapprochent progressivement de mon projet
                                professionnel : devenir développeur web
                                frontend.
                            </div>
                        </div>
                    </div>
                </section>


                <section className="block lg:hidden section-margin my-20 rounded-lg overflow-hidden md:bg-none">
                    <div className="bg-[#131313] rounded-lg px-6 p-8 pb-20 z-10">
                        <h2
                            className="title text-4xl md:text-5xl font-black pt-4 pb-8 text-[#FFFFFF]">
                            Biographie
                        </h2>
                        <div className="text text-[#FFFFFF]">
                            J’ai commencé mon parcours dans l’informatique
                            en 3ème lorsque j’ai programmé mes premières
                            lignes de code en HTML/CSS.
                            J’ai tout de suite accroché et depuis j’ai
                            continuellement cherché à m’améliorer et à
                            apprendre de nouvelles compétences dans le web
                            et ses domaines transversaux (webdesign,
                            réseau…).<br /><br />
                            Tout ceci, en passant par les différents types
                            de site web (statiques, dynamiques et réactifs).
                            Aujourd'hui, je suis en 2nd année de de BUT
                            informatique (Bachelor Universitaire de
                            Technologie).
                            Chaque jour, ma formation et mes projets
                            personnels nourrissent ma curiosité et me
                            rapprochent progressivement de mon projet
                            professionnel : devenir développeur web
                            frontend.
                        </div>
                    </div>
                </section>

                <section className="section-margin py-4" id="projects">
                    <div className="flex justify-between items-end pt-6">
                        <h2 className="subtitle fs-700 bold-900">
                            Réalisations
                        </h2>
                    </div>
                    <Carousel />
                </section>

                <section className="section-margin pb-6 items-stretch" id="skills">
                    <h2 className="subtitle fs-700 font-black pt-12">Compétences</h2>
                    <SkillSection skills={developmentSkills}></SkillSection>
                </section>

                <section className="section-margin pb-6" id="technologies">
                    <div className="content pt-14 pb-2">
                        <h2 className="fs-700 bold-900">Technologies</h2>
                        <div className="flex gap-4 flex-col xl:flex-row">
                            <div className="technologies bg-gray rounded-lg p-6 flex-1">
                                {technologies.map((tech, i) => (
                                    <div>
                                        <TechnologyContainer
                                            key={Math.random()}
                                            title={tech.title}
                                            description={tech.description}
                                            badges={tech.badges}
                                        />
                                        {i != technologies.length - 1 ? (
                                            <div
                                                className="separator bg-gray-muted h-[2px]"
                                                style={{
                                                    margin: "1.25rem 0 1rem 0",
                                                }}></div>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <div className="w-[110px] rounded-lg p-2 hidden md:block" style={{backgroundImage: "url('/media/bg-blue-asbtract.jpg')"}}>
                                    <div style={{backdropFilter: "blur(6px)", background: "rgba(20,20,20,0.4)"}} className="p-4 h-full w-full flex flex-col justify-between items-center rounded-lg">
                                        <Image
                                            className="rotate-90 animate-out-and-in"
                                            width={50}
                                            height={50}
                                            src="/media/icones/arrow-diagonal.svg"
                                            alt="flèche"
                                        />
                                        <p className="font-black text-3xl" style={{writingMode: 'vertical-rl'}}>on going.</p>
                                    </div>
                                </div>

                                <div className="bg-[#0c8ce9] p-4 py-5 rounded-lg min-w-[400px] flex flex-col flex-1 justify-between items-between">
                                    <p className="text-3xl font-black">En cours<br /><span className="text-[#CDCDCD]">d'apprentissage.</span></p>
                                    <div className="flex flex-col justify-end gap-4 mt-8">
                                        <div className="bg-[#269ef4] p-3 rounded-lg flex-1">
                                            <p className="text-lg font-black">Rust</p>
                                            <p>Ownership, type borrowing.</p>
                                        </div>
                                        <div className="bg-[#269ef4] p-3 rounded-lg flex-1">
                                            <p className="text-lg font-black">MQ</p>
                                            <p>Channels, dispatchers.</p>
                                        </div>
                                        <div className="bg-[#269ef4] p-3 rounded-lg flex-1">
                                            <p className="text-lg font-black">Optimisations V8</p>
                                            <p>GC, Contextes d'execution</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>

                <section className="pb-2 mt-14 section-margin flex flex-col flex-1" id="parcours">
                    <h2
                        className="title mt-2 pb-3">
                        Parcours
                    </h2>
                    <p className="text pb-6">Découvrez mon parcours scolaire et professionnel</p>
                    <div className="content gap-3 flex flex-1 overflow-auto pb-3">
                        {parcours.map((p, i) => (
                            <ParcoursContainer
                                key={Math.random()}
                                title={p.title}
                                text={p.text}
                                date={p.date}
                            />))}
                    </div>
                </section>

                <section className="hidden" id="projet-professionnel" style={{maxWidth: "1500px", padding: "0 var(--spacing-xl)"}}>
                    <h2 className="bold-900 fs-700">Projet professionnel</h2>
                    <p className="text">
                        Je vise à devenir développeur web avec une
                        spécialisation en création d’interfaces (front-end).
                        Pour cela, j'ai suivi des études dans le domaine de
                        l'informatique et du développement d'applications. À
                        l'avenir, j'ai défini plusieurs objectifs pour
                        progresser vers cette aspiration professionnelle
                    </p>

                    <div className="goals">
                        <div className="container">
                            <h3 className="bold-600 fs-500">Court-terme</h3>
                            <p className="text">
                                Dans cette phase initiale de mon parcours
                                professionnel, mon objectif principal est
                                d'acquérir une expérience concrète et pratique
                                dans le domaine du développement web, ce que je
                                compte réaliser en m'engageant dans un stage
                                enrichissant ou en intégrant un programme en
                                alternance.
                            </p>
                            <br />
                            <p className="text">
                                {" "}
                                Cette opportunité me permettra de mettre en
                                pratique les connaissances acquises au cours de
                                mes études et d'approfondir mes compétences
                                spécifiquement dans la création d’interfaces.
                            </p>
                        </div>
                        <div className="container">
                            <h3 className="bold-600 fs-500">Moyen-terme</h3>
                            <p className="text">
                                Par la suite, je prévois de parfaire mes
                                compétences en concluant mes études par
                                l'obtention d'un master en conception et
                                développement.
                            </p>
                            <br />
                            <p className="text">
                                Cette formation approfondie me permettra de
                                consolider mes bases en informatique et en
                                développement d'applications, offrant ainsi une
                                expertise solide et polyvalente dans mon domaine
                                d'intérêt
                            </p>
                        </div>
                        <div className="container">
                            <h3 className="bold-600 fs-500">Long-terme</h3>
                            <p className="text">
                                Enfin, je m'engage à poursuivre un apprentissage
                                continu pour affiner mes compétences existantes,
                                en développer de nouvelles et rester constamment
                                informé des avancées et des nouvelles
                                technologies dans le domaine du développement
                                web.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
