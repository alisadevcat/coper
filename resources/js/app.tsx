import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from './theme/theme-provider'; // Import ThemeProvider
import Fab from "@mui/material/Fab";
import { Iconify } from "@/Components/iconify";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider>
                <App {...props} />
                <Fab
                    size="medium"
                    aria-label="Github"
                    href="https://github.com/minimal-ui-kit/material-kit-react"
                    sx={{
                        zIndex: 9,
                        right: 20,
                        bottom: 20,
                        width: 44,
                        height: 44,
                        position: 'fixed',
                        bgcolor: 'grey.800',
                        color: 'common.white',
                    }}
                >
                    <Iconify width={24} icon="eva:github-fill" />
                </Fab>
            </ThemeProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
