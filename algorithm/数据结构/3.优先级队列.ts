class PriorityQueue {
  items
  constructor() {
    this.items = []
  }

  createItem(item, priority) {
    return {
      element: item,
      priority
    }
  }
  // 加入队列,按优先级
  enqueue(item, priority) {
    const element = this.createItem(item, priority)
    if (this.isEmpty()) {
      this.items.push(element)
    } else {
      // 优先级越大排在队列的前面
      let isAdd = false
      for (let index = 0; index < this.items.length; index++) {
        const item = this.items[index]
        if (element.priority > item.priority) {
          this.items.splice(index, 0, element)
          isAdd = true
          break
        }
      }
      if (!isAdd) {
        this.items.push(element)
      }
    }
  }

  // 出队列
  dequeue() {
    return this.items.shift()
  }

  // 查看前端的元素
  front() {
    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    return this.items.map((item) => item.element).join(' ')
  }
}

// 测试

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue('小红55', 55)
priorityQueue.enqueue('小红66', 66)
priorityQueue.enqueue('小红44', 44)

console.log(priorityQueue.toString())
