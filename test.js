var merge = function (nums1, m, nums2, n) {
  return [...nums1.splice(0, m), ...nums2.splice(0, n)].sort((a, b) => {
    return a - b;
  });
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
