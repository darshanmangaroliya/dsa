function pivotIndex(nums: number[]): number {
   let leftsum= 0;
   //start from index 1 
   let rightsum= nums.reduce((a,b) => a+b)-nums[0];
   //check for index 0 
   if( leftsum === rightsum ) return 0;
   
   for(let i = 1; i < nums.length; i++ ) {
       leftsum += nums[i-1]; 
       rightsum -= nums[i]; 
       if( leftsum === rightsum ) return i;
   }
   
   return -1
};