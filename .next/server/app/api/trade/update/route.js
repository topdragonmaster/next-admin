"use strict";
(() => {
var exports = {};
exports.id = 1623;
exports.ids = [1623];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 95174:
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

// NAMESPACE OBJECT: ./app/api/trade/update/route.ts
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
// EXTERNAL MODULE: ./models/Trade.ts
var Trade = __webpack_require__(36961);
;// CONCATENATED MODULE: ./app/api/trade/update/route.ts



async function POST(request) {
    await (0,connectDB/* default */.Z)();
    const { _id, stockCode, account, price, amount, type, expiration, date } = await request.json();
    try {
        const updatedTrade = await Trade/* default */.Z.findByIdAndUpdate(_id, {
            stockCode,
            account,
            price,
            amount,
            type,
            expiration,
            date
        }, {
            new: true
        });
        if (!updatedTrade) {
            return next_response/* default */.Z.json({
                error: "Trade not found"
            });
        }
        return next_response/* default */.Z.json({
            success: true,
            Trade: updatedTrade,
            message: "Trade information updated successfully"
        });
    } catch (error) {
        console.log("Error in register (server) => ", error);
        return next_response/* default */.Z.json({
            success: false,
            message: "Something Went Wrong Please Retry Later !"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Ftrade%2Fupdate%2Froute&name=app%2Fapi%2Ftrade%2Fupdate%2Froute&pagePath=private-next-app-dir%2Fapi%2Ftrade%2Fupdate%2Froute.ts&appDir=D%3A%5CProject%5Cfrontend%5Capp&appPaths=%2Fapi%2Ftrade%2Fupdate%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/trade/update/route","pathname":"/api/trade/update","filename":"route","bundlePath":"app/api/trade/update/route"},"resolvedPagePath":"D:\\Project\\frontend\\app\\api\\trade\\update\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/trade/update/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,4397], () => (__webpack_exec__(95174)));
module.exports = __webpack_exports__;

})();