function isBalanced(root: TreeNode | null): boolean {
    if(!root )return true

    let dfs = (node:TreeNode | null):number=>{
        if(!node) return 0
        let left = dfs(node.left)+1
        let right = dfs(node.right)+1
        if(Math.abs(right-left)>1) return Infinity
        return Math.max(left,right)
       }

       return dfs(root) === Infinity ?false:true
    }