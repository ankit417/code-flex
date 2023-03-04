const fibonacciSequence = (num) => {
  if (num < 2) {
    return num;
  }
  return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
};

console.log(fibonacciSequence(0));
console.log(fibonacciSequence(5));
console.log(fibonacciSequence(7));
