/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let start:number = 0;
    let end : number = 1;

    while(end<nums.length){

        if(nums[start] === 0 && nums[end] !== 0 ){
            nums[start] = nums[end]
            nums[end] = 0
            start++
        }
        if(nums[start] !== 0 ) {
            start ++
        }
        end ++
    }
 };