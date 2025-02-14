import { useState } from "react";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { route } from "ziggy-js";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useForm } from "@inertiajs/react";
import { Iconify } from "../../Components/iconify";

import { Alert } from "@mui/material";

type ConfirmPassData = {
    password: string;
};

export const ConfirmPassForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("password.confirm"), {
            onFinish: () => reset("password"),
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

                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="contained"
                        disabled={processing}
                    >
                        Confirm
                    </Button>
                </Box>
            </form>
        </>
    );
};
