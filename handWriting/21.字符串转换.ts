// 字符串 "[aa[bb[cc]]]"
// JSON.parse
// 结果
// {
//   value:'aa',
//   children: {
//     value: 'bb',
//     children: {
//       value: 'cc'
//     }
//   }
// }

function turnString(str) {
  let startIndex = 0
  const length = str.length

  const obj = {}
  let stack = []
  let tempObj
  while (startIndex < length) {
    if (str[startIndex] === '[') {
      if (!tempObj) {
        tempObj = obj
      } else {
        tempObj.value = stack.join('')
        tempObj.children = []
        tempObj = tempObj.children
        stack = []
      }
    } else if (str[startIndex] === ']') {
      tempObj.value = stack.join('')
    } else {
      stack.push(str[startIndex])
    }
    startIndex++
  }
  return obj
}

console.log(JSON.stringify(turnString('[aa[bb[cc]]]')))
