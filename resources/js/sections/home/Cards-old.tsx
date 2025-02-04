import { Box, Container, Stack, Card, CardContent } from "@mui/material";
import { HandshakeIcon } from "@/Components/icons/HandshakeIcon";
import { HeartIcon } from "@/Components/icons/HeartIcon";
import { CurrencyIcon } from "@/Components/icons/CurrencyIcon";

const Cards = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#121212",
                py: 8,
                width: "100%",
                mx: "auto",
            }}
        >
            <Container sx={{ maxWidth: "1140px" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "38px", // Ensures spacing between cards
                        textAlign: "center",
                    }}
                >
                    {/* Card 1 */}
                    <Card
                        sx={{
                            width: { xs: "100%", sm: "48%", md: "30%" }, // Responsive width
                            backgroundColor: "transparent",
                            boxShadow: "none",
                        }}
                    >
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: "38px",
                            }}
                        >
                            <Box>
                                <HandshakeIcon />
                            </Box>

                            <Box
                                sx={{
                                    color: "white",
                                    textAlign: "left",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "19px",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                    }}
                                >
                                    Not just about monetary profit—it's about
                                    human cooperation
                                </Box>
                                <Box
                                    sx={{ fontWeight: "500", fontSize: "16px" }}
                                >
                                    Just imagine: with your investments, you can
                                    change someone's life, business, and
                                    contribute to truly significant endeavors.
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            width: { xs: "100%", sm: "48%", md: "30%" }, // Responsive width
                            backgroundColor: "transparent",
                            boxShadow: "none",
                        }}
                    >
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: "38px",
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <CurrencyIcon />
                            </Box>

                            <Box
                                sx={{
                                    color: "white",
                                    textAlign: "left",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "19px",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                    }}
                                >
                                 Not just about monetary profit—it's about human cooperation
                                </Box>
                                <Box
                                    sx={{ fontWeight: "500", fontSize: "16px" }}
                                >
                                    There are no limits, regardless of race,
                                    skin colour, location, or socioeconomic
                                    status. Coper is a place for everyone
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card
                        sx={{
                            width: { xs: "100%", sm: "48%", md: "30%" }, // Responsive width
                            backgroundColor: "transparent",
                            boxShadow: "none",
                        }}
                    >
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                gap: "38px",
                            }}
                        >
                            <Box>
                                <HeartIcon />
                            </Box>

                            <Box
                                sx={{
                                    color: "white",
                                    textAlign: "left",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "19px",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                    }}
                                >
                                    Your reputation: the currency of success in
                                    Coper
                                </Box>
                                <Box
                                    sx={{ fontWeight: "500", fontSize: "16px" }}
                                >
                                    No longer do you need to feel ashamed to ask
                                    your loved ones for money before receiving
                                    your salary
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    );
};
export default Cards;
