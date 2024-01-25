// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
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
    if(!list1) return list2
    if(!list2) return list1
    let merge = new ListNode()
    let temp = merge
    while(list1 && list2){
        if(list1.val >= list2.val){
            temp.next = list2
            list2 = list2.next
        }else{
            temp.next = list1
            list1 = list1.next
        }
        temp = temp.next
    }
    if(list1) temp.next = list1
    if(list2) temp.next = list2
    return merge.next
};
