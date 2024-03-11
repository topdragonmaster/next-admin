exports.id = 2656;
exports.ids = [2656];
exports.modules = {

/***/ 60690:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 45917))

/***/ }),

/***/ 45917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./components/common/Loader/index.tsx
var Loader = __webpack_require__(10074);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Sidebar/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Sidebar = ({ sidebarOpen, setSidebarOpen })=>{
    const pathname = (0,navigation.usePathname)();
    const trigger = (0,react_.useRef)(null);
    const sidebar = (0,react_.useRef)(null);
    let storedSidebarExpanded = "true";
    const [sidebarExpanded, setSidebarExpanded] = (0,react_.useState)(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");
    // close on click outside
    (0,react_.useEffect)(()=>{
        const clickHandler = ({ target })=>{
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return ()=>document.removeEventListener("click", clickHandler);
    });
    // close if the esc key is pressed
    (0,react_.useEffect)(()=>{
        const keyHandler = ({ keyCode })=>{
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return ()=>document.removeEventListener("keydown", keyHandler);
    });
    (0,react_.useEffect)(()=>{
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document.querySelector("body")?.classList.remove("sidebar-expanded");
        }
    }, [
        sidebarExpanded
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        ref: sidebar,
        className: `absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 176,
                            height: 32,
                            src: "/images/logo/logo.svg",
                            alt: "Logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        ref: trigger,
                        onClick: ()=>setSidebarOpen(!sidebarOpen),
                        "aria-controls": "sidebar",
                        "aria-expanded": sidebarOpen,
                        className: "block lg:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "fill-current",
                            width: "20",
                            height: "18",
                            viewBox: "0 0 20 18",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z",
                                fill: ""
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear",
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "mt-5 py-4 px-4 lg:mt-9 lg:px-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "mb-6 flex flex-col gap-1.5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/main/dashboard",
                                        className: `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("dashboard") && "bg-graydark dark:bg-meta-4"}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                className: "fill-current",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z",
                                                        fill: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z",
                                                        fill: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z",
                                                        fill: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z",
                                                        fill: ""
                                                    })
                                                ]
                                            }),
                                            "Dashboard"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/main/station_account",
                                        className: `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("station") && "bg-graydark dark:bg-meta-4"}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                className: "fill-current",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z",
                                                        fill: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z",
                                                        fill: ""
                                                    })
                                                ]
                                            }),
                                            "Station & Account"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/main/trade",
                                        className: `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("trade") && "bg-graydark dark:bg-meta-4"}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                className: "fill-current",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 18 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                        clipPath: "url(#clip0_130_9728)",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M3.45928 0.984375H1.6874C1.04053 0.984375 0.478027 1.51875 0.478027 2.19375V3.96563C0.478027 4.6125 1.0124 5.175 1.6874 5.175H3.45928C4.10615 5.175 4.66865 4.64063 4.66865 3.96563V2.16562C4.64053 1.51875 4.10615 0.984375 3.45928 0.984375ZM3.3749 3.88125H1.77178V2.25H3.3749V3.88125Z",
                                                                fill: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M7.22793 3.71245H16.8748C17.2123 3.71245 17.5217 3.4312 17.5217 3.06558C17.5217 2.69995 17.2404 2.4187 16.8748 2.4187H7.22793C6.89043 2.4187 6.58105 2.69995 6.58105 3.06558C6.58105 3.4312 6.89043 3.71245 7.22793 3.71245Z",
                                                                fill: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M3.45928 6.75H1.6874C1.04053 6.75 0.478027 7.28437 0.478027 7.95937V9.73125C0.478027 10.3781 1.0124 10.9406 1.6874 10.9406H3.45928C4.10615 10.9406 4.66865 10.4062 4.66865 9.73125V7.95937C4.64053 7.28437 4.10615 6.75 3.45928 6.75ZM3.3749 9.64687H1.77178V8.01562H3.3749V9.64687Z",
                                                                fill: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M16.8748 8.21252H7.22793C6.89043 8.21252 6.58105 8.49377 6.58105 8.8594C6.58105 9.22502 6.86231 9.47815 7.22793 9.47815H16.8748C17.2123 9.47815 17.5217 9.1969 17.5217 8.8594C17.5217 8.5219 17.2123 8.21252 16.8748 8.21252Z",
                                                                fill: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M3.45928 12.8531H1.6874C1.04053 12.8531 0.478027 13.3875 0.478027 14.0625V15.8344C0.478027 16.4813 1.0124 17.0438 1.6874 17.0438H3.45928C4.10615 17.0438 4.66865 16.5094 4.66865 15.8344V14.0625C4.64053 13.3875 4.10615 12.8531 3.45928 12.8531ZM3.3749 15.75H1.77178V14.1188H3.3749V15.75Z",
                                                                fill: ""
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M16.8748 14.2875H7.22793C6.89043 14.2875 6.58105 14.5687 6.58105 14.9344C6.58105 15.3 6.86231 15.5812 7.22793 15.5812H16.8748C17.2123 15.5812 17.5217 15.3 17.5217 14.9344C17.5217 14.5687 17.2123 14.2875 16.8748 14.2875Z",
                                                                fill: ""
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                                                            id: "clip0_130_9728",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                width: "18",
                                                                height: "18",
                                                                fill: "white"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            "Trade"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/main/deposit_withdrawal",
                                        className: `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("deposit") && "bg-graydark dark:bg-meta-4"}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                className: "fill-current",
                                                width: "16",
                                                height: "18",
                                                viewBox: "0 0 16 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M13.2875 0.506226H2.7125C1.75625 0.506226 0.96875 1.29373 0.96875 2.24998V15.75C0.96875 16.7062 1.75625 17.5219 2.74063 17.5219H13.3156C14.2719 17.5219 15.0875 16.7344 15.0875 15.75V2.24998C15.0313 1.29373 14.2438 0.506226 13.2875 0.506226ZM13.7656 15.75C13.7656 16.0312 13.5406 16.2562 13.2594 16.2562H2.7125C2.43125 16.2562 2.20625 16.0312 2.20625 15.75V2.24998C2.20625 1.96873 2.43125 1.74373 2.7125 1.74373H13.2875C13.5688 1.74373 13.7938 1.96873 13.7938 2.24998V15.75H13.7656Z",
                                                        fill: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M11.7965 2.6156H8.73086C8.22461 2.6156 7.80273 3.03748 7.80273 3.54373V7.25623C7.80273 7.76248 8.22461 8.18435 8.73086 8.18435H11.7965C12.3027 8.18435 12.7246 7.76248 12.7246 7.25623V3.5156C12.6965 3.03748 12.3027 2.6156 11.7965 2.6156ZM11.4309 6.8906H9.06836V3.88123H11.4309V6.8906Z",
                                                        fill: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M3.97773 4.35938H6.03086C6.36836 4.35938 6.67773 4.07812 6.67773 3.7125C6.67773 3.34687 6.39648 3.09375 6.03086 3.09375H3.94961C3.61211 3.09375 3.30273 3.375 3.30273 3.74063C3.30273 4.10625 3.61211 4.35938 3.97773 4.35938Z",
                                                        fill: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M3.97773 7.9312H6.03086C6.36836 7.9312 6.67773 7.64995 6.67773 7.28433C6.67773 6.9187 6.39648 6.63745 6.03086 6.63745H3.94961C3.61211 6.63745 3.30273 6.9187 3.30273 7.28433C3.30273 7.64995 3.61211 7.9312 3.97773 7.9312Z",
                                                        fill: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M12.0789 10.2374H3.97891C3.64141 10.2374 3.33203 10.5187 3.33203 10.8843C3.33203 11.2499 3.61328 11.5312 3.97891 11.5312H12.0789C12.4164 11.5312 12.7258 11.2499 12.7258 10.8843C12.7258 10.5187 12.4164 10.2374 12.0789 10.2374Z",
                                                        fill: ""
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M12.0789 13.8093H3.97891C3.64141 13.8093 3.33203 14.0906 3.33203 14.4562C3.33203 14.8218 3.61328 15.1031 3.97891 15.1031H12.0789C12.4164 15.1031 12.7258 14.8218 12.7258 14.4562C12.7258 14.0906 12.4164 13.8093 12.0789 13.8093Z",
                                                        fill: ""
                                                    })
                                                ]
                                            }),
                                            "Deposit & Withdrawal"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: "/main/report",
                                        className: `group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("report") && "bg-graydark dark:bg-meta-4"}`,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                className: "fill-current",
                                                width: "18",
                                                height: "19",
                                                viewBox: "0 0 18 19",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                        clipPath: "url(#clip0_130_9756)",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V15.8021C0.506348 16.7584 1.29385 17.574 2.27822 17.574H15.7782C16.7345 17.574 17.5501 16.7865 17.5501 15.8021V2.3021C17.522 1.34585 16.7063 0.55835 15.7501 0.55835ZM6.69385 10.599V6.4646H11.3063V10.5709H6.69385V10.599ZM11.3063 11.8646V16.3083H6.69385V11.8646H11.3063ZM1.77197 6.4646H5.45635V10.5709H1.77197V6.4646ZM12.572 6.4646H16.2563V10.5709H12.572V6.4646ZM2.2501 1.82397H15.7501C16.0313 1.82397 16.2563 2.04897 16.2563 2.33022V5.2271H1.77197V2.3021C1.77197 2.02085 1.96885 1.82397 2.2501 1.82397ZM1.77197 15.8021V11.8646H5.45635V16.3083H2.2501C1.96885 16.3083 1.77197 16.0834 1.77197 15.8021ZM15.7501 16.3083H12.572V11.8646H16.2563V15.8021C16.2563 16.0834 16.0313 16.3083 15.7501 16.3083Z",
                                                            fill: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                                                            id: "clip0_130_9756",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                width: "18",
                                                                height: "18",
                                                                fill: "white",
                                                                transform: "translate(0 0.052124)"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            "Report"
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Sidebar = (Sidebar);

// EXTERNAL MODULE: ./hooks/useLocalStorage.tsx
var useLocalStorage = __webpack_require__(57640);
;// CONCATENATED MODULE: ./hooks/useColorMode.tsx


const useColorMode = ()=>{
    const [colorMode, setColorMode] = (0,useLocalStorage/* default */.Z)("color-theme", "light");
    (0,react_.useEffect)(()=>{
        const className = "dark";
        const bodyClass = window.document.body.classList;
        colorMode === "dark" ? bodyClass.add(className) : bodyClass.remove(className);
    }, [
        colorMode
    ]);
    return [
        colorMode,
        setColorMode
    ];
};
/* harmony default export */ const hooks_useColorMode = (useColorMode);

;// CONCATENATED MODULE: ./components/Header/DarkModeSwitcher.tsx


const DarkModeSwitcher = ()=>{
    const [colorMode, setColorMode] = hooks_useColorMode();
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
            className: `relative m-0 block h-7.5 w-14 rounded-full ${colorMode === "dark" ? "bg-primary" : "bg-stroke"}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "checkbox",
                    onChange: ()=>{
                        if (typeof setColorMode === "function") {
                            setColorMode(colorMode === "light" ? "dark" : "light");
                        }
                    },
                    className: "dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: `absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${colorMode === "dark" && "!right-[3px] !translate-x-full"}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "dark:hidden",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M7.99992 12.6666C10.5772 12.6666 12.6666 10.5772 12.6666 7.99992C12.6666 5.42259 10.5772 3.33325 7.99992 3.33325C5.42259 3.33325 3.33325 5.42259 3.33325 7.99992C3.33325 10.5772 5.42259 12.6666 7.99992 12.6666Z",
                                        fill: "#969AA1"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M8.00008 15.3067C7.63341 15.3067 7.33342 15.0334 7.33342 14.6667V14.6134C7.33342 14.2467 7.63341 13.9467 8.00008 13.9467C8.36675 13.9467 8.66675 14.2467 8.66675 14.6134C8.66675 14.9801 8.36675 15.3067 8.00008 15.3067ZM12.7601 13.4267C12.5867 13.4267 12.4201 13.3601 12.2867 13.2334L12.2001 13.1467C11.9401 12.8867 11.9401 12.4667 12.2001 12.2067C12.4601 11.9467 12.8801 11.9467 13.1401 12.2067L13.2267 12.2934C13.4867 12.5534 13.4867 12.9734 13.2267 13.2334C13.1001 13.3601 12.9334 13.4267 12.7601 13.4267ZM3.24008 13.4267C3.06675 13.4267 2.90008 13.3601 2.76675 13.2334C2.50675 12.9734 2.50675 12.5534 2.76675 12.2934L2.85342 12.2067C3.11342 11.9467 3.53341 11.9467 3.79341 12.2067C4.05341 12.4667 4.05341 12.8867 3.79341 13.1467L3.70675 13.2334C3.58008 13.3601 3.40675 13.4267 3.24008 13.4267ZM14.6667 8.66675H14.6134C14.2467 8.66675 13.9467 8.36675 13.9467 8.00008C13.9467 7.63341 14.2467 7.33342 14.6134 7.33342C14.9801 7.33342 15.3067 7.63341 15.3067 8.00008C15.3067 8.36675 15.0334 8.66675 14.6667 8.66675ZM1.38675 8.66675H1.33341C0.966748 8.66675 0.666748 8.36675 0.666748 8.00008C0.666748 7.63341 0.966748 7.33342 1.33341 7.33342C1.70008 7.33342 2.02675 7.63341 2.02675 8.00008C2.02675 8.36675 1.75341 8.66675 1.38675 8.66675ZM12.6734 3.99341C12.5001 3.99341 12.3334 3.92675 12.2001 3.80008C11.9401 3.54008 11.9401 3.12008 12.2001 2.86008L12.2867 2.77341C12.5467 2.51341 12.9667 2.51341 13.2267 2.77341C13.4867 3.03341 13.4867 3.45341 13.2267 3.71341L13.1401 3.80008C13.0134 3.92675 12.8467 3.99341 12.6734 3.99341ZM3.32675 3.99341C3.15341 3.99341 2.98675 3.92675 2.85342 3.80008L2.76675 3.70675C2.50675 3.44675 2.50675 3.02675 2.76675 2.76675C3.02675 2.50675 3.44675 2.50675 3.70675 2.76675L3.79341 2.85342C4.05341 3.11342 4.05341 3.53341 3.79341 3.79341C3.66675 3.92675 3.49341 3.99341 3.32675 3.99341ZM8.00008 2.02675C7.63341 2.02675 7.33342 1.75341 7.33342 1.38675V1.33341C7.33342 0.966748 7.63341 0.666748 8.00008 0.666748C8.36675 0.666748 8.66675 0.966748 8.66675 1.33341C8.66675 1.70008 8.36675 2.02675 8.00008 2.02675Z",
                                        fill: "#969AA1"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "hidden dark:inline-block",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M14.3533 10.62C14.2466 10.44 13.9466 10.16 13.1999 10.2933C12.7866 10.3667 12.3666 10.4 11.9466 10.38C10.3933 10.3133 8.98659 9.6 8.00659 8.5C7.13993 7.53333 6.60659 6.27333 6.59993 4.91333C6.59993 4.15333 6.74659 3.42 7.04659 2.72666C7.33993 2.05333 7.13326 1.7 6.98659 1.55333C6.83326 1.4 6.47326 1.18666 5.76659 1.48C3.03993 2.62666 1.35326 5.36 1.55326 8.28666C1.75326 11.04 3.68659 13.3933 6.24659 14.28C6.85993 14.4933 7.50659 14.62 8.17326 14.6467C8.27993 14.6533 8.38659 14.66 8.49326 14.66C10.7266 14.66 12.8199 13.6067 14.1399 11.8133C14.5866 11.1933 14.4666 10.8 14.3533 10.62Z",
                                    fill: "#969AA1"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Header_DarkModeSwitcher = (DarkModeSwitcher);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./store/actions/authAction.ts
var authAction = __webpack_require__(17824);
;// CONCATENATED MODULE: ./components/Header/DropdownUser.tsx








const DropdownUser = ()=>{
    const [dropdownOpen, setDropdownOpen] = (0,react_.useState)(false);
    const [token, setToken] = (0,useLocalStorage/* default */.Z)("token", null);
    const router = (0,navigation.useRouter)();
    const dispatch = (0,lib.useDispatch)();
    const user = (0,lib.useSelector)((state)=>state.auth);
    const trigger = (0,react_.useRef)(null);
    const dropdown = (0,react_.useRef)(null);
    // close on click outside
    const handleLogout = ()=>{
        setToken(null);
        dispatch((0,authAction/* logout */.k)());
    };
    (0,react_.useEffect)(()=>{
        if (!user.isAuthenticated) {
            router.push("/");
        }
    });
    (0,react_.useEffect)(()=>{
        const clickHandler = ({ target })=>{
            if (!dropdown.current) return;
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return ()=>document.removeEventListener("click", clickHandler);
    });
    // close if the esc key is pressed
    (0,react_.useEffect)(()=>{
        const keyHandler = ({ keyCode })=>{
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return ()=>document.removeEventListener("keydown", keyHandler);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                ref: trigger,
                onClick: ()=>setDropdownOpen(!dropdownOpen),
                className: "flex items-center gap-4",
                href: "#",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "hidden text-right lg:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "block text-sm font-medium text-black dark:text-white",
                                children: user.username
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "block text-xs",
                                children: user.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "h-12 w-12 rounded-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 112,
                            height: 112,
                            src: "/images/user/user123.png",
                            alt: "User"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        className: "hidden fill-current sm:block",
                        width: "12",
                        height: "8",
                        viewBox: "0 0 12 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z",
                            fill: ""
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: dropdown,
                onFocus: ()=>setDropdownOpen(true),
                onBlur: ()=>setDropdownOpen(false),
                className: `absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? "block" : "hidden"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: handleLogout,
                    className: "flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            className: "fill-current",
                            width: "22",
                            height: "22",
                            viewBox: "0 0 22 22",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z",
                                    fill: ""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z",
                                    fill: ""
                                })
                            ]
                        }),
                        "Log Out"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Header_DropdownUser = (DropdownUser);

;// CONCATENATED MODULE: ./components/Header/index.tsx





const Header = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-2 sm:gap-4 lg:hidden",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            "aria-controls": "sidebar",
                            onClick: (e)=>{
                                e.stopPropagation();
                                props.setSidebarOpen(!props.sidebarOpen);
                            },
                            className: "z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "relative block h-5.5 w-5.5 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "du-block absolute right-0 h-full w-full",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!w-full delay-300"}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "delay-400 !w-full"}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!w-full delay-500"}`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "absolute right-0 h-full w-full rotate-45",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!h-0 !delay-[0]"}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: `delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!h-0 !delay-200"}`
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            className: "block flex-shrink-0 lg:hidden",
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 32,
                                height: 32,
                                src: "/images/logo/logo-icon.svg",
                                alt: "Logo"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden sm:block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        action: "https://formbold.com/s/unique_form_id",
                        method: "POST",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "absolute left-0 top-1/2 -translate-y-1/2",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        className: "fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary",
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z",
                                                fill: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z",
                                                fill: ""
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    placeholder: "Type to search...",
                                    className: "w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-3 2xsm:gap-7",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "flex items-center gap-2 2xsm:gap-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Header_DarkModeSwitcher, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Header_DropdownUser, {})
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./app/main/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function RootLayout({ children }) {
    const router = (0,navigation.useRouter)();
    const [sidebarOpen, setSidebarOpen] = (0,react_.useState)(false);
    const [loading, setLoading] = (0,react_.useState)(true);
    (0,react_.useEffect)(()=>{
        if (!window.localStorage.getItem("token")) {
            router.push("/");
        }
        setTimeout(()=>setLoading(false), 100);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "dark:bg-boxdark-2 dark:text-bodydark",
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {
                    sidebarOpen: sidebarOpen,
                    setSidebarOpen: setSidebarOpen
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                            sidebarOpen: sidebarOpen,
                            setSidebarOpen: setSidebarOpen
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10",
                                children: children
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 71037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Project\frontend\app\main\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;