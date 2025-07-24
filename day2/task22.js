1.while loop

Print numbers 1 to 10 using while loop

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

2. do...while loop: Prompt user until correct input:

let input;

do {
  input = prompt("Enter 'yes' to continue:");
} while (input !== "yes");

console.log("Thank you for entering the correct input!");

 3. for loop: Sum of first N natural numbers:
let N = 5;
let sum = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
}

console.log(`Sum of first ${N} natural numbers is: ${sum}`);

 4. Nested for loop: Print multiplication table (1 to 5):

for (let i = 1; i <= 5; i++) {
  console.log(`\nMultiplication Table for ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}




