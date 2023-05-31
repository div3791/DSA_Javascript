const TreeNode = require("./TreeNode");

class Tree {
    constructor() {
        this.root = null;
    }

    insertNode(value) {
        let path = [];
        let newNode = new TreeNode(value);

        if (this.root === null) {
            this.root = newNode;
            this.path.push(root.left.val)
        } else {
            this.insert(this.root, newNode, path)
        }
    }

    insert(root, newNode, path) {

        if (newNode.val < root.val) {
            if (root.left === null) {
                root.left = newNode;
                path.push(root.left.val)
            } else {
                this.insert(root.left, newNode, path);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
                path.push(root.left.val)
            } else {
                this.insert(root.right, newNode, path);
            }
        }
    }
}



let tree = new Tree();
tree.insertNode(20);
tree.insertNode(10);
tree.insertNode(5);
tree.insertNode(30);
tree.insertNode(40);

console.log(tree)