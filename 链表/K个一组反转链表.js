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