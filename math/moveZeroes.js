/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let output = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      output.push(nums[i]);
    } else {
      count++;
    }
  }
  while (count > 0) {
    output.push(0);
    count--;
  }
  return output;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
