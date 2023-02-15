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
    if(!head) return head
      let curr = head;
const map = new Map();

      while(curr){
        map.set(curr, new Node(curr.val))
        curr = curr.next
      }
      curr = head
      while(curr){
      let copy = map.get(curr)
      copy.next = map.get(curr?.next)||null
      copy.random = map.get(curr?.random)||null
       curr = curr.next
      }

      return map.get(head)
};