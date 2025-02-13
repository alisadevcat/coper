import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { Box, Typography } from "@mui/material";
import InputError from "@/Components/InputError";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

interface dataProps {
    first_name: string;
    last_name: string;
    email: string;
}

export default function UpdateProfileInformationForm({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        });
    const submit = (e) => {
        e.preventDefault();
        patch(route("profile.update"), {
            preserveScroll: true, // Optional: Keeps scroll position
            data, // Sends the updated form data
            onSuccess: (response) => console.log("Success:", response),
            onError: (errors) => console.error("Errors:", errors),
        });
    };

    const handleNameChange = (e) => {
        const newValue = e.target.value;
        const filteredValue = newValue.replace(/[^a-zA-Z]/g, ""); // Remove non-Latin characters
        setData("first_name", filteredValue);
    };
    const handleLastNameChange = (e) => {
        const newValue = e.target.value;
        const filteredValue = newValue.replace(/[^a-zA-Z]/g, ""); // Remove non-Latin characters
        setData("last_name", filteredValue);
    };

    return (
        <>
            <Box>
                <Typography variant="h6" color="text.primary" fontWeight={500}>
                    Profile Information
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                    mb={4}
                >
                    Update your account's profile information and email address.
                </Typography>
            </Box>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <TextField
                    fullWidth
                    id="first_name"
                    name="first_name"
                    label="First Name"
                    value={data.first_name}
                    slotProps={{ inputLabel: { shrink: true } }}
                    sx={{ mb: 3, backgroundColor: "var(--palette-background-paper)" }}
                    onChange={handleNameChange}
                    autoComplete="first_name"
                    required
                />
                {errors.first_name && (
                    <InputError>{errors.first_name}</InputError>
                )}
                <TextField
                    fullWidth
                    id="last_name"
                    name="last_name"
                    label="Last Name"
                    value={data.last_name}
                    slotProps={{ inputLabel: { shrink: true } }}
                    sx={{ mb: 3, backgroundColor: "var(--palette-background-paper)" }}
                    onChange={handleLastNameChange}
                    autoComplete="last_name"
                    required
                />
                {errors.last_name && (
                    <InputError>{errors.last_name}</InputError>
                )}
                <TextField
                    fullWidth
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                    value={data.email}
                    slotProps={{ inputLabel: { shrink: true } }}
                    sx={{ mb: 3, backgroundColor: "var(--palette-background-paper)" }}
                    onChange={(e) => setData("email", e.target.value)}
                    autoComplete="username"
                    required
                />
                {errors.email && <InputError>{errors.email}</InputError>}

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p>
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

<Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: 4,
                    }}
                >
                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="contained"
                        sx={{ marginTop: "1rem" }}
                        disabled={processing}
                    >
                        Save
                    </Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p>Saved.</p>
                    </Transition>
                </Box>
            </form>
        </>
    );
}
