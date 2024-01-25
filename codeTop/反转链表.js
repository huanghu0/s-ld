// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
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
    // 迭代
    // let pre = null 
    // let cur = head
    // while(cur){
    //     let next = cur.next
    //     cur.next = pre
    //     pre = cur
    //     cur = next
    // }
    // return pre

    // 递归
    // function dfs(head) {
    //     if(head === null || head.next === null){
    //         return head
    //     }
    //     const newHead = dfs(head.next)
    //     head.next.next = head
    //     head.next = null
    //     return newHead
    // }
    // let newHead = dfs(head)
    function reverse(pre,cur) {
        if(cur === null) return pre;
        let temp = cur.next
        cur.next = pre
        return reverse(cur,temp)
    }
    let newHead = reverse(null,head)
    return newHead
};