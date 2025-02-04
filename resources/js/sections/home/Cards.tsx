import { Box, Typography } from "@mui/material";
import { HandshakeIcon } from "@/Components/icons/HandshakeIcon";
import { HeartIcon } from "@/Components/icons/HeartIcon";
import { CurrencyIcon } from "@/Components/icons/CurrencyIcon";

export const Cards = () => {
    return (
        <>
            <Box className="screen ultra-dark">
                <Box className="container">
                    <Box className="row screen-container">
                        <Box className="col-sm-12 col-md-6 col-lg-4 card">
                            <Box>
                                <HandshakeIcon />
                            </Box>
                            <Box className="card-right">
                                <Typography className="card-title">
                                    Not just about monetary profit—it's about
                                    human cooperation
                                </Typography>
                                <Typography className="p">
                                    Just imagine: with your investments, you can
                                    change someone's life, business, and
                                    contribute to truly significant endeavours
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="col-sm-12 col-md-6 col-lg-4 card">
                            <Box>
                                <CurrencyIcon />
                            </Box>
                            <Box className="card-right">
                                <Typography className="card-title">
                                    Invest with us: Empower change, support
                                    ventures
                                </Typography>
                                <Typography className="p">
                                    There are no limits, regardless of race,
                                    skin colour, location, or socioeconomic
                                    status. Coper is a place for everyone
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="col-sm-12 col-md-6 col-lg-4 card">
                            <Box>
                                <HeartIcon />
                            </Box>
                            <Box className="card-right">
                                <Typography className="card-title">
                                    Your reputation: the currency of success in
                                    Coper
                                </Typography>
                                <Typography className="p">
                                    No longer do you need to feel ashamed to ask
                                    your loved ones for money before receiving
                                    your salary
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
