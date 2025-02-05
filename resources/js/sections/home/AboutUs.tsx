import { Grid2 } from "@mui/material"; // Import Grid2 from the latest MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Person1 from "../../../assets/zakh.jpg";
import Person2 from "../../../assets/bvoice.jpg";
import Person3 from "../../../assets/odo.jpg";
import Grid from "@mui/material/Grid2";

const AboutUs = () => {
    return (
        <Box
            id="about"
            sx={{
                backgroundColor: "var(--ultra-dark",
                mx: "auto",
                width: "100%",
                maxWidth: "1200px",
            }}
        >
            <Box sx={{ color: "white", paddingBottom: "var(--s5)" }}>
                <Box sx={{ marginBottom: "var(--s5)" }}>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: "500",
                                opacity: "0.7",
                                fontSize: "var(--h2)",
                                marginBottom: "var(--s4)",
                            }}
                        >
                            be cooperative!
                        </Typography>

                        <Typography
                            sx={{

                                lineHeight: 1.2,
                                fontSize: "var(--p)",
                                marginBottom: "var(--s3)",
                            }}
                        >
                                 The world today revolves around online interaction,
                            with over 80% of the population utilising various
                            online services. However, there's a common need that
                            unites everyone: money. Regardless of religion,
                            race, or language, everyone requires financial means
                            for various purposes. Yet often, there's a crucial
                            shortage of funds when needed most.
                        </Typography>

                        <Typography
                            sx={{

                                lineHeight: 1.2,
                                fontSize: "var(--p)",
                                marginBottom: "var(--s3)",
                            }}
                        >
                            For instance, someone might need money to pay rent
                            or buy groceries, while for others, it's essential
                            capital for a startup. In a world where you can book
                            a round-the-world trip from home, why not have a
                            service where people can help each other in
                            difficult times? That's precisely what Coper offers!
                            After a quick registration, you can access
                            micro-loans provided by other participants,
                            bypassing banking checks. On the platform, both
                            borrowers and lenders register for mutually
                            beneficial cooperation.
                            </Typography>
                            <Typography
                            sx={{

                                lineHeight: 1.2,
                                fontSize: "var(--p)",
                            }}
                        >
                            Coper is the future of financial services, where
                            your credit rating isn't as crucial as your ability
                            to lend a hand or receive help when needed.
                            </Typography>
                    </Box>
                </Box>
                <Box sx={{ marginBottom: "var(--s5)" }}>
                    <Box className="col-sm">
                        <Typography
                            sx={{
                                fontWeight: "500",
                                opacity: "0.7",
                                fontSize: "var(--h2)",
                                marginBottom: "var(--s4)",
                            }}
                        >
                            about us{" "}
                        </Typography>
                        <p className="p gutterbottom">
                            Coper was created by a team of promising developers
                            forced to leave Russia due to their disagreement
                            with the war unleashed by the Russian government in
                            Ukraine. Facing challenges in finding a new home and
                            bureaucratic hurdles in settling elsewhere, Coper
                            emerged from the collaboration and results of
                            adapting to a new life beyond their homeland.
                        </p>
                        <p className="p gutterbottom">
                            The idea behind Coper arose from adapting to life in
                            a new environment, where people strive to help each
                            other and contribute to society. The name "Coper" is
                            a contraction of "Cooperation," emphasizing
                            interaction and support. Through their struggles,
                            the project's creators realized that the quickest
                            way to solve problems is to turn to specific
                            individuals, friends, comrades, rather than abstract
                            organizations that might put you on a waiting list.
                            Only a specific person here and now can help solve
                            an urgent problem quickly and without unnecessary
                            questions.
                        </p>
                        <p className="p">
                            The idea's author and project founder: Zakhar
                            Ivachev. Co-founders of the project: Maxim Odoevsky
                            and Vasily Konstantinovsky.
                        </p>
                    </Box>
                </Box>

                <Box
                    className="photos"
                    sx={{
                        display: "flex",
                        gap: "var(--s5)",
                        justifyContent: "center",
                        marginBottom: "var(--s5)",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "64px",
                        }}
                    >
                        <Box className="dot-contaner">
                            <Box className="dot"></Box>
                        </Box>
                        <Box className="dot-contaner">
                            <Box className="dot"></Box>
                        </Box>
                        <Box className="dot-contaner">
                            <Box className="dot"></Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "64px",
                        }}
                    >
                        <Box className="col-xs-1">
                            <img
                                src={Person1}
                                alt="Zahaar"
                                className="avatar zakh"
                            />
                        </Box>
                        <Box className="col-xs-1">
                            <img
                                src={Person2}
                                alt="Zahaar"
                                className="avatar odo"
                            />
                        </Box>
                        <Box className="col-xs-1">
                            <img
                                src={Person3}
                                alt="Zahaar"
                                className="avatar bvoice"
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "64px",
                        }}
                    >
                        <Box className="dot-contaner">
                            <Box className="dot"></Box>
                        </Box>
                        <Box className=" dot-contaner">
                            <Box className="dot"></Box>
                        </Box>
                        <Box className="dot-contaner">
                            <Box className="dot"></Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="row">
                    <Typography
                        sx={{
                            fontWeight: "500",
                            opacity: "0.7",
                            fontSize: "var(--h2)",
                        }}
                    >
                        <h2 className="h2 gutterbottom-md">mission</h2>
                    </Typography>
                    <p className="p gutterbottom">
                        We aim to create a platform that unites people to
                        provide assistance and support in various aspects of
                        life, especially in challenging times. From supporting
                        small businesses in Africa to helping students pay for
                        education, Coper assists people in different corners of
                        the world.
                    </p>
                    <p className="p gutterbottom">
                        On one hand, our service isn't just about facilitating
                        credit cooperation between two specific individuals but
                        also about providing assistance and support when needed.
                        We're creating a service that helps small businesses,
                        students, mothers, fathers, cultural and artistic
                        figures in their hour of need, serving all layers of
                        society, regardless of race, nationality, citizenship,
                        or religion.
                    </p>
                    <p className="p gutterbottom">
                        On the other hand, our service involves investors,
                        ensuring trust. The program not only offers the
                        opportunity to earn above-market returns but also allows
                        individuals to feel involved in doing something
                        genuinely good by providing assistance and support in
                        difficult times. After all, for someone, 100 euros might
                        be just a casino bet they'll lose with a 50% chance,
                        while for someone else, such as a small business owner
                        in an African country, it could be their weekly
                        turnover, which could grow into something more
                        significant thanks to timely investments. Project Coper
                        is a cooperation platform born out of the need for help
                        and support in difficult times. We bring people
                        together, offering the opportunity to assist small
                        businesses, students, families, and other segments of
                        society. Our mission is to promote cooperation and
                        create good deeds that benefit the entire world.
                    </p>
                    <p className="p">
                        Transparency and safety are our priorities. We develop
                        strict rules and checks to ensure safety and
                        transparency for all project participants, minimizing
                        risks and guaranteeing trust.
                    </p>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutUs;
