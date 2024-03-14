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
            </head>
            <body>
                <Navbar></Navbar>
                {children}
                <Footer />
            </body>
        </html>
    );
}
