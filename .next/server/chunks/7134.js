"use strict";
exports.id = 7134;
exports.ids = [7134];
exports.modules = {

/***/ 10074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Loader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-screen items-center justify-center bg-white dark:bg-black",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 57640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass  initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        try {
            // Get from local storage by key
            if (false) {}
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // useEffect to update local storage when the state changes
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = typeof storedValue === "function" ? storedValue(storedValue) : storedValue;
            // Save state
            if (false) {}
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    }, [
        key,
        storedValue
    ]);
    return [
        storedValue,
        setStoredValue
    ];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorage);


/***/ }),

/***/ 17824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ loginSuccess),
/* harmony export */   k: () => (/* binding */ logout)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93614);

const loginSuccess = (user)=>({
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOGIN_SUCCESS */ .XP,
        payload: user
    });
const logout = ()=>({
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .LOGOUT */ .Nv
    });


/***/ })

};
;