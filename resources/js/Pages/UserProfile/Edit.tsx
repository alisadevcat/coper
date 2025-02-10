import { DashboardLayout } from "@/Layouts/dashboard";
import { Head } from "@inertiajs/react";
import { DashboardContent } from "@/Layouts/dashboard";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { UserDetailsColumn } from "@/sections/profile/UserDetailsColumn";
import img from "../../../assets/images/avatar-25.webp";
import { ImageUpload } from "@/sections/profile/image-upload";

// ----------------------------------------------------------------------

export default function Page() {
    return (
        <>
            <Head>
                <title>Coper finance</title>
                <meta name="description" content="Your page description" />
            </Head>
            <DashboardLayout>
                <DashboardContent maxWidth="xl">
                    <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                        My Profile
                    </Typography>
                    <Box
                        sx={{
                            margin: "auto",
                            padding: 3,
                            backgroundColor: "var(--palette-background-paper)",
                            borderRadius: 2,
                        }}
                    >
                        <Grid container spacing={3}>
                            {/* Avatar Column */}
                            <Grid
                                size={{ xs: 12, sm: 4 }}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <img src={img} alt="" />
                                <Box display="flex" flexDirection="column" pt="4" justifyContent={"center"} alignItems={"center"}>
                                    <ImageUpload />
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        Allowed: .jpeg, .jpg, .png, .gif max
                                        size of 3 Mb
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid
                                size={{ xs: 12, sm: 8 }}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <UserDetailsColumn />
                            </Grid>
                        </Grid>
                    </Box>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}
