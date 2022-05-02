class MyPromise {
  PromiseResult
  PromiseState
  onFulfilledCallbacks
  onRejectedCallbacks
  constructor(fn) {
    this.initValue()
    this.initBind()

    try {
      fn(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  initValue() {
    this.PromiseResult = null // 终值
    this.PromiseState = 'pending' // 状态
    this.onFulfilledCallbacks = [] // 保存成功回调
    this.onRejectedCallbacks = [] // 保存失败回调
  }

  initBind() {
    // 确保resolve和reject 的this 永远指向Promise 实例
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  resolve(value) {
    if (this.PromiseState !== 'pending') return
    // 如果执行resolve，状态变为fulfilled
    this.PromiseState = 'fulfilled'
    // 终值为传进来的值
    this.PromiseResult = value

    // 执行保存的成功回调
    while (this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.PromiseResult)
    }
  }

  reject(err) {
    if (this.PromiseState !== 'pending') return
    this.PromiseState = 'rejected'
    this.PromiseResult = err

    while (this.onRejectedCallbacks.length) {
      this.onRejectedCallbacks.shift()(this.PromiseResult)
    }
  }

  then(onFulfilled, onRejected) {
    // 参数校验，确保一定是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }

    if (this.PromiseState === 'fulfilled') {
      onFulfilled(this.PromiseResult)
    } else if (this.PromiseState === 'rejected') {
      onRejected(this.PromiseResult)
    } else if (this.PromiseState === 'pending') {
      this.onFulfilledCallbacks.push(onFulfilled)
      this.onRejectedCallbacks.push(onRejected)
    }
  }
}

// 测试
let p1 = new MyPromise((resolve, reject) => {
  resolve('成功')
  reject('失败')
}).then(
  (res) => console.log(res),
  (err) => console.log(err)
)
console.log('p1', p1)

let p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('失败')
  }, 1000)
}).then(
  (res) => console.log(res),
  (err) => console.log(err)
)
console.log('p2', p2)

let p3 = new MyPromise((resolve, reject) => {
  throw '报错'
}).then(
  (res) => console.log(res),
  (err) => console.log(err)
)
console.log('p3', p3)
