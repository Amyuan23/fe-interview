/**
 * 移动0到末尾，不改变其他数字顺序，要求必须在原数组操作
 * 核心思路：双指针，一个指向第一个0，一个指向第一个0后面的非零，然后交换
 * @param arr [1,0,7,0,9,11,0,0,13]
 * @returns [1,7,9,11,13,0,0,0,0]
 */
function move0(arr: number[]): number[] {
  const length = arr.length
  if (length === 0) return arr

  let j = -1
  for (let i = 0; i < length; i++) {
    if (arr[i] === 0 && j < 0) {
      j = i // 第一个0的位置
    }

    // 继续循环，找到第一个0后面非0的位置
    if (j >= 0 && arr[i] !== 0) {
      // 交换
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n
      j++ // j++的指针指向的永远是第一个0
    }
    console.log(arr)
  }

  return arr
}

console.log(move0([1, 3, 7, 0, 9, 11, 0, 0, 13]))
