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
  //push to newTree.children
  this.children.push(temp);
};

treeMethods.contains = function(target) {
  //Look at node value, if contains target return true;
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      console.log(i);
      return this.contains(this.children[i]);
    }
  }
  return false;
  //if not, if children, look at all the children
  //if not in last child return false
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
