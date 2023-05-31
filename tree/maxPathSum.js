function maxPathSum(root) {
    if (root === null) return -Infinity
    if (root.left === null && root.right === null) return root.val;

    let left = maxPathSum(root.left);
    let right = maxPathSum(root.right);

    if (left > right) {
        return root.val + left;
    } else {
        return root.val + right
    }
}