import classNames from "@/utils/classNames";
// import { HEADER_HEIGHT } from '@/constants/theme.constant'
import { GearIcon } from "@/Icons/GearIcon";
const Header = () => {
    return (
        <header className="sticky z-30 flex w-full bg-gray top-0; shadow dark:shadow-2xl">
            <div
                className="relative flex w-full items-center justify-between px-4 p-0 container mx-auto"
                style={{ height: "64px" }}
            >
                <div class="flex items-center gap-2 header-action-start">
                    <div class="text-2xl">
                        <div class="cursor-pointer p-2 rounded-full header-action-item-hoverable">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h7"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div class="header-action-item header-action-item-hoverable text-2xl">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 256 256"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z"
                                opacity="0.2"
                            ></path>
                            <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center gap-2 header-action-end">
                    <div class="text-2xl header-action-item header-action-item-hoverable">
                        <GearIcon />
                    </div>
                    <div class="dropdown-toggle flex items-center"
                        role="menuitem"
                        aria-expanded="false"
                        aria-haspopup="menu"
                        id=":r8:"
                    >
                        <div class="cursor-pointer flex items-center">
                            <span
                                class="avatar avatar-circle"
                                style="width: 32px; height: 32px; min-width: 32px; line-height: 32px; font-size: 12px;"
                            >
                                <img
                                    class="avatar-img avatar-circle"
                                    loading="lazy"
                                    src="/img/avatars/thumb-1.jpg"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
