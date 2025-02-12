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

                        {/* <Box
                            sx={{
                                display: "flex",
                                [theme.breakpoints.down("md")]: {
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "1rem",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "48",
                                    height: "48",
                                    [theme.breakpoints.down("md")]: {
                                        width: "60px",
                                        height: "60px",
                                    },
                                }}
                            >
                                <CurrencyIcon />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    maxwWidth: "261px",
                                    ml: "1rem",
                                    [theme.breakpoints.down("md")]: {
                                        ml: 0,
                                        gap: "19px",
                                        textAlign: "center",
                                    },
                                }}
                            >
                               <Typography variant="h4"
                              className="heading-4"
                                >
                                    Invest with us: Empower change, support
                                    ventures
                                </Typography>
                                <Typography className="small-paragraph">
                                    There are no limits, regardless of race,
                                    skin colour, location, or socioeconomic
                                    status. Coper is a place for everyone
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                [theme.breakpoints.down("md")]: {
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "1rem",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "48",
                                    height: "48",
                                    [theme.breakpoints.down("md")]: {
                                        width: "60px",
                                        height: "60px",
                                    },
                                }}
                            >
                                <HeartIcon />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    maxwWidth: "261px",
                                    ml: "1rem",
                                    [theme.breakpoints.down("md")]: {
                                        ml: 0,
                                        gap: "19px",
                                        textAlign: "center",
                                    },
                                }}
                            >
                                 <Typography variant="h4"
                                    className="heading-4"
                                >
                                    Your reputation: the currency of success in
                                    Coper
                                </Typography>
                                <Typography className="small-paragraph">
                                    No longer do you need to feel ashamed to ask
                                    your loved ones for money before receiving
                                    your salary
                                </Typography>
                            </Box>
                        </Box> */}
                    </Box>
                </Box>
            </Box>
        </>
    );
};
