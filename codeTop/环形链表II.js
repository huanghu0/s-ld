/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // let set = new Set()
    // while(head){
    //     if(set.has(head)){
    //         return head
    //     }
    //     set.add(head)
    //     head = head.next;
    // }
    // return null

    let slow = head,fast = head
    while(fast !== null){
        if(fast.next){
            fast = fast.next.next
        }else{
            return null
        }
        slow = slow.next
        if(slow === fast){
            let p = head
            while(p !== slow){
                p = p.next
                slow = slow.next
            }
            return p
        }
    }   
    return null 
};