import { Hero } from "@/sections/home/Hero";
import { SimpleLayout } from "@/Layouts/simple";
import { Head } from "@inertiajs/react";
import AboutUs from "@/sections/home/AboutUs";
import ToBorrowMoney from "@/sections/home/ToBorrowMoney";
import ToLendMoney from "@/sections/home/ToLendMoney";
import { Cards } from "@/sections/home/Cards";
import "../../css/main.css";

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Head>
                <title>Coper finance</title>
                <meta name="description" content="Your page description" />
            </Head>
            <SimpleLayout
                header={{
                    sx: {
                        backgroundColor: "var(--ultra-dark)",
                        // px: "var(--s3)",
                        // py: "var(--s4)",

                    },
                }}
                sx={{ backgroundColor: "#1f2a36" }}
            >
                <Hero />
                <Cards />
                <AboutUs />
                <ToBorrowMoney />
                <ToLendMoney />
            </SimpleLayout>
        </>
    );
}
