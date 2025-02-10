import type { Theme, SxProps, Breakpoint } from "@mui/material/styles";
import { stylesMode } from "@/theme/styles";
import backGroundImage from "../../../assets/background/overlay.jpg";

import { Main } from "./main";
import { HeaderSection } from "../core/header-section";
import { LayoutSection } from "../core/layout-section";
import { ThemeProvider } from "@/theme/theme-provider";

// ----------------------------------------------------------------------

export type AuthLayoutProps = {
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    header?: {
        sx?: SxProps<Theme>;
    };
};

export function AuthLayout({ sx, children, header }: AuthLayoutProps) {
    const layoutQuery: Breakpoint = "md";

    return (
        <ThemeProvider layout="auth">
            <LayoutSection
                /** **************************************
                 * Header
                 *************************************** */
                headerSection={
                    <HeaderSection
                        layoutQuery={layoutQuery}
                        slotProps={{
                            container: { maxWidth: false },
                            toolbar: {
                                sx: {
                                    bgcolor: "transparent",
                                    backdropFilter: "unset",
                                },
                            },
                        }}
                        sx={{
                            position: { [layoutQuery]: "fixed" },

                            ...header?.sx,
                        }}
                        slots={{
                            topArea: false,
                            leftArea: false,
                            rightArea: false,
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
                cssVars={{ "--layout-auth-content-width": "420px" }}
                sx={{
                    "&::before": {
                        width: 1,
                        height: 1,
                        zIndex: -1,
                        content: "''",
                        opacity: 0.24,
                        position: "fixed",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundImage: `url(${backGroundImage})`,
                        [stylesMode.dark]: { opacity: 0.08 },
                    },
                    ...sx,
                }}
            >
                <Main layoutQuery={layoutQuery}>{children}</Main>
            </LayoutSection>
        </ThemeProvider>
    );
}
