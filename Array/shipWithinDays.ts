function shipWithinDays(weights: number[], days: number): number {
    let l = Math.max(...weights)
    let r = weights.reduce((a,b)=>a+b)
    const inRange = (mid:number):boolean=>{
      let total = 0;
      let actdays = 1
      for (let weight of weights) {
         if(total+ weight> mid)  {
          total = 0;
          actdays++
         }  
         total+=weight    
      }
      return actdays<=days
    }
    let ans =r
    while(l<r){
      let m= Math.floor((l+r)/2);
      if(inRange(m)){
      console.log(m,l)
          ans =m
          r =m
      }else{
          l= m+1
      }
  
    }
    return ans
  };