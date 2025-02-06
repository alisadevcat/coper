import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Alert } from "@mui/material";
import { useForm, usePage } from "@inertiajs/react";
import Select from "@/Components/select/Select";
import { RolesData } from "@/types";
import { route } from "ziggy-js";
import Link from "@mui/material/Link";
import { Iconify } from "@/Components/iconify";

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
    const { data, setData, post, processing, errors, reset } =
        useForm<RegisterFormData>({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
            role_id: 4,
        });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfrimedPassword, setShowConfrimedPassword] = useState(false);

    const handleNameChange = (e) => {
        const newValue = e.target.value;
        const filteredValue = newValue.replace(/[^a-zA-Z]/g, ""); // Remove non-Latin characters
       setData("first_name", e.target.value);
      };


    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const { roles } = usePage<RolesProps>().props;
    const options = roles?.options;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
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
                        id="first_name"
                        name="first_name"
                        label="First Name"
                        value={data.first_name}
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{ mb: 3, backgroundColor: "transparent" }}
                        onChange={handleNameChange}
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
                        name="password"
                        label="Password"
                        defaultValue=""
                        type={showPassword ? "text" : "password"}
                        slotProps={{
                            inputLabel: { shrink: true },
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
                        }}
                        sx={{ mb: 3 }}
                        onChange={(e) => setData("password", e.target.value)}
                        // autoComplete="current-password"
                        required
                    />

                    {errors.password && (
                        <Alert severity="error">{errors.password}</Alert>
                    )}

                    <TextField
                        fullWidth
                        id="password_confirmation"
                        name="password_confirmation"
                        label="Confirm Password"
                        // defaultValue="@demo1234"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        type={showConfrimedPassword ? "text" : "password"}
                        slotProps={{
                            inputLabel: { shrink: true },
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowConfrimedPassword(
                                                    !showConfrimedPassword
                                                )
                                            }
                                            edge="end"
                                        >
                                            <Iconify
                                                icon={
                                                    showConfrimedPassword
                                                        ? "solar:eye-bold"
                                                        : "solar:eye-closed-bold"
                                                }
                                            />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
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

                    <Box className="select-box">
                        <Select
                            value={String(data.role_id)}
                            name="selectedRole"
                            className="select-role-input"
                            onChange={(e) =>
                                setData("role_id", Number(e.target.value))
                            }
                            options={options}
                        />
                    </Box>
                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="contained"
                        sx={{marginTop: "2rem" }}
                        disabled={processing}
                    >
                        Register
                    </Button>
                </Box>
            </form>
        </>
    );
};

{
    /* <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        defaultValue="none"
                        type="password"
                        slotProps={{
                            inputLabel: { shrink: true },
                        }}
                        sx={{ mb: 3 }}
                        autoComplete="current-password"
                        required
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    {errors.password && (
                        <Alert severity="error">{errors.password}</Alert>
                    )} */
}
