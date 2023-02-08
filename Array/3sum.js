/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, target = 0) {
  if (nums.length === 3 && nums[0] + nums[2] + nums[1] === 0) {
    return [nums];
  }
  let soredarr = nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && soredarr[i] === soredarr[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = soredarr[i] + soredarr[j] + soredarr[k];
      if (sum === target) {
        ans.push([soredarr[i], soredarr[j], soredarr[k]]);

        while (soredarr[j] === soredarr[j + 1]) j++;
        while (soredarr[k] === soredarr[k - 1]) k--;
        j++;
        k--;
      } else if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return ans;
};
