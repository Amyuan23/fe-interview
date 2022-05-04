class LinkedList {
  private head
  private Node
  private length

  constructor() {
    this.head = null
    this.length = 0
    this.Node = class Node {
      private data
      private next
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
  inert(position, element) {}
  get(position) {}
  indexOf(element) {}

  update(position) {}
  // 删除节点
  remove(element) {}

  removeAt(position) {}

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  toString() {
    // return this.items.join(' ')
  }
}
