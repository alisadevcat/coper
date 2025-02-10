import { Button } from "@mui/material";
import { route } from "ziggy-js";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useForm } from "@inertiajs/react";
import { Alert } from "@mui/material";
import { ForgotPassFormProps } from "@/Pages/Auth/ForgotPassword";

export const ForgotPassForm = ({ status }: ForgotPassFormProps) => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("password.email"));
    };
    return (
        <>
            {status && <div>{status}</div>}
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
                        defaultValue="hello@gmail.com"
                        slotProps={{ inputLabel: { shrink: true } }}
                        sx={{ mb: 3, backgroundColor: "transparent" }}
                        onChange={(e) => setData("email", e.target.value)}
                    />

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
                        Email Password Reset Link
                    </Button>
                </Box>
            </form>
        </>
    );
};

