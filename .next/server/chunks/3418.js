"use strict";
exports.id = 3418;
exports.ids = [3418];
exports.modules = {

/***/ 23418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F9: () => (/* binding */ getTrade),
/* harmony export */   FM: () => (/* binding */ deleteTrade),
/* harmony export */   Jg: () => (/* binding */ updateTrade),
/* harmony export */   TR: () => (/* binding */ createTrade)
/* harmony export */ });
/* harmony import */ var _store_actions_tradeAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98554);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54997);


const getTrade = async (dispatch)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`${"http://localhost:3000"}/api/trade`);
        const data = res.data;
        console.log(data);
        return data.success && dispatch((0,_store_actions_tradeAction__WEBPACK_IMPORTED_MODULE_1__/* .initiateTrade */ .T4)(data.trades));
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};
const deleteTrade = async (_id)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`${"http://localhost:3000"}/api/trade/delete/${_id}`);
        const data = res.data;
        return data;
    } catch (error) {
        console.log("error in update (service) => ", error);
    }
};
const createTrade = async (formData)=>{
    try {
        const res = await fetch(`${"http://localhost:3000"}/api/trade/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log("error in register (service) => ", error);
    }
};
const updateTrade = async (formData)=>{
    try {
        const res = await fetch(`${"http://localhost:3000"}/api/trade/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log("error in register (service) => ", error);
    }
};


/***/ }),

/***/ 98554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FM: () => (/* binding */ deleteTrade),
/* harmony export */   T4: () => (/* binding */ initiateTrade)
/* harmony export */ });
/* unused harmony export updateTrade */
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93614);

const initiateTrade = (trades)=>({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__/* .INITIATETRADE */ .hu,
        payload: trades
    });
const updateTrade = (trade)=>({
        type: UPDATETRADE,
        payload: trade
    });
const deleteTrade = (_id)=>({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__/* .DELETETRADE */ .TC,
        payload: _id
    });


/***/ })

};
;