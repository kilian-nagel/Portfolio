 

export default function Page(){
    return (
        <>
            <main className="section-padding mt-12 flex flex-col justify-between" style={{minHeight:"70vh"}}>
                <div className="flex justify-between items-start">
                    <div className="w-full">
                        <h1 className="title fs-700 bold-900">Stagiaire en développement web</h1>
                        <p className="text-sm text-[#BABABA] mt-4" style={{paddingBottom:"var(--spacing-sm)"}}>Optima concept, Barbentanes / 04/2024 - 06/2024</p>

                        <div className="flex justify-between w-full items-start">
                            <div className="w-full">
                                <p>J'ai eu l'occasion d'effectuer un stage de 2 mois et demi dans l'entreprise Optima Concept. Stage que j'ai occupé avec un rôle de développeur web et CI/CD.</p>
                                <p className="mt-2">Ma première mission consistait en l’automatisation du processus de build de l’application
        SenSaaS et du déploiement de son infrastructure.
        Le problème que je dois résoudre est de remplacer la complexité actuelle du processus
        de déploiement et de build du projet par un processus automatisé et paramétrable afin
        de simplifier le processus.</p>
                                <p className="mt-2">Ma seconde mission consistait en l’ajout de nouvelles fonctionnalités dans l’application
        SenSaaS. Plus précisément, je devais intégrer des fenêtres de l’application Sage
        permettant l’ajout la modification de divers données métiers (Banques, Tarifs), mais
        aussi la possibilité de supprimer ces dernières.</p>
                                <p className="mt-2">Dans le cadre de ma mission concernant le CI/CD, je devais souvent résoudre des problèmes spécifiques. Il m'est arrivé de passer beaucoup de temps à essayer de
        mettre en place des solutions complexes, pensant qu'elles seraient plus sécurisées,
        au lieu de choisir des solutions plus simples et directes.</p>

                                <p className="mt-2 ">J’ai donc compris que gérer efficacement son temps et ses priorités est crucial pour atteindre les objectifs d'un projet, et qu’il est important de ne pas se perdre dans des solutions trop complexes quand des solutions simples peuvent suffire.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p className="text-[#BABABA] text-small text-left">précédent</p>
                        <p>{'<'} Page d'accueil</p> 
                    </div>
                    <div>
                        <p className="text-[#BABABA] text-small text-right">suivant</p>
                        <p>Alternance web {'>'}</p> 
                    </div>
                </div>
            </main>
        </>
    )
}
