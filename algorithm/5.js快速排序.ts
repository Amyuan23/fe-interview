/**
 * 快速排序,复杂度O(nlogn)
 * @param arr [1,3,7,5,2,8,9,5]
 * @returns []
 */
const quickSort = (arr: number[]): number[] => {
  const length = arr.length
  if (length === 0) return []

  const midIndex = Math.floor(length / 2)
  const midValue = arr[midIndex]

  const left = []
  const right = []

  for (let i = 0; i < length; i++) {
    if (midIndex !== i) {
      if (arr[i] <= midValue) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
  }

  return quickSort(left).concat([midValue], quickSort(right))
}

console.log(quickSort([1, 3, 7, 5, 2, 8, 9, 5, -11]))
