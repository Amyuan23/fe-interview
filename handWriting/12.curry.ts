/**
 * 函数柯里化
 * @param fn
 */
function curry(fn: Function) {
  const argsLength = fn.length //参数长度
  let args: any[] = []

  function calc(this: any, ...newArgs: any[]) {
    args = args.concat(newArgs)
    if (args.length < argsLength) {
      // 参数不够返回函数
      return calc
    } else {
      // 参数够了返回值
      return fn.apply(this, args.slice(0, argsLength))
    }
  }

  return calc
}
