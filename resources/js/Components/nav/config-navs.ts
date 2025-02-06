import { LinkItem } from "@/types";

export const authNavLinks: LinkItem[] = [
    { url: "#about", title: "about" },
    { url: "#borrow", title: "to borrow money" },
    { url: "#lend", title: "to lend money"},
    { url: "dashboard", title: "dashboard" },
    { url: "logout", title: "log out", method: "post" },
];

export  const navLinks: LinkItem[] = [
    { url: "#about", title: "about" },
    { url: "#borrow", title: "to borrow money" },
    { url: "#lend", title: "to lend money"},
    { url: "login", title: "log in"},
    { url: "register", title: "register"},
];

const dashBoardLink = { url: "dashboard", title: "Dashboard" };
