
import { Box, Container, Typography } from "@mui/material";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "var(--white)",
        py: 4,
        textAlign: "center",
        opacity:0.5,
        fontSize:"14px",
        ml:"var(--s1)"
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" gutterBottom>
          <span>{year}</span> Coper P2P fintech project
        </Typography>
        <Typography variant="body2">
          All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};
