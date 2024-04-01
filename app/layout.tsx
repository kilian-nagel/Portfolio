import { Footer } from '../components/footer';
import { Navbar } from '../components/nav/navbar';

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

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Kilian Nagel - Portfolio</title>
            </head>
            <body>
                <Navbar></Navbar>
                {children}
                <Footer />
            </body>
        </html>
    );
}
