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
function oddEvenList(head: ListNode | null): ListNode | null {
    if(!head) return null
    
    let odd = head;
    let evn = head.next;
    let evnhd = head.next;

    while(evn && evn.next){
        odd.next = odd.next?.next
        evn.next = evn.next?.next
        odd =odd.next;
        evn=evn.next
    }
    odd.next = evnhd
    return head
 };