function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {   
    let dumyHead = new ListNode(0)
    dumyHead.next = head
    let pre = dumyHead
    const reverse = (head,tail) => {
        let prev = tail.next
        let cur = head
        while(prev !== tail){
            let next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        }
        return [tail,head]
    }     
    while(head){
        let tail = pre
        for(let i = 0 ; i < k;i++){
            tail = tail.next
            if(!tail){
                return dumyHead.next
            }            
        }
        let nextHead = tail.next;
        [head,tail] = reverse(head,tail)
        pre.next = head
        tail.next = nextHead
        pre = tail
        head = tail.next
    }
    return dumyHead.next  
};

let head = new ListNode(1)
let a = new ListNode(2)
let b = new ListNode(3)
let c = new ListNode(4)
let d = new ListNode(5)
head.next = a
a.next = b
b.next = c
c.next = d

console.log(reverseKGroup(head,2))