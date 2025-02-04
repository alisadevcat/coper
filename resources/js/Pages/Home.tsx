import { Hero } from "@/sections/home/Hero";
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
            <SimpleLayout header={{ sx: { backgroundColor: "#191e24" } }} sx={{ backgroundColor: "#1f2a36" }}>
                <Hero />
            </SimpleLayout>
        </>
    );
}
