function minEatingSpeed(piles: number[], h: number): number {
  let maxval = Math.max(...piles)
  let start = 0;
  let ans = -Infinity;
  const findTotalhr = (devider:number):number=>{
    let ttlhr:number = 0;

    for (const pile of piles) {
        ttlhr+= Math.ceil(pile/devider)
    }
    return ttlhr
  }
  while(maxval>=start){
     let mid = Math.floor((maxval+start)/2)
      let midhr = findTotalhr(mid)
     if(midhr<=h){
        ans = Math.max(ans,mid)
        maxval = mid-1
     }else{
        start = mid+1
     }
  }

};