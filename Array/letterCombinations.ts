function letterCombinations(digits: string): string[] {
   let ans:string[] = []
   const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
} 


const backtrack = (i:number,currstr:string)=>{
  if(currstr.length === digits.length){
    ans.push(currstr)
    return
  }
  for(let char of map[digits[i]]) {
      backtrack(i+1,currstr+char)
  }
  
}
return ans
};