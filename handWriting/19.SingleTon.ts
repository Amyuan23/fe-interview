// 单例模式
class SingleTon {
  static instance: null | SingleTon = null
  private constructor() {}
  public static getInstance(): SingleTon {
    if (!SingleTon.instance) {
      SingleTon.instance = new SingleTon()
    }
    return SingleTon.instance
  }
  fn1() {}
}

const s1 = SingleTon.getInstance()
const s2 = SingleTon.getInstance()

s1 === s2 // true
