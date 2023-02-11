function carFleet(target: number, position: number[], speed: number[]): number {
    let ps:number[][] = []
    let stack:number[] = []
   for (let i = 0; i < position.length; i++) {
        ps.push([position[i],speed[i]])
   }
   ps.sort((a:number[],b:number[])=>a[0]-b[0])
   
  for(let i=position.length-1;i>=0;i--){
     stack.push((target-ps[i][0])/ps[i][1])

     if(stack.length>=2 && stack.at(-1)<=stack.at(-2)){
       stack.pop()
     }
  }
   
return stack.length
};
  carFleet(12,[10,8,0,5,3],[2,4,1,1,3])




  
// Other problem

//   function hammingWeight(n: number): number {
//     let count = 0;
//     n.toString(2).split("").forEach((e)=>e && count++)

//     return count
// };

// function subtractProductAndSum(n: number): number {
//     return n.toString().split("").reduce((a:number,b)=>a*Number(b),1) -n.toString().split("").reduce((a:number,b)=>a+Number(b),0)
//    };