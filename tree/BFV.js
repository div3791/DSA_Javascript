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

function BreathFirstValues(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length) {
        let current = queue.shift();
        result.push(current.val);

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return result;
}

console.log(BreathFirstValues(a))