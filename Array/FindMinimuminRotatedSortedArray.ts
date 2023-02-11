function findMin(nums: number[]): number {
    let left= 0
    let right = nums.length-1
     let ans = Infinity
    while(right>=left){
     let mid = Math.floor((left+right)/2)
     if(nums[left]<nums[right]){
         ans = Math.min(ans,nums[left]);
         break;
     }
     if(nums[mid]>= nums[left]){
         left = mid+1
     }else{
         right = mid-1
     }
    }
 return ans
 };