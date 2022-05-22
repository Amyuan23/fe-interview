/**
 * 数组拍平,只拍平一层
 * @param arr
 */
function flatten(arr: any[]): any[] {
  let result: any[] = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    result = result.concat(item)
  }
  return result
}

/**
 * 彻底拍平,递归实现
 */

function flattenDeep(arr: any[]): any[] {
  let result: any[] = []

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]

    if (Array.isArray(item)) {
      item = flattenDeep(item)
    }
    result = result.concat(item)
  }

  return result
}
