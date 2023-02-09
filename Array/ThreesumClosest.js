/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let sortarr = nums.sort((a, b) => a - b);

  let ans = Infinity;
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = sortarr[i] + sortarr[j] + sortarr[k];

      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum;
      }
      if (sum === target) {
        return target;
      }
      if (sum > target) {
        k--;
      }
      if (sum < target) {
        j++;
      }
    }
  }
  return ans;
};
