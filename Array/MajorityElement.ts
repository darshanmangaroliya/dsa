function majorityElement(nums: number[]) {
  let newmap = new Map()

  for (const iterator of nums) {
    if(newmap.has(iterator)){
        newmap.set(iterator,newmap.get(iterator)+1)
    }else{
       newmap.set(iterator,1) 
    }
    if(newmap.get(iterator)>=nums.length/2){
        return iterator
    }
  }
};