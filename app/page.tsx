import '../styles/footer.css';
import '../styles/mixins.css';
import '../styles/navbar.css';
import '../styles/normalize.css';
import '../styles/reset.css';
import '../styles/style.css';
import '../styles/utility.css';
import '../styles/variables.css';
import '../styles/project-1.css';
import '../styles/projet-professionnel.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { Carousel } from '../components/carousel';
import Image from 'next/image';

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
                                style={{ marginBottom: '2rem' }}
                            >
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
                                        href="mailto:nagelkilian05@gmail.com"
                                    >
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
                    </div>
                </section>

                <section id="biographie">
                    <div className="orb"></div>
                    <div className="element"></div>
                    <h2
                        className="title fs-700 bold-900"
                        style={{ marginTop: '4rem' }}
                    >
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
                                {'<'}
                            </button>
                            <button className="arrow-btn forward-arrow">
                                {'>'}
                            </button>
                        </div>
                    </div>
                    <Carousel />
                </section>

                <section id="skills">
                    <h2 className="subtitle fs-700 bold-900">Compétences</h2>
                    <h3
                        className="fs-400 bold-900"
                        style={{ marginBottom: '1rem', marginTop: '3rem' }}
                    >
                        Développement
                    </h3>
                    <div className="abilities">
                        <div className="container">
                            <div className="content">
                                <div className="header">
                                    <Image
                                        width={16}
                                        height={16}
                                        className="icone"
                                        src="/media/icones/circle.svg"
                                        alt="boule"
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{
                                            marginBottom: '.25rem',
                                            color: 'black'
                                        }}
                                    >
                                        01.
                                    </p>
                                    <h3
                                        className="fs-400 bold-900"
                                        style={{ color: 'black' }}
                                    >
                                        Webdesign
                                    </h3>
                                    <br />
                                    <p
                                        className="text fs-100"
                                        style={{ color: 'black' }}
                                    >
                                        Conception d'interfaces centrées sur
                                        l'utilisateur, intuitives, minimalistes
                                        et responsives.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="content">
                                <div className="header">
                                    <Image
                                        width={16}
                                        height={16}
                                        className="icone"
                                        src="/media/icones/circle.svg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{
                                            marginBottom: '.25rem',
                                            color: 'black'
                                        }}
                                    >
                                        02.
                                    </p>
                                    <h3
                                        className="fs-400 bold-900"
                                        style={{ color: 'black' }}
                                    >
                                        Maintenabilité
                                    </h3>
                                    <br />
                                    <p
                                        className="text fs-100"
                                        style={{ color: 'black' }}
                                    >
                                        Conception, modélisation et
                                        développement d'applications modulaires,
                                        extensibles qui respectent les principes
                                        SOLID.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="content">
                                <div className="header">
                                    <Image
                                        width={16}
                                        height={16}
                                        className="icone"
                                        src="/media/icones/circle.svg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{
                                            marginBottom: '.25rem',
                                            color: 'black'
                                        }}
                                    >
                                        03.
                                    </p>
                                    <h3
                                        className="fs-400 bold-900"
                                        style={{ color: 'black' }}
                                    >
                                        Optimisation
                                    </h3>
                                    <br />
                                    <p
                                        className="text fs-100"
                                        style={{ color: 'black' }}
                                    >
                                        Recherche continuelle d'amélioration
                                        sous tous les métriques : performances,
                                        accessibiltié, sécurité, robustesse des
                                        applications
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3
                        className="fs-400 bold-900"
                        style={{ marginBottom: '1rem', marginTop: '3rem' }}
                    >
                        Travail d'équipe
                    </h3>
                    <div className="abilities">
                        <div className="container">
                            <div className="content">
                                <div className="header">
                                    <Image
                                        width={16}
                                        height={16}
                                        className="icone"
                                        src="/media/icones/circle.svg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{
                                            marginBottom: '.25rem',
                                            color: 'black'
                                        }}
                                    >
                                        04.
                                    </p>
                                    <h3
                                        className="fs-400 bold-900"
                                        style={{ color: 'black' }}
                                    >
                                        Communication
                                    </h3>
                                    <br />
                                    <p
                                        className="text fs-100"
                                        style={{ color: 'black' }}
                                    >
                                        Communication et compréhension des
                                        besoins clients efficaces en utilisant
                                        les outils (User stories, Cahier des
                                        charges) et méthodologies adaptées
                                        (SCRUM)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="content">
                                <div className="header">
                                    <Image
                                        width={16}
                                        height={16}
                                        className="icone"
                                        src="/media/icones/circle.svg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{
                                            marginBottom: '.25rem',
                                            color: 'black'
                                        }}
                                    >
                                        05.
                                    </p>
                                    <h3
                                        style={{ color: 'black' }}
                                        className="fs-400 bold-900"
                                    >
                                        Vertus
                                    </h3>
                                    <br />
                                    <p
                                        style={{ color: 'black' }}
                                        className="text fs-100"
                                    >
                                        Curieux et passionné, je cherche
                                        constamment à m'améliorer. Persistant et
                                        résilient je perçois les difficultés
                                        comme des opportunités.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="content">
                                <div className="header">
                                    <Image
                                        width={16}
                                        height={16}
                                        className="icone"
                                        src="/media/icones/circle.svg"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{
                                            marginBottom: '.25rem',
                                            color: 'black'
                                        }}
                                    >
                                        06.
                                    </p>
                                    <h3
                                        style={{ color: 'black' }}
                                        className="fs-400 bold-900"
                                    >
                                        Collaboration
                                    </h3>
                                    <br />
                                    <p
                                        style={{ color: 'black' }}
                                        className="text fs-100"
                                    >
                                        Collaboration et coordination efficace
                                        en équipes de travail.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="technologies">
                    <div className="content">
                        <h2 className="fs-700 bold-900">Technologies</h2>
                        <div className="technologies">
                            <div className="container">
                                <h3 className="fs-400 bold-900">Front-end</h3>
                                <div className="badges">
                                    <span className="badge text">HTML 5</span>
                                    <span className="badge text">CSS 3</span>
                                    <span className="badge text">
                                        TypeScript
                                    </span>
                                    <span className="badge text">
                                        Bootstrap 5
                                    </span>
                                    <span className="badge text">
                                        Tailwind 3.3
                                    </span>
                                    <span className="badge text">
                                        React.js 18.2
                                    </span>
                                    <span className="badge text">
                                        Next.js 13.3
                                    </span>
                                    <span className="badge text">JavaFX</span>
                                    <span className="badge text">Auth0</span>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: '1px',
                                    marginBottom: '2rem',
                                    background: '#4F92F8'
                                }}
                            ></div>
                            <div className="container">
                                <h3 className="fs-400 bold-900">Back-end</h3>
                                <div className="badges">
                                    <span className="badge text">
                                        Node.js 13.2
                                    </span>
                                    <span className="badge text">PHP 8.2</span>
                                    <span className="badge text">MySQL</span>
                                    <span className="badge text">
                                        Oracle SQL
                                    </span>
                                    <span className="badge text">PL/SQL</span>
                                    <span className="badge text">MongoDB</span>
                                    <span className="badge text">Mongoose</span>
                                </div>
                            </div>
                            <div
                                style={{
                                    height: '1px',
                                    marginBottom: '2rem',
                                    background: '#4F92F8'
                                }}
                            ></div>
                            <div className="container">
                                <h3 className="fs-400 bold-900">
                                    Développement
                                </h3>
                                <div className="badges">
                                    <span className="badge text">Git</span>
                                    <span className="badge text">NPM</span>
                                    <span className="badge text">Jest</span>
                                    <span className="badge text">Cypress</span>
                                    <span className="badge text">Postman</span>
                                    <span className="badge text">Maven</span>
                                    <span className="badge text">JUnit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="parcours">
                    <h2
                        className="fs-700 bold-900"
                        style={{ marginBottom: '1rem' }}
                    >
                        Parcours
                    </h2>
                    <div className="content" style={{ maxWidth: '900px' }}>
                        <div className="container">
                            <div>
                                <h3 className="fs-300">Collège</h3>
                                <p className="text">
                                    Pont-saint-esprit, France
                                </p>
                                <p className="text">2015 - 2019</p>
                            </div>
                            <p className="text">
                                obtention du <u>brevet des collèges</u> mention
                                très bien (2019)
                            </p>
                        </div>
                        <hr />
                        <div className="container">
                            <div>
                                <h3 className="fs-300">Lycée</h3>
                                <p className="text">Bagnols-sur-cèze, France</p>
                                <p>2019 - 2022</p>
                            </div>
                            <p className="text">
                                obtention du <u>baccalauréat</u> mention Très
                                Bien (2022)
                            </p>
                        </div>
                        <hr />
                        <div className="container">
                            <div>
                                <h3 className="fs-300">Supérieur (IUT)</h3>
                                <p className="text">Montpellier, France</p>
                                <p>2022 - en cours</p>
                            </div>
                            <p className="text">
                                acquisition du{' '}
                                <u>diplôme universitaire de technologie</u>{' '}
                                (DUT)
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
