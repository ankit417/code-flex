const duplicateRemover = (num) => {
  var y = [];
  console.log("num", num);
  for (let i = 0; i < num.length; i++) {
    if (!y.includes(num[i])) {
      y.push(num[i]);
    }
  }
  return y;
};

console.log(duplicateRemover([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9]));
