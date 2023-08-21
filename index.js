"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 3000;
app.get('/', function (req, res) {
    var a = 4;
    if (a > 5) {
        res.send('OK');
    }
    else {
        res.send('Hello Express');
    }
});
app.get('/samurayes', function (req, res) {
    res.send('Hello samurayes');
});
app.post('/samurayes', function (req, res) {
    res.send('We have created samuray!!!!!');
});
app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/pages/home.html');
});
app.listen(port, function () { console.log("Server was started at port http://loclahost:".concat(port)); });
