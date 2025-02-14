import { Label } from "@/Components/label";
import { SvgColor } from "@/Components/svg-color";
import { Iconify } from "@/Components/iconify";
import { route } from "ziggy-js";
import dashboardIcon from "assets/icons/navbar/ic-dashboard.svg";
import profileIcon from "assets/icons/navbar/ic-user.svg";

export type NavItemDataType = {
    title: string;
    path: string;
    activePath: string;
    icon: React.ReactNode;
    info?: React.ReactNode;
};

// ----------------------------------------------------------------------

const icon = (name: string) => (
    <SvgColor width="100%" height="100%" src={name} />
);

export const defaultNavData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        activePath: "/dashboard",
        icon: icon(dashboardIcon),
    },
    // {
    //   title: 'User',
    //   path: '/user',
    //   icon: icon('ic-user'),
    // },
    // {
    //   title: 'Product',
    //   path: '/products',
    //   icon: icon('ic-cart'),
    //   info: (
    //     <Label color="error" variant="inverted">
    //       +3
    //     </Label>
    //   ),
    // },
    // {
    //   title: 'Blog',
    //   path: '/blog',
    //   icon: icon('ic-blog'),
    // },
    // {
    //   title: 'Sign in',
    //   path: '/sign-in',
    //   icon: icon('ic-lock'),
    // },
    // {
    //   title: 'Not found',
    //   path: '/404',
    //   icon: icon('ic-disabled'),
    // },
];

export const dashBoardLenderNavLinks: NavItemDataType[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        activePath: "/dashboard",
        icon: icon(dashboardIcon),
    },
    {
        title: "Profile",
        path: route("userprofile.edit"),
        activePath: "/profile",
        icon: icon(profileIcon),
    },
    // {
    //     title: "Messages",
    //     path: "/messages",
    //     icon: icon("ic-cart"),
    //     info: (
    //         <Label color="error" variant="inverted">
    //             +3
    //         </Label>
    //     ),
    // },
];

export const dashBoardBorrowerNavLinks: NavItemDataType[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        activePath: "/dashboard",
        icon: icon(dashboardIcon),
    },
    {
        title: "Profile",
        path: route("userprofile.edit"),
        activePath: "/profile",
        icon: icon(profileIcon),
    },
    // {
    //     title: "Messages",
    //     path: "/messages",
    //     icon: icon("ic-cart"),
    //     info: (
    //         <Label color="error" variant="inverted">
    //             +3
    //         </Label>
    //     ),
    // },
];

export const dashBoardModeratorNavLinks: NavItemDataType[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        activePath: "/dashboard",
        icon: icon(dashboardIcon),
    },
    {
        title: "Profile",
        path: route("userprofile.edit"),
        activePath: "/profile",
        icon: icon(profileIcon),
    },
    // {
    //     title: "Messages",
    //     path: "/messages",
    //     icon: icon("ic-cart"),
    //     info: (
    //         <Label color="error" variant="inverted">
    //             +3
    //         </Label>
    //     ),
    // },
];

export const topNavLinks = [
    {
        label: "Home",
        href: "/",
        icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" />,
    },
    {
        label: "Profile",
        href: route("userprofile.edit"),
        icon: <Iconify width={22} icon="solar:shield-keyhole-bold-duotone" />,
    },
    {
        label: "My Account",
        href: route("profile.edit"),
        icon: <Iconify width={22} icon="solar:settings-bold-duotone" />,
    },
];

type DashboardRoles = "lender" | "borrower" | "moderator";

export type DashboardNavType = {
    [key in DashboardRoles]: NavItemDataType[];
};

export const dashBoardNavs: DashboardNavType = {
    lender: dashBoardLenderNavLinks,
    borrower: dashBoardBorrowerNavLinks,
    moderator: dashBoardModeratorNavLinks,
};
