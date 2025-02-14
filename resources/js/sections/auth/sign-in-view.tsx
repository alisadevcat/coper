import { Box, Divider, Typography } from "@mui/material";
import { Link } from "@inertiajs/react";
import { RenderedForm } from "./login-form";
import { LoginProps } from "@/Pages/Auth/Login";
import { route } from "ziggy-js";
import ApplicationLogoBlack from "@/Components/icons/ApplicationLogoBlack";

export function SignInView({ status, canResetPassword }: LoginProps) {
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

                <Typography variant="h5">Sign in</Typography>

                <Box display="flex" gap="2px">
                    <Typography variant="body2" color="text.secondary">
                        Don’t have an account?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link href={route("register")}>Get started!</Link>
                    </Typography>
                </Box>
            </Box>

            <RenderedForm status={status} canResetPassword={canResetPassword} />

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
