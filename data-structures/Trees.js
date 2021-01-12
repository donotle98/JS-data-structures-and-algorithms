// A tree is a data structure where a node can have zero or more children
// Like graphs, the connection between nodes is called edges
// A tree is a type of graph, but not all graphs are trees
// These data structures are called “trees” because the data structure resembles a tree
// It starts with a root node and branch off with its descendants, and finally, there are leaves
// Here are some properties of a tree:
// - The top-most node is called root.
// - A node without children is called leaf node or terminal node.
// - Height (h) of the tree is the distance (edge count) between the farthest leaf to the root.
// - Depth or level of a node is the distance between the root and the node in question

class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendants = [];
    }
}

const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

abe.descendants.push(homer);
homer.descendants.push(bart, lisa, maggie);
