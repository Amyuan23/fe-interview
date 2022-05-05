class Queue {
  items
  constructor() {
    this.items = []
  }

  // 加入队列
  enqueue(item) {
    this.items.push(item)
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
    return this.items.join(' ')
  }
}

// 击鼓传花
function passGame(nameList) {
  const queue = new Queue()
  // 加入队列
  for (let index = 0; index < nameList.length; index++) {
    queue.enqueue(nameList[index])
  }

  let num = 0
  while (queue.size() > 1) {
    num = Math.floor(Math.random() * 10)
    for (let index = 0; index < num; index++) {
      const item = queue.dequeue()
      queue.enqueue(item)
    }
    queue.dequeue()
  }

  console.log('最后剩下的人：' + queue.front())
}

passGame(['kk', '刷', '小将'], 3)
