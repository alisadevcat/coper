import { DashboardLayout } from "@/Layouts/dashboard";
import { DashboardContent } from "@/Layouts/dashboard";
import { Typography } from "@mui/material";
import { Head, usePage } from "@inertiajs/react";
import { Roles, PagePropsData } from "@/types";

export default function Dashboard() {
    const { roles } = usePage<PagePropsData>().props;
    const roleSlugs: Roles = roles?.user_roles ? roles.user_roles : [];
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta
                    name="description"
                    content="The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"
                />
                <meta
                    name="keywords"
                    content="react,material,kit,application,dashboard,admin,template"
                />
            </Head>
            <DashboardLayout>
                <DashboardContent maxWidth="xl">
                    <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                        Hi, Welcome back 👋
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        You're logged in!
                        <p>
                            Your role is a
                            {roleSlugs.map((item) => ` ${item}`)} !
                        </p>
                    </Typography>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}

