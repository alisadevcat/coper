import { AuthLayout } from "@/Layouts/auth";
import { Head } from "@inertiajs/react";
import { RegisterView } from "@/sections/auth/register-view";

export default function Register() {
    return (
        <AuthLayout>
            <Head title="Register" />
            <RegisterView />
        </AuthLayout>
    );
}
