import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CardData } from "@/_data";
import { HandshakeIcon } from "@/Components/icons/HandshakeIcon";
import { HeartIcon } from "@/Components/icons/HeartIcon";
import { CurrencyIcon } from "@/Components/icons/CurrencyIcon";

const icons:{ [key: string]: React.ReactElement } = {
    heart: <HeartIcon />,
    currency: <CurrencyIcon />,
    handshake: <HandshakeIcon />,
};

export const Card = ({ card }: { card: CardData }) => {
    const theme = useTheme();
    const icon = icons[card.icon];

    return (
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
                {icon}
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
                <Typography variant="h4" className="heading-4">
                    {card.heading}
                </Typography>
                <Typography className="small-paragraph">
                    {card.description}
                </Typography>
            </Box>
            {/* <Box
                sx={{
                    width: "48",
                    height: "48",
                    [theme.breakpoints.down("md")]: {
                        width: "60px",
                        height: "60px",
                    },
                }}
            >
                <HandshakeIcon />
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
                <Typography variant="h4" className="heading-4">
                    Not just about monetary profit—it's about human cooperation
                </Typography>
                <Typography className="small-paragraph">
                    Just imagine: with your investments, you can change
                    someone's life, business, and contribute to truly
                    significant endeavours
                </Typography>
            </Box> */}
        </Box>
    );
};
