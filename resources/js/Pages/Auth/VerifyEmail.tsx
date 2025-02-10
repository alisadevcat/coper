import { Head } from "@inertiajs/react";
import { AuthLayout } from "@/Layouts/auth";
import { VerifyEmailForm } from "@/sections/auth/verify-email-form";

export default function VerifyEmail({ status }:{ status: string}) {
    return (
        <AuthLayout>
            <Head title="Email Verification" />

            <VerifyEmailForm status={status} />
        </AuthLayout>
    );
}
