import { Footer } from '../components/footer';
import { Navbar } from '../components/nav/navbar';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Kilian Nagel - Portfolio</title>
                <link rel="stylesheet" href="./styles/navbar.css" />
                <link rel="stylesheet" href="./styles/footer.css" />
                <link rel="stylesheet" href="./styles/normalize.css" />
                <link rel="stylesheet" href="./styles/project-1.css" />
                <link rel="stylesheet" href="./styles/reset.css" />
                <link rel="stylesheet" href="./styles/style.css" />
                <link rel="stylesheet" href="./styles/utility.css" />
                <link rel="stylesheet" href="./styles/variables.css" />
                <link rel="stylesheet" href="./styles/projet-professionnel.css" />
            </head>
            <body>
                <Navbar></Navbar>
                {children}
                <Footer />
            </body>
        </html>
    );
}
