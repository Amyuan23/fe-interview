/**
 * 对象数组去重
 * @param arr 需要去重对象数组或者数组
 * @param key 去重根据，取对象的一个key,数组的时候不用传
 * @returns
 */
const unique = (arr, key = '') => {
  if (!arr) return arr
  if (!key) return [...new Set(arr)]

  const fn = (obj) => obj[key]
  const obj = arr.reduce((prev, cur) => {
    prev[fn(cur)] = cur
    return prev
  }, {})
  return Object.values(obj)
}

// 测试
// const list = [
//   {
//     name: '1'
//   },
//   {
//     name: '2'
//   },
//   {
//     name: '2'
//   }
// ]

// console.log(unique(list, 'name'))
