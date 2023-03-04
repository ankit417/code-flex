const recursiveFactorial = (n) => {
  if (n < 2) {
    return n;
  }
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(5));
console.log(recursiveFactorial(6));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(3));
