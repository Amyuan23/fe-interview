// 深度优先，广度优先

function visitNode(n: Node) {
  if (n instanceof Comment) {
    console.log('注释节点--', n.textContent)
  }

  if (n instanceof Text) {
    console.log('文本节点--', n.textContent?.trim())
  }

  if (n instanceof Element) {
    console.log('元素节点--', n.tagName.toLowerCase())
  }
}

/**
 * 深度优先遍历一个DOM树
 * @param root
 */
function domTraverse(root: Node) {
  visitNode(root)

  if (root.childNodes) {
    root.childNodes.forEach((node) => {
      domTraverse(node)
    })
  }
}

/**
 * 广度优先遍历一个DOM树。用队列的思想
 * @param root
 */
function domTraverse2(root: Node) {
  const queue: Node[] = []
  queue.unshift(root)

  while (queue.length > 0) {
    const curNode = queue.shift()
    if (!curNode) break
    visitNode(curNode)
    curNode.childNodes && curNode.childNodes.forEach((item) => queue.push(item))
  }
}
