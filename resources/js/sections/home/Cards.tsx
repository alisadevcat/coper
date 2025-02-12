import { Box, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { cardsData } from "@/_data";
import { Card } from "./Card";

export const Cards = () => {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "var(--ultra-dark)",
                    color: "var(--white)",
                    width: "100%",
                }}
            >
                <Box className="container">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingY: "72px",
                            mx: "auto",
                            maxWidth: "1200px",
                            gap: "1rem",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                paddingY: "40px",
                                paddingX: "60px",
                                gap: "45px",
                                justifyContent: "center",
                            },
                        }}
                    >
                        {cardsData.map((card) => (
                            <Card card={card} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
};