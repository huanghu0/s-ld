/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  const reverse = (pre,cur) => {
    if(!cur) return pre
    let temp = cur.next
    cur.next = pre
    return reverse(cur,temp)
  }
  let newHead = reverse(null,head)
  return newHead  
};