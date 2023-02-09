function combinationSum(candidates: number[], target: number): number[][] {
  let ans:any = [];

     const dfs= (i:number,cur:number[],total:number) =>{
          

        if(total == target){
            ans.push([...cur]);
            return
        }

        if( i>candidates.length || total>target) return

        
        dfs(i,[...cur,candidates[i]],total+candidates[i])
        dfs(i+1,cur,total)
     } 
     dfs(0, [], 0)

return ans

};