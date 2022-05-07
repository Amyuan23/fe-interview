// 用链表实现
//
// 二叉搜索树：左子树所有键值小于根节点键值，右子树的所有键值大于根节点的键值
// 二叉搜索树中序遍历的结果是个递增的数组

interface ITreeNode {
  value: number
  left: ITreeNode | null
  right: ITreeNode | null
}

const tree: ITreeNode = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 7,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  }
}

// 前中后可以看根节点遍历的顺序
// 前序遍历
function preOrderTraverse(node: ITreeNode | null) {
  if (!node) return
  console.log(node.value)
  preOrderTraverse(node.left)
  preOrderTraverse(node.right)
}

// 中序遍历
function inOrderTraverse(node: ITreeNode | null) {
  if (!node) return
  inOrderTraverse(node.left)
  console.log(node.value)
  inOrderTraverse(node.right)
}

// 后序遍历
function postOrderTraverse(node: ITreeNode | null) {
  if (!node) return
  postOrderTraverse(node.left)
  postOrderTraverse(node.right)
  console.log(node.value)
}

// 测试
postOrderTraverse(tree)
