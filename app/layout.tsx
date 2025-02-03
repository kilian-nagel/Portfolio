import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/nav/navbar';

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
