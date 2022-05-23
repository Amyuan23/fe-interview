class EventBus {
  private events: {
    [key: string]: Array<{ fn: Function; isOnce: boolean }> // 每个key 可以注册多个函数，依次执行
  }
  constructor() {
    this.events = {}
  }

  on(type: string, fn: Function, isOnce: boolean = false) {
    const events = this.events
    if (events[type] == null) {
      events[type] = []
    }
    events[type].push({ fn, isOnce })
  }

  once(type: string, fn: Function) {
    this.on(type, fn, true)
  }

  off(type: string, fn?: Function) {
    // 解绑key里面一个函数或者所有函数
    if (fn) {
      this.events[type] = this.events[type].filter((item) => item.fn !== fn)
    } else {
      this.events[type] = []
    }
  }

  emit(type: string, ...args: any[]) {
    const fnList = this.events[type]
    if (!fnList) return

    this.events[type] = fnList.filter((item) => {
      const { fn, isOnce } = item
      fn(...args)
      if (isOnce) return false
      return true
    })
  }
}
