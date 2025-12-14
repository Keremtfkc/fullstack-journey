function isEven(n) {
  return n % 2 === 0;
}

function factorial(n) {
  if (n < 0) return null;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

const numbers = [3, 4, 7, 10];

console.log("Çift mi?", numbers.map((n) => ({ n, even: isEven(n) })));
console.log("5! =", factorial(5));
