/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。


var getIntersectionNode = function(headA, headB) {
    let p1 = headA,p2 = headB    
    if(p1 === null || p2 === null) return null
    while(p1 !== p2){
        p1 = p1 === null ? headB : p1.next
        p2 = p2 === null ? headA : p2.next
    }
    return p1
};