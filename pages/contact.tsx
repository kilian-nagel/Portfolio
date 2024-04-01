import { Footer } from "../components/footer";
import { Navbar } from "../components/nav/navbar";
import { RoundBadge } from "../components/roundBadge";

import "../public/styles/footer.css";
import "../public/styles/navbar.css";
import "../public/styles/normalize.css";
import "../public/styles/project-1.css";
import "../public/styles/projet-professionnel.css";
import "../public/styles/reset.css";
import "../public/styles/utility.css";
import "../public/styles/style.css";
import "../public/styles/variables.css";

export default function Contact(){
    return (
        <>
            <Navbar/>
            <main style={{maxWidth:"1500px",padding: "var(--spacing-md) var(--spacing-xl)" }}>
                <div>
                    <h1 className="title fs-700 bold-900">Contactez moi</h1>
                    <p style={{paddingBottom:"var(--spacing-sm)"}}>N'hésitez pas à me contacter.</p>
                    <div
						style={{
							marginBottom: "var(--spacing-sm)",
							display: "flex",
							gap: ".5rem",
						}}>
						<RoundBadge
                            url={"/media/icones/mail.svg"}
                            rotate={0} link={"mailto:nagelkilian05@gmail.com"}></RoundBadge>
						<RoundBadge
                            url={"/media/icones/github.svg"}
                            rotate={0} link={"https://github.com/kilian-nagel"}></RoundBadge>
						<RoundBadge
                            url={"/media/icones/linkedin.png"}
                            rotate={0} link={"https://fr.linkedin.com/in/kilian-nagel"}></RoundBadge>
					</div>
                </div>
            </main>
            <Footer/>
        </>
    )
}