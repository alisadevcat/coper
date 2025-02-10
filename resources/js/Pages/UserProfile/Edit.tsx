import { DashboardLayout } from "@/Layouts/dashboard";
import { Head } from "@inertiajs/react";
import { DashboardContent } from "@/Layouts/dashboard";
import { Typography, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { UserDetailsColumn } from "@/sections/profile/UserDetailsColumn";

import { AvatarColumn } from "@/sections/profile/avatar-column";

// ----------------------------------------------------------------------

export default function Page({ profileData }) {
    console.log(profileData);
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

                          <AvatarColumn/>
                            <Grid
                                size={{ xs: 12, sm: 8 }}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <UserDetailsColumn profileData={profileData}/>
                            </Grid>
                        </Grid>
                    </Box>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}
