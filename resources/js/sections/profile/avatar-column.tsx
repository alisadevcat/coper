import React from "react";
import { Typography, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { ImageUpload } from "@/sections/profile/image-upload";
import StatusChip from "./status-chip";

export const AvatarColumn = () => {
    return (
        <Grid size={{ xs: 12, sm: 4 }}>
            <ImageUpload />
            <StatusChip status="unverified" />
            {/* {profile.status} */}
        </Grid>
    );
};
