const bubbleSort = (array) => {
  var swap;

  do {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        swap = true;
      }
    }
  } while (swap);
  return array;
};

console.log(
  bubbleSort([5, 4, 3, 2, 1, 543, 34, 23, 234, 234, 23, 4234, 234, 234, 234, 6])
);
