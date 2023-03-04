const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  var midPoint = Math.floor(arr.length / 2);
  var left_array = arr.slice(0, midPoint);
  var right_array = arr.slice(midPoint);
  console.log("mid point", midPoint);
  console.log("left array 1", left_array);
  console.log("right array 2", right_array);
  return merge(mergeSort(left_array), mergeSort(right_array));
};

const merge = (left_array, right_array) => {
  console.log("right array merge", right_array);
  var sortedArray = [];
  while (left_array && right_array) {
    if (left_array[0] <= right_array[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(right_array.shift());
    }
  }
  return sortedArray;
};

const data = [1, 5, 4, 11, 10, 8, 7];
console.log(mergeSort(data));
