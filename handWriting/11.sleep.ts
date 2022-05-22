class SleepLoop {
  private tasks: any[]
  constructor() {
    this.tasks = []
    setTimeout(() => {
      this.next()
    }, 0)
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

function add(x: number, y: number) {
  console.log(x + y)
}

new SleepLoop().sleep(() => add(1, 2), 1000).sleep(() => add(2, 3), 6000)
