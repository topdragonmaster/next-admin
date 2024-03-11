exports.id = 9974;
exports.ids = [9974];
exports.modules = {

/***/ 27188:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 97978))

/***/ }),

/***/ 51291:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 97978:
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
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(4047);
// EXTERNAL MODULE: ./app/data-tables-css.css
var data_tables_css = __webpack_require__(60661);
// EXTERNAL MODULE: ./app/satoshi.css
var satoshi = __webpack_require__(43626);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/integration/react.js
var react = __webpack_require__(45067);
// EXTERNAL MODULE: ./node_modules/redux/dist/redux.mjs
var redux = __webpack_require__(57751);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/index.js
var redux_persist_lib = __webpack_require__(22502);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/index.js
var storage = __webpack_require__(66001);
// EXTERNAL MODULE: ./store/actions/types.ts
var types = __webpack_require__(93614);
;// CONCATENATED MODULE: ./store/reducers/authReducer.ts

const initialState = {
    isAuthenticated: false,
    username: null,
    email: null
};
const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case types/* LOGIN_SUCCESS */.XP:
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload.username,
                email: action.payload.email
            };
        case types/* LOGOUT */.Nv:
            return {
                ...state,
                isAuthenticated: false,
                username: null,
                email: null
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_authReducer = (authReducer);

;// CONCATENATED MODULE: ./store/reducers/stationReducer.ts

const stationReducer_initialState = {
    stations: []
};
const stationReducer = (state = stationReducer_initialState, action)=>{
    switch(action.type){
        case types/* INITIATESTATION */.lB:
            return {
                ...state,
                stations: action.payload
            };
        case types/* UPDATESTATION */.jR:
            return {
                ...state,
                stations: [
                    ...state.stations,
                    action.payload
                ]
            };
        case types/* DELETESTATION */.$$:
            return {
                ...state,
                stations: state.stations.filter((station)=>station._id !== action.payload)
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_stationReducer = (stationReducer);

;// CONCATENATED MODULE: ./store/reducers/accountReducer.ts

const accountReducer_initialState = {
    accounts: []
};
const accountReducer = (state = accountReducer_initialState, action)=>{
    switch(action.type){
        case types/* INITIATEACCOUNT */.lc:
            return {
                ...state,
                accounts: action.payload
            };
        case types/* UPDATEACCOUNT */.fB:
            return {
                ...state,
                accounts: [
                    ...state.accounts
                ].map((account)=>account._id === action.payload._id ? action.payload : account)
            };
        case types/* DELETEACCOUNT */.Wg:
            return {
                ...state,
                accounts: state.accounts.filter((account)=>account._id !== action.payload)
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_accountReducer = (accountReducer);

;// CONCATENATED MODULE: ./store/reducers/tradeReducer.ts

const tradeReducer_initialState = {
    trades: []
};
const tradeReducer = (state = tradeReducer_initialState, action)=>{
    switch(action.type){
        case types/* INITIATETRADE */.hu:
            return {
                ...state,
                trades: action.payload
            };
        case types/* UPDATETRADE */.mA:
            return {
                ...state,
                trades: [
                    ...state.trades
                ].map((trade)=>trade._id === action.payload._id ? action.payload : trade)
            };
        case types/* DELETETRADE */.TC:
            return {
                ...state,
                trades: state.trades.filter((trade)=>trade._id !== action.payload)
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_tradeReducer = (tradeReducer);

;// CONCATENATED MODULE: ./store/reducers/transactionReducer.ts

const transactionReducer_initialState = {
    transactions: []
};
const transactionReducer = (state = transactionReducer_initialState, action)=>{
    switch(action.type){
        case types/* INITIATETRANSACTION */.Rx:
            return {
                ...state,
                transactions: action.payload
            };
        case types/* UPDATETRANSACTION */.p5:
            return {
                ...state,
                transactions: [
                    ...state.transactions
                ].map((transaction)=>transaction._id === action.payload._id ? action.payload : transaction)
            };
        case types/* DELETETRANSACTION */.yR:
            return {
                ...state,
                transactions: state.transactions.filter((transaction)=>transaction._id !== action.payload)
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_transactionReducer = (transactionReducer);

;// CONCATENATED MODULE: ./store/reducers/index.ts






const rootReducer = (0,redux/* combineReducers */.UY)({
    auth: reducers_authReducer,
    station: reducers_stationReducer,
    account: reducers_accountReducer,
    trade: reducers_tradeReducer,
    transaction: reducers_transactionReducer
});
/* harmony default export */ const reducers = (rootReducer);

;// CONCATENATED MODULE: ./store/store.ts



 // Your combined reducers
const persistConfig = {
    key: "root",
    storage: storage/* default */.Z
};
const persistedReducer = (0,redux_persist_lib.persistReducer)(persistConfig, reducers);
const store = (0,redux/* createStore */.MT)(persistedReducer);
const persistor = (0,redux_persist_lib.persistStore)(store);

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(45676);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(45996);
;// CONCATENATED MODULE: ./app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        suppressHydrationWarning: true,
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
                    store: store,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react/* PersistGate */.r, {
                        loading: null,
                        persistor: persistor,
                        children: children
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_toastify_esm/* ToastContainer */.Ix, {})
            ]
        })
    });
}


/***/ }),

/***/ 93614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$: () => (/* binding */ DELETESTATION),
/* harmony export */   Nv: () => (/* binding */ LOGOUT),
/* harmony export */   Rx: () => (/* binding */ INITIATETRANSACTION),
/* harmony export */   TC: () => (/* binding */ DELETETRADE),
/* harmony export */   Wg: () => (/* binding */ DELETEACCOUNT),
/* harmony export */   XP: () => (/* binding */ LOGIN_SUCCESS),
/* harmony export */   fB: () => (/* binding */ UPDATEACCOUNT),
/* harmony export */   hu: () => (/* binding */ INITIATETRADE),
/* harmony export */   jR: () => (/* binding */ UPDATESTATION),
/* harmony export */   lB: () => (/* binding */ INITIATESTATION),
/* harmony export */   lc: () => (/* binding */ INITIATEACCOUNT),
/* harmony export */   mA: () => (/* binding */ UPDATETRADE),
/* harmony export */   p5: () => (/* binding */ UPDATETRANSACTION),
/* harmony export */   yR: () => (/* binding */ DELETETRANSACTION)
/* harmony export */ });
/* unused harmony export LOGIN_FAILURE */
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const LOGOUT = "LOGOUT";
const INITIATESTATION = "INITIATESTATION";
const UPDATESTATION = "UPDATESTATION";
const DELETESTATION = "DELETESTATION";
const INITIATEACCOUNT = "INITIATEACCOUNT";
const UPDATEACCOUNT = "UPDATEACCOUNT";
const DELETEACCOUNT = "DELETEACCOUNT";
const INITIATETRADE = "INITIATETRADE";
const UPDATETRADE = "UPDATETRADE";
const DELETETRADE = "DELETETRADE";
const INITIATETRANSACTION = "INITIATETRANSACTION";
const UPDATETRANSACTION = "UPDATETRANSACTION";
const DELETETRANSACTION = "DELETETRANSACTION";


/***/ }),

/***/ 51921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Project\frontend\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 57481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 60661:
/***/ (() => {



/***/ }),

/***/ 4047:
/***/ (() => {



/***/ }),

/***/ 43626:
/***/ (() => {



/***/ })

};
;