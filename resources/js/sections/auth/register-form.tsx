import { useState, useCallback } from "react";
import { Button } from "@mui/material";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { RolesData } from "@/types";
import { route } from "ziggy-js";

type RegisterFormData = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    role_id: number | null;
};
type RolesProps = {
    roles: RolesData;
};
export const SignupForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role_id: "4",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const { roles } = usePage<RolesProps>().props;
    const options = roles?.options;

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
                        id="first_name"
                        name="first_name"
                        label="First Name"
                        value={data.first_name}
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{ mb: 3, backgroundColor: "transparent" }}
                        onChange={(e) => setData("first_name", e.target.value)}
                        autoComplete="first_name"
                        required
                    />
                    {errors.first_name && (
                        <Alert severity="error">{errors.first_name}</Alert>
                    )}

                    <TextField
                        fullWidth
                        id="last_name"
                        name="last_name"
                        label="Last Name"
                        value={data.last_name}
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{ mb: 3, backgroundColor: "transparent" }}
                        onChange={(e) => setData("last_name", e.target.value)}
                        autoComplete="last_name"
                        required
                    />
                    {errors.last_name && (
                        <Alert severity="error">{errors.last_name}</Alert>
                    )}

                    <TextField
                        fullWidth
                        id="email"
                        type="email"
                        name="email"
                        label="Email"
                        value={data.email}
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{ mb: 3, backgroundColor: "transparent" }}
                        onChange={(e) => setData("email", e.target.value)}
                        autoComplete="username"
                        required
                    />
                    {errors.email && (
                        <Alert severity="error">{errors.email}</Alert>
                    )}

                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        defaultValue="@demo1234"
                        type="password"
                        slotProps={{
                            // input: {
                            //     endAdornment: (
                            //         <InputAdornment position="end">
                            //             <IconButton
                            //                 onClick={() =>
                            //                     setShowPassword(!showPassword)
                            //                 }
                            //                 edge="end"
                            //             >
                            //                 <Iconify
                            //                     icon={
                            //                         showPassword
                            //                             ? "solar:eye-bold"
                            //                             : "solar:eye-closed-bold"
                            //                     }
                            //                 />
                            //             </IconButton>
                            //         </InputAdornment>
                            //     ),
                            // },
                            inputLabel: { shrink: true },
                        }}
                        sx={{ mb: 3 }}
                        autoComplete="current-password"
                        required
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    {errors.password && (
                        <Alert severity="error">{errors.password}</Alert>
                    )}

                    <TextField
                        fullWidth
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        label="Confirm Password"
                        defaultValue="@demo1234"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        sx={{ mb: 3 }}
                        required
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />
                    {errors.password_confirmation && (
                        <Alert severity="error">
                            {errors.password_confirmation}
                        </Alert>
                    )}

                    <Select
                        labelId="demo-simple-select"
                        id="demo-simple-select"
                        value={String(data.role_id)}
                        name="selectedRole"
                        onChange={(e) =>
                            setData("role_id", Number(e.target.value))
                        }
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                <MenuItem value={option.value}>
                                    {option.label}
                                </MenuItem>
                            </option>
                        ))}
                    </Select>

                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="contained"
                        disabled={processing}
                    >
                        Register
                    </Button>
                </Box>
            </form>
        </>
    );
};
