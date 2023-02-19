/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {
   if(!root) return 0
   let ans = 0;

   let dfs = (node:TreeNode | null):number=>{
    if(!node) return 0
    let left = dfs(node.left)
    let right = dfs(node.right)
    ans = Math.max(ans,left+right)
    return Math.max(left,right)+1
   }
   dfs(root)
   return ans
};