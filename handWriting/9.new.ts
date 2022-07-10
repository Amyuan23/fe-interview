/**
 * 实现new关键字的功能
 */
function customNew<T>(constructor: Function, ...args: any[]): T {
  // 1.创建一个空的对象，继承构造函数的原型
  const obj = Object.create(constructor.prototype) // 原型指向传入的参数
  // 2.执行构造函数,并返回这个对象
  constructor.apply(obj, args)
  return obj
}
