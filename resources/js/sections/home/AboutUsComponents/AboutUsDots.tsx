import React from 'react'
import { Box } from '@mui/material';

export const AboutUsDots = () => {
  return (
    <Box
    sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "64px",
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
  )
}
