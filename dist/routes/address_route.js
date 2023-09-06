"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
exports.addressesRouter = (0, express_1.Router)({});
const addresseses = [{ id: 1, value: 'Novay, 12' }, { id: 2, value: 'Staray 13' }];
exports.addressesRouter.get('/', (req, res) => {
    res.send(addresseses);
});
exports.addressesRouter.get('/:id', function (req, res) {
    // let result
    // for(let item of addresses) {
    //     if(item.id === Number(req.params.id)) {
    //         result = item.value
    //     }
    // }
    // res.json(result)
    let address = addresseses.find(function (address) {
        return address.id === Number(req.params.id);
    });
    if (address) {
        res.json(address);
    }
    else {
        res.status(404).json('Not found');
    }
});
