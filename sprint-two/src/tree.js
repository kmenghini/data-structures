var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var temp = Tree(value);
  this.children.push(temp);
};

treeMethods.contains = function(target, currentNode) {
  currentNode = currentNode || this;
  if (currentNode.value === target) {
    return true;
  } else if (currentNode.children.length > 0) {
    for (var i = 0; i < currentNode.children.length; i++) {
      if (currentNode.contains(target, currentNode.children[i])) {
        return true;
      }
    }
    return false;   
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
.addChild is O(1), constant
.contains is O(n), linear
 */
