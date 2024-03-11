"use strict";
exports.id = 3484;
exports.ids = [3484];
exports.modules = {

/***/ 99571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D0: () => (/* binding */ getAccount),
/* harmony export */   o1: () => (/* binding */ createAccount),
/* harmony export */   tm: () => (/* binding */ deleteAccount)
/* harmony export */ });
/* harmony import */ var _store_actions_accountAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22373);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54997);


const getAccount = async (dispatch)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`${"http://localhost:3000"}/api/account`);
        const data = res.data;
        console.log(data);
        return data.success && dispatch((0,_store_actions_accountAction__WEBPACK_IMPORTED_MODULE_1__/* .initiateAccount */ .SJ)(data.accounts));
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};
const deleteAccount = async (_id)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`${"http://localhost:3000"}/api/account/delete/${_id}`);
        const data = res.data;
        return data;
    } catch (error) {
        console.log("error in update (service) => ", error);
    }
};
const createAccount = async (formData)=>{
    try {
        const res = await fetch(`${"http://localhost:3000"}/api/account/create`, {
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

/***/ 57644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zw: () => (/* binding */ deleteStation),
/* harmony export */   gs: () => (/* binding */ getStation),
/* harmony export */   yn: () => (/* binding */ createStation)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54997);
/* harmony import */ var _store_actions_stationAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82184);


const getStation = async (dispatch)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`${"http://localhost:3000"}/api/station`);
        const data = res.data;
        console.log(data);
        return data.success && dispatch((0,_store_actions_stationAction__WEBPACK_IMPORTED_MODULE_1__/* .initiateStation */ .Yv)(data.stations));
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};
const deleteStation = async (_id)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`${"http://localhost:3000"}/api/station/delete/${_id}`);
        const data = res.data;
        return data;
    } catch (error) {
        console.log("error in update (service) => ", error);
    }
};
const createStation = async (formData)=>{
    try {
        const res = await fetch(`${"http://localhost:3000"}/api/station/create`, {
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

/***/ 22373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SJ: () => (/* binding */ initiateAccount),
/* harmony export */   tm: () => (/* binding */ deleteAccount)
/* harmony export */ });
/* unused harmony export updateAccount */
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93614);

const initiateAccount = (accounts)=>({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__/* .INITIATEACCOUNT */ .lc,
        payload: accounts
    });
const updateAccount = (account)=>({
        type: UPDATEACCOUNT,
        payload: account
    });
const deleteAccount = (_id)=>({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__/* .DELETEACCOUNT */ .Wg,
        payload: _id
    });


/***/ }),

/***/ 82184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Yv: () => (/* binding */ initiateStation),
/* harmony export */   Zw: () => (/* binding */ deleteStation)
/* harmony export */ });
/* unused harmony export updateStation */
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93614);

const initiateStation = (stations)=>({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__/* .INITIATESTATION */ .lB,
        payload: stations
    });
const updateStation = (station)=>({
        type: UPDATESTATION,
        payload: station
    });
const deleteStation = (_id)=>({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__/* .DELETESTATION */ .$$,
        payload: _id
    });


/***/ })

};
;