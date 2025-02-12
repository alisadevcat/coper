import React from "react";
import { Typography, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import img from "../../../assets/images/avatar-25.webp";
import { ImageUpload } from "@/sections/profile/image-upload";

export const AvatarColumn = () => {
    return (
        <Grid
            size={{ xs: 12, sm: 4 }}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap:"1rem"
            }}
        >
            <Box pt="2">
                <img src={img} alt="" />
            </Box>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <ImageUpload />
                <Typography variant="caption" color="text.secondary" sx={{ pt:"1rem" }}>
                    Allowed: .jpeg, .jpg, .png, .gif max size of 3 Mb
                </Typography>

                <Grid size={{ xs: 12 }} sx={{ pt: "1rem" }}>
                    <TextField
                        fullWidth
                        label="Your Status"
                        // value={profile.status}
                        value={"non verified"}
                        slotProps={{
                            input: {
                                readOnly: true, // Setting the input to be read-only
                            },
                        }}
                        variant="outlined"
                        size="small"
                    />
                </Grid>
            </Box>
        </Grid>
    );
};
