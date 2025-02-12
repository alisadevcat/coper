import { DashboardLayout } from "@/Layouts/dashboard";
import { Head } from "@inertiajs/react";
import { DashboardContent } from "@/Layouts/dashboard";
import { Typography, Box, Button } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { Roles, PagePropsData } from "@/types";
import BorrowerProfile from "@/sections/profile/BorrowerProfile";

// ----------------------------------------------------------------------

export default function Page({ profileData, photoPath, documentPath }) {
    console.log(profileData, photoPath, documentPath, "ewrger");
    const { roles } = usePage<PagePropsData>().props;
    const roleSlugs: Roles = roles?.user_roles ? roles.user_roles : [];

    console.log(roleSlugs[0]);

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
                        {roleSlugs[0] === "borrower" && (
                            <BorrowerProfile
                                profileData={profileData}
                                photoPath={photoPath}
                                documentPath={documentPath}
                            />
                        )}
                    </Box>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}
