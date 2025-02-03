import type { Theme, SxProps, Breakpoint } from "@mui/material/styles";

import { Link } from "@inertiajs/react";
import Alert from "@mui/material/Alert";

import ApplicationLogo from "@/Components/icons/ApplicationLogo";

import { Main, CompactContent } from "./main";
import { LayoutSection } from "../core/layout-section";
import { HeaderSection } from "../core/header-section";
import { NavList } from "@/Components/nav/NavList";

// ----------------------------------------------------------------------

export type SimpleLayoutProps = {
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    header?: {
        sx?: SxProps<Theme>;
    };
    content?: {
        compact?: boolean;
    };
};

export function SimpleLayout({
    sx,
    children,
    header,
    content,
}: SimpleLayoutProps) {
    const layoutQuery: Breakpoint = "md";

    return (
        <LayoutSection
            headerSection={
                <HeaderSection
                    layoutQuery={layoutQuery}
                    slotProps={{ container: { maxWidth: false }, toolbar: { sx: { bgcolor: 'transparent', backdropFilter: 'unset' } }, }}
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
                        leftArea: <Link href="/"><ApplicationLogo /></Link>,
                        rightArea: <NavList/>,
                    }}
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
                "--layout-simple-content-compact-width": "448px",
            }}
            sx={sx}
        >
            <Main>
                {content?.compact ? (
                    <CompactContent layoutQuery={layoutQuery}>
                        {children}
                    </CompactContent>
                ) : (
                    children
                )}
            </Main>
        </LayoutSection>
    );
}
