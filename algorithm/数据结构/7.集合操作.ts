// 并集
function union(a, b) {
  return new Set([...a, ...b])
}

//交集
function intersect(a, b) {
  return new Set([...a].filter((item) => b.has(item)))
}

// 差集
function diff(a, b) {
  return new Set([...a].filter((item) => !b.has(item)))
}

let a = new Set([1, 2])
let b = new Set([3, 2])

console.log(union(a, b))
