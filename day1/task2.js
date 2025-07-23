
let name = "Madhu";             
let age = 25;                
let isStudent = true;          
let height = null;             
let weight;                    
let bigNumber = 12345678901234567890n; 
let uniqueId = Symbol("id"); 

console.log("Name (String):", name);
console.log("Age (Number):", age);
console.log("Is Student (Boolean):", isStudent);
console.log("Height (Null):", height);
console.log("Weight (Undefined):", weight);
console.log("Big Number (BigInt):", bigNumber);
console.log("Unique ID (Symbol):", uniqueId);


let person = {
  firstName: "Madhu",
  lastName: "R",
  age: 25
};
console.log("Person (Object):", person);


let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits (Array):", fruits);


function greet() {
  console.log("Hello from function!");
}
greet();


let result1 = '5' + 2;  
let result2 = '5' - 2;  
console.log("Result of '5' + 2:", result1);
console.log("Result of '5' - 2:", result2);


let strToNum = Number("123");    
let numToStr = String(456);    
let boolToStr = String(true);    
let numToBool = Boolean(0);       

console.log("String to Number:", strToNum);
console.log("Number to String:", numToStr);
console.log("Boolean to String:", boolToStr);
console.log("Number to Boolean (0):", numToBool);


console.log("Type of name:", typeof name);
console.log("Type of bigNumber:", typeof bigNumber);
console.log("Type of person:", typeof person);
console.log("Type of greet function:", typeof greet);

STRING TO BOOLEAN:


let str1 = "hello";
let bool1 = Boolean(str1);
console.log(`String "${str1}" to Boolean:`, bool1); 

let str2 = "";
let bool2 = Boolean(str2);
console.log(`Empty String "${str2}" to Boolean:`, bool2); 


let str3 = "false";
let bool3 = Boolean(str3);
console.log(`String "false" to Boolean:`, bool3); 

BOOLEAN TO STRING:

let boolTrue = true;
let strFromTrue = String(boolTrue);
console.log(`Boolean true to String:`, strFromTrue); 

let boolFalse = false;
let strFromFalse = String(boolFalse);
console.log(`Boolean false to String:`, strFromFalse);

