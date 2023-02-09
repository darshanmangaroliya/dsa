// function numPairsDivisibleBy60(time: number[]): number {
//   let ans = 0;
//   let freqArray  =new Array(60).fill(0)


//   for (const t of time) {

//     let rem = t%60;
//     if(rem ===0){
//         ans+= freqArray[rem]
//     }else{
//         ans+= freqArray[60-rem]
//     }
//     freqArray[rem]++
//   }
//   return ans
// };

function numPairsDivisibleBy60(time: number[]): number {

    let ans = 0;
    let freqMap = new Map()
       for (const t of time) {

          let rem = t%60

          if(freqMap.has(rem ? 60-rem:0)){
            ans+=freqMap.get(rem)
          }
           if(freqMap.has(rem)){
            freqMap.set(rem,freqMap.get(rem)+1)
           }else{
            freqMap.set(rem,1)
           }
       }
       return ans
}