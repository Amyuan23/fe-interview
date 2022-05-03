/**
 * 对象数组去重
 * @param arr 需要去重对象数组
 * @param key 去重根据，取对象的一个key
 * @returns
 */
export const unique = (arr, key) => {
  if (!arr) return arr
  if (key === undefined) return [...new Set(arr)]
  const map = {
    string: (e) => e[key],
    function: (e) => key(e)
  }
  const fn = map[typeof key]
  const obj = arr.reduce((o, e) => ((o[fn(e)] = e), o), {})
  return Object.values(obj)
}
