import { Head } from "@inertiajs/react";
import { Footer } from "@/Components/global/Footer";
import Header from "@/Components/global/Header";

export default function MainLayout({ children }) {
    return (
        <>
            <Head>
                <title>Coper finance</title>
                <meta name="description" content="Your page description" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
