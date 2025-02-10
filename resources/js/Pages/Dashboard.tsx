import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Roles, PagePropsData } from "@/types";
import { OverviewAnalyticsView } from "@/sections/overview/view";
import { ReactNode } from "react";
import { DashboardLayout } from "@/Layouts/dashboard";
import { route } from "ziggy-js";
import { Typography } from "@mui/material";
import NavLink from "@/Components/nav/NavLink";
import { DashboardContent } from "@/Layouts/dashboard";

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
                            Your role is
                            {roleSlugs.map((item) => ` ${item}`)}
                        </p>
                    </Typography>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}

//    <Head title="Dashboard" />

// <div className="mx-auto flex">
//     <div className="h-screen w-full max-w-64 bg-primary text-white">
//         {roleSlugs.map((role) =>
//             dashBoardComponents[role as keyof DashboardComponentsType] ? (
//                 <div key={role}>{dashBoardComponents[role as keyof DashboardComponentsType]}</div>
//             ) : null
//         )}
//     </div>
//     <div className="py-12 w-full max-w-2/3">
//         <div className="">
//             <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
//                 <div className="p-6 text-gray-900">
//                     You're logged in!
//                     <p>
//                         your role is{" "}
//                         {roleSlugs.map((item) => ` ${item}`)}
//                     </p>
//                 </div>
//                 <OverviewAnalyticsView />
//         </div>
//    </div>
//  </div>
// </div>
