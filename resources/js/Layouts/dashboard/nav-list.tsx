import React from "react";
import { usePage } from "@inertiajs/react";
import { Box, ListItem, ListItemButton } from "@mui/material";
import { NavItemDataType } from "./config-nav-dashboard";

type DataProps = { data: NavItemDataType[] };

const DashboardNavList = ({ data }: DataProps) => {
    const pathname = usePage().url;

    return (
        <>
            {data.map((item: NavItemDataType) => {
                const isActived = item.activePath === pathname;

                return (
                    <ListItem disableGutters disablePadding key={item.title}>
                        <ListItemButton
                            disableGutters
                            href={item.path}
                            sx={{
                                pl: 2,
                                py: 1,
                                gap: 2,
                                pr: 1.5,
                                borderRadius: 0.75,
                                typography: "body2",
                                fontWeight: "fontWeightMedium",
                                color: "var(--layout-nav-item-color)",
                                minHeight: "var(--layout-nav-item-height)",
                                ...(isActived && {
                                    fontWeight: "fontWeightSemiBold",
                                    bgcolor: "var(--layout-nav-item-active-bg)",
                                    color: "var(--layout-nav-item-active-color)",
                                    "&:hover": {
                                        bgcolor:
                                            "var(--layout-nav-item-hover-bg)",
                                    },
                                }),
                            }}
                        >
                            <Box
                                component="span"
                                sx={{ width: 24, height: 24 }}
                            >
                                {item.icon}
                            </Box>

                            <Box component="span" flexGrow={1}>
                                {item.title}
                            </Box>

                            {item.info && item.info}
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </>
    );
};

export default DashboardNavList;
