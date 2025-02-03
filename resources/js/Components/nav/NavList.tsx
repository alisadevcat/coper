import { Link, usePage } from "@inertiajs/react";
import { route } from 'ziggy-js';
import { AuthData } from "@/types";

export const NavList = () => {
    const { auth } = usePage<AuthData>().props;

    return (
        <div className="navigation">
            <ul className="navigation-list">
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
        </div>
    );
};
