//compose的作用就是组合函数，将函数串联起来执行，前一个函数的输出值是后一个函数的输入值。
// 第一个函数是多元的（接受多个参数），后面的函数都是单元的（接受一个参数）。

const compose =
  (fns) =>
  (...args) =>
    fns.reduceRight((prev, cur) => {
      const params = Array.isArray(prev) ? prev : [prev]
      return cur(...params)
    }, args)

// pipe 就是它的翻转
const pipe =
  (fns) =>
  (...args) =>
    fns.reduce((prev, cur) => {
      const params = Array.isArray(prev) ? prev : [prev]
      return cur(...params)
    }, args)

// 使用compose
function fn1(x, y) {
  return x + y + 1
}
function fn2(x) {
  return x * 10
}
function fn3(x) {
  return x - 1
}
let fn = compose([fn3, fn2, fn1])
let result = fn(10, 1)
console.log(result)
