/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
      let curr = head;
      let map = {
        null:null
      }
      while(curr){
        map[curr.val] = new Node(curr.val)
        curr = curr.next
      }
      curr = head
      while(curr){
      let copy = map[curr.val]
      copy.next = map[curr.next]
      copy.random = map[curr.random]
      }

      return map[head.val]
};