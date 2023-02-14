/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
type ListNode ={
    val:number;
   next:ListNode|null
}
function reverseList(head: ListNode | null): ListNode | null {
   if (!head)return null;

   let newHead:ListNode|null = head;
   if(head.next){
      newHead = reverseList(head.next)
      console.log(newHead)
      head.next.next = head
   }
   return newHead
};