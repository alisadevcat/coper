
import { DashboardLayout } from "@/Layouts/dashboard";
import { DashboardContent } from "@/Layouts/dashboard";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Head } from "@inertiajs/react";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <DashboardLayout>
            <Head title="Personal settings" />
            <DashboardContent maxWidth="xl">
                <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
                    My Account
                </Typography>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Box sx={{ padding: "1rem" }}>
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <Box sx={{ padding: "1rem" }}>
                            <UpdatePasswordForm />
                        </Box>
                    </Grid>
                </Grid>
            </DashboardContent>
        </DashboardLayout>
    );
}
