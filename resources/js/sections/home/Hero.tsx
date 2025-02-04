import img from "../../../assets/phone_splash.svg";
import bgImg from "../../../assets/background/home-hero.svg";
import ApplicationLogo from "@/Components/icons/ApplicationLogo";
import { Box, Button, Typography } from "@mui/material";

export const Hero = () => {
    return (
        <Box className="main-screen">
            <Box className="main-screen-wrapper">
                <Box
                    sx={{
                        width: 281,
                        height: 568,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={img}
                        alt="Phone"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            filter: "drop-shadow(0px 0px 10px var(--ultra-dark))",
                        }}
                    />
                </Box>
                <Box className="right-side">
                    <Box sx={{ width: 314, height: 73, mb: 3 }}>
                        <ApplicationLogo
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                    <Box className="h2 slogan">
                        We assist people in challenging financial situations
                    </Box>
                    <Box className="h3 description">
                        Coper P2P fintech project means co-operation between
                        people all over the planet
                    </Box>
                    <Box className="buttons">
                        <Button
                            variant="contained"
                            href="#borrow"
                            sx={{
                                whiteSpace: "nowrap",
                                width: "max-content",
                                height: "40px",
                                color: "var(--white)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 600,
                                borderRadius: "8px",
                                padding: "8px 24px", // Reduce vertical padding to fit 40px height
                                minWidth: "auto", // Prevent Material UI from forcing min width
                                backgroundColor: "var(--primary)",
                                "&:hover": {
                                    opacity: 0.8,
                                    transition: "opacity 0.25s ease-out",
                                },
                            }}
                        >
                            To borrow money
                        </Button>
                        <Button
                            variant="contained"
                            href="#lend"
                            sx={{
                                whiteSpace: "nowrap",
                                width: "max-content",
                                height: "40px",
                                color: "var(--white)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 600,
                                borderRadius: "8px",
                                padding: "8px 24px", // Reduce vertical padding to fit 40px height
                                minWidth: "auto", // Prevent Material UI from forcing min width
                                backgroundColor: "var(--error)",
                                "&:hover": {
                                    opacity: 0.8,
                                    transition: "opacity 0.25s ease-out",
                                },
                            }}
                        >
                            To lend money
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>

        // <div classNameName="main-screen">
        //     <section classNameName="main-screen-wrapper">
        //         <div classNameName="phone">
        //             <img src={img} alt="" />
        //         </div>
        //         <div classNameName="right-side">
        //             <div classNameName="logo"></div>
        //             <h2 classNameName="h2 slogan">
        //                 We assist people in challenging financial situations
        //             </h2>
        //             <p classNameName="h3 description">
        //                 Coper P2P fintech project means co-operation between
        //                 people all over the planet
        //             </p>
        //             <section classNameName="buttons">
        //                 <a href="#borrow" classNameName="button primary">
        //                     To borrow money
        //                 </a>
        //                 <a href="#lend" classNameName="button error">
        //                     To lend money
        //                 </a>
        //             </section>
        //         </div>
        //     </section>
        // </div>
    );
};



   //   <Box
        //   sx={{
        //     height: "calc(100vh - var(--nav-height))",
        //     width: "100vw",
        //     backgroundImage: `url(${bgImg})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundPosition: "right bottom",
        //     backgroundSize: "cover",
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //   }}
        // >
        //   <Stack
        //     direction={{ xs: "column", md: "row" }}
        //     alignItems="center"
        //     spacing={15}
        //     px={4}
        //   >
        //     <Box sx={{ width: 281, height: 568, display: "flex", justifyContent: "center", alignItems: "center" }}>
        //       <img src={img} alt="Phone" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0px 0px 10px var(--ultra-dark))" }} />
        //     </Box>

        //     <Box sx={{ color: "white", ml: { md: 128 } }}>

        //       <Box sx={{ width: 314, height: 73, mb: 3 }}>
        //         <ApplicationLogo style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        //       </Box>
        //       <Box
        //         sx={{ fontSize: "42px", fontWeight: 500, lineHeight: "42px", opacity: 0.7, mb: 5, maxWidth: 480 }}
        //       >
        //         We assist people in challenging financial situations
        //       </Box>
        //       <Box
        //         sx={{ fontSize: "24px", lineHeight: "25px", maxWidth: 400 }}
        //       >
        //         Coper P2P fintech project means co-operation between people all over
        //         the planet
        //       </Box>
        //       <Stack direction="row" spacing={2} mt={4}>
        //         <Button
        //           variant="contained"
        //           href="#borrow"
        //           sx={{
        //             whiteSpace: "nowrap",
        //             width: "max-content",
        //             height: "40px",
        //             color: "var(--white)",
        //             display: "flex",
        //             justifyContent: "center",
        //             alignItems: "center",
        //             textTransform: "uppercase",
        //             textDecoration: "none",
        //             fontSize: "14px",
        //             fontWeight: 600,
        //             borderRadius: "8px",
        //             padding: "8px 24px", // Reduce vertical padding to fit 40px height
        //             minWidth: "auto", // Prevent Material UI from forcing min width
        //             backgroundColor: "var(--primary)",
        //             '&:hover': {
        //               opacity: 0.8,
        //               transition: "opacity 0.25s ease-out",
        //             },
        //           }}
        //         >
        //           To borrow money
        //         </Button>
        //         <Button
        //           variant="contained"
        //           href="#lend"
        //           sx={{
        //             whiteSpace: "nowrap",
        //             width: "max-content",
        //             height: "40px",
        //             color: "var(--white)",
        //             display: "flex",
        //             justifyContent: "center",
        //             alignItems: "center",
        //             textTransform: "uppercase",
        //             textDecoration: "none",
        //             fontSize: "14px",
        //             fontWeight: 600,
        //             borderRadius: "8px",
        //             padding: "8px 24px", // Reduce vertical padding to fit 40px height
        //             minWidth: "auto", // Prevent Material UI from forcing min width
        //             backgroundColor: "var(--secondary)",
        //             "&:hover": {
        //               opacity: 0.8,
        //               transition: "opacity 0.25s ease-out",
        //             },
        //           }}
        //         >
        //           To lend money
        //         </Button>
        //       </Stack>
        //     </Box>
        //   </Stack>
        // </Box>