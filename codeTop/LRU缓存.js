// 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
// 实现 LRUCache 类：
// LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

/**
 * @param {number} capacity
 */
// var LRUCache = function(capacity) {
//     this.capacity = capacity
//     this.map = new Map()
// };

/** 
 * @param {number} key
 * @return {number}
 */
// LRUCache.prototype.get = function(key) {
//     if(this.map.has(key)){
//         let value = this.map.get(key)
//         this.map.delete(key)
//         this.map.set(key,value)
//         return this.map.get(key)
//     }else{
//         return -1
//     }
// };

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
// LRUCache.prototype.put = function(key, value) {
//     if(this.map.has(key)){
//         this.map.delete(key)
//         this.map.set(key,value)
//     }else{
//         if(this.map.size === this.capacity){
//          this.map.delete(this.map.keys().next().value)
//         }
//         this.map.set(key,value)
//     }
// };


/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function ListNode(key,value){
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.hash = {}
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.hash[key]){
        return -1
    }else{
        this.moveToHead(this.hash[key])
        return this.hash[key].value
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.hash[key]){ // 如果不存在改key
        if(this.count === this.capacity){
            this.removeTail()
        }
        let node = new ListNode(key,value)
        this.hash[key] = node
        node.next = this.dummyHead.next
        node.prev = this.dummyHead
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
        this.count += 1
    }else{
        this.hash[key].value = value
        this.moveToHead(this.hash[key])
    }
};

LRUCache.prototype.moveToHead = function(node){
    // 将节点从链表中移除
    let temp1 = node.prev
    let temp2 = node.next
    temp1.next = temp2
    temp2.prev = temp1
    // 插入链表头部
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
}

LRUCache.prototype.removeTail = function(){
    let tail = this.dummyTail.prev;
    let temp1 = tail.prev;
    let temp2 = tail.next;
    temp1.next = temp2
    temp2.prev = temp1
    delete this.hash[tail.key]
    this.count -= 1
}

