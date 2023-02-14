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

function hasCycle(head: ListNode | null): boolean {
  const map = new Map();

  let curr = head;

  while (curr) {
    if (map.has(curr)) return true;
    map.set(curr, 1);
    curr = curr.next;
  }

  return false;
}
