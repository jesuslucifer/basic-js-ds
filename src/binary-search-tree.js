const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) { 
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.origin = null;
  }

  root() {
    return this.origin;
  }

  add(value) {
    this.origin = addWithIn(this.root, value);

    function addWithIn(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.value === value) {
        return node;
      }
      if (node.value > value) {
        node.left = addWithIn(node.left, value);
      }
      else {
        node.right = addWithIn(node.right, value);
      }
      return node;
    }
  }

  has(value) {
    return searchWithIn(this.root, value);

    function searchWithIn(node, value) {
      if (!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      }
      return value < node.value ? searchWithIn(node.left, value) : searchWithIn(node.right, value);
    }
  }

  find( data) {
   
  }

  remove(data) {
    
  }

  min() {
    
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};