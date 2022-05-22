class SleepQueue {
  private tasks: any[]
  constructor() {
    this.tasks = []
    setTimeout(() => {
      this.next()
    })
  }

  next() {
    const task = this.tasks.shift()
    task && task()
  }

  sleep(fn: Function, time: number) {
    const task = () => {
      setTimeout(() => {
        fn()
        this.next()
      }, time)
    }
    this.tasks.push(task)
    return this
  }
}

// 测试
function add(x: number, y: number) {
  console.log(x + y)
}

new SleepQueue().sleep(() => add(1, 2), 1000).sleep(() => add(2, 3), 6000)
