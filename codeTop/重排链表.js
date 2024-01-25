/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null){
        return null
    }
    const findMidNode = (head) =>{
        let slow = head;
        let fast = head;
        while(slow.next && fast.next  && fast.next.next ){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    const reverseList = (cur,prev) => {
        // let prev = null;
        // let cur = head;
        // while(cur){
        //     let temp = cur.next;
        //     cur.next = prev;
        //     prev = cur;
        //     cur = temp
        // }
        // return prev;
        if(cur === null) return prev
        let temp = cur.next;
        cur.next = prev;
        prev = cur
        cur = temp
        return reverseList(cur,prev)
    }
    const mergeList = (l1,l2) => {
        let l1_temp = null;
        let l2_temp = null;
        while(l1  && l2 ){
            l1_temp = l1.next;
            l2_temp = l2.next;
            l1.next = l2;
            l1 = l1_temp;
            l2.next = l1;
            l2 = l2_temp;   
        }
        return l1;
    }
    let midnode = findMidNode(head);
    let l1 = head;
    let rl2 = midnode.next;
    midnode.next = null;
    let l2 =  reverseList(rl2,null);
    return mergeList(l1,l2)
};