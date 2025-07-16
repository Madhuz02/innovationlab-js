
const a =parseFloat(prompt("enter the first num:")) ;
const b = parseFloat(prompt("enter the second num:"));
const operator=prompt("enter the symbol from this +,-,*,/")

if (isNaN(a) || isNaN(b)) {
  console.log("Please enter valid numbers.");
} else {
  let result;
  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : "Cannot divide by zero"; break;
    default: result = "Invalid operator"; break;
  }
  console.log("Result:", result);
}