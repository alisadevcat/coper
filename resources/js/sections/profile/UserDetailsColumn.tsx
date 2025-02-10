import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, TextField, Button } from "@mui/material";
import DocumentUpload from "@/Components/uploads/upload-input";

export const UserDetailsColumn = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    defaultValue="Lucian Obrien"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    defaultValue="ashlynn.ohara62@gmail.com"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    defaultValue="(416) 555-0198"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Country"
                                    defaultValue="Canada"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="State/Region"
                                    defaultValue="Virginia"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="City"
                                    defaultValue="Rancho Cordova"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    defaultValue="908 Jack Locks"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Zip/Code"
                                    defaultValue="85807"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Company"
                                    defaultValue="Gleichner, Mueller and Tromp"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="Role"
                                    defaultValue="CTO"
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid>
                                <DocumentUpload />
                            </Grid>
                            <Grid
                                sx={{
                                    mt: 2,
                                }}
                            >
                                <Button variant="contained">
                                    Save Changes
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
