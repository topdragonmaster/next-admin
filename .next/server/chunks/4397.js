"use strict";
exports.id = 4397;
exports.ids = [4397];
exports.modules = {

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

/***/ 36961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const TradeSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    stockCode: {
        type: String,
        required: true
    },
    account: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Account",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: [
            "buy",
            "sell"
        ],
        required: true
    },
    expiration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});
const Trade = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Trade || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Trade", TradeSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trade);


/***/ })

};
;