function subsets(nums: number[]): number[][] {
    const res:number[][] = []

    const rec = (arr:number[],start:number)=>{
       if(start === nums.length-1) return
       res.push(arr)
       for (let i = start; i < nums.length; i++) {
         rec([...arr,nums[i]],i+1)        
       }
    }
    rec([],0)
    return res
};