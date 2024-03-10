class myPromise {
    // 用static创建静态属性，用来管理状态
    static PENDING = 'pending';
    static FULFILLED = 'fulfilled';
    static REJECTED = 'rejected';

    // 构造函数：通过new命令生成对象实例时，自动调用类的构造函数
    constructor(func) { // 给类的构造方法constructor添加一个参数func
        this.PromiseState = myPromise.PENDING; // 指定Promise对象的状态属性 PromiseState，初始值为pending
        this.PromiseResult = null; // 指定Promise对象的结果 PromiseResult
        this.onFulfilledCallbacks = []; // 保存成功回调
        this.onRejectedCallbacks = []; // 保存失败回调
        try {
            /**
             * func()传入resolve和reject，
             * resolve()和reject()方法在外部调用，这里需要用bind修正一下this指向
             * new 对象实例时，自动执行func()
             */
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            // 生成实例时(执行resolve和reject)，如果报错，就把错误信息传入给reject()方法，并且直接执行reject()方法
            this.reject(error)
        }
    }

    resolve(result) { // result为成功态时接收的终值
        // 只能由pending状态 => fulfilled状态 (避免调用多次resolve reject)
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.FULFILLED;
            this.PromiseResult = result;
            /**
             * 在执行resolve或者reject的时候，遍历自身的callbacks数组，
             * 看看数组里面有没有then那边 保留 过来的 待执行函数，
             * 然后逐个执行数组里面的函数，执行的时候会传入相应的参数
             */
            this.onFulfilledCallbacks.forEach(callback => {
                callback(result)
            })
        }
    }

    reject(reason) { // reason为拒绝态时接收的终值
        // 只能由pending状态 => rejected状态 (避免调用多次resolve reject)
        if (this.PromiseState === myPromise.PENDING) {
            this.PromiseState = myPromise.REJECTED;
            this.PromiseResult = reason;
            this.onRejectedCallbacks.forEach(callback => {
                callback(reason)
            })
        }
    }

    /**
     * [注册fulfilled状态/rejected状态对应的回调函数] 
     * @param {function} onFulfilled  fulfilled状态时 执行的函数
     * @param {function} onRejected  rejected状态时 执行的函数 
     * @returns {function} newPromsie  返回一个新的promise对象
     */
    then(onFulfilled, onRejected) {
        // 2.2.7规范 then 方法必须返回一个 promise 对象
        let promise2 = new myPromise((resolve, reject) => {
            if (this.PromiseState === myPromise.FULFILLED) {
                /**
                 * 为什么这里要加定时器setTimeout？
                 * 2.2.4规范 onFulfilled 和 onRejected 只有在执行环境堆栈仅包含平台代码时才可被调用 注1
                 * 这里的平台代码指的是引擎、环境以及 promise 的实施代码。
                 * 实践中要确保 onFulfilled 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
                 * 这个事件队列可以采用“宏任务（macro-task）”机制，比如setTimeout 或者 setImmediate； 也可以采用“微任务（micro-task）”机制来实现， 比如 MutationObserver 或者process.nextTick。
                 */
                setTimeout(() => {
                    try {
                        if (typeof onFulfilled !== 'function') {
                                //   console.log(this.PromiseResult,'this.PromiseResult')
                            // 2.2.7.3规范 如果 onFulfilled 不是函数且 promise1 成功执行， promise2 必须成功执行并返回相同的值
                            resolve(this.PromiseResult);
                        } else {
                            //   console.log(this.PromiseResult,'this.PromiseResult')
                            // 2.2.7.1规范 如果 onFulfilled 或者 onRejected 返回一个值 x ，则运行下面的 Promise 解决过程：[[Resolve]](promise2, x)，即运行resolvePromise()
                            let x = onFulfilled(this.PromiseResult);
                            //   console.log(x,'x-------------------')
                            resolvePromise(promise2, x, resolve, reject);
                        }
                    } catch (e) {
                        // 2.2.7.2规范 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须拒绝执行，并返回拒因 e
                        reject(e); // 捕获前面onFulfilled中抛出的异常
                    }
                });
            } else if (this.PromiseState === myPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        if (typeof onRejected !== 'function') {
                            // 2.2.7.4规范 如果 onRejected 不是函数且 promise1 拒绝执行， promise2 必须拒绝执行并返回相同的据因
                            reject(this.PromiseResult);
                        } else {
                            let x = onRejected(this.PromiseResult);
                            resolvePromise(promise2, x, resolve, reject);
                        }
                    } catch (e) {
                        reject(e)
                    }
                });
            } else if (this.PromiseState === myPromise.PENDING) {
                // pending 状态保存的 onFulfilled() 和 onRejected() 回调也要符合 2.2.7.1，2.2.7.2，2.2.7.3 和 2.2.7.4 规范
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            if (typeof onFulfilled !== 'function') {
                                resolve(this.PromiseResult);
                            } else {
                                let x = onFulfilled(this.PromiseResult);
                                resolvePromise(promise2, x, resolve, reject);
                            }
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            if (typeof onRejected !== 'function') {
                                reject(this.PromiseResult);
                            } else {
                                let x = onRejected(this.PromiseResult);
                                resolvePromise(promise2, x, resolve, reject);
                            }
                        } catch (e) {
                            reject(e);
                        }
                    });
                });
            }
        })

        return promise2
    }

    // catch() 方法返回一个Promise，并且处理拒绝的情况。它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。
    // 事实上, calling obj.catch(onRejected) 内部calls obj.then(undefined, onRejected)。(这句话的意思是，我们显式使用obj.catch(onRejected)，内部实际调用的是obj.then(undefined, onRejected))
    // Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
    
    catch(onRejected){
        return this.then(undefined,onRejected)
    }

    // finally()  方法返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式。
    // 这避免了同样的语句需要在then()和catch()中各写一次的情况。该方法是 ES2018 引入标准的。
    // 由于无法知道promise的最终状态，所以finally的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。
        
    finally(callback){
        return this.then(callback,callback)
    }

    //   如果这个值是一个 promise ，那么将返回这个 promise ；
    //   如果这个值是thenable（即带有"then" 方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
    //   否则返回的promise将以此值完成，即以此值执行resolve()方法 (状态为fulfilled)。
    static resolve(value){
        // 如果这个值是一个 promise ，那么将返回这个 promise 
        if (value instanceof myPromise) {
            return value;
        } else if (value instanceof Object && 'then' in value) {
            // 如果这个值是thenable（即带有`"then" `方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
            return new myPromise((resolve, reject) => {
                value.then(resolve, reject);
            })
        }

        // 否则返回的promise将以此值完成，即以此值执行`resolve()`方法 (状态为fulfilled)
        return new myPromise((resolve) => {
            resolve(value)
        })        
    }

    // 方法返回一个带有拒绝原因的Promise对象。
    static reject(reason){
        return new myPromise((resolve,reject) => {
            reject(reason)
        })
    }

    // Promise.all 等待所有都完成（或第一个失败）
    // 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise
    // 如果参数中包含非 promise 值，这些值将被忽略，但仍然会被放在返回数组中，如果 promise 完成的话 (也就是如果参数里的某值不是Promise，则需要原样返回在数组里)
    // 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组，它包含所有的传入迭代参数对象的值（也包括非 promise 值）。
    // 如果传入的 promise 中有一个失败（rejected），Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成
    static all(promises) {
        return new myPromise((resolve, reject) => {
            // 参数校验
            if (Array.isArray(promises)) {
                let result = []; // 存储结果
                let count = 0; // 计数器

                // 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise
                if (promises.length === 0) {
                    return resolve(promises);
                } 
                promises.forEach((item, index) => {
                    //  判断参数是否为promise与thenable对象
                    //    if (item instanceof myPromise || (value instanceof Object && 'then' in value)) {
                    //         myPromise.resolve(item).then(
                    //             value => {
                    //                 count++;
                    //                 // 每个promise执行的结果存储在result中
                    //                 result[index] = value;
                    //                 // Promise.all 等待所有都完成（或第一个失败）
                    //                 count === promises.length && resolve(result);
                    //             },
                    //             reason => {
                    //                 /**
                    //                  * 如果传入的 promise 中有一个失败（rejected），
                    //                  * Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成
                    //                  */
                    //                 reject(reason);
                    //             }
                    //         )
                    //     } else {
                    //         // 参数里中非Promise值，原样返回在数组里
                    //         count++;
                    //         result[index] = item;
                    //         count === promises.length && resolve(result);
                    //     }
                    // myPromise.resolve方法中已经判断了参数是否为promise与thenable对象，所以无需在该方法中再次判断
                    myPromise.resolve(item).then(
                        value => {
                            count++;
                            // 每个promise执行的结果存储在result中
                            result[index] = value;
                            // Promise.all 等待所有都完成（或第一个失败）
                            count === promises.length && resolve(result);
                        },
                        reason => {
                            /**
                             * 如果传入的 promise 中有一个失败（rejected），
                             * Promise.all 异步地将失败的那个结果给失败状态的回调函数，而不管其它 promise 是否完成
                             */
                            reject(reason);
                        }
                    )                    
                })                
            } else {
                return reject(new TypeError('Argument is not iterable'))
            }
        })
    } 

    /**
     * Promise.allSettled 
     * @param {*} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入
     * @returns 
     */
    static allSettled(promises) {
            return new myPromise((resolve, reject) => {
                // 参数校验
                if (Array.isArray(promises)) {
                    let result = []; // 存储结果
                    let count = 0; // 计数器
    
                    // 如果传入的是一个空数组，那么就直接返回一个resolved的空数组promise对象
                    if (promises.length === 0) return resolve(promises);
    
                    promises.forEach((item, index) => {
                        // 非promise值，通过Promise.resolve转换为promise进行统一处理
                        myPromise.resolve(item).then(
                            value => {
                                count++;
                                // 对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。
                                result[index] = {
                                    status: 'fulfilled',
                                    value
                                }
                                // 所有给定的promise都已经fulfilled或rejected后,返回这个promise
                                count === promises.length && resolve(result);
                            },
                            reason => {
                                count++;
                                /**
                                * 对于每个结果对象，都有一个 status 字符串。如果值为 rejected，则存在一个 reason 。
                                * value（或 reason ）反映了每个 promise 决议（或拒绝）的值。
                                */
                                result[index] = {
                                    status: 'rejected',
                                    reason
                                }
                                // 所有给定的promise都已经fulfilled或rejected后,返回这个promise
                                count === promises.length && resolve(result);
                            }
                        )
                    })
                } else {
                    return reject(new TypeError('Argument is not iterable'))
                }
            })
    }    
 
    /**
     * Promise.any()
     * @param {iterable} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入
     * @returns 
     */
    static any(promises) {
            return new myPromise((resolve, reject) => {
                // 参数校验
                if (Array.isArray(promises)) {
                    let errors = []; // 
                    let count = 0; // 计数器
    
                    // 如果传入的参数是一个空的可迭代对象，则返回一个 已失败（already rejected） 状态的 Promise。
                    if (promises.length === 0) return reject(new AggregateError('All promises were rejected'));
    
                    promises.forEach(item => {
                        // 非Promise值，通过Promise.resolve转换为Promise
                        myPromise.resolve(item).then(
                            value => {
                                // 只要其中的一个 promise 成功，就返回那个已经成功的 promise 
                                resolve(value);
                            },
                            reason => {
                                cout++;
                                errors.push(reason);
                                /**
                                * 如果可迭代对象中没有一个 promise 成功，就返回一个失败的 promise 和AggregateError类型的实例，
                                * AggregateError是 Error 的一个子类，用于把单一的错误集合在一起。
                                */
                                cout === promises.length && reject(new AggregateError(errors));
                            }
                        )
                    })
                } else {
                    return reject(new TypeError('Argument is not iterable'))
                }
            })
        }
    
    /**
     * Promise.race()
     * @param {iterable} promises 可迭代对象，类似Array。详见 iterable。
     * @returns 
     */
    static race(promises) {
        return new myPromise((resolve, reject) => {
            // 参数校验
            if (Array.isArray(promises)) {
                // 如果传入的迭代promises是空的，则返回的 promise 将永远等待。
                if (promises.length > 0) {
                    promises.forEach(item => {
                        /**
                         * 如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，
                         * 则 Promise.race 将解析为迭代中找到的第一个值。
                         */
                        myPromise.resolve(item).then(resolve, reject);
                    })
                }
            } else {
                return reject(new TypeError('Argument is not iterable'))
            }
        })
    }        
}

/**
* 对resolve()、reject() 进行改造增强 针对resolve()和reject()中不同值情况 进行处理
* @param  {promise} promise2 promise1.then方法返回的新的promise对象
* @param  {[type]} x         promise1中onFulfilled或onRejected的返回值
* @param  {[type]} resolve   promise2的resolve方法
* @param  {[type]} reject    promise2的reject方法
*/
function resolvePromise(promise2, x, resolve, reject) {
  // 2.3.1规范 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
  if (x === promise2) {
      throw new TypeError('Chaining cycle detected for promise');
  }

  if (x instanceof myPromise) {
      /**
       * 2.3.2 如果 x 为 Promise ，则使 promise2 接受 x 的状态
       *       也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
       */
      x.then(y => {
          resolvePromise(promise2, y, resolve, reject)
      }, reject);
  } else if (x !== null && ((typeof x === 'object' || (typeof x === 'function')))) {
      // 2.3.3 如果 x 为对象或函数
      try {
          // 2.3.3.1 把 x.then 赋值给 then
          var then = x.then;
      } catch (e) {
          // 2.3.3.2 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
          return reject(e);
      }

      /**
       * 2.3.3.3 
       * 如果 then 是函数，将 x 作为函数的作用域 this 调用之。
       * 传递两个回调函数作为参数，
       * 第一个参数叫做 `resolvePromise` ，第二个参数叫做 `rejectPromise`
       */
      if (typeof then === 'function') {
          // 2.3.3.3.3 如果 resolvePromise 和 rejectPromise 均被调用，或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
          let called = false; // 避免多次调用
          try {
              then.call(
                  x,
                  // 2.3.3.3.1 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
                  y => {
                      if (called) return;
                      called = true;
                      resolvePromise(promise2, y, resolve, reject);
                  },
                  // 2.3.3.3.2 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                  r => {
                      if (called) return;
                      called = true;
                      reject(r);
                  }
              )
          } catch (e) {
              /**
               * 2.3.3.3.4 如果调用 then 方法抛出了异常 e
               * 2.3.3.3.4.1 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
               */
              if (called) return;
              called = true;

              // 2.3.3.3.4.2 否则以 e 为据因拒绝 promise
              reject(e);
          }
      } else {
          // 2.3.3.4 如果 then 不是函数，以 x 为参数执行 promise
          resolve(x);
      }
  } else {
      // 2.3.4 如果 x 不为对象或者函数，以 x 为参数执行 promise
      return resolve(x);
  }
}

const promise1 = myPromise.resolve(3);
const promise2 = 1;
const promises = [promise1, promise2];

myPromise.allSettled(promises).
then((results) => results.forEach((result) => console.log(result)));

setTimeout(() => {
    const p1 = myPromise.resolve(3);
    const p2 = new myPromise((resolve, reject) => setTimeout(reject, 100, 'foo'));
    const ps = [p1, p2];

    myPromise.allSettled(ps).
    then((results) => results.forEach((result) => console.log(result)));
}, 1000);

myPromise.allSettled([]).then((results) => console.log(results))