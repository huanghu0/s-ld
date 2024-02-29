/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let prevHead = new ListNode(-1)
    let prev = prevHead
    let l1 = list1,l2 = list2

    while(l1 && l2){
        if(l1.val <= l2.val){
            prev.next = l1
            l1 = l1.next
        }else{
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }

    prev.next = l1 ? l1 : l2;
    return prevHead.next

};