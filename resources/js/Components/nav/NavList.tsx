import { Link, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";
import { AuthData } from "@/types";

import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const navLinks = [
    { url: "#about", title: "about" },
    { url: "#borrow", title: "to borrow money" },
    { url: "#lend", title: "to lend money" },
    { url: route("login"), title: "log in" },
    { url: route("register"), title: "register" },
];

const NavList = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <div style={{ flexGrow: 1 }}></div>
            <div style={{ maxHeight: 'var(--nav-height)' }}>

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
                            {navLinks.map((link) => (
                                <ListItem
                                    key={link.title}
                                    onClick={handleDrawerToggle}
                                    sx={{
                                        marginLeft: "var(--s5)",
                                    }}
                                    disablePadding
                                >
                                    <Link
                                        href={link.url}
                                        style={{
                                            color: "inherit",
                                            width: "100%",
                                            textDecoration:"none"
                                        }}
                                    >
                                        <ListItemButton sx={{ fontSize: "23px"}}>
                                            <ListItemText
                                                primary={link.title}
                                            />
                                        </ListItemButton>
                                    </Link>
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
                    {navLinks.map((link) => (
                        <Button
                            key={link.title}
                            component={Link}
                            href={link.url}
                            sx={{
                                color: "var(--white)",
                                paddingTop: "3px",
                                paddingBottom: "8px",
                                fontSize:'18px',
                                fontWeight: '600'
                            }}
                            className="hover-underline-animation"
                        >
                            {link.title}
                        </Button>
                    ))}
                </div>

            )}
            </div>
        </>
    );
};

export default NavList;