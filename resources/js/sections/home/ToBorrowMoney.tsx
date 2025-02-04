import React from "react";
import phone1 from "../../../assets/ph_screen1.svg";
import phone2 from "../../../assets/ph_screen2.svg";
import phone3 from "../../../assets/ph_screen3.svg";
import { Box } from "@mui/material";

const ToBorrowMoney = () => {
    return (
        <Box className="screen lighter" id="borrow" sx={{color: "var(--white)"}}>
            <Box className="screen-container" sx={{ maxWidth: "1140px", mx: "auto"}}>
                <Box sx={{ display: 'flex'}}>
                    <Box className="col-sm">
                        <h2 className="h2 gutterbottom-big">to borrow money</h2>
                    </Box>
                </Box>
                <Box className="gutterbottom-big" sx={{ display: 'flex'}}>
                    <Box className="col-sm-1">
                        <Box className="sign borrow">
                            <span>1</span>
                        </Box>
                    </Box>
                    <Box className="col-sm-3">
                        <img src={phone1} alt="" className="phone ph1" />
                    </Box>
                    <Box className="col-sm-1">
                        <Box className="sign borrow">
                            <span>2</span>
                        </Box>
                    </Box>
                    <Box className="col-sm-3">
                        <img src={phone2} alt="" className="phone ph2" />
                    </Box>
                    <Box className="col-sm-1">
                        <Box className="sign borrow">
                            <span>3</span>
                        </Box>
                    </Box>
                    <Box className="col-sm-3">
                        <img src={phone3} alt="" className="phone ph3" />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex'}}>
                    <Box className="col-sm">
                        <ul className="list">
                            <li>
                                <p className="p">
                                    On the Coper platform, you can easily
                                    register and provide a loan to another
                                    participant on terms that are advantageous
                                    to you, surpassing global deposit standards.
                                </p>
                            </li>
                            <li>
                                <p className="p">
                                    Choose your borrower and get money from them
                                    immediately, avoiding unnecessary
                                    bureaucratic obstacles and cumbersome
                                    procedures.
                                </p>
                            </li>
                            <li>
                                <p className="p">
                                    In addition to high returns, you engage in
                                    true investments ina specific inBoxidual,
                                    their ideas, and activities, rather than
                                    anonymous corporations with undisclosed
                                    beneficiaries.
                                </p>
                            </li>
                            <li>
                                <p className="p">
                                    Behind every successful project is always a
                                    talented inBoxidual who occasionally needs
                                    your support. Believe in human capital,
                                    invest in specific inBoxiduals and their
                                    ideas, and become part of a mutually
                                    beneficial endeavour.
                                </p>
                            </li>
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default ToBorrowMoney;
