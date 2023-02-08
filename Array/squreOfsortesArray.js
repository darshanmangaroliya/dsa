/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length
    let left = 0
    let result = new Array(n).fill(0)
    let right = n-1
    for(let i = 0; i<n;i++){
        if(Math.abs(nums[left])>Math.abs(nums[right])){
           result[n-i-1]=nums[left]**2
            left++
        }else{
            result[n-i-1]=nums[right]**2
            right--

        }
    }
    return result
};