// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left === right) {
        return head
    }
    let prev = null
    let tail = null
    let dummyHead = new ListNode()
    dummyHead.next = head
    let p = dummyHead
    let i = 0
    while(i < left - 1){
        p = p.next
        i += 1
    }
    prev = p
    while(i <= right - 1){
        p = p.next
        i += 1
    }
    tail = p.next
    let leftNode = prev.next
    let rightNode = p
    prev.next = null
    rightNode.next = null
    let pre = null
    let cur = leftNode
    while(cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    leftNode.next = tail
    prev.next = rightNode
    return dummyHead.next
};