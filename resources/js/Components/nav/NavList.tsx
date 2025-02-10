import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { AuthData } from "@/types";
import NavLink from "./NavLink";

import {
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { authNavLinks, navLinks } from "./config-navs";

const NavList = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { auth } = usePage<{ auth: AuthData }>().props;
    const links = auth.user ? authNavLinks : navLinks;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <div style={{ flexGrow: 1 }}></div>
            <div
                style={{
                    maxHeight: "var(--nav-height)",
                    color: "var(--white)",
                }}
            >
                {isMobile ? (
                    <>
                        {/* Burger Menu Icon */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ color: "var(--white)" }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Mobile Drawer */}
                        <Drawer
                            anchor="right"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            sx={{
                                backgroundColor: "var(--ultra-dark)",
                                color: "white",
                            }}
                        >
                            <List>
                                {links.map((link) => (
                                    <ListItem
                                        key={link.title}
                                        onClick={handleDrawerToggle}
                                        sx={{
                                            marginLeft: "var(--s5)",
                                        }}
                                        disablePadding
                                    >
                                        <NavLink
                                            href={link.url}
                                            style={{
                                                color: "inherit",
                                                width: "100%",
                                                textDecoration: "none",
                                            }}
                                            method={link.method}
                                        >
                                            <ListItemButton
                                                sx={{ fontSize: "23px" }}
                                            >
                                                <ListItemText
                                                    primary={link.title}
                                                />
                                            </ListItemButton>
                                        </NavLink>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    // Desktop Menu
                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            marginLeft: "auto",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {links.map((link) => (
                            <NavLink
                                key={link.title}
                                method={link?.method}
                                href={link.url}
                                style={{
                                    color: "var(--white)",
                                    paddingTop: "3px",
                                    paddingBottom: "8px",
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    textDecoration: "none",
                                }}
                                className="hover-underline-animation"
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default NavList;