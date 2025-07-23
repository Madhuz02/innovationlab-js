TRADITIONAL FUNCTION DECLARATION:

function greet(name) {
  return "Hello, " + name;
}

const greet = function(name) {
  return "Hello, " + name;
};

REGULAR FUNCTION:

function add(a, b) {	//traditional
  return a + b;
}

const add = function(a, b) {	//function expression
  return a + b;
};

FUNCTION WITH NO PARAMETER:


function sayHi() {
  console.log("Hi!");
}

const sayHi = function() {
  console.log("Hi!");
};

FUNCTION WITH DEFAULT PARAMETER:

function multiply(a = 1, b = 1) {
  return a * b;
}

const multiply = function(a = 1, b = 1) {
  return a * b;
};

 Using Arrow Function Expression:

const greet = (name) => {
  return "Hello, " + name;
};

const greet = name => "Hello, " + name;


TASK12(2):

const add = (a, b) => a + b;

console.log("add(3, 7):", add(3, 7)); 

const greet = name => "Hello, " + name + "!";

console.log("greet('Madhu'):", greet("Madhu"));

const square = num => num * num;

console.log("square(5):", square(5)); 

const isEven = number => number % 2 === 0;

console.log("isEven(6):", isEven(6)); 
console.log("isEven(7):", isEven(7)); 

const toFahrenheit = celsius => (celsius * 9/5) + 32;

console.log("toFahrenheit(0):", toFahrenheit(0));   
console.log("toFahrenheit(25):", toFahrenheit(25)); 

TASK12(3):

function Person(name) {
  this.name = name;
}

const p = new Person("Madhu");
const BadPerson = (name) => {
  this.name = name;
};

const bp = new BadPerson("Madhu"); 

TASK12(4):

const add = (a, b) => a + b;

console.log("add(4, 6):", add(4, 6));

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(fruit => console.log("Fruit:", fruit));






