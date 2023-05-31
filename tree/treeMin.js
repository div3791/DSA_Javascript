function treeMinValue(root) {
    if (root === null) return Infinity

    return Math.min(treeMinValue(root.left), treeMinValue(root.right), root.val)
}