import { useState } from "react";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useForm } from "@inertiajs/react";
import { Iconify } from "@/Components/iconify";
import { Alert } from "@mui/material";
import { route } from "ziggy-js";
import { ResetPasswordProps } from "@/Pages/Auth/ResetPassword";

export const ResetForm = ({ token, email }: ResetPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("password.store"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <form onSubmit={submit}>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                >
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email address"
                        value={data.email}
                        autoComplete="username"
                        defaultValue="hello@gmail.com"
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{ mb: 3, backgroundColor: "transparent" }}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        defaultValue="@demo1234"
                        type={showPassword ? "text" : "password"}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            edge="end"
                                        >
                                            <Iconify
                                                icon={
                                                    showPassword
                                                        ? "solar:eye-bold"
                                                        : "solar:eye-closed-bold"
                                                }
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                            inputLabel: { shrink: true },
                        }}
                        sx={{ mb: 3 }}
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <TextField
                        fullWidth
                        id="password_confirmation"
                        name="password_confirmation"
                        label="Confirm Password"
                        defaultValue="@demo1234"
                        type={showPassword ? "text" : "password"}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            edge="end"
                                        >
                                            <Iconify
                                                icon={
                                                    showPassword
                                                        ? "solar:eye-bold"
                                                        : "solar:eye-closed-bold"
                                                }
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                            inputLabel: { shrink: true },
                        }}
                        sx={{ mb: 3 }}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />

                    {errors.password && (
                        <Alert severity="error">{errors.password}</Alert>
                    )}
                    {errors.email && (
                        <Alert severity="error">{errors.email}</Alert>
                    )}
                    {errors.password_confirmation && (
                        <Alert severity="error">
                            {errors.password_confirmation}
                        </Alert>
                    )}
                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="contained"
                        disabled={processing}
                    >
                        Reset Password
                    </Button>
                </Box>
            </form>
        </>
    );
};
