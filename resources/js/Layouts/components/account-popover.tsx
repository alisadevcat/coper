
import type { IconButtonProps } from "@mui/material/IconButton";

import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem, { menuItemClasses } from "@mui/material/MenuItem";
import NavLink from "@/Components/nav/NavLink";
import { usePage } from "@inertiajs/react";
import { AuthData } from "@/types";
import profileImg from "../../../assets/images/blank-profile-picture.webp";

import { useRouter, usePathname } from "@/routes/hooks";

import { router } from "@inertiajs/react";
import { route } from "ziggy-js";
// ----------------------------------------------------------------------

export type AccountPopoverProps = IconButtonProps & {
    data?: {
        label: string;
        href: string;
        icon?: React.ReactNode;
        info?: React.ReactNode;
    }[];
};


export function AccountPopover({
    data = [],
    sx,
    ...other
}: AccountPopoverProps) {
    const pathname = usePathname();
    const { auth } = usePage<{ auth: AuthData }>().props;
    const user = auth.user;

    const [openPopover, setOpenPopover] = useState<HTMLButtonElement | null>(
        null
    );

    const _myAccount = {
        displayName: `${user.first_name} ${user.last_name}`,
        email: user.email,
        photoURL: profileImg,
      };


    const handleOpenPopover = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setOpenPopover(event.currentTarget);
        },
        []
    );

    const handleClosePopover = useCallback(() => {
        setOpenPopover(null);
    }, []);

    const handleClickItem = useCallback(
        (path: string) => {
            handleClosePopover();
            router.visit(path, { method: "get" });
        },
        [handleClosePopover, router]
    );

    return (
        <>
            <IconButton
                onClick={handleOpenPopover}
                sx={{
                    p: "2px",
                    width: 40,
                    height: 40,
                    background: (theme) =>
                        `conic-gradient(${theme.vars.palette.primary.light}, ${theme.vars.palette.warning.light}, ${theme.vars.palette.primary.light})`,
                    ...sx,
                }}
                {...other}
            >
                <Avatar
                    src={_myAccount.photoURL}
                    alt={_myAccount.displayName}
                    sx={{ width: 1, height: 1 }}
                >
                    {_myAccount.displayName.charAt(0).toUpperCase()}
                </Avatar>
            </IconButton>

            <Popover
                open={!!openPopover}
                anchorEl={openPopover}
                onClose={handleClosePopover}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                slotProps={{
                    paper: {
                        sx: { width: 200 },
                    },
                }}
            >
                <Box sx={{ p: 2, pb: 1.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        {_myAccount?.displayName}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        noWrap
                    >
                        {_myAccount?.email}
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: "dashed" }} />

                <MenuList
                    disablePadding
                    sx={{
                        p: 1,
                        gap: 0.5,
                        display: "flex",
                        flexDirection: "column",
                        [`& .${menuItemClasses.root}`]: {
                            px: 1,
                            gap: 2,
                            borderRadius: 0.75,
                            color: "text.secondary",
                            "&:hover": { color: "text.primary" },
                            [`&.${menuItemClasses.selected}`]: {
                                color: "text.primary",
                                bgcolor: "action.selected",
                                fontWeight: "fontWeightSemiBold",
                            },
                        },
                    }}
                >
                    {data.map((option) => (
                        <NavLink
                            href={option.href}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <MenuItem
                                key={option.label}
                                selected={option.href === pathname.url}
                            >
                                {option.icon}
                                {option.label}
                            </MenuItem>
                        </NavLink>
                    ))}
                </MenuList>

                <Divider sx={{ borderStyle: "dashed" }} />

                <Box sx={{ p: 1 }}>
                    <NavLink
                        method="post"
                        href={route("logout")}
                        style={{
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%", // Matches fullWidth
                            color: "#ff5630", // Matches MUI "error" color
                            background: "transparent", // Matches "text" variant
                            border: "none",
                            padding: "6px 16px",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                    >
                        Logout
                    </NavLink>
                </Box>
            </Popover>
        </>
    );
}
