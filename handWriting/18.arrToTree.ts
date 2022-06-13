const arr2 = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 }
]

type Arr = typeof arr2

// 数组转树
const arrToTree = (arr: Arr) => {
  const treeMap = new Map()

  let root = null
  for (let index = 0; index < arr.length; index++) {
    const element = { ...arr[index] }
    treeMap.set(element.id, element)

    if (treeMap.get(element.pid)) {
      // 有父节点
      const parentNode = treeMap.get(element.pid)
      if (!parentNode.children) parentNode.children = []
      parentNode.children.push(element)
    }
    if (element.pid == 0) {
      root = element
    }
  }

  // 返回根节点
  return root
}

console.log(arrToTree(arr2))
