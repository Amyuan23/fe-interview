/**
 * 要点：1. 返回一个函数但不执行。
 * 2.绑定this和部分参数。
 * 3.如果是箭头函数，无法改变this,只能改变参数
 */

//@ts-ignore
Function.prototype.myBind = function (context: any, ...bindArgs: any[]) {
  const self = this
  return function (...args: any[]) {
    self.apply(context, [...bindArgs, ...args])
  }
}
