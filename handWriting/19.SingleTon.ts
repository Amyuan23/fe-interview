// 单例模式
class SingleTon {
  private constructor() {}
  public static getInstance(): SingleTon {
    return new SingleTon()
  }

  fn1() {}
}

const s1 = SingleTon.getInstance()
const s2 = SingleTon.getInstance()

s1 === s2 // true
