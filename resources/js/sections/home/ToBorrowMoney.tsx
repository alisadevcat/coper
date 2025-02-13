import phone1 from "assets/home/ph_screen1.svg";
import phone2 from "assets/home/ph_screen2.svg";
import phone3 from "assets/home/ph_screen3.svg";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ToBorrowMoney = () => {
    const theme = useTheme();
    return (
        <Box
            id="borrow"
            sx={{
                color: "var(--white)",
                backgroundColor: "var(--lighter)",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1200px",
                    mx: "auto",
                    paddingY: "var(--s5)",
                    paddingLeft: "var(--s4)",
                    paddingRight: "var(--s4)",
                    [theme.breakpoints.down("md")]: {
                        paddingX: "var(--s5)", //?
                    },
                }}
            >
                <h2 className="heading-2">to borrow money</h2>

                <Box
                    sx={{
                        display: "flex",
                        marginBottom: "var(--s5)",
                        justifyContent: "space-between",
                        paddingTop: "var(--s5)",
                        gap: "16px",
                        [theme.breakpoints.down("md")]: {
                            flexDirection: "column",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "16px",
                            [theme.breakpoints.down("md")]: {
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Box
                            className="sign borrow"
                            sx={{
                                maxWidth: "48px",
                                [theme.breakpoints.down("md")]: {
                                    maxWidth: "94px",
                                },
                            }}
                        >
                            <span>1</span>
                        </Box>

                        <Box>
                            <img src={phone1} alt="" className="phone ph1" />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "16px",
                            [theme.breakpoints.down("md")]: {
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Box
                            className="sign borrow"
                            sx={{
                                maxWidth: "48px",
                                [theme.breakpoints.down("md")]: {
                                    maxWidth: "94px",
                                },
                            }}
                        >
                            <span>2</span>
                        </Box>
                        <Box>
                            <img src={phone2} alt="" className="phone ph2" />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "16px",
                            [theme.breakpoints.down("md")]: {
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Box
                            className="sign borrow"
                            sx={{
                                maxWidth: "48px",
                                [theme.breakpoints.down("md")]: {
                                    maxWidth: "94px",
                                },
                            }}
                        >
                            <span>3</span>
                        </Box>

                        <Box>
                            <img src={phone3} alt="" className="phone ph3" />
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        [theme.breakpoints.down("md")]: {
                            justifyContent: "center",
                            alignItems: "center",
                        },
                    }}
                >
                    <ul className="list">
                        <li>
                            <Typography className="paragraph mb3">
                                On the Coper platform, you can easily register
                                and provide a loan to another participant on
                                terms that are advantageous to you, surpassing
                                global deposit standards.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="paragraph mb3">
                                Choose your borrower and get money from them
                                immediately, avoiding unnecessary bureaucratic
                                obstacles and cumbersome procedures.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="paragraph mb3">
                                In addition to high returns, you engage in true
                                investments ina specific individual, their
                                ideas, and activities, rather than anonymous
                                corporations with undisclosed beneficiaries.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="paragraph mb3">
                                Behind every successful project is always a
                                talented individual who occasionally needs your
                                support. Believe in human capital, invest in
                                specific individuals and their ideas, and become
                                part of a mutually beneficial endeavour.
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
};
export default ToBorrowMoney;
