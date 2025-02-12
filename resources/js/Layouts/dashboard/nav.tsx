
import type { Theme, SxProps, Breakpoint } from "@mui/material/styles";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import { varAlpha } from "@/theme/styles";
import ApplicationLogoBlack from "@/Components/icons/ApplicationLogoBlack";
import { Scrollbar } from "@/Components/scrollbar";
import { Link } from "@inertiajs/react";

import { NavUpgrade } from "../components/nav-upgrade";
// import { WorkspacesPopover } from "../components/workspaces-popover";

import type { WorkspacesPopoverProps } from "../components/workspaces-popover";
import DashboardNavList from "./nav-list";
// ----------------------------------------------------------------------

export type NavContentProps = {
    data: {
        path: string;
        title: string;
        icon: React.ReactNode;
        info?: React.ReactNode;
    }[];
    slots?: {
        topArea?: React.ReactNode;
        bottomArea?: React.ReactNode;
    };
    workspaces: WorkspacesPopoverProps["data"];
    sx?: SxProps<Theme>;
};

export function NavDesktop({
    sx,
    data,
    slots,
    workspaces,
    layoutQuery,
}: NavContentProps & { layoutQuery: Breakpoint }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                pt: 2.5,
                px: 2.5,
                top: 0,
                left: 0,
                height: 1,
                display: "none",
                position: "fixed",
                flexDirection: "column",
                bgcolor: "var(--layout-nav-bg)",
                zIndex: "var(--layout-nav-zIndex)",
                width: "var(--layout-nav-vertical-width)",
                borderRight: `1px solid var(--layout-nav-border-color, ${varAlpha(
                    theme.vars.palette.grey["500Channel"],
                    0.12
                )})`,
                [theme.breakpoints.up(layoutQuery)]: {
                    display: "flex",
                },
                ...sx,
            }}
        >
            <NavContent data={data} slots={slots} workspaces={workspaces} />
        </Box>
    );
}

// ----------------------------------------------------------------------

export function NavMobile({
    sx,
    data,
    open,
    slots,
    onClose,
    workspaces,
}: NavContentProps & { open: boolean; onClose: () => void }) {
    const pathname = usePage();

    useEffect(() => {
        if (open) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Drawer
            open={open}
            onClose={onClose}
            sx={{
                [`& .${drawerClasses.paper}`]: {
                    pt: 2.5,
                    px: 2.5,
                    overflow: "unset",
                    bgcolor: "var(--layout-nav-bg)",
                    width: "var(--layout-nav-mobile-width)",
                    ...sx,
                },
            }}
        >
            <NavContent data={data} slots={slots} workspaces={workspaces} />
        </Drawer>
    );
}

// ----------------------------------------------------------------------

export function NavContent({ data, slots, workspaces, sx }: NavContentProps) {
    const pathname = usePage();

    return (
        <>
            <Link href="/">
                <ApplicationLogoBlack />
            </Link>

            {slots?.topArea}

            {/* <WorkspacesPopover data={workspaces} sx={{ my: 2 }} /> */}

            <Scrollbar fillContent>
                <Box
                    component="nav"
                    display="flex"
                    flex="1 1 auto"
                    flexDirection="column"
                    sx={sx}
                >
                    <Box
                        component="ul"
                        gap={0.5}
                        display="flex"
                        flexDirection="column"
                        sx={{pl: 2,
                            py: 3,
                            gap: 1.5,
                            pr: 1.5}}
                        >
                        <DashboardNavList data={data} />
                    </Box>
                </Box>
            </Scrollbar>

            {slots?.bottomArea}

            <NavUpgrade />
        </>
    );
}

