function treeSum(root) {
    if (!root) return 0;
    let leftSum = treeSum(root.left);
    let rightSum = treeSum(root.right);
    return leftSum + rightSum + root.val
}

