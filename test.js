function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low - 1;
  let j = high + 1;

  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i >= j) {
      return j;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let p = partition(arr, low, high);
    quickSort(arr, low, p);
    quickSort(arr, p + 1, high);
  }
  return arr;
}

// Example usage:
let arr = [3, 8, 2, 4, 1, 6, 7, 5];
let p = partition(arr, 0, arr.length - 1);
console.log(arr); // [1, 2, 3, 4, 8, 6, 7, 5]
console.log(p); // 3
console.log(quickSort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8]
