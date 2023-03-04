// check Prime

const checkPrime = (num) => {
  var divider = 2;
  while (num > 2) {
    if (num % divider === 0) {
      console.log("Not a prime");
      return false;
    } else {
      divider++;
    }
    return true;
  }
  return true;
};

console.log(checkPrime(2));
