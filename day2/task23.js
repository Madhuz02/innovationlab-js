1.Break statment:

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 10; i <= 50; i++) {
  if (isPrime(i)) {
    console.log("First prime found:", i);
    break;
  }
}


2.Continue statment:

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i); 
}
