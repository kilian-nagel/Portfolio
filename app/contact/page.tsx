import { RoundBadge } from "@/components/roundBadge";

export default function Page(){
    return (
        <>
            <main className="section-padding">
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
        </>
    )
}
