/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // 单调队列
    class MonoQueue {
        queue;
        constructor() {
            this.queue = [];
        }
        enqueue(value) {
            let back = this.queue[this.queue.length - 1];
            while (back !== undefined && back < value) {
                this.queue.pop();
                back = this.queue[this.queue.length - 1];
            }
            this.queue.push(value);
        }
        dequeue(value) {
            let front = this.front();
            if (front === value) {
                this.queue.shift();
            }
        }
        front() {
            return this.queue[0];
        }
    }
    let helperQueue = new MonoQueue();
    let i = 0, j = 0;
    let resArr = [];
    while (j < k) {
        helperQueue.enqueue(nums[j++]);
    }
    resArr.push(helperQueue.front());
    while (j < nums.length) {
        helperQueue.enqueue(nums[j]);
        helperQueue.dequeue(nums[i]);
        resArr.push(helperQueue.front());
        i++, j++;
    }
    return resArr;
};



var maxSlidingWindow = function(nums, k) {

  // 大根堆
  class Heap {
    constructor(comparator = (a, b) => a - b, data = []) {
        this.data = data;
        this.comparator = comparator;//比较器 
        this.heapify();//堆化
    }
  
    heapify() {
        if (this.size() < 2) return;
        for (let i = Math.floor(this.size()/2)-1; i >= 0; i--) {
            this.bubbleDown(i);//bubbleDown操作
        }
    }
  
    peek() {
        if (this.size() === 0) return null;
        return this.data[0];//查看堆顶
    }
  
    offer(value) {
        this.data.push(value);//加入数组
        this.bubbleUp(this.size() - 1);//调整加入的元素在小顶堆中的位置
    }
  
    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;//交换第一个元素和最后一个元素
            this.bubbleDown(0);//bubbleDown操作
        }
        return result;
    }
  
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;//父节点的位置
            //如果当前元素比父节点的元素小，就交换当前节点和父节点的位置
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);//交换自己和父节点的位置
                index = parentIndex;//不断向上取父节点进行比较
            } else {
                break;//如果当前元素比父节点的元素大，不需要处理
            }
        }
    }
  
    bubbleDown(index) {
        const lastIndex = this.size() - 1;//最后一个节点的位置
        while (true) {
            const leftIndex = index * 2 + 1;//左节点的位置
            const rightIndex = index * 2 + 2;//右节点的位置
            let findIndex = index;//bubbleDown节点的位置
            //找出左右节点中value小的节点
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);//交换当前元素和左右节点中value小的
                index = findIndex;
            } else {
                break;
            }
        }
    }
  
    swap(index1, index2) {//交换堆中两个元素的位置
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
  
    size() {
        return this.data.length;
    }
  }


  let ans = [];
  let heap = new Heap((a, b) => b.val - a.val);//大顶堆
  for(let i=0;i<k-1;i++) heap.offer({val: nums[i], index: i});//初始的时候将0～k-1的元素加入堆中
  for(let i=k-1; i<nums.length; i++){//滑动窗口从从索引为k-1的元素开始遍历
      heap.offer({val: nums[i], index: i});//将新进入滑动窗口的元素加堆中
    //当堆顶元素不在滑动窗口中的时候，不断删除堆顶堆元素，直到最大值在滑动窗口里。
      while(heap.peek().index<=i-k) heap.poll();
      ans.push(heap.peek().val);//将在滑动窗口里的最大值加入ans
  }
  return ans;
}
