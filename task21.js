1. Simple if statement
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote.");
}

 2. if-else block
let temp = 30;

if (temp > 35) {
  console.log("It's too hot outside.");
} else {
  console.log("Weather is normal.");
}

 3. else-if block (multiple conditions)
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

 4. switch statement for menu selection
let choice = 2;

console.log("\nMenu:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");

switch (choice) {
  case 1:
    console.log("You chose: Add");
    break;
  case 2:
    console.log("You chose: Subtract");
    break;
  case 3:
    console.log("You chose: Multiply");
    break;
  default:
    console.log("Invalid choice");
}
