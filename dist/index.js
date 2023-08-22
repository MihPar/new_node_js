"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
app.get('/', function (req, res) {
    const a = 4;
    if (a > 5) {
        res.send('OK');
    }
    else {
        res.send('Hello Express! Yes Yes!!!!');
    }
});
app.get('/samuray', function (req, res) {
    res.send('Hello Samuray');
});
app.post('/samuray', function (req, res) {
    res.send('We have create Samuray!!!');
});
app.listen(port, '127.0.0.1', function () { console.log(`Server was started at port http://localhost:${port}`); });
