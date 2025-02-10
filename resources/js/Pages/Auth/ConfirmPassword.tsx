import InputError from "@/Components-old/InputError";
import InputLabel from "@/Components-old/InputLabel";
import PrimaryButton from "@/Components/buttons/PrimaryButton";
import TextInput from "@/Components-old/TextInput";
import { AuthLayout } from "@/Layouts/auth";
import { Head, useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { route } from "ziggy-js";
import { ConfirmPassForm } from "@/sections/auth/confirm-pass-form";

export default function ConfirmPassword() {
    return (
        <AuthLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <ConfirmPassForm />
        </AuthLayout>
    );
}
