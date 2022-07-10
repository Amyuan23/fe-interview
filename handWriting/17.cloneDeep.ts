/**
 * 特别注意一下几种情况，这几种情况用JSON.stringify 是不行的
 * 1. 函数
 * 2. Map & Set
 * 3. 循环引用
 */

function cloneDeep(obj: any, map = new WeakMap()) {
  if (typeof obj !== 'object' || obj == null) return obj

  // 避免循环引用
  const objMap = map.get(obj)
  if (objMap) return objMap

  let target: any = {}

  if (obj instanceof Map) {
    target = new Map()
    obj.forEach((value, key) => {
      const v1 = cloneDeep(value, map)
      const k1 = cloneDeep(key, map)
      target.set(k1, v1)
    })
    return target
  }

  if (obj instanceof Set) {
    target = new Set()
    obj.forEach((v) => {
      const v1 = cloneDeep(v, map)
      target.add(v1)
    })
    return target
  }

  if (obj instanceof Array) {
    target = obj.map((item) => cloneDeep(item, map))
    return target
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      target[key] = cloneDeep(obj[key], map)
      return target
    }
  }

  return target
}
