import React from "react";
import phone4 from "../../../assets/ph_screen4.svg";
import phone5 from "../../../assets/ph_screen5.svg";
import phone6 from "../../../assets/ph_screen6.svg";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ToLendMoney = () => {
    const theme = useTheme();
    return (
        <Box
            id="lend"
            sx={{
                color: "var(--white)",
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
                <h2 className="heading-2">to lend money</h2>

                <Box
                    sx={{
                        display: "flex",
                        marginBottom: "var(--s5)",
                        justifyContent: "space-between",
                        gap: "16px",
                        paddingTop: "var(--s5)",
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
                            className="sign lend"
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
                            <img src={phone4} alt="" className="phone ph1" />
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
                            className="sign lend"
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
                            <img src={phone5} alt="" className="phone ph2" />
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
                            className="sign lend"
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
                            <img src={phone6} alt="" className="phone ph3" />
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
                        <li className="mb-3">
                            <Typography className="paragraph">
                                In this Box, you can quickly register and
                                request a micro-loan for any purpose from other
                                participants of the Coper platform, bypassing
                                unnecessary complexities.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="paragraph">
                                There is no need to provide a lot of documents
                                to check your credit history or solvency.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="paragraph mb-3">
                                Your reputation is your key to obtaining the
                                necessary funds for your purposes in just a few
                                minutes.
                            </Typography>
                        </li>
                        <li>
                            <Typography className="paragraph mb-3">
                                Your reputation is your key to obtaining the
                                necessary funds for your purposes in just a few
                                minutes.
                            </Typography>
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
};
export default ToLendMoney;
