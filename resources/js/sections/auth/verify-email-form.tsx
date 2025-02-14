import { Link, useForm } from "@inertiajs/react";
import { route } from "ziggy-js";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

export const VerifyEmailForm = ({ status } : {status: string}) => {
    const { post, processing } = useForm({});

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <>
            <Typography variant="body2" color="text.secondary">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </Typography>

            {status === "verification-link-sent" && (
                <Typography variant="body2" color="text.secondary">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </Typography>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">

                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="contained"
                        disabled={processing}
                    >
                         Resend Verification Email
                    </Button>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </>
    );
};
