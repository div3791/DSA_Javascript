const TreeNode = require('./TreeNode');

const a = new TreeNode('a');
const b = new TreeNode('b');
const c = new TreeNode('c');
const d = new TreeNode('d');
const e = new TreeNode('e');
const f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function depthFirstValues(root) {
    if (!root) return [];

    let result = [];
    let stack = [root];

    while (stack.length) {
        let current = stack.pop();
        result.push(current.val);

        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

    return result;
}

function DVFRecursion(root) {
    if (!root) return [];

    let right = DVFRecursion(root.right);
    let left = DVFRecursion(root.left);

    return [root.val, ...left, ...right];
}

console.log(DVFRecursion(a));