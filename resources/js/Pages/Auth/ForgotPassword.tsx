import { Head } from "@inertiajs/react";
import { AuthLayout } from "@/Layouts/auth";
import { ForgotPassForm } from "@/sections/auth/forgot-pass-form";
import Typography from "@mui/material/Typography";

export type ForgotPassFormProps = {
    status: string;
};

export default function ForgotPassword({ status }: ForgotPassFormProps) {
    return (
        <AuthLayout>
            <Head title="Forgot Password" />

            <Typography variant="body2" color="text.secondary" sx={{paddingBottom:'15px'}}>
                Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that will
                allow you to choose a new one.
            </Typography>
            <ForgotPassForm status={status} />
        </AuthLayout>
    );
}
