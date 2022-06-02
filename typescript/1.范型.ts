// const func = (a, b) => a + b; 要求编写Typescript，要求a，b参数类型一致，都为number或者都为string
// type Test<T> = (a: T, b: T) => T

// const add2: Test<string> = (a, b) => a + b

/**
 * 函数重载
 */
type Test2 = {
  (a: number, b: number): number
  (a: string, b: string): string
}

const add2: Test2 = (a, b) => a + b

add2(1, 2)
add2('1', '2')

/**
 * 基于已有类型生成新类型
 */
interface A {
  xx: string
  yy: number
}

interface B extends Omit<A, 'xx'> {
  xx?: number
}

// 实现ReturnType
// 实现DeepReadOnly
