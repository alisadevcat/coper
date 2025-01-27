import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                error: "#ff1183",
                warning: "#ff8933",
                primary: "#3190ff",
                inactive: "#8bc0ff",
                success: "#7fc156",
                text: "#214a79",
                white: "#ffffff",
                border: "#bad4f2",
                textMuted: "#6f94be",
                bg: "#dfeeff",
                ultraDark: "#191e24",
                darkBg: "#1f2a36",
            },
        },
    },

    plugins: [forms],
};
