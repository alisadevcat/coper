import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const AboutUsDots = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "64px",
                [theme.breakpoints.down("md")]: {
                    display: "none",
                },
            }}
        >
            <Box className="dot-contaner">
                <Box className="dot"></Box>
            </Box>
            <Box className="dot-contaner">
                <Box className="dot"></Box>
            </Box>
            <Box className="dot-contaner">
                <Box className="dot"></Box>
            </Box>
        </Box>
    );
};
