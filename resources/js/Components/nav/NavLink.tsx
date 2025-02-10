import { Link } from "@inertiajs/react";
import route from "ziggy-js"; // Import Ziggy's route function

type NavLinkProps = {
    href: string;
    active?: boolean;
    activeClass?: string;
    className?: string;
    style?: React.CSSProperties;
    method?: "get" | "post" | "put" | "delete" | "patch";
    children: React.ReactNode | string;
};

export default function NavLink({
    href,
    active = false,
    activeClass = "active",
    className = "",
    style,
    method = "get",
    children,
    ...props
}: NavLinkProps) {
    return (
        <Link
            href={href} // This can be route('login')
            method={method}
            style={style}
            as="a"
            {...props}
            className={`${active ? activeClass : "inertia-link-post"} ${className}`}
        >
            {children}
        </Link>
    );
}