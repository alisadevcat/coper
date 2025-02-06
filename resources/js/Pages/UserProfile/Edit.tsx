import { DashboardLayout } from "@/Layouts/dashboard";
import { Head } from "@inertiajs/react";


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Head>
                <title>Coper finance</title>
                <meta name="description" content="Your page description" />
            </Head>
            <DashboardLayout
                header={{
                    sx: {
                        backgroundColor: "var(--ultra-dark)",
                    },
                }}
                sx={{ backgroundColor: "#1f2a36" }}
            >
                <p>user profile</p>

            </DashboardLayout>
        </>
    );
}
