// 实现一个CodingMan，可以按照以下方式调用:
// CodingMan(“Hank”)输出:
// Hi! This is Hank!
// CodingMan(“Hank”).sleep(10).eat(“dinner”)
// 输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
// CodingMan(“Hank”).eat(“dinner”).eat(“supper”)
// 输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
// CodingMan(“Hank”).sleepFirst(5).eat(“supper”)
// 输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper
// 以此类推

// function CodingMan(val){
//     this.val = val;
//     this.queue = [];

//     this.sayHi = function(){
//       this.queue.push(()=>{
//         console.log(`Hi!this is ${this.val}`)
//         this.next();
//       })
//     }

//     this.eat = function(val){
//       this.queue.push(()=>{
//         console.log(`Eat ${val}~`);
//         this.next();
//       })
//       return this;
//     }

//     this.sleep = function(num){
//       this.queue.push(()=>{
//         setTimeout(()=>{
//           console.log(`Wake up after ${num}`)
//           this.next();
//         },num*1000)
//       })
//       return this;
//     }

//     this.sleepFirst = function(num){
//       this.queue.unshift(()=>{
//         setTimeout(()=>{
//           console.log(`等待${num}秒`);
//           this.next();
//         },num*1000)
//       })
//       return this;
//     }

//     this.next = function(){
//       let fn = this.queue.shift();
//       fn && fn();
//     }

//     this.sayHi();

//     setTimeout(() => {
//       this.next();
//     });

//     return this;
// }
  
function CodingMan(val){
    this.queue = [];
    this.val = val;

    sayHi = function(){
        this.queue.push(() => {
            console.log(`Hi this is ${val}`)
            this.next()
        })
    }

    sleep = function(num){
        this.queue.push(() => {
            setTimeout(() => {
                console.log(`Wake up after ${num}`)
                this.next()
            },num*1000)
        })
        return this
    }

    eat = function(name){
        this.queue.push(() => {
            console.log(`Eat ${name}`)
            this.next()
        })
        return this        
    }

    sleepFirst = function(num){
        this.queue.unshift(() => {
            setTimeout(() => {
                console.log(`Wake up after ${num}`)
                this.next()
            },num*1000)
        })
        return this
    }


    next = function(){
        let fn = this.queue.shift()
        fn && fn()
    }

    // codingman 开始执行传入
    this.sayHi();

    setTimeout(() => {
        this.next();
    })
    return this
}

CodingMan('Hank').sleep(2).sleepFirst(3).eat('supper')
  
  
  