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
interface TreeNode{
    val:number;
    left:TreeNode|null;
    right:TreeNode|null
}
function minDiffInBST(root: TreeNode | null): number {
   let arr:number[] = []
   let ans =Number.MAX_VALUE;
  let iot = (root:TreeNode|null)=>{
    if(root === null) return;
    iot(root.left)
    arr.push(root.val)
    iot(root.right)
  }
  iot(root)
  for (let i = 0; i < arr.length -1; i++) {
    ans = Math.min(ans,arr[i+1]-arr[i])
  }
   return ans
};
