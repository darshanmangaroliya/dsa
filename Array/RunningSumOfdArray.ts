function runningSum(nums: number[]): number[] {
    let ans = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
         ans.push(ans[i-1] + nums[i])
    }
    return ans
};

let check =   runningSum([1,2,3,4])
console.log('check', check)