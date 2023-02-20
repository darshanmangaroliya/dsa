


function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(!root) return []
    const ans:number[][] = []
    const que:TreeNode[] = [root]

    while(que.length){

        let level:number[]= []
        for (let node of que) {
         let pop = que.shift()
         if(pop){
              level.push(pop?.val)
            que.push(pop.left)
            que.push(pop.right)
          }  

        }
        if(level.length){
            ans.push(level)
        }
    }
    return ans

};