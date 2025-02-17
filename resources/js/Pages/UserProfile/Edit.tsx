import { useState, useEffect } from "react";
import { DashboardLayout } from "@/Layouts/dashboard";
import { DashboardContent } from "@/Layouts/dashboard";
import { Roles, PagePropsData } from "@/types";
import ImageUploadForm from "./Partials/ImageUploadForm";
import StatusChip from "./Partials/StatusChip";
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

     // Load the tab index from localStorage when the component mounts
     useEffect(() => {
        const savedTabIndex = localStorage.getItem('activeTabIndex');
        if (savedTabIndex !== null) {
            setTabIndex(Number(savedTabIndex));
        }
    }, []);

    // Save the tab index to localStorage whenever it changes
    const handleTabChange = (e, newIndex) => {
        setTabIndex(newIndex);
        localStorage.setItem('activeTabIndex', newIndex); // Save to localStorage
    };


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
                        sx={{ padding: 3 }}
                    >
                        {/* Sidebar */}
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <ImageUploadForm imageData={imageData} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
                            {/* Header */}
                            <Typography variant="h4" sx={{ mb: 3 }}>
                                My Profile
                            </Typography>
                            {/* <Box display="flex" gap="1rem">
                                <Link href="/verify">Verify you profile</Link>
                            </Box> */}
                            {/* Tabs */}
                            <Card
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    mt: 3,
                                    padding: 3,
                                    width: "100%",
                                    margin: "0 auto",
                                }}
                            >
                                <Tabs
                                    value={tabIndex}
                                    variant="scrollable"
                                    centered
                                    onChange={handleTabChange}
                                >
                                    <Tab label="Personal Details" />
                                    <Tab label="Banking & Crypto Details" />
                                    <Tab label="Documents" />
                                </Tabs>
                                <Box
                                    sx={{
                                        flexGrow: 1, // Makes sure the content fills the card
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between", // Distributes space evenly
                                        padding: 3,
                                        overflow: "hidden",
                                        minHeight: "700px", // Adjust this based on expected content
                                        width: "100%",
                                    }}
                                >
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
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </DashboardContent>
            </DashboardLayout>
        </>
    );
}
