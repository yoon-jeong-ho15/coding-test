class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    search(data) {
        if (!this.root) {
            console.log("tree is empty");
        }
        const node = this.searchNode(this.root, data);
        if (!node) {
            console.log("no result");
        }

        console.log(node);
    }

    searchNode(node, data) {
        if (!node) return null;

        if (data < node.data) {
            return this.searchNode(node.left, data);
        }
        if (data > node.data) {
            return this.searchNode(node.right, data);
        }

        return node;
    }

    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
                return;
            }
            this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) {
                node.right = newNode;
                return;
            }
            this.insertNode(node.right, newNode);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        // 1.
        if (!node) return null;

        // 2. 노드 찾기
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }

        // 3. 노드 찾음
        // 1) 자식 0
        if (!node.left && !node.right) {
            return null;
        }

        // 2) 자식 1
        if (!node.left) {
            return node.right;
        }
        if (!node.right) {
            return node.left;
        }

        // * 3) 자식 2
        const temp = this.findMin(node.right);
        node.data = temp.data;

        node.right = this.removeNode(node.right, temp.data);
        return node;
    }

    findMin(node) {
        if (!node.left) {
            return node;
        }
        return this.findMin(node.left);
    }
    // getRootNode()
    // inorder(node)
    // preorder(node)
    // postorder(node)
}

const tree = new BST();
tree.insert(8);

tree.insert(4);
tree.insert(12);

tree.insert(2);
tree.insert(6);
tree.insert(10);
tree.insert(14);

tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.insert(9);
tree.insert(11);
tree.insert(13);
tree.insert(15);

tree.insert(0);

// console.log(tree);
tree.search(13);
