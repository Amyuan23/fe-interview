// https://juejin.cn/post/6994594642280857630
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

    const thenPromise = new MyPromise((resolve, reject) => {
      const resolvePromise = (cb) => {
        try {
          const x = cb(this.PromiseResult)
          if (x instanceof MyPromise) {
            x.then(resolve, reject)
          } else {
            resolve(x)
          }
        } catch (error) {
          reject(error)
          throw new Error(error)
        }
      }
      if (this.PromiseState === 'fulfilled') {
        resolvePromise(onFulfilled)
      } else if (this.PromiseState === 'rejected') {
        resolvePromise(onRejected)
      } else if (this.PromiseState === 'pending') {
        this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled))
        this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected))
      }
    })
    return thenPromise
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let results = new Array(promises.length)
      let resultCount = 0

      const addResult = (idx, result) => {
        results[idx] = result
        resultCount++
        if (resultCount === promises.length) {
          return resolve(results)
        }
      }

      promises.forEach((promise, idx) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              addResult(idx, res)
            },
            (err) => {
              reject(err)
            }
          )
        } else {
          addResult(idx, promise)
        }
      })
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        if (promise instanceof MyPromise) {
          promise.then(
            (res) => {
              resolve(res)
            },
            (err) => {
              reject(err)
            }
          )
        } else {
          resolve(promise)
        }
      })
    })
  }
}

// 以下为测试代码
// let p1 = new MyPromise((resolve, reject) => {
//   resolve('成功')
//   reject('失败')
// }).then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// )
// console.log('p1', p1)

// let p2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('失败')
//   }, 1000)
// }).then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// )
// console.log('p2', p2)

// let p3 = new MyPromise((resolve, reject) => {
//   // throw '报错'
//   setTimeout(() => {
//     reject('失败')
//   }, 1000)
//   // reject('失败')
// })
//   .then(
//     (res) => console.log(res),
//     (err) => err
//   )
//   .then(
//     (res) => console.log('链式调用：' + res),
//     (err) => console.log('链式调用：' + err)
//   )
//   .then(
//     (res) => console.log(res),
//     (err) => console.log('链式调用：' + err)
//   )
// console.log('p3', p3)

const test3 = new Promise((resolve, reject) => {
  // resolve(100) // 输出 状态：成功 值： 200
  reject(100) // 输出 状态：成功 值：300
})
  .then(
    (res) => 2 * res,
    (err) => 3 * err
  )
  .then(
    (res) => console.log('成功', res),
    (err) => console.log('失败', err)
  )

// const test4 = new Promise((resolve, reject) => {
//   // resolve(100) // 输出 状态：失败 值：200
//   reject(100) // 输出 状态：成功 值：300
//   // 这里可没搞反哦。真的搞懂了，就知道了为啥这里是反的
// })
//   .then(
//     (res) => new Promise((resolve, reject) => reject(2 * res)),
//     (err) => new Promise((resolve, reject) => resolve(3 * err))
//   )
//   .then(
//     (res) => console.log('成功', res),
//     (err) => console.log('失败', err)
//   )
