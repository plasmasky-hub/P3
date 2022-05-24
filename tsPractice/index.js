"use strict";
exports.__esModule = true;
var hello = 'hello world!';
console.log("🚀 ~ file: index.ts ~ line 2 ~ hello", hello);
var express = require("express");
var app = express();
var PORT = 3000;
app.get('/', function (req, res) {
    res.send('hello world.');
});
app.listen(PORT, function () {
    console.log("Listeing on port ".concat(PORT));
});
