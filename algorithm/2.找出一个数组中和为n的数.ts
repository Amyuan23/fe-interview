// 一个递增的数组，找出和为n的数
// 核心思路 双指针

function findTwoNumbers(arr: number[], num: number): number[] {
  let res: number[] = []
  let length = arr.length
  if (!length) return res

  let i = 0
  let j = length - 1

  while (i < j) {
    const sum = arr[i] + arr[j]
    if (sum > num) {
      j--
    } else if (sum < num) {
      i++
    } else {
      res = [arr[i], arr[j]]
      break
    }
  }

  return res
}

const arr = [1, 3, 5, 7, 9, 11, 12, 13, 14]

console.log(findTwoNumbers(arr, 21))
