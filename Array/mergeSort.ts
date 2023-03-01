function sortArray(nums: number[]): number[] {
    if (nums.length <2) return nums
    let l = 0,
    r = nums.length;
    let m = Math.floor((l+r)/2)

     
   return mergeSortedArr(sortArray(nums.slice(l,m)),sortArray(nums.slice(m)))
};
const mergeSortedArr = (left:number[],right:number[]):number[] =>{
let res:number[] = []
let l = 0,
r = 0 ,
k=0;

while(l<left.length || r<right.length){
    if(left[l]<= right[r]){
        res[k]= left[l]
        ++l
    }else{
       res[k]= right[r] 
       ++r
    }
  ++k
}
while(l<left.length){
     res[k]= left[l]
        ++l;
        ++k
}
while(r<right.length){
     res[k]= right[r] 
       ++r;
       ++k
}
  return res
}