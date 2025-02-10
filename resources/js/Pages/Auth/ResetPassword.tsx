import { AuthLayout } from "@/Layouts/auth";
import { Head } from "@inertiajs/react";
import { ResetForm } from "@/sections/auth/reset-form";

export type ResetPasswordProps = {
    token: string;
    email: string;
};

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    return (
        <AuthLayout>
            <Head title="Reset Password" />

            <ResetForm token={token} email={email} />
        </AuthLayout>
    );
}
