function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const newMap = new Map()
     for (let i = 0; i < nums1.length; i++) {
        newMap.set(nums1[i],i)
     }
     const ans = new Array(nums1.length).fill(-1)

     for (let i = 0; i < nums2.length; i++) {
        if(!newMap.has(nums2[i])) continue;
        console.log(nums2[i])
        for (let j = i+1; j < nums2.length; j++) {
                if(nums2[i]< nums2[j]){
                  ans[newMap.get(nums2[i])] = nums2[j]
                  break;
                }
        }        
     }
     return ans
};