import React from "react";
import { Box } from "@mui/material";
import phone4 from "../../../assets/ph_screen4.svg";
import phone5 from "../../../assets/ph_screen5.svg";
import phone6 from "../../../assets/ph_screen6.svg";

const ToLendMoney = () => {
    return (
        <Box className="screen" id="lend" sx={{color: "var(--white)"}}>
            <Box className="screen-container" sx={{ maxWidth: "1140px", mx: "auto"}}>
                <Box sx={{ display: 'flex'}}>
                    <Box className="col-sm">
                        <h2 className="h2 gutterbottom-big">to lend money</h2>
                    </Box>
                </Box>
                <Box className="gutterbottom-big" sx={{ display: 'flex', justifyContent: "space-between"}}>
                    <Box className="col-sm-1">
                        <Box className="sign lend">
                            <span>1</span>
                        </Box>
                    </Box>
                    <Box className="col-sm-3">
                        <img src={phone4} alt="" className="phone ph4" />
                    </Box>
                    <Box className="col-sm-1">
                        <Box className="sign lend">
                            <span>2</span>
                        </Box>
                    </Box>
                    <Box className="col-sm-3">
                        <img src={phone5} alt="" className="phone ph5" />
                    </Box>
                    <Box className="col-sm-1">
                        <Box className="sign lend">
                            <span>3</span>
                        </Box>
                    </Box>
                    <Box className="col-sm-3">
                        <img src={phone6} alt="" className="phone ph6" />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex'}}>
                    <Box className="col-sm">
                        <ul className="list">
                            <li>
                                <p className="p">
                                    In this Box, you can quickly register
                                    and request a micro-loan for any purpose
                                    from other participants of the Coper
                                    platform, bypassing unnecessary
                                    complexities.
                                </p>
                            </li>
                            <li>
                                <p className="p">
                                    There is no need to provide a lot of
                                    documents to check your credit history or
                                    solvency.
                                </p>
                            </li>
                            <li>
                                <p className="p">
                                    For regular use of our investor’s services,
                                    it is enough for you to monitor your rating.
                                </p>
                            </li>
                            <li>
                                <p className="p">
                                    Your reputation is your key to obtaining the
                                    necessary funds for your purposes in just a
                                    few minutes.
                                </p>
                            </li>
                        </ul>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ToLendMoney;
