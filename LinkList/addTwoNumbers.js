/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
     let ans = new ListNode();
     let carry = 0;
     let cur = ans

     while(l1 || l2 || carry){

       let v1 = l1? l1.val:0;
       let v2 = l2? l2.val:0;

       let addval = v1+v2+carry
        cur.val =new ListNode(addval%10)
        carry = Math.trunc(addval/10) 

        cur =cur.next;
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null


     }
     
    return ans.next 
};