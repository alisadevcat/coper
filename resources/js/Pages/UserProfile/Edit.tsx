import { DashboardLayout } from "@/Layouts/dashboard";
import { Head } from "@inertiajs/react";
import { DashboardContent } from "@/Layouts/dashboard";
import { Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { usePage } from "@inertiajs/react";
import { Roles, PagePropsData } from "@/types";
import BorrowerProfile from "@/sections/profile/BorrowerProfile";
import ImageUploadForm from "@/sections/profile/image-upload-form";
import StatusChip from "@/sections/profile/status-chip";
import DocumentUpload from "@/Components/uploads/upload-input";

// ----------------------------------------------------------------------

export default function Page({ profileData, imageUrl, documentUrl }) {
    console.log(profileData, imageUrl, documentUrl, "ewrger");
    const { roles } = usePage<PagePropsData>().props;
    const roleSlugs: Roles = roles?.user_roles ? roles.user_roles : [];

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
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <StatusChip status={profileData.status} />
                                <ImageUploadForm imageUrl={imageUrl} />
                            </Grid>

                            <Grid
                                size={{ xs: 12, sm: 8 }}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                {roleSlugs[0] === "borrower" && (
                                    <BorrowerProfile
                                        profileData={profileData}
                                        imageUrl={imageUrl}
                                        documentUrl={documentUrl}
                                    />
                                )}

                                <DocumentUpload documentUrl={documentUrl}/>
                            </Grid>
                        </Grid>
                    </Box>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}
