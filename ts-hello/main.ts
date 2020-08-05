class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ' Y: ' + this.y);
  }
}

let point = new Point(1, 2);
point.draw();

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
