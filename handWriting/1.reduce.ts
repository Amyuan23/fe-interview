Array.prototype.myReduce = function (fn, initialValue) {
  const list = Array.prototype.slice.call(this)
  if (!Array.isArray(list)) {
    throw new Error('不是个数组')
  }

  if (typeof fn !== 'function') {
    throw new Error(fn + '不是个函数')
  }

  let res = initialValue ? initialValue : list[0]
  let index = initialValue ? 0 : 1

  for (index; index < list.length; index++) {
    res = fn(res, list[index])
  }

  return res
}

// 测试
console.log([1, 2, 3, 4, 5].myReduce((a, b) => a + b, 1))
