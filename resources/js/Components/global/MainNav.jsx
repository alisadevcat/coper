import React from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export const MainNav = () => {
    const { auth } = usePage().props;
    return (
        <nav class="navigation">
            <div class="navigation-logo">
                <Link href="/">
                    <ApplicationLogo className="flex flex-col justify-center" />
                </Link>
            </div>
            <ul class="navigation-list">
                <li>
                    <Link href="#about" className="hover-underline-animation">
                        about us
                    </Link>
                </li>
                <li>
                    <Link href="#borrow" className="hover-underline-animation">
                        to borrow money
                    </Link>
                </li>
                <li>
                    <Link href="#lend" className="hover-underline-animation">
                        to lend money
                    </Link>
                </li>
                {auth.user ? (
                    <li>
                        <Link
                            href={route("dashboard")}
                            className="hover-underline-animation"
                        >
                            Dashboard
                        </Link>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link
                                href={route("login")}
                                className="hover-underline-animation"
                            >
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route("register")}
                                className="hover-underline-animation"
                            >
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};
