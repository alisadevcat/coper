import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Roles, PagePropsData } from "@/types";
import { OverviewAnalyticsView } from "@/sections/overview/view";
import { ReactNode } from "react";
import { DashboardLayout } from "@/Layouts/dashboard";
import { route } from "ziggy-js";

import BorrowerDashBoard from "./DashBoardTypes/BorrowerDashBoard";
import LenderDashBoard from "./DashBoardTypes/LenderDashBoard";
import ModeratorDashboard from "./DashBoardTypes/ModeratorDashboard";

type DashboardRoles = "lender" | "borrower" | "moderator";

type DashboardComponentsType = {
    [key in DashboardRoles]: ReactNode;
};

export const dashBoardComponents: DashboardComponentsType = {
    lender: <LenderDashBoard />,
    borrower: <BorrowerDashBoard />,
    moderator: <ModeratorDashboard />,
};

export default function Dashboard() {
    const { roles } = usePage<PagePropsData>().props;
    const roleSlugs: Roles = roles?.user_roles ? roles.user_roles : [];
    console.log(roles);

    return (
        // <DashboardLayout>
            <Link method="post" href={route("logout")} as="button">
                Log Out
            </Link>
        // </DashboardLayout>
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
