import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { SignupForm } from "./register-form";
import { Link } from "@inertiajs/react";
import { route } from 'ziggy-js';

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
                <Typography variant="h5">Register</Typography>
                <Typography variant="body2" color="text.secondary">
                <Link href={route("login")}>Already registered?</Link>
                </Typography>
            </Box>

            <SignupForm/>

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
