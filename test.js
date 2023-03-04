/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let LI = 0;
  var result = [];
  while (LI < nums.length) {
    for (let i = LI; i < nums.length; i++) {
      if (nums[LI] + nums[LI + 1] === target) {
        result.push[LI];
        result.push[LI + 1];
        LI += 2;
      }
    }
  }
  return result;
};

console.log(twoSum([1, 3, 4, 5, 2], 4));
