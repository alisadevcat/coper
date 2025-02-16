
import { DashboardLayout } from "@/Layouts/dashboard";
import { DashboardContent } from "@/Layouts/dashboard";
import { Typography, Box } from "@mui/material";
import { Roles, PagePropsData } from "@/types";
import BorrowerProfile from "./Partials/borrower-profile";
import ImageUploadForm from "./Partials/image-upload-form";
import DocumentUpload from "@/Components/uploads/document-upload-new";
import DocumentUploadForm from "./Partials/document-upload-form";
import StatusChip from "./Partials/status-chip";
import { Head, usePage } from "@inertiajs/react";
import Grid from "@mui/material/Grid2";

export type DocumentFileType = {
    file_url: string;
    file_path: string;
};

// ----------------------------------------------------------------------

export default function Page({ userProfileData, imageData, documentData }) {
    const { roles } = usePage<PagePropsData>().props;
    const roleSlugs: Roles = roles?.user_roles ? roles.user_roles : [];
    const profileData = JSON.parse(userProfileData);

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
                            {/* Image upload */}
                            <Grid size={{ xs: 12, sm: 4 }}>
                                <StatusChip status={profileData.status} />
                                <ImageUploadForm imageData={imageData} />
                            </Grid>
{/* Main Data fields */}
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
                                    />
                                )}
                                {/* Document upload */}
                                <Grid size={{ xs: 12 }}>
                                    <DocumentUploadForm documentData={documentData} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}
