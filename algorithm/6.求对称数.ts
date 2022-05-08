// 比如 11 22 101 202 这种
/**
 * 查询1到max 之前的所有对称数
 * @param max
 */
function findSymmetryNumber(max: number): number[] {
  const res: number[] = []
  for (let num = 0; num <= max; num++) {
    const str = num.toString()
    const length = str.length
    let i = 0
    let j = length - 1
    let flag = true
    while (i < j) {
      if (str[i] !== str[j]) {
        flag = false
        break
      }
      i++
      j--
    }
    if (flag) {
      res.push(num)
    }
  }
  return res
}

console.log(findSymmetryNumber(555))
