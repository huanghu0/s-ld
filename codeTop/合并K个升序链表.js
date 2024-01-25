// 给你一个链表数组，每个链表都已经按升序排列。
// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const merge = (list1,list2) => {
        let dumyHead = new ListNode();
        let p = dumyHead
        let p1 = list1,p2 = list2;
        while(p1 && p2){
            if(p1.val > p2.val){
                p.next = p2
                p2 = p2.next
            }else{
                p.next = p1
                p1 = p1.next
            }
            p = p.next
        }
        if(p1) p.next = p1;
        if(p2) p.next = p2;
        return dumyHead.next
    }

    const mergeList = (lists,start,end) => {
        if(start === end){
            return lists[start]
        }
        if(start > end){
            return null
        }
        let mid = Math.floor((end - start) / 2) + start
        let head1 = mergeList(lists,start,mid)
        let head2 = mergeList(lists,mid+1,end)
        return merge(head1,head2)
    }

    return mergeList(lists,0,lists.length - 1)

};