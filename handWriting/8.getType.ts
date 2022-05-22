// 知识点：typeof 获取值类型，instanceof 判断类型，而不是获取
// 使用原型方法获取类型
/**
 * 获取类型
 * @param param
 */
function getType(x: any): string {
  let originType = Object.prototype.toString.call(x)
  return originType.replace('[object ', '').slice(0, -1).toLowerCase()
}
