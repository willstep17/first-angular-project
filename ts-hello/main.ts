class Point {

  constructor(private x: number, private y?: number) { }

  draw() {
    console.log('X: ' + this.x + ' Y: ' + this.y);
  }

  getX() {
    return this.x;
  }

  setX(value: number) {
    if (value < 0)
      throw new Error('Value cannot be less than 0.');

      this.x = value;
  }
}

let point = new Point(1, 2);
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
