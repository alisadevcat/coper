import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import AdminDashboard from "./DashBoardTypes/AdminDashboard";
import BorrowerDashBoard from "./DashBoardTypes/BorrowerDashBoard";
import LenderDashBoard from "./DashBoardTypes/LenderDashBoard";

export default function Dashboard() {
    const { auth } = usePage().props;
    const roleID = auth.role_id ? auth.role_id : "";

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="mx-auto flex">
                <div className="h-screen w-full max-w-64 bg-primary text-white">
                    {roleID === 1 ? (
                        <AdminDashboard />
                    ) : roleID === 3 ? (
                        <BorrowerDashBoard />
                    ) : (
                        <LenderDashBoard />
                    )}
                </div>
                <div className="py-12 w-full max-w-2/3">
                    <div className="">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                You're logged in!
                                <p>your role is {role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
