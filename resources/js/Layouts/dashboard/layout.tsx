import type { Theme, SxProps, Breakpoint } from "@mui/material/styles";

import { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";
import { _langs, _notifications } from "@/_mock";
import { ThemeProvider } from "@/theme/theme-provider";
import { usePage } from "@inertiajs/react";

import { Main } from "./main";
import { layoutClasses } from "../classes";
import { NavMobile, NavDesktop } from "./nav";
import { _workspaces } from "./config-nav-workspace";
import { MenuButton } from "../components/menu-button";
import { LayoutSection } from "../core/layout-section";
import { HeaderSection } from "../core/header-section";
import { Searchbar } from "../components/searchbar";
import { AccountPopover } from "../components/account-popover";
import { LanguagePopover } from "../components/language-popover";
import { NotificationsPopover } from "../components/notifications-popover";
import { topNavLinks } from "./config-nav-dashboard";
import { Roles, PagePropsData } from "@/types";
import {
    dashBoardNavs,
    DashboardNavType,
    defaultNavData,
} from "./config-nav-dashboard";

// ----------------------------------------------------------------------

export type DashboardLayoutProps = {
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    header?: {
        sx?: SxProps<Theme>;
    };
};

export function DashboardLayout({
    sx,
    children,
    header,
}: DashboardLayoutProps) {
    const theme = useTheme();
    const { roles } = usePage<PagePropsData>().props;
    const roleSlugs: Roles = roles?.user_roles ? roles.user_roles : [];
    const [navOpen, setNavOpen] = useState(false);

    const layoutQuery: Breakpoint = "lg";

    const navData = roleSlugs[0]
        ? dashBoardNavs[roleSlugs[0] as keyof DashboardNavType]
        : defaultNavData;

    return (
        <ThemeProvider layout="dashboard">
            <LayoutSection
                /** **************************************
                 * Header
                 *************************************** */
                headerSection={
                    <HeaderSection
                        layoutQuery={layoutQuery}
                        slotProps={{
                            container: {
                                maxWidth: false,
                                sx: { px: { [layoutQuery]: 5 } },
                            },
                        }}
                        sx={header?.sx}
                        slots={{
                            topArea: (
                                <Alert
                                    severity="info"
                                    sx={{ display: "none", borderRadius: 0 }}
                                >
                                    This is an info Alert.
                                </Alert>
                            ),
                            leftArea: (
                                <>
                                    <MenuButton
                                        onClick={() => setNavOpen(true)}
                                        sx={{
                                            ml: -1,
                                            [theme.breakpoints.up(layoutQuery)]:
                                                { display: "none" },
                                        }}
                                    />
                                    <NavMobile
                                        data={navData}
                                        open={navOpen}
                                        onClose={() => setNavOpen(false)}
                                        workspaces={_workspaces}
                                    />
                                </>
                            ),
                            rightArea: (
                                <Box gap={1} display="flex" alignItems="center">
                                    <NotificationsPopover
                                        data={_notifications}
                                    />
                                    <AccountPopover data={topNavLinks} />
                                </Box>
                            ),
                        }}
                    />
                }
                /** **************************************
                 * Sidebar
                 *************************************** */
                sidebarSection={
                    <NavDesktop
                        data={navData}
                        layoutQuery={layoutQuery}
                        workspaces={_workspaces}
                    />
                }
                /** **************************************
                 * Footer
                 *************************************** */
                footerSection={null}
                /** **************************************
                 * Style
                 *************************************** */
                cssVars={{
                    "--layout-nav-vertical-width": "300px",
                    "--layout-dashboard-content-pt": theme.spacing(1),
                    "--layout-dashboard-content-pb": theme.spacing(8),
                    "--layout-dashboard-content-px": theme.spacing(5),
                }}
                sx={{
                    [`& .${layoutClasses.hasSidebar}`]: {
                        [theme.breakpoints.up(layoutQuery)]: {
                            pl: "var(--layout-nav-vertical-width)",
                        },
                    },
                    ...sx,
                }}
            >
                <Main>{children}</Main>
            </LayoutSection>
        </ThemeProvider>
    );
}
