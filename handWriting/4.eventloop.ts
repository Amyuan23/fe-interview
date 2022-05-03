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

// loops.run()

// 递归实现
const loopsFuc = (cbs) => {
  if (!cbs?.length) throw '不能传空数组'
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = cbs[0].fn()
      resolve(res)
    }, cbs[0].timeOut)
  }).then((res) => {
    if (cbs.length <= 1) return
    cbs.shift()
    loopsFuc(cbs)
  })
}

loopsFuc([
  {
    fn: () => console.log(1),
    timeOut: 1000
  },
  {
    fn: () => console.log(2),
    timeOut: 1000
  },
  {
    fn: () => console.log(3),
    timeOut: 1000
  }
])
