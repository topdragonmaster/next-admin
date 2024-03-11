"use strict";
(() => {
var exports = {};
exports.id = 8317;
exports.ids = [8317];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 18158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/account/create/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./DB/connectDB.ts
var connectDB = __webpack_require__(70407);
// EXTERNAL MODULE: ./models/Account.ts
var Account = __webpack_require__(1077);
// EXTERNAL MODULE: ./node_modules/joi/lib/index.js
var lib = __webpack_require__(68726);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./app/api/account/create/route.ts




const schema = lib_default().object({
    name: lib_default().string().required(),
    station: lib_default().string().required()
});
async function POST(request) {
    await (0,connectDB/* default */.Z)();
    const { name, station, brokerage } = await request.json();
    const { error } = schema.validate({
        name,
        station
    });
    if (error) return next_response/* default */.Z.json({
        success: false,
        message: error.details[0].message.replace(/['"]+/g, "")
    });
    try {
        const ifExist = await Account/* default */.Z.findOne({
            name,
            station
        });
        if (ifExist) {
            return next_response/* default */.Z.json({
                success: false,
                message: "Account Already Exist"
            });
        } else {
            const createAccount = await Account/* default */.Z.create({
                name,
                station,
                brokerage
            });
            return next_response/* default */.Z.json({
                success: true,
                message: "Account created successfully"
            });
        }
    } catch (error) {
        console.log("Error in register (server) => ", error);
        return next_response/* default */.Z.json({
            success: false,
            message: "Something Went Wrong Please Retry Later !"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Faccount%2Fcreate%2Froute&name=app%2Fapi%2Faccount%2Fcreate%2Froute&pagePath=private-next-app-dir%2Fapi%2Faccount%2Fcreate%2Froute.ts&appDir=D%3A%5CProject%5Cfrontend%5Capp&appPaths=%2Fapi%2Faccount%2Fcreate%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/account/create/route","pathname":"/api/account/create","filename":"route","bundlePath":"app/api/account/create/route"},"resolvedPagePath":"D:\\Project\\frontend\\app\\api\\account\\create\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/account/create/route"

    

/***/ }),

/***/ 70407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

// connecting to database
const connectDB = async ()=>{
    const connectionUrl = process.env.MONGODB_URL;
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(connectionUrl).then(()=>console.log(`Database connected successfully`)).catch((err)=>console.log("Getting Error from DB connection" + err.message));
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set("strictQuery", false);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);


/***/ }),

/***/ 1077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const AccountSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    station: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Station",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brokerage: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
const Account = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Account || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Account", AccountSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,9289], () => (__webpack_exec__(18158)));
module.exports = __webpack_exports__;

})();