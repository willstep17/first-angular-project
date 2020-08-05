var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('Value cannot be less than 0.');
        this.x = value;
    };
    return Point;
}());
var point = new Point(1, 2);
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
