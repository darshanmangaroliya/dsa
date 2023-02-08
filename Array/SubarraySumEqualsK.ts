function subarraySum(nums: number[], k: number): number {
    let newMap = new Map()
    //if sum === k than its subarray so add zero
    newMap.set(0,1)
   let ans =0;
   let sum = 0;

    for (const num of nums) {
       sum+=num 


      if(newMap.has(sum-k))ans +=newMap.get(sum-k);
      if (newMap.has(sum)) {
         newMap.set(sum,newMap.get(sum)+1)
      } else {
        newMap.set(sum,1)
      }
    }
    return ans
  };