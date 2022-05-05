// 思路：压栈，出栈
// {} []
function matchBracket(str) {
  const length = str.length
  const stackList = []
  for (let index = 0; index < length; index++) {
    const cur = str[index]
    if ('{}[]'.indexOf(cur) < 0) continue
    if (!stackList.length) {
      stackList.push(str[index])
    } else {
      const start = stackList[stackList.length - 1]
      if ((start === '{' && cur === '}') || (start === '[' && cur === ']')) {
        stackList.pop()
      } else {
        stackList.push(cur)
      }
    }
  }
  return !stackList.length
}

// 测试
console.log(matchBracket('{a[999]bbb)}'))
console.log(matchBracket('{a[999}bbb]'))
