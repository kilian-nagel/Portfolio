export const Footer: React.FC = () => {
    return (
        <footer id="footer" style={{ marginTop: '6rem' }}>
            <div className="content">
                <div className="heading">
                    <h3 className="fs-800">
                        Kilian
                        <br />
                        Nagel
                    </h3>
                </div>
                <div className="links-section">
                    <ul className="items">
                        <li className="item text-heading">Contact</li>
                        <li className="item text">
                            <a
                                href="mailto:nagelkilian05@gmail.com"
                                aria-label="me contacter par email"
                            >
                                Email
                            </a>
                        </li>
                        <li className="item text">
                            <a
                                href="https://github.com/kilian-nagel"
                                aria-label="se rendre sur ma page github"
                            >
                                Github
                            </a>
                        </li>
                        <li className="item text">
                            <a
                                href="linkedin.com/in/kilian-nagel"
                                aria-label="se rendre sur ma page linkedIn"
                            >
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                    <ul className="items">
                        <li className="item text-heading">Navigation</li>
                        <li className="item text">
                            <a
                                href="#biographie"
                                aria-label="se rendre sur la page biographie"
                            >
                                Biographie
                            </a>
                        </li>
                        <li className="item text">
                            <a
                                href="#projects"
                                aria-label="se rendre sur la page projets"
                            >
                                Projets
                            </a>
                        </li>
                        <li className="item text">
                            <a
                                href="./pages/projet-professionnel.html"
                                aria-label="se rendre sur la page projet professionnel"
                            >
                                Projet professionnel
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="copyright-section">
                    Copyright © 2024 Nagel Kilian.
                </div>
            </div>
        </footer>
    );
};
