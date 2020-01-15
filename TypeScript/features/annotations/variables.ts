let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in object
let now: Date = new Date();

//Array
let color: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Clases
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber = (i: number): void => {
  console.log(i);
};

// When to use annotations
// 1) Function that returnss the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = Json.parse(json);