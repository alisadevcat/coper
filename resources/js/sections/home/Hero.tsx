import img from "assets/home/phone_splash.svg";
import bgImg from "assets/background/home-hero.svg";
import ApplicationLogo from "@/Components/icons/ApplicationLogo";
import { Box, Button, Typography } from "@mui/material";
import Container from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ClassNames } from "@emotion/react";

export const Hero = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                height: "100vh",
                maxHeight: "910px",
                width: "100vw",
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                [theme.breakpoints.down("md")]: { height: "unset", maxHeight: 'unset'},
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "var(--s4)",
                    paddingRight: "var(--s4)",
                    [theme.breakpoints.down("md")]: { flexDirection: "column", justifyContent: "center" },
                }}
            >
                <Box
                    sx={{
                        width: 281,
                        height: 568,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 'var(--s3)',
                        [theme.breakpoints.down("md")]: {
                            height: "480px",
                            marginTop: "var(--s5)",
                            marginBottom: "var(--s4)",
                        },
                    }}
                >
                    <img
                        src={img}
                        alt="Phone"
                        style={{
                            width: "100%",
                            height: "100%",
                            filter: "drop-shadow(0px 0px 10px var(--ultra-dark))",
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        marginLeft: "calc(var(--s5) * 2)",
                        color: "white",
                        maxWidth: "480px",
                        [theme.breakpoints.down("md")]: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: 0,
                            marginBottom: "var(--s5)",
                        },
                    }}
                >
                    <Box sx={{ width: 314, height: 73, mb: 3 }}>
                        <ApplicationLogo
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                    <Box className="heading-2" sx={{ marginBottom: '40px', lineHeight: '1.3', [theme.breakpoints.down("md")]: { fontSize: "23px", textAlign:'center'} }} >
                        We assist people in challenging financial situations
                    </Box>
                    <Box sx={{ fontSize:'21px', lineHeight: '25px', opacity: '0.7', fontWeight: "400", maxWidth: "400px" , [theme.breakpoints.down("md")]: { fontSize: "16px", textAlign:'center'}}}>
                        Coper P2P fintech project means co-operation between
                        people all over the planet
                    </Box>
                    <Box className="buttons"sx={{ marginTop: '40px', display: 'flex', gap:'12px'}}>
                        <a href="#borrow" className="button-home primary">
                            To borrow money
                        </a>
                        <a href="#lend" className="button-home error">
                            To lend money
                        </a>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
