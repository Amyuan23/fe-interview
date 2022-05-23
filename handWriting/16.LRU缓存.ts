// 温故知新
// 哈希表 + 有序  = Map
class LRUCache {
  private max
  private list: Map<any, any>
  constructor(max: number) {
    if (max < 1) {
      throw new Error('请输入正确的max')
    }
    this.max = max // 缓存容量
    this.list = new Map()
  }

  get(key: any) {
    if (!this.list.has(key)) return null
    const res = this.list.get(key)
    this.set(key, res)
    return res
  }

  set(key: any, value: any) {
    const list = this.list
    if (list.has(key)) list.delete(key)
    list.set(key, value)

    if (list.size > this.max) {
      list.delete(list.keys().next().value) // 删掉最老的一个元素
    }
  }
}
