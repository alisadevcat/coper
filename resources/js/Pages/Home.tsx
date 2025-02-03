import { Hero } from "./Main/Hero";
import "../../css/main.css";
import { SimpleLayout } from "@/Layouts/simple";
import { Head } from "@inertiajs/react";
// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
         <Head>
                <title>Coper finance</title>
                <meta name="description" content="Your page description" />
            </Head>
            <SimpleLayout header={{ sx: { backgroundColor: "#191e24" } }}>
                <Hero />
            </SimpleLayout>
        </>
    );
}
