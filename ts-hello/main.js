"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.draw();
console.log(point.getX());
var num = 1;
var count = 2;
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var message;
message = 'abc';
var endsWithC = message.endsWith('c');
console.log(endsWithC);
function doSomething() {
    for (var i = 1; i < 6; i++) {
        console.log(i);
    }
}
doSomething();
