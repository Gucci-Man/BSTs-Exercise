class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this; // Return the tree after inserting the first node
    }
  
    let currentNode = this.root;
    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this; // Return the tree after insertion
        } else {
          currentNode = currentNode.left;
        }
      } else { // Implies val >= currentNode.val
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this; // Return the tree after insertion
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const insertHelper = (node, val) => {
      if (node === null) {
        return new Node(val);
      }
  
      if (val < node.val) {
        node.left = insertHelper(node.left, val);
      } else {
        node.right = insertHelper(node.right, val);
      }
  
      return node;
    };
  
    this.root = insertHelper(this.root, val);
    return this;
  }
  

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
  
    while (currentNode !== null) {
      if (val === currentNode.val) {
        return currentNode; // Node found!
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  
    return undefined; // Value not found in the tree
  }  

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const findHelper = (node, val) => {
      if (node === null) {
        return undefined; // Value not found
      }
  
      if (val === node.val) {
        return node; // Node found!
      } else if (val < node.val) {
        return findHelper(node.left, val);
      } else {
        return findHelper(node.right, val);
      }
    };
  
    return findHelper(this.root, val);
  }
  
  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
  
    const traverse = (node) => {
      if (node === null) return;
  
      visited.push(node.val);  // Visit the current node (pre-order)
      traverse(node.left);     // Traverse the left subtree 
      traverse(node.right);    // Traverse the right subtree
    }
  
    traverse(this.root);  
    return visited;
  }
  

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];
  
    const traverse = (node) => {
      if (node === null) return;
  
      traverse(node.left);     // Traverse the left subtree 
      visited.push(node.val);  // Visit the current node (in-order)
      traverse(node.right);    // Traverse the right subtree
    }
  
    traverse(this.root);  
    return visited;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
  
    const traverse = (node) => {
      if (node === null) return;
  
      traverse(node.left);     // Traverse the left subtree 
      traverse(node.right);    // Traverse the right subtree
      visited.push(node.val);  // Visit the current node (post-order)
    }
  
    traverse(this.root);  
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    const queue = []; // Use a queue data structure
  
    if (this.root !== null) {
      queue.push(this.root);
    }
  
    while (queue.length > 0) {
      let node = queue.shift(); // Dequeue a node
      visited.push(node.val);
  
      if (node.left !== null) {
        queue.push(node.left); 
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  
    return visited;
  }
  
  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
