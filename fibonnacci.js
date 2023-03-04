const fibonacci = (num) => {
  const fib = [];
  var x = 0;
  var y = 1;
  fib.push(x);
  fib.push(y);
  for (let i = 2; i < num; i++) {
    let z = y;
    y = x + y;
    x = z;
    fib.push(y);
  }
  return fib;
};

console.log(fibonacci(115));
