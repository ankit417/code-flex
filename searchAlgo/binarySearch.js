const binarySearch = (searchArray, target) => {
  let LI = 0;
  let RI = searchArray.length - 1;

  while (LI <= RI) {
    let MP = Math.floor((LI + RI) / 2);
    if (searchArray[MP] === target) {
      return MP;
    }
    searchArray[MP] > target ? (RI = MP - 1) : (LI = MP + 1);
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2));
