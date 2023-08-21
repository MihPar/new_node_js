"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    const a = 4;
    if (a > 5) {
        res.send('OK');
    }
    else {
        res.send('Hello Express');
    }
});
app.get('/samurayes', (req, res) => {
    res.send('Hello samurayes!!!!!');
});
app.post('/samurayes', (req, res) => {
    res.send('We have created samuray');
});
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/pages/home.html');
});
app.listen(port, function () { console.log(`Server was started at port http://loclahost:${port}`); });
