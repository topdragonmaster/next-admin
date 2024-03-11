"use strict";
(() => {
var exports = {};
exports.id = 8900;
exports.ids = [8900];
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

/***/ 29500:
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

// NAMESPACE OBJECT: ./app/api/transaction/create/route.ts
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
// EXTERNAL MODULE: ./models/Transaction.ts
var Transaction = __webpack_require__(72265);
// EXTERNAL MODULE: ./node_modules/joi/lib/index.js
var lib = __webpack_require__(68726);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./app/api/transaction/create/route.ts




const schema = lib_default().object({
    stockCode: lib_default().string().required(),
    station: lib_default().string().required(),
    amount: lib_default().number().required(),
    type: lib_default().string().required(),
    date: lib_default().string().required()
});
async function POST(request) {
    await (0,connectDB/* default */.Z)();
    const { stockCode, station, amount, type, date } = await request.json();
    const { error } = schema.validate({
        stockCode,
        station,
        amount,
        type,
        date
    });
    if (error) return next_response/* default */.Z.json({
        success: false,
        message: error.details[0].message.replace(/['"]+/g, "")
    });
    try {
        const createTransaction = await Transaction/* default */.Z.create({
            stockCode,
            station,
            amount,
            type,
            date: new Date(date)
        });
        return next_response/* default */.Z.json({
            success: true,
            createTransaction,
            message: "Transaction created successfully"
        });
    } catch (error) {
        console.log("Error in register (server) => ", error);
        return next_response/* default */.Z.json({
            success: false,
            message: "Something Went Wrong Please Retry Later !"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ftransaction%2Fcreate%2Froute&name=app%2Fapi%2Ftransaction%2Fcreate%2Froute&pagePath=private-next-app-dir%2Fapi%2Ftransaction%2Fcreate%2Froute.ts&appDir=D%3A%5CProject%5Cfrontend%5Capp&appPaths=%2Fapi%2Ftransaction%2Fcreate%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/transaction/create/route","pathname":"/api/transaction/create","filename":"route","bundlePath":"app/api/transaction/create/route"},"resolvedPagePath":"D:\\Project\\frontend\\app\\api\\transaction\\create\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/transaction/create/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,9289,2415], () => (__webpack_exec__(29500)));
module.exports = __webpack_exports__;

})();