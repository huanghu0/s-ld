// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dumyHead = new ListNode();
    dumyHead.next = head
    let fast = dumyHead,second = dumyHead;
    for(let i = 0;i < n;i++){
        fast = fast.next
    }
    while(fast.next){
        fast = fast.next
        second = second.next
    }
    let kNode = second.next
    second.next = kNode.next
    kNode.next = null
    return dumyHead.next
};