"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image width={176} height={32} src={"/images/logo/logo.svg"} alt="Logo" />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href="/main/dashboard"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("dashboard") &&
                    "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                      fill=""
                    />
                    <path
                      d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                      fill=""
                    />
                    <path
                      d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                      fill=""
                    />
                    <path
                      d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                      fill=""
                    />
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/main/station_account"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("station") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                      fill=""
                    />
                    <path
                      d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                      fill=""
                    />
                  </svg>
                  Station & Account
                </Link>
              </li>

              <li>
                <Link
                  href="/main/trade"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("trade") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9728)">
                      <path
                        d="M3.45928 0.984375H1.6874C1.04053 0.984375 0.478027 1.51875 0.478027 2.19375V3.96563C0.478027 4.6125 1.0124 5.175 1.6874 5.175H3.45928C4.10615 5.175 4.66865 4.64063 4.66865 3.96563V2.16562C4.64053 1.51875 4.10615 0.984375 3.45928 0.984375ZM3.3749 3.88125H1.77178V2.25H3.3749V3.88125Z"
                        fill=""
                      />
                      <path
                        d="M7.22793 3.71245H16.8748C17.2123 3.71245 17.5217 3.4312 17.5217 3.06558C17.5217 2.69995 17.2404 2.4187 16.8748 2.4187H7.22793C6.89043 2.4187 6.58105 2.69995 6.58105 3.06558C6.58105 3.4312 6.89043 3.71245 7.22793 3.71245Z"
                        fill=""
                      />
                      <path
                        d="M3.45928 6.75H1.6874C1.04053 6.75 0.478027 7.28437 0.478027 7.95937V9.73125C0.478027 10.3781 1.0124 10.9406 1.6874 10.9406H3.45928C4.10615 10.9406 4.66865 10.4062 4.66865 9.73125V7.95937C4.64053 7.28437 4.10615 6.75 3.45928 6.75ZM3.3749 9.64687H1.77178V8.01562H3.3749V9.64687Z"
                        fill=""
                      />
                      <path
                        d="M16.8748 8.21252H7.22793C6.89043 8.21252 6.58105 8.49377 6.58105 8.8594C6.58105 9.22502 6.86231 9.47815 7.22793 9.47815H16.8748C17.2123 9.47815 17.5217 9.1969 17.5217 8.8594C17.5217 8.5219 17.2123 8.21252 16.8748 8.21252Z"
                        fill=""
                      />
                      <path
                        d="M3.45928 12.8531H1.6874C1.04053 12.8531 0.478027 13.3875 0.478027 14.0625V15.8344C0.478027 16.4813 1.0124 17.0438 1.6874 17.0438H3.45928C4.10615 17.0438 4.66865 16.5094 4.66865 15.8344V14.0625C4.64053 13.3875 4.10615 12.8531 3.45928 12.8531ZM3.3749 15.75H1.77178V14.1188H3.3749V15.75Z"
                        fill=""
                      />
                      <path
                        d="M16.8748 14.2875H7.22793C6.89043 14.2875 6.58105 14.5687 6.58105 14.9344C6.58105 15.3 6.86231 15.5812 7.22793 15.5812H16.8748C17.2123 15.5812 17.5217 15.3 17.5217 14.9344C17.5217 14.5687 17.2123 14.2875 16.8748 14.2875Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9728">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Trade
                </Link>
              </li>
              <li>
                <Link
                  href="/main/deposit_withdrawal"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("deposit") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg
                    className="fill-current"
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.2875 0.506226H2.7125C1.75625 0.506226 0.96875 1.29373 0.96875 2.24998V15.75C0.96875 16.7062 1.75625 17.5219 2.74063 17.5219H13.3156C14.2719 17.5219 15.0875 16.7344 15.0875 15.75V2.24998C15.0313 1.29373 14.2438 0.506226 13.2875 0.506226ZM13.7656 15.75C13.7656 16.0312 13.5406 16.2562 13.2594 16.2562H2.7125C2.43125 16.2562 2.20625 16.0312 2.20625 15.75V2.24998C2.20625 1.96873 2.43125 1.74373 2.7125 1.74373H13.2875C13.5688 1.74373 13.7938 1.96873 13.7938 2.24998V15.75H13.7656Z"
                      fill=""
                    />
                    <path
                      d="M11.7965 2.6156H8.73086C8.22461 2.6156 7.80273 3.03748 7.80273 3.54373V7.25623C7.80273 7.76248 8.22461 8.18435 8.73086 8.18435H11.7965C12.3027 8.18435 12.7246 7.76248 12.7246 7.25623V3.5156C12.6965 3.03748 12.3027 2.6156 11.7965 2.6156ZM11.4309 6.8906H9.06836V3.88123H11.4309V6.8906Z"
                      fill=""
                    />
                    <path
                      d="M3.97773 4.35938H6.03086C6.36836 4.35938 6.67773 4.07812 6.67773 3.7125C6.67773 3.34687 6.39648 3.09375 6.03086 3.09375H3.94961C3.61211 3.09375 3.30273 3.375 3.30273 3.74063C3.30273 4.10625 3.61211 4.35938 3.97773 4.35938Z"
                      fill=""
                    />
                    <path
                      d="M3.97773 7.9312H6.03086C6.36836 7.9312 6.67773 7.64995 6.67773 7.28433C6.67773 6.9187 6.39648 6.63745 6.03086 6.63745H3.94961C3.61211 6.63745 3.30273 6.9187 3.30273 7.28433C3.30273 7.64995 3.61211 7.9312 3.97773 7.9312Z"
                      fill=""
                    />
                    <path
                      d="M12.0789 10.2374H3.97891C3.64141 10.2374 3.33203 10.5187 3.33203 10.8843C3.33203 11.2499 3.61328 11.5312 3.97891 11.5312H12.0789C12.4164 11.5312 12.7258 11.2499 12.7258 10.8843C12.7258 10.5187 12.4164 10.2374 12.0789 10.2374Z"
                      fill=""
                    />
                    <path
                      d="M12.0789 13.8093H3.97891C3.64141 13.8093 3.33203 14.0906 3.33203 14.4562C3.33203 14.8218 3.61328 15.1031 3.97891 15.1031H12.0789C12.4164 15.1031 12.7258 14.8218 12.7258 14.4562C12.7258 14.0906 12.4164 13.8093 12.0789 13.8093Z"
                      fill=""
                    />
                  </svg>
                  Deposit & Withdrawal
                </Link>
              </li>

              <li>
                <Link
                  href="/main/report"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("report") && "bg-graydark dark:bg-meta-4"
                    }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9756)">
                      <path
                        d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9756">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Report
                </Link>
              </li>

            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
