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

function treeSearch(node, element) {
    if (node === null) return false;

    if (node.val === element) return true;

    return treeSearch(node.left, element) || treeSearch(node.right, element);
}

console.log(treeSearch(null, null))