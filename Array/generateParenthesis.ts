function generateParenthesis(n: number): string[] {
   let ans:string[] = []

      let recur = (str:string,o:number,c:number) =>{
         if(str.length === 2*n){
            ans.push(str)
            return
         }
        if(o<3){
           let str1:string = str+"(";
            recur(str1,o+1,c)
        }
        if(c<o){
            let str1:string = str+")";
            recur(str1,o,c+1)
        }
      }
      recur("",0,0)
   return ans
};