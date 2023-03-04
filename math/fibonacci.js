const fibonacci = (num) => {
  var seq = [0, 1];
  var first = 0;
  var second = 1;
  if (num < 3) {
    return [0, 1];
  }

  while (seq.length < num) {
    let tmp = second;
    second = first + second;
    first = tmp;
    seq.push(second);
  }
  return seq;
};

console.log(fibonacci(3));
