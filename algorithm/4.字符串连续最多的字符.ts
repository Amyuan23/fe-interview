/**
 * 找出连续最多的字符和重复的次数
 * @param str 'aaaabbccccccddd'
 */

interface IRes {
  char: string
  length: number
}
const findContinuousChar = (str: string): IRes => {
  let res: IRes = {
    char: '',
    length: 0
  }

  let length = str.length
  let j = 0

  for (let i = 0; i < length + 1; i++) {
    if (str[j] !== str[i]) {
      let max = i - j
      if (max > res.length) {
        res = {
          char: str[j],
          length: i - j
        }
      }
      j = i
    }
  }

  return res
}

console.log(findContinuousChar('aaaa'))
