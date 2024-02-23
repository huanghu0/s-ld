/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(head === null || head.next === null){
    return false
  }
  let slow = head.next;
  let fast = head.next.next;
  while(fast && fast.next && fast !== slow){
    slow = slow.next;
    fast = fast.next.next;
  }
  return (fast === null || fast.next === null) ? false : true    
};