import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link } from "@inertiajs/react";
import { RenderedForm } from "./login-form";
import { LoginProps } from "@/Pages/Auth/Login";
import { route } from "ziggy-js";

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
                <Typography variant="h5">Sign in</Typography>
                <Typography variant="body2" color="text.secondary">
                    Don’t have an account?<Link href={route("register")}>Get started</Link>
                </Typography>
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
