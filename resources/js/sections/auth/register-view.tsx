import { Box, Divider, Typography } from "@mui/material";
import { SignupForm } from "./register-form";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import ApplicationLogoBlack from "@/Components/icons/ApplicationLogoBlack";

export function RegisterView() {
    return (
        <>
            <Box
                gap={1.5}
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ mb: 5 }}
            >
                <Box>
                    <Link href="/">
                        <ApplicationLogoBlack />
                    </Link>
                </Box>
                <Typography variant="h5">Register</Typography>
                <Typography variant="body2" color="text.secondary">
                    <Link href={route("login")}>Already registered?</Link>
                </Typography>
            </Box>

            <SignupForm />

            <Divider
                sx={{
                    my: 3,
                    "&::before, &::after": { borderTopStyle: "dashed" },
                }}
            >
                <Typography
                    variant="overline"
                    sx={{
                        color: "text.secondary",
                        fontWeight: "fontWeightMedium",
                    }}
                ></Typography>
            </Divider>
        </>
    );
}
