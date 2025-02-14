import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import { route } from "ziggy-js";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Head, Link, useForm } from "@inertiajs/react";
import { Iconify } from "../../Components/iconify";
import { LoginProps } from "@/Pages/Auth/Login";
import { Alert } from "@mui/material";

type LoginFormData = {
    email: string;
    password: string;
    remember: boolean;
};

export const RenderedForm = ({ status, canResetPassword }: LoginProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } =
        useForm<LoginFormData>({
            email: "",
            password: "",
            remember: false,
        });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };
    return (
        <>
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
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
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{ mb: 3, backgroundColor: "transparent" }}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    {/* {canResetPassword && (
                        <Link href={route("password.request")}>
                            Forgot your password?
                        </Link>
                    )} */}
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        value={data.password}
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

                    {errors.password && (
                        <Alert severity="error">{errors.password}</Alert>
                    )}
                    {errors.email && (
                        <Alert severity="error">{errors.email}</Alert>
                    )}
                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="contained"
                        disabled={processing}
                    >
                        Sign in
                    </Button>
                </Box>
            </form>
        </>
    );
};
