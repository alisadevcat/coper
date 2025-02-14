import InputError from "@/Components/InputError";
import { Button } from "@mui/material";
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import { route } from "ziggy-js";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function UpdatePasswordForm({ className = "" }) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e: React.FormEvent) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <>
            <Box>
                <Typography variant="h6" color="text.primary" fontWeight={500}>
                    Update Password
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                    mb={4}
                >
                    Ensure your account is using a long, random password to stay
                    secure.
                </Typography>
            </Box>
            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <TextField
                    fullWidth
                    id="current_password"
                    inputRef={currentPasswordInput}
                    value={data.current_password}
                    label="Current Password"
                    onChange={(e) =>
                        setData("current_password", e.target.value)
                    }
                    type="password"
                    slotProps={{
                        inputLabel: { shrink: true },
                    }}
                    sx={{
                        mb: 3,
                        backgroundColor: "var(--palette-background-paper)",
                    }}
                    autoComplete="current-password"
                    required
                />

                {errors.current_password && (
                    <InputError>{errors.current_password}</InputError>
                )}

                <TextField
                    fullWidth
                    id="password"
                    inputRef={passwordInput}
                    value={data.password}
                    label="New Password"
                    onChange={(e) => setData("password", e.target.value)}
                    type="password"
                    slotProps={{
                        inputLabel: { shrink: true },
                    }}
                    sx={{
                        mb: 3,
                        backgroundColor: "var(--palette-background-paper)",
                    }}
                    autoComplete="new-password"
                    required
                />

                {errors.password && <InputError>{errors.password}</InputError>}

                <TextField
                    fullWidth
                    id="password_confirmation"
                    name="password_confirmation"
                    label="Confirm Password"
                    value={data.password_confirmation}
                    autoComplete="new-password"
                    type="password"
                    slotProps={{
                        inputLabel: { shrink: true },
                    }}
                    sx={{
                        mb: 3,
                        backgroundColor: "var(--palette-background-paper)",
                    }}
                    required
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                />

                {errors.password_confirmation && (
                    <InputError>{errors.password_confirmation}</InputError>
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
                        sx={{ marginTop: "0.5rem" }}
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
