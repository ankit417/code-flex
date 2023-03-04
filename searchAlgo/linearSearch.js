const LinearSearch = (searchArray, target) => {
  for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(LinearSearch([1, 2, 3, 4, 5], 5));
