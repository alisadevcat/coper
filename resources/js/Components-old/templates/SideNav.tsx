import classNames from "@/utils/classNames";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "../../Components/icons/ApplicationLogo";

const SideNav = () => {
    return (
        <div
            style={{ width: "290px", minWidth: "290px" }}
            className={classNames("side-nav", "side-nav-expand")}
        >
            <Link href="/">
                <ApplicationLogo className="side-nav-header flex flex-col justify-center" />
            </Link>
            <div className={classNames("side-nav-content")}>Scrollbar</div>
        </div>
    );
};

export default SideNav;
