var maxSlidingWindow = function(nums, k) {
  class MonoQueue {
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