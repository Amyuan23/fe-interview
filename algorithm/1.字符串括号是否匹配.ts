// 思路：压栈，出栈
// {} [] ()
function matchBracket(str) {
  const length = str.length
  if (length === 0) return true

  const stack = []
  const leftSymbols = '{[('
  const rightSymbols = '}])'
  for (let index = 0; index < length; index++) {
    const cur = str[index]
    if (leftSymbols.includes(cur)) {
      stack.push(cur)
    } else if (rightSymbols.includes(cur)) {
      const top = stack[stack.length - 1]
      if ((top === '{' && cur === '}') || (top === '[' && cur === ']') || (top === '(' && cur === ')')) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return !stack.length
}

// 测试
console.log(matchBracket('{a[999]bbb}'))
console.log(matchBracket('{a[999}bbb]'))
