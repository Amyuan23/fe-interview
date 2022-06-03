// https://juejin.cn/post/6994102811218673700?utm_source=gold_browser_extension#heading-1
{
  /**
   *
   */
  interface Eg1 {
    name: string
    readonly age: number
  }

  type T1 = keyof Eg1 // 'name' | 'age'

  type V1 = Eg1[keyof Eg1] // string | number

  /**
   * inter 类型推导
   */

  type Foo<T> = T extends {
    a: infer U
    b: infer U
  }
    ? U
    : never

  // type T1 = string
  type T3 = Foo<{ a: string; b: string }>

  // type T2 = string | number
  type T4 = Foo<{ a: string; b: number }>
}

{
  /**
   * 内置类型工具Partial
   */

  interface Eg1 {
    name: string
    age: number
  }

  // Partial<T>将T的所有属性变成可选的
  type T1 = Partial<Eg1>
  // 实现原理
  type MyPartial<T> = {
    [P in keyof T]?: T[P]
  }
  type T2 = MyPartial<Eg1>

  // 指定某些属性为可选属性
  type PartialOptional<T, K extends keyof T> = {
    [P in K]?: T[P]
  }
  type T3 = PartialOptional<Eg1, 'name'>

  /**
   * 只读 Readonly
   */
  type Readonly<T> = {
    readonly [P in keyof T]: T[P]
  }

  /**
   * Pick 挑选一组属性并组成一个新的类型
   */

  type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  /**
   * @example
   * type Eg1 = {
   *   a: { key1: string; };
   *   b: { key1: string; };
   * }
   * @desc 就是遍历第一个参数'a' | 'b'的每个子类型，然后将值设置为第二参数
   */

  type Eg2 = Record<'a' | 'b', { key1: string }>

  // 实现Record
  type MyRecord<K extends keyof any, T> = {
    [P in K]: T
  }

  /**
   * Exclude<T, U>提取存在于T，但不存在于U的类型组成的联合类型。
   * never表示一个不存在的类型。never与其他类型的联合后，是没有never的。
   */
  type Exclude<T, U> = T extends U ? never : T
  type Eg3 = Exclude<'key1' | 'key2', 'key2'>

  // 排除
  type Extract<T, U> = T extends U ? T : never
  type Eg4 = Exclude<'key1' | 'key2', 'key1'>
  /**
   *
   */
}
