"use strict";
exports.id = 3660;
exports.ids = [3660];
exports.modules = {

/***/ 73660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ks: () => (/* binding */ deleteTransaction),
/* harmony export */   Ld: () => (/* binding */ updateTransaction),
/* harmony export */   _X: () => (/* binding */ createTransaction),
/* harmony export */   fo: () => (/* binding */ getTransaction)
/* harmony export */ });
/* harmony import */ var _store_actions_transactionAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55312);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54997);


const getTransaction = async (dispatch)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`${"http://localhost:3000"}/api/transaction`);
        const data = res.data;
        console.log(data);
        return data.success && dispatch((0,_store_actions_transactionAction__WEBPACK_IMPORTED_MODULE_1__/* .initiateTransaction */ .oo)(data.transactions));
    } catch (error) {
        console.log("Error fetching data:", error);
    }
};
const deleteTransaction = async (_id)=>{
    try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.delete(`${"http://localhost:3000"}/api/transaction/delete/${_id}`);
        const data = res.data;
        return data;
    } catch (error) {
        console.log("error in update (service) => ", error);
    }
};
const createTransaction = async (formData)=>{
    try {
        const res = await fetch(`${"http://localhost:3000"}/api/transaction/create`, {
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
const updateTransaction = async (formData)=>{
    try {
        const res = await fetch(`${"http://localhost:3000"}/api/transaction/update`, {
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

/***/ 55312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ks: () => (/* binding */ deleteTransaction),
/* harmony export */   oo: () => (/* binding */ initiateTransaction)
/* harmony export */ });
/* unused harmony export updateTransaction */
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93614);

const initiateTransaction = (transactions)=>({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__/* .INITIATETRANSACTION */ .Rx,
        payload: transactions
    });
const updateTransaction = (transaction)=>({
        type: UPDATETRANSACTION,
        payload: transaction
    });
const deleteTransaction = (_id)=>({
        type: _actions_types__WEBPACK_IMPORTED_MODULE_0__/* .DELETETRANSACTION */ .yR,
        payload: _id
    });


/***/ })

};
;