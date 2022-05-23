// 温故知新
class LRUCache {
  private max
  private list: Array<{ key: any; value: any }>
  constructor(max: number) {
    this.max = max // 缓存容量
    this.list = []
  }

  get(key: any) {
    const index = this.list.findIndex((item) => item.key === key)
    if (index < 0) return -1
    const item = this.list[index]
    this.list.splice(index, 1)
    this.put(item.key, item.value)

    return item.value
  }

  put(key: any, value: any) {
    if (this.list.length >= this.max) {
      this.list.splice(0, this.list.length - this.max + 1)
    }
    this.list.push({ key, value })
  }
}
