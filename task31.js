function add(a, b) {
  return a + b;
}

function greet(name) {
  return "Hello, " + name + "!";
}

function square(num) {
  return num * num;
}

function isEven(number) {
  return number % 2 === 0;
}

function toFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


console.log("add(3, 7):", add(3, 7));
console.log("greet('Madhu'):", greet("Madhu"));
console.log("square(5):", square(5));
console.log("isEven(6):", isEven(6));
console.log("isEven(7):", isEven(7));
console.log("toFahrenheit(0):", toFahrenheit(0));
console.log("toFahrenheit(25):", toFahrenheit(25));









Example using arguments object:



function sumArguments() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumArguments(10, 20, 30)); 



Example using Rest Operator ...args:


const sumRest = (...args) => {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
};

console.log(sumRest(5, 15, 25)); 


TASK2(3):

function sumArguments() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const sumRest = (...args) => {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}


console.log("=== Testing sumArguments ===");
console.log("sumArguments(10, 20, 30):", sumArguments(10, 20, 30));  
console.log("sumArguments(5, 15):", sumArguments(5, 15));            

console.log("\n=== Testing sumRest ===");
console.log("sumRest(1, 2, 3, 4):", sumRest(1, 2, 3, 4));            
console.log("sumRest(100):", sumRest(100));                          
console.log("sumRest():", sumRest());                                

