
import Person1 from "../../../../assets/zakh.jpg";
import Person2 from "../../../../assets/bvoice.jpg";
import Person3 from "../../../../assets/odo.jpg";
import { Box } from "@mui/material";
import { AboutUsDots } from "./AboutUsDots";
import { useTheme } from "@mui/material/styles";

export const AboutCards = () => {
    const theme = useTheme();
    return (
        <Box
            className="photos"
            sx={{
                display: "flex",
                gap: "var(--s5)",
                justifyContent: "center",
                paddingBottom: "24px",
                paddingTop: "75px",

            }}
        >
            <AboutUsDots />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "64px",
                    [theme.breakpoints.down("md")]: {
                        gap: "0",
                        justifyContent: "center",
                    },
                }}
            >
                <Box>
                    <img src={Person1} alt="Zahaar" className="avatar" />
                </Box>
                <Box>
                    <img src={Person2} alt="Zahaar" className="avatar" />
                </Box>
                <Box>
                    <img src={Person3} alt="Zahaar" className="avatar" />
                </Box>
            </Box>
            <AboutUsDots />
        </Box>
    );
};
