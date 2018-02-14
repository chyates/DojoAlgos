// Binary Search Trees: nodes hold a value, a left, and a right. All nodes to the left are less than the root value; all nodes to the right are greater than. Trees hold a root node that impose the same left/right rules on all values connected w/in the tree.

// function to create a BST node
function BSTNode(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

// function to create a BST
function BST(){
    this.root = null;
}

// BST: Add--add a new value to the tree, aka create a node and then put it in the tree
BST.prototype.addNode = function(val){
    var thisNode = new BSTNode(val);
    if(this.root == null){
        return thisNode;
    }else {
        var walker = this.root;
        if(val > walker.value){
            if(!walker.right){
                walker.right = thisNode;
            } else {
                walker = walker.right;
            }
        } else if(val < walker.value){
            if(!walker.left){
                walker.left = thisNode;
            } else {
                walker = walker.left;
            }
        }
    }
    return this;
}

// RECURSIVELY:

BST.prototype.rAddNode = function(node, val){
    if(node == null){
        return BSTNode(val);
    } else {
        if(val > node.value){
            node.right = this.rAddNode(node.right, val);
        } else if(val < node.value){
            node.left = this.rAddNode(node.left, val);
        }
    }
    return node;
}
// BST: Min--find the minimum value of the tree
BST.prototype.findMin = function(){
    if(this.root == null){
        return null;
    } else {
        var current = this.root;
        while(current.left != null){
            current = current.left;
        }
        return current.value;
    }
}
// BST: Size--count the length of the tree (recursive)
// BST: Contains--given a value, return true or false if that value is in the tree
BST.prototype.contains = function (val) {
    if (!this.root) {
        return null;
    } else {
        var exists = false;
        function rContains(node, val) {
            if (val > node.value) {
                if (node.value == val) {
                    exists = true;
                }
                rContains(node.right, val);
            } else if (val < node.value) {
                if (node.value == val) {
                    exists = true;
                }
                rContains(node.left, val);
            }
        }
    }
    rContains(this.root, val);
    return exists;
}

// BST: Max--find the max value of the tree
BST.prototype.findMax = function(){
    if(this.root == null){
        return null;
    } else {
        var current = this.root;
        while(current.right != null){
            current = current.right;
        }
        return current.value;
    }
}
// BST: Is Empty
// BST: Height
// BST: Is Balanced
// Array to BST
// Closest Common Ancestor
// BST: Pre-Order
// BST to Array
// BST: Minimum Height
// BST: Post-Order
// BST to List
// BST: Pre-Order, No Recursion
// BST: Remove
// BST: Is Valid
// BST: Remove All
// BST: Add Without Dupes
// Traverse BST Reverse-Order
// BST: Val Before
// BTNode: Node Before
// BST: Val After
// BTNode: Node After
// BST: Closest Value
// Tree Path Contains Sum
// Left Side Binary Tree