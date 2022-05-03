class EventLoop {
  cbs
  count
  constructor() {
    this.cbs = []
    this.count = 0
  }
  register(fn, timeOut) {
    this.cbs.push({ fn, timeOut })
  }
  run() {
    if (this.count >= this.cbs.length) return
    const cb = this.cbs[this.count]
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const res = cb.fn()
        resolve(res)
      }, cb.timeOut)
    }).then((res) => {
      this.count++
      this.run()
    })
  }
}

const loops = new EventLoop()

loops.register(() => console.log(1), 1000)
loops.register(() => console.log(1), 1000)
loops.register(() => console.log(1), 1000)

loops.run()
