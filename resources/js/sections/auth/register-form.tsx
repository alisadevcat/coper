import { useState, useCallback } from "react";
import {
    TextField,
    Box,
    FormControl,
    Select,
    Button,
    MenuItem,
    IconButton,
    InputAdornment,
} from "@mui/material";
import { RolesData } from "@/types";
import { Iconify } from "@/Components/iconify";
import InputError from "@/Components/InputError";
import { useForm, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

type RegisterFormData = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    role_id: number | null;
};
type SessionMessages = {
    success: string | null;
    error: string | null;
};

type RolesProps = {
    roles: RolesData;
    flesh: SessionMessages;
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
        setData("first_name", filteredValue);
    };
    const handleLastNameChange = (e) => {
        const newValue = e.target.value;
        const filteredValue = newValue.replace(/[^a-zA-Z]/g, ""); // Remove non-Latin characters
        setData("last_name", filteredValue);
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const { roles, flesh } = usePage<RolesProps>().props;
    const options = roles?.options;

    console.log(flesh);

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
                        <InputError>{errors.first_name}</InputError>
                    )}

                    <TextField
                        fullWidth
                        id="last_name"
                        name="last_name"
                        label="Last Name"
                        value={data.last_name}
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{ mb: 3, backgroundColor: "transparent" }}
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
                        sx={{ mb: 3, backgroundColor: "transparent" }}
                        onChange={(e) => setData("email", e.target.value)}
                        autoComplete="username"
                        required
                    />
                    {errors.email && <InputError>{errors.email}</InputError>}

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
                        autoComplete="current-password"
                        required
                    />

                    {errors.password && (
                        <InputError>{errors.password}</InputError>
                    )}

                    <TextField
                        fullWidth
                        id="password_confirmation"
                        name="password_confirmation"
                        label="Confirm Password"
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
                        <InputError>{errors.password_confirmation}</InputError>
                    )}

                    <Box className="select-box">
                        <FormControl fullWidth>
                            <Select
                                name="role_id"
                                value={String(data.role_id)}
                                onChange={(e) =>
                                    setData("role_id", Number(e.target.value))
                                }
                            >
                                {options.map((item) => (
                                    <MenuItem value={item.value}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="contained"
                        sx={{ marginTop: "2rem" }}
                        disabled={processing}
                    >
                        Register
                    </Button>
                </Box>
            </form>
        </>
    );
};
