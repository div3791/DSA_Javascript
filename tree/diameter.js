var diameterOfBinaryTree = function (root) {
    let diameter = Array(1);
    height(root, diameter);
    return diameter[0];
};

const height = (root, diameter) => {
    if (root == null) {
        return 0;
    }

    let left = height(root.left, diameter);
    let right = height(root.right, diameter);

    diameter[0] = Math.max(diameter[0], left + right);
    return Math.max(left, right) + 1;
}

module.exports = diameterOfBinaryTree;