interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
// left -> val -> right

type InorderTraversal<T extends TreeNode | null> = 
  [T] extends [TreeNode]
    ? [...InorderTraversal<T['left']>,T['val'] , ...InorderTraversal<T['right']>]
    : []

// type InorderTraversal<T extends TreeNode | null> =
//   T extends TreeNode
//   ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
//   : []
//中序遍历.先走left在val再right

//这里[T] extends [TreeNode] 是不想触发分布特性.