function longestConsecutive(nums: number[]): number {
  const newSet = new Set(nums)
   let ans = 0
  for (const num of nums) {
      
    if(!newSet.has(num -1)){
           let len = 0
           while(newSet.has(num + len)){
            len++
           }
           ans = Math.max(ans,len)
    }
    
  }
  return ans
};