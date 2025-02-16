import { useState } from "react";
import { DashboardLayout } from "@/Layouts/dashboard";
import { DashboardContent } from "@/Layouts/dashboard";
import { Roles, PagePropsData } from "@/types";
import ImageUploadForm from "./Partials/ImageUploadForm";
import StatusChip from "./Partials/status-chip";
import { Head, usePage, Link } from "@inertiajs/react";
import { Box, Typography, Button, Card, Tabs, Tab } from "@mui/material";
import PersonalDetails from "./Partials/PersonalDetails";
import BankingDetails from "./Partials/BankingDetails";
import DocumentUpload from "./Partials/DocumentUpload";
import Grid from "@mui/material/Grid2";

export type DocumentFileType = {
    file_url: string;
    file_path: string;
};

// ----------------------------------------------------------------------

export default function Page({ userProfileData, imageData, documentData }) {
    const [tabIndex, setTabIndex] = useState(0);
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
                    <Grid
                        container
                        spacing={3}
                        sx={{ margin: "auto", padding: 3 }}
                    >
                        {/* Sidebar */}
                        <Grid size={{ xs: 12, sm: 3 }}>
                            <ImageUploadForm imageData={imageData} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 9 }}>
                            {/* Header */}
                            <Typography variant="h4" sx={{ mb: 3 }}>
                                My Profile
                            </Typography>
                            <Box display="flex" gap="1rem">
                                <StatusChip status={profileData.status} />
                                <Link href="/verify">Verify</Link>
                            </Box>
                            {/* Tabs */}
                            <Card
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    mt: 3,
                                    padding: 3,
                                }}
                            >
                                <Tabs
                                    value={tabIndex}
                                    onChange={(e, newIndex) =>
                                        setTabIndex(newIndex)
                                    }
                                >
                                    <Tab label="Personal Details" />
                                    <Tab label="Banking & Crypto Details" />
                                    <Tab label="Documents" />
                                </Tabs>
                                {/* </Card> */}
                                {/* Content Sections */}
                                {/* <Card
                                sx={{
                                    mt: 3,
                                    padding: 3,
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    boxShadow: 2,
                                }}
                            > */}
                                <Box sx={{ mt: 3 }}>
                                    {tabIndex === 0 && (
                                        <PersonalDetails
                                            profileData={profileData}
                                        />
                                    )}
                                    {tabIndex === 1 && (
                                        <BankingDetails
                                            profileData={profileData}
                                        />
                                    )}
                                    {tabIndex === 2 && (
                                        <DocumentUpload
                                            documentData={documentData}
                                        />
                                    )}
                                    {/* {tabIndex === 3 && (
                                <ImageUploadForm imageData={imageData} />
                            )} */}
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}

{
    /* <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
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
    {/* Image upload */
}
// <Grid size={{ xs: 12, sm: 4 }}>
//     <StatusChip status={profileData.status} />
//     <ImageUploadForm imageData={imageData} />
// </Grid>
{
    /* Main Data fields */
}
//     <Grid
//         size={{ xs: 12, sm: 8 }}
//         sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//         }}
//     >
//         {roleSlugs[0] === "borrower" && (
//             <BorrowerProfile
//                 profileData={profileData}
//             />
//         )}
//         {/* Document upload */}
//         <Grid size={{ xs: 12 }}>
//             <DocumentUploadForm
//                 documentData={documentData}
//             />
//         </Grid>
//     </Grid>
// </Grid>
// </Box> */}
