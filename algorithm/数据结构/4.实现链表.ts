class LinkedList {
  head
  Node
  length

  constructor() {
    this.head = null
    this.length = 0
    this.Node = class Node {
      data
      next
      constructor(data) {
        this.data = data
        this.next = null
      }
    }
  }

  append(element) {
    element = new this.Node(element)
    let current
    if (this.length !== 0) {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = element
    } else {
      this.head = element
    }
    this.length++
  }

  // 插入节点
  insert(position, element) {
    if (position < 0 || position > this.length) return

    const node = new this.Node(element)

    if (position == 0) {
      node.next = this.head
      this.head = node
    } else {
      let current = this.head
      let prev = null
      let currentIndex = 0
      while (currentIndex < position) {
        prev = current
        current = current.next
        currentIndex++
      }
      node.next = current
      prev.next = node
    }

    this.length += 1
  }

  get(position) {
    if (position < 0 || position >= this.length) return

    let index = 0
    let current = this.head
    while (index < position) {
      current = current.next
      index++
    }
    return current.data
  }
  indexOf(data) {
    let index = 0
    let current = this.head
    while (current) {
      if (current.data == data) return index
      current = current.next
      index++
    }
    if (index >= this.length) return -1
    return index
  }

  update(position, element) {
    if (position < 0 || position >= this.length) return

    let index = 0
    let current = this.head
    while (index < position) {
      current = current.next
      index++
    }
    current.data = element
  }
  // 删除节点
  remove(element) {
    const position = this.indexOf(element)
    return this.removeAt(position)
  }

  removeAt(position) {
    if (position < 0 || position > this.length) return

    let current = this.head
    if (position == 0) {
      this.head = null
    } else {
      let prev = null
      let currentIndex = 0
      while (currentIndex < position) {
        prev = current
        current = current.next
        currentIndex++
      }
      prev.next = current.next
    }
    this.length = this.length - 1
    return current.data
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  toString() {
    let current = this.head
    if (!current) return ''
    let listString = ''
    while (current) {
      listString += current.data + ' '
      current = current.next
    }
    return listString
  }
}

// 测试

const linkedList = new LinkedList()

linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.insert(1, 'ddd')
linkedList.removeAt(1)

console.log(linkedList.get(1))
console.log(linkedList.indexOf('ccc'))
console.log(linkedList.indexOf('eee'))

console.log(linkedList.toString())
