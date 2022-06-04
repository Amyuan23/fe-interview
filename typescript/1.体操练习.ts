// https://juejin.cn/post/6994102811218673700?utm_source=gold_browser_extension#heading-1
{
  /**
   * keyof 关键字
   */
  interface Eg1 {
    name: string
    readonly age: number
  }

  type T1 = keyof Eg1 // 'name' | 'age'

  type V1 = Eg1[keyof Eg1] // string | number

  /**
   * extends 关键字
   */

  type A1 = 'x' extends 'x' ? 1 : 2
  type A2 = 'x' | 'y' extends 'x' ? 1 : 2
  // 若extends前面的类型是泛型，且泛型传入的是联合类型时，则会依次判断该联合类型的所有子类型是否可分配给extends后面的类型
  type P<T> = T extends 'x' ? 1 : 2
  type A3 = P<'x' | 'y'>

  /**
   * infer 类型推导
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

  // 题目，指定某些属性为可选属性
  type PartialOptional<T, K extends keyof T> = {
    [P in K]?: T[P]
  }
  type T3 = PartialOptional<Eg1, 'name'>

  // 题目，把一部分属性变成可选属性
  type PartialOptional2<T, K extends keyof T> = {
    [P in K]?: T[P]
  } & Omit<T, K>

  type T4 = PartialOptional2<Eg1, 'name'>

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

  // 提取
  type Extract<T, U> = T extends U ? T : never
  type Eg4 = Extract<'key1' | 'key2', 'key2'>

  /**
   * Omit<T, K>从类型T中剔除K中的所有属性
   */

  type Eg5 = Omit<Eg1, 'name'>

  type MyOmit<T, K extends keyof any> = {
    [P in Exclude<keyof T, K>]: T[P]
  }
}

{
  type Eg1 = (arg1: string, arg2: number) => string | number

  /**
   * Parameters 获取函数的参数类型,将每个参数类型放在一个元组中
   */
  type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
  type Eg = Parameters<Eg1>

  // 题目,取出tuple的元素类型
  type FalttenArray<T extends any[]> = T extends (infer P)[] ? P : never
  type Eg2 = FalttenArray<[number, string]>

  /**
   * ReturnType 获取函数的返回值类型
   */
  type ReturnType<T extends (...args: any) => any> = T extends (...args: any[]) => infer P ? P : never
  type Eg3 = ReturnType<Eg1>
}
