class Stack {
  items
  constructor() {
    this.items = []
  }

  // 压栈
  push(item) {
    this.items.push(item)
  }

  // 出栈
  pop() {
    return this.items.pop()
  }

  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    return this.items.join(' ')
  }
}

// 测试
// const stack = new Stack()

// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.toString())

// 10进制转2进制
function dec2bin(num) {
  const stack = new Stack()
  while (num > 0) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }

  let binaryString = ''
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}

console.log(dec2bin(100))
