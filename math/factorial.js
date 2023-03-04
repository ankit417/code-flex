const factorial = (num) => {
  let result = 1;

  for (i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(6));
console.log(factorial(7));
