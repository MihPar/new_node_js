"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./routes/product_route");
const address_route_1 = require("./routes/address_route");
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
// const parseMiddleWare = bodyParser()
// app.use(parseMiddleWare)
let blaBlaMiddleWare = (req, res, next) => {
    // @ts-ignore
    req.blabla = 'Hello';
    next();
};
let authGuardeMiddleWare = (req, res, next) => {
    if (req.query.token === '123') {
        next();
    }
    else {
        res.json(401);
    }
};
let requestCounter = 0;
let requestCounterMiddleWare = (req, res, next) => {
    requestCounter++;
    next();
};
app.use('/product', product_route_1.productsRouter);
app.use('/addresses', address_route_1.addressesRouter);
app.use(requestCounterMiddleWare);
app.use(blaBlaMiddleWare);
app.use(authGuardeMiddleWare);
app.get('/products', function (req, res) {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({ value: blabla + '!!!!' + requestCounter });
});
app.get('/users', function (req, res) {
    //@ts-ignore
    const blabla = req.blabla;
    res.send({ value: blabla + ' from user' + requestCounter });
});
app.listen(port, function () {
    console.log(`Server was started at port http://localhost:${port}`);
});
