import { SignInView } from "@/sections/auth";
import { AuthLayout } from "@/Layouts/auth";

export type LoginProps = { status: string; canResetPassword: boolean };

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <AuthLayout>
            <SignInView status={status} canResetPassword={canResetPassword} />
        </AuthLayout>
    );
}
