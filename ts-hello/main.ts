import { Point } from './point';

const point = new Point(1, 2);
point.draw();
console.log(point.getX());

let num = 1;
let count = 2;
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 1, Blue = 2};

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
console.log(endsWithC);

function doSomething() {
  for (let i=1;i<6;i++) {
    console.log(i);
  }
}

doSomething();
