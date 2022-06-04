// 刷题文章：https://juejin.cn/post/6999280101556748295#heading-0

{
  /**
   * 1.元组转换为对象
   */
  const tuple2 = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type TupleToObject<T extends readonly (keyof any)[]> = {
    [P in T[number]]: P
  }

  // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  const result: TupleToObject<typeof tuple2>
}

{
  /**
   * 2.实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
   */

  type First<T extends any[]> = T extends [infer P, ...infer R] ? P : never
}

{
  /**
   * 3.获取元组长度
   */
  type Length<T extends readonly any[]> = T['length']
}

{
  /**
   * 4.获取 Promise<ExampleType> 中的 ExampleType
   */

  type Awaited<T extends Promise<any>> = T extends PromiseLike<infer L> ? L : never
}

{
  let uncertain: unknown = 'Hello'!
  uncertain = 'kkk'
}
