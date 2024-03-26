import { FooterSection } from "./footer/footerSections";

const footerLinks = [
	{
		sectionTitle: "Contact",
		links: [
			{
				text: "Email",
				url: "mailto:nagelkilian05@gmail.com",
				ariaText: "me contacter par email",
			},
			{
				text: "Github",
				url: "https://github.com/kilian-nagel",
				ariaText: "se rendre sur ma page github",
			},
			{
				text: "Github",
				url: "https://github.com/kilian-nagel",
				ariaText: "se rendre sur ma page github",
			},
		],
	},
	{
		sectionTitle: "Navigation",
		links: [
			{
				text: "Biographie",
				url: "#biographie",
				ariaText: "se rendre sur la parrtie biographie",
			},
			{
				text: "Projets",
				url: "#projects",
				ariaText: "se rendre sur la page projets",
			},
			{
				text: "Projet professionnel",
				url: "projet-professionnel.html",
				ariaText: "se rendre sur la page projet professionnel",
			},
		],
	},
];

export const Footer: React.FC = () => {
	return (
		<footer id="footer" style={{ marginTop: "6rem" }}>
			<div className="content">
				<div>
					<div className="heading">
						<h3 className="fs-800">
							Kilian
							<br />
							Nagel
						</h3>
					</div>
					<div className="links-section">
						{footerLinks.map((section) => (
							<FooterSection
								title={section.sectionTitle}
								links={section.links}
							/>
						))}
					</div>
					<div className="copyright-section">
						Copyright © 2024 Nagel Kilian.
					</div>
				</div>
                <div className="cta-container" style={{position:"relative",paddingBottom:"2rem"}}>
                    <h3 className="fs-600" style={{color:"white",paddingBottom:"1rem"}}>Vous êtes convaincus ?</h3>
                    <button style={{fontSize:20,fontWeight:700,background:"rgba(255,255,255,0.1)",padding:".5rem 1rem",borderRadius:"8px"}}>contactez-moi</button>
                </div>
			</div>
		</footer>
	);
};
