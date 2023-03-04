const QuickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left_arr = [];
  let right_arr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left_arr.push(arr[i]);
    } else {
      right_arr.push(arr[i]);
    }
  }

  return [...QuickSort(left_arr), pivot, ...QuickSort(right_arr)];
};

console.log(QuickSort([8, 7, 6, 5, 4, 3, 2, 1]));
