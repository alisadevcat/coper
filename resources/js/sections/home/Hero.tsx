import img from "../../../assets/phone_splash.svg";
import bgImg from "../../../assets/background/home-hero.svg";
import ApplicationLogo from "@/Components/icons/ApplicationLogo";
import { Box, Typography, Button, Stack } from "@mui/material";

export const Hero = () => {
    return (

        <Box
        sx={{
          height: "calc(100vh - var(--nav-height))",
          width: "100vw",
          backgroundImage: "url(../../../assets/background/home-hero.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={4}
          px={4}
        >
          <Box sx={{ width: 281, height: 568, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={img} alt="Phone" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0px 0px 10px var(--ultra-dark))" }} />
          </Box>

          <Box sx={{ color: "white", ml: { md: 128 } }}>
            <Box sx={{ width: 314, height: 73, mb: 3 }}>
              <ApplicationLogo style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </Box>
            <Box
              sx={{ fontSize: "var(--h2)", fontWeight: 500, opacity: 0.7, mb: 5, maxWidth: 480 }}
            >
              We assist people in challenging financial situations
            </Box>
            <Box
              sx={{ fontSize: "var(--h3)", lineHeight: "25px", maxWidth: 400 }}
            >
              Coper P2P fintech project means co-operation between people all over
              the planet
            </Box>
            <Stack direction="row" spacing={2} mt={4}>
              <Button
                variant="contained"
                href="#borrow"
                sx={{
                  whiteSpace: "nowrap",
                  width: "max-content",
                  height: 40,
                  color: "var(--white)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 8,
                  padding: "11px 24px 13px",
                  backgroundColor: "var(--primary)",
                  '&:hover': {
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
                  height: 40,
                  color: "var(--white)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 8,
                  padding: "11px 24px 13px",
                  backgroundColor: "var(--error)",
                  '&:hover': {
                    opacity: 0.8,
                    transition: "opacity 0.25s ease-out",
                  },
                }}
              >
                To lend money
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
        // <div className="main-screen">
        //     <section className="main-screen-wrapper">
        //         <div className="phone">
        //             <img src={img} alt="" />
        //         </div>
        //         <div className="right-side">
        //             <div className="logo"></div>
        //             <h2 className="h2 slogan">
        //                 We assist people in challenging financial situations
        //             </h2>
        //             <p className="h3 description">
        //                 Coper P2P fintech project means co-operation between
        //                 people all over the planet
        //             </p>
        //             <section className="buttons">
        //                 <a href="#borrow" className="button primary">
        //                     To borrow money
        //                 </a>
        //                 <a href="#lend" className="button error">
        //                     To lend money
        //                 </a>
        //             </section>
        //         </div>
        //     </section>
        // </div>
    );
};
